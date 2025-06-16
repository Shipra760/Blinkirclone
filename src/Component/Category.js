import Slider from "react-slick";
import { GiShoppingBag, GiLipstick, GiBabyBottle } from "react-icons/gi";
import { MdHeadphones } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
  { icon: <GiShoppingBag size={20} />, label: "All" },
  { icon: <MdHeadphones size={20} />, label: "Electronics" },
  { icon: <GiLipstick size={20} />, label: "Beauty" },
  { icon: <FaRegLightbulb size={20} />, label: "Decor" },
  { icon: <GiBabyBottle size={20} />, label: "Kids" },
  { icon: <MdHeadphones size={20} />, label: "Electronics" },
  { icon: <GiLipstick size={20} />, label: "Beauty" },
  { icon: <FaRegLightbulb size={20} />, label: "Decor" },
  { icon: <GiBabyBottle size={20} />, label: "Kids" },
];

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3.2,
        slidesToScroll: 4,
      },
    },
  ],
};

export default function CategorySlider() {
  return (
    <div className="category-slider-wrapper px-2">
      <Slider {...settings}>
        {categories.map((item, idx) => (
          <div key={idx} className="text-center px-1">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2px", // reduced space between icon and label
              }}
            >
              {item.icon}
              <small style={{ fontSize: "11px" }}>{item.label}</small>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
