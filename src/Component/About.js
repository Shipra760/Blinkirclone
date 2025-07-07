import React from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function About() {
  return (
    <div className="about-container">
      <div className="header">
        <FaArrowLeft /> <span>About Us</span>
      </div>

      <div className="content">
        <h2>
          About Us <small>v17.31.1</small>
        </h2>

        <p>
          Blinkit is India's most beloved online grocery shopping platform. Our
          app is changing the way customers approach their daily essentials. You
          can now shop online for groceries, fresh fruits and vegetables
          procured daily, dairy & bakery, beauty & wellness, personal care,
          household care, diapers & baby care, pet care, meats and seafood as
          well as the latest products from leading brands like Cadbury, ITC,
          Colgate-Palmolive, PepsiCo, Aashirvaad, Saffola, Fortune, Nestle,
          Amul, Dabur, and many more.
        </p>

        <p>
          Imagine if you could get anything delivered to you in minutes. Milk
          for your morning chai. The perfect shade of lipstick for tonight's
          party. Even an iPhone.
        </p>

        <p>
          Our superfast delivery service aims to help consumers in India save
          time and fulfill their needs in a way that is frictionless. We will
          make healthy, high-quality and life-improving products available to
          everyone instantly so that people can have time for the things that
          matter to them.
        </p>

        <p>
          'Blinkit' is owned & managed by 'Blink Commerce Private Limited'
          (formerly known as Grofers India Private Limited) and is not related,
          linked or interconnected in whatsoever manner or nature, to
          'GROFFR.COM' which is a real estate services business operated by
          'Redstone Consultancy Services Private Limited'.
        </p>
      </div>

      <div className="footer">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
      </div>
    </div>
  );
}
