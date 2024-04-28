import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col } from "react-bootstrap";

const Sliderbar = ({ settings, data, className }) => (
  <Slider {...settings} className={className}>
    {data.map((d, i) => (
      <Col key={i}>{d}</Col>
    ))}
  </Slider>
);

export default Sliderbar;
