import { useNavigate } from "react-router-dom";
import SharedBgImg from "../shared/SharedBgImg/SharedBgImg";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import bgContact from "../../assets/contact/banner.jpg";
import {
  MdOutlineLocalPhone,
  MdOutlineEmail,
  MdOutlineLocationOn,
} from "react-icons/md";

const ContactUs = () => {
  const navigate = useNavigate();

  const handleContactForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const messageInfo = { name, email, message };
    console.log(messageInfo);

    fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(messageInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("message sent successfully!");
        }
        navigate("/");
      });
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-amber-300">
      <Helmet>
        <title>HungerHub | Contact Us</title>
      </Helmet>
      <SharedBgImg
        img={bgContact}
        title={"Contact Us"}
        subtitle={"Would you like to try a dish?"}
      ></SharedBgImg>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <SectionTitle
          subHeading={"Visit Us"}
          heading={"Our Location"}
        ></SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="bg-amber-500 p-4 flex justify-center items-center">
              <MdOutlineLocalPhone className="text-4xl text-white" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Phone
              </h3>
              <p className="text-gray-600">+880 1989 89898</p>
              <p className="text-gray-600 mt-1">+880 1989 89899</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="bg-amber-500 p-4 flex justify-center items-center">
              <MdOutlineEmail className="text-4xl text-white" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Email
              </h3>
              <p className="text-gray-600">info@hungerhub.com</p>
              <p className="text-gray-600 mt-1">support@hungerhub.com</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="bg-amber-500 p-4 flex justify-center items-center">
              <MdOutlineLocationOn className="text-4xl text-white" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Location
              </h3>
              <p className="text-gray-600">123 Food Street</p>
              <p className="text-gray-600 mt-1">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Send us a Message
          </h2>
          <form onSubmit={handleContactForm} className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 h-32"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="bg-amber-500 text-white px-8 py-3 rounded-lg hover:bg-amber-600 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
