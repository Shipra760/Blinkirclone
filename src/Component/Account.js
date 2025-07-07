import React from "react";
import { FaArrowLeft, FaTrash } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";

export default function Account() {
  return (
    <div className="account-privacy-container">
      <div className="header">
        <FaArrowLeft /> <span>Account privacy</span>
      </div>

      <div className="content">
        <h2>Account privacy and policy</h2>
        <p>
          We i.e. "Blink Commerce Private Limited" (formerly known as Grofers
          India Private Limited) (“Company”), are committed to protecting the
          privacy and security of your personal information. Your privacy is
          important to us and maintaining your trust is paramount.
        </p>
        <a href="#" className="read-more">
          Read more <span>▼</span>
        </a>
      </div>

      <div className="delete-card">
        <div className="delete-left">
          <FaTrash size={20} />
          <div>
            <div className="delete-title">Request to delete account</div>
            <div className="delete-subtitle">
              Request to closure of your account
            </div>
          </div>
        </div>
        <BiChevronRight size={24} />
      </div>
    </div>
  );
}
