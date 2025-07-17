import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User as FirebaseUser,
} from "firebase/auth";
import auth from "../firebase/firebase.init";
import AuthContext from "./AuthContext";
import { AuthContextType, User } from "../types";
import { ChildrenProps } from "../types";
import { GoogleAuthProvider } from "firebase/auth";

const AuthProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();

  const createUser = async (email: string, password: string, name: string) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await axiosPublic.post("/api/users/register", { email, password, name });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const loginUser = async (email: string, password: string) => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const loginWithGoogle = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        await axiosPublic.post("/api/users/social-login", {
          email: result.user.email,
          name: result.user.displayName,
        });
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const logoutUser = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser: FirebaseUser | null) => {
        if (currentUser) {
          const userInfo: User = {
            id: currentUser.uid,
            name: currentUser.displayName || currentUser.email || "",
            email: currentUser.email || "",
            createdAt: new Date(),
            lastLogin: new Date(),
            role: "user",
          };
          setUser(userInfo);
          axiosPublic.post("/jwt", { email: currentUser.email }).then((res) => {
            if (res.data.token) {
              localStorage.setItem("access-token", res.data.token);
              setLoading(false);
            }
          });
        } else {
          setUser(null);
          localStorage.removeItem("access-token");
          setLoading(false);
        }
        console.log("State Captured: ", currentUser?.email);
      }
    );
    return () => {
      unsubscribe();
    };
  }, [axiosPublic]);

  const userInfo: AuthContextType = {
    user,
    loading,
    createUser,
    loginUser,
    loginWithGoogle,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
