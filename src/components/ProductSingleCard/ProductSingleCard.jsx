import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Slider from "../Slider/Slider";

function ProductSingleCard() {
  const imgArr = ["images/1.jpg", "images/4.jpg", "images/3.jpg"];
  return (
    <Card style={{ marginTop: 5, marginBottom: 5 }}>
      <Slider images={imgArr} />
      <Card.Body>
        <Card.Title>Tokyo Talkies</Card.Title>
        <Card.Text>Floral A-line midi dress</Card.Text>
        <Card.Text>Rs.587</Card.Text>
        <Button variant="primary">Wishlist</Button>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductSingleCard;
