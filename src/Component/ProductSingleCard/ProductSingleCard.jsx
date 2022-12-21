import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ProductSingleCard(props) {
  const { id, title, price, description, category, image } = props;
  return (
    <Link to={`/producDetail/${id}`}>
      <Card style={{ marginTop: 5, marginBottom: 5 }}>
        {/* <Card.Img variant="top" src={image} className="img-thumbnail img-fluid" /> */}

        <Card.Body>
          <div>
            <img
              src={image}
              className="img-thumbnail"
              alt={title}
              style={{ height: 150 }}
            />
          </div>

          <Card.Title className="text-truncate">{title}</Card.Title>
          <Card.Title>Rs: {price}</Card.Title>
          <Card.Text className="text-truncate">{description}</Card.Text>
          <Card.Text>{category}</Card.Text>
        </Card.Body>
        <Card.Footer className="singleProductItemFooter">
          <Row>
            <Button variant="primary" data={id}>
              Wishlist
            </Button>
          </Row>
          <Row style={{ marginTop: 5 }}>
            <Button variant="primary" data={id}>
              Add to Cart
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    </Link>
  );
}

export default ProductSingleCard;
