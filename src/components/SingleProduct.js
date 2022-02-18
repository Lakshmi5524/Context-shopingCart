import React from "react"
import { Button, Card } from "react-bootstrap"
import { CartState } from "../context/Context"
import Rating from "./Rating"
import "./styles.css"

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState()

  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.image} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle>
            <span>₹{prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={prod.rating} />
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from card
            </Button>
          ) : (
            <Button
              disabled={!prod.inStack}
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
              disabled={!prod.inStock}
            >
              {!prod.inStack ? "Out of stack" : " Add to card"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProduct