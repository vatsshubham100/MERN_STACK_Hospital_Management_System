import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          MedicalCare Medical Institute is a cutting-edge healthcare facility committed to offering comprehensive medical services with a blend of compassion and expertise. Our team of highly trained professionals is devoted to providing individualized care tailored to each patient's unique needs. We prioritize your well-being, ensuring a seamless journey toward optimal health and wellness. Established with the vision of delivering state-of-the-art healthcare, MedicalCare is dedicated to advancing medical practices and enhancing patient experiences through continuous innovation and excellence. Join us in 2024 as we embark on new projects, including our latest MERN STACK initiative, striving to set new standards in the healthcare industry. At MedicalCare, we believe that achieving good health is a collaborative effort, and we are here to support you every step of the way.
          </p>
          <p>We are all in 2024!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;