import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="images/1.jpg" height={300} width={180} />

      <Card.Body>
        <Card.Title>Tokyo Talkies</Card.Title>
        <Card.Text>Floral A-line midi dress</Card.Text>
        <Card.Text>Rs.587</Card.Text>
        <Button variant="primary">Wishlist</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
