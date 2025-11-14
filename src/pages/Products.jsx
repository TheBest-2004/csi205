import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./css/Products.css";

export default function Products({ products, carts, setCarts }) {
  return (
    <div className="page-container">
      <div className="products-itemps-container">
        {products.map((product) => (
          <Card className="product-card d-flex flex-column h-100" key={product.id}>

            <Card.Img
              variant="top"
              src={product.thumbnailUrl}
              className="product-img"
            />

            <Card.Body className="d-flex flex-column product-content">

              <Card.Title className="product-title">{product.title}</Card.Title>

              <Card.Text className="product-price">
                <b>${product.price.toFixed(2)}</b>
              </Card.Text>

              <div className="mt-auto">
                {carts.find((cart) => cart.id === product.id) ? (
                  <span className="badge bg-danger">Added</span>
                ) : (
                  <Button
                    variant="outline-primary"
                    onClick={() => setCarts([...carts, product])}
                  >
                    Add To Carts
                  </Button>
                )}
              </div>

            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
