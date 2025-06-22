import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const PaymentHistory = () => {
  const { user } = useAuth();
  const [history, setHistory] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/payments/payment-history/${user.email}`).then((res) => {
      setHistory(res.data);
    });
  }, [axiosSecure, user.email]);

  return (
    <div className="w-full md:w-[870px] mx-auto px-4">
      <SectionTitle
        heading="Payment History"
        subHeading="---At a Glance!---"
      ></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>EMAIL</th>
              <th>TRANSCTION ID</th>
              <th>TOTAL PRICE</th>
              <th>PAYMENT DATE</th>
            </tr>
          </thead>
          <tbody>
            {history.map((data, index) => (
              <tr key={data.id}>
                <th>{index + 1}</th>
                <td>{data.email}</td>
                <td>{data.transactionId}</td>
                <td>{data.totalPrice}</td>
                <td>{data.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
