import type React from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const SinglePageHeader: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing

    });
  }, []);
  return (
    <div data-aos="fade-up">
    <div className="container-fluid spices-banner py-5">
      <h1 className="text-center text-white display-6">Spices</h1>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item">
          <a href="/index.html#">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="/public#">Pages</a>
        </li>
        <li className="breadcrumb-item active text-white">Spices</li>
      </ol>
    </div>
    </div>
  )
}
export default SinglePageHeader
