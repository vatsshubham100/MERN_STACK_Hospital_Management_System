
import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          MedicalCare Medical Institute is a cutting-edge facility devoted to offering extensive healthcare services with empathy and proficiency. Our team of experienced professionals is dedicated to providing individualized care designed to meet each patient’s unique needs. At MedicalCare, we focus on your health, ensuring a smooth path towards achieving optimal well-being and wellness.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
