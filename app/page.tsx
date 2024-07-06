import Image from "next/image";
import Form from "./components/Form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Student Registration Form</h1>
    <Form />
    <ToastContainer />
  </div>
  );
}
