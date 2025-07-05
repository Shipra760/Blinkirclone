import {
  FaBirthdayCake,
  FaWallet,
  FaBookOpen,
  FaAddressBook,
  FaGift,
} from "react-icons/fa";
import {
  MdOutlineSupport,
  MdPayments,
  MdAssignment,
  MdBookmark,
  MdPrivacyTip,
} from "react-icons/md";
import { BsSun, BsCartCheck, BsShare } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
import { AiOutlineBell, AiOutlineLogout } from "react-icons/ai";
import { RiReceiptLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Profile = () => {
  const infoItems = [
    { text: "Your orders", icon: <BsCartCheck size={20} />, link: "/order" },
    {
      text: "Bookmarked recipes",
      icon: <MdBookmark size={20} />,
      link: "/recipes",
    },
    { text: "Address book", icon: <FaAddressBook size={20} />, link: "/book" },
    { text: "GST details", icon: <MdAssignment size={20} />, link: "/gst" },
    { text: "E-Gift Cards", icon: <FaGift size={20} />, link: "/gift" },
  ];

  const paymentItems = [
    { text: "Wallet", icon: <FaWallet size={20} />, link: "/wal" },
    { text: "Blinkit Money", icon: <FaWallet size={20} />, link: "/money" },
    {
      text: "Payment settings",
      icon: <MdPayments size={20} />,
      link: "/payment",
    },
    {
      text: "Your collected rewards",
      icon: <FaGift size={20} />,
      link: "/reward",
    },
  ];

  const otherInform = [
    { text: "Share the app", icon: <BsShare size={20} /> },
    { text: "About us", icon: <FaBookOpen size={20} /> },
    { text: "Get Feeding India receipt", icon: <RiReceiptLine size={20} /> },
    { text: "Account privacy", icon: <MdPrivacyTip size={20} /> },
    { text: "Notification preferences", icon: <AiOutlineBell size={20} /> },
    { text: "Log out", icon: <AiOutlineLogout size={20} /> },
  ];

  return (
    <div className="container py-3 bg-white" style={{ minHeight: "100vh" }}>
      {/* Header */}
      <div className="d-flex align-items-center mb-4">
        <button className="btn btn-link text-dark p-0 me-2">
          <i className="bi bi-arrow-left"></i>
        </button>
        <h5 className="mb-0 fw-semibold">Profile</h5>
      </div>

      {/* Account Info */}
      <div className="mb-4">
        <h4 className="fw-bold">Your account</h4>
        <p className="text-muted mb-2">📞 6306616775</p>

        <div className="bg-warning-subtle rounded d-flex align-items-center px-3 py-2 mb-4">
          <FaBirthdayCake size={22} className="me-2 text-warning" />
          <span className="fw-medium">Add your birthday</span>
          <span
            className="ms-auto text-success fw-semibold"
            style={{ cursor: "pointer" }}
          >
            Enter details <BiRightArrowAlt />
          </span>
        </div>
      </div>

      {/* 3 Cards */}
      <div className="d-flex justify-content-between text-center mb-4 gap-2">
        <Link
          to="/blinkit-money"
          className="flex-fill p-3 border rounded text-decoration-none text-dark"
        >
          <FaWallet size={20} className="mb-1" />
          <div className="small">Blinkit Money</div>
        </Link>

        <Link
          to="/support"
          className="flex-fill p-3 border rounded text-decoration-none text-dark"
        >
          <MdOutlineSupport size={20} className="mb-1" />
          <div className="small">Support</div>
        </Link>

        <Link
          to="/payments"
          className="flex-fill p-3 border rounded text-decoration-none text-dark"
        >
          <MdPayments size={20} className="mb-1" />
          <div className="small">Payments</div>
        </Link>
      </div>

      {/* Appearance */}
      <div className="d-flex align-items-center justify-content-between border rounded px-3 py-2 mb-4">
        <div className="d-flex align-items-center" style={{ fontSize: "14px" }}>
          <BsSun className="me-2" />
          <span>Appearance</span>
        </div>
        <span className="badge bg-info">LIGHT</span>
      </div>

      {/* Sections */}
      <div className="mb-4">
        <h6 className="text-muted mb-2" style={{ fontSize: "14px" }}>
          YOUR INFORMATION
        </h6>
        {infoItems.map((item, i) =>
          item.link ? (
            <Link
              key={i}
              to={item.link}
              className="text-decoration-none text-dark"
            >
              <div className="d-flex justify-content-between align-items-center py-3 border-bottom">
                <div className="d-flex align-items-center gap-2">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              </div>
            </Link>
          ) : (
            <div
              key={i}
              className="d-flex justify-content-between align-items-center py-3 border-bottom"
            >
              <div className="d-flex align-items-center gap-2">
                {item.icon}
                <span>{item.text}</span>
              </div>
            </div>
          )
        )}
      </div>

      <div className="mb-4">
        <h6 className="text-muted mb-2" style={{ fontSize: "14px" }}>
          PAYMENTS AND COUPONS
        </h6>
        {paymentItems.map((item, i) =>
          item.link ? (
            <a
              key={i}
              href={item.link}
              className="text-decoration-none text-dark"
              style={{ display: "block", fontSize: "15px" }}
            >
              <div className="d-flex justify-content-between align-items-center py-3 border-bottom">
                <div className="d-flex align-items-center gap-2">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
                <BiRightArrowAlt size={18} />
              </div>
            </a>
          ) : (
            <div
              key={i}
              className="d-flex justify-content-between align-items-center py-3 border-bottom"
              style={{ fontSize: "15px" }}
            >
              <div className="d-flex align-items-center gap-2">
                {item.icon}
                <span>{item.text}</span>
              </div>
              <BiRightArrowAlt size={18} />
            </div>
          )
        )}
      </div>

      <div>
        <h6 className="text-muted mb-2" style={{ fontSize: "14px" }}>
          OTHER INFORMATION
        </h6>
        {otherInform.map((item, i) => (
          <div
            key={i}
            className="d-flex justify-content-between align-items-center py-3 border-bottom"
            style={{ fontSize: "15px" }}
          >
            <div className="d-flex align-items-center gap-2">
              {item.icon}
              <span>{item.text}</span>
            </div>
            <BiRightArrowAlt size={18} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
