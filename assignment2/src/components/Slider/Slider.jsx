import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
function Slider({ images }) {
  return (
    <Carousel>
      {images.map((item) => {
        return (
          <Carousel.Item>
            <Card.Img variant="top" src={item} height={280} width={180} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default Slider;
