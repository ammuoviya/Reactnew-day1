import React, { useState } from "react";
import CartCard from "../Components/Cartcard";
import ProductCard from "../Components/Productcard";

const data = [

  {
    label: "Fancy Product",
    price: 40.00,
    price1: 80.00,
  },
  {
    label: "Special Item",
    price: 40,
  },
  {
    label: "Sale Item",
    price: 40,
  },
  {
    label: "Popular Item",
    price: 35,
  },
  {
    label: "Sale Item",
    price: 15,
  },
  {
    label: "FancyProduct",
    price: 10,
  },
  {
    label: "Special Item",
    price: 35,
  },
  {
    label: "Popular Item",
    price: 45,
  },
];

function Cart() {
  const [cart, setCart] = useState([]);

  function handleChange(item = {}) {
    let cartCopy = [...cart];
    if (item.label) {
      cartCopy.push(item);
    }
    setCart(cartCopy);
  }

  function handleCart(item = {}) {
    console.log(item);
    let cartCopy = [...cart];
    if (item.label) {
      cartCopy = cartCopy.filter((_data) => _data.label !== item.label);
    }
    setCart(cartCopy);
  }

  function checkCartStatus(item = {}) {
    let status = false;
    if (item.label) {
      status =
        cart.filter((_data) => _data.label === item.label).length > 0
          ? true
          : false;
    }
    return status;
  }

  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              {data.map((element, index) => (
                <ProductCard
                  key={`product-card-${index}`}
                  disabled={checkCartStatus(element)}
                  data={element}
                  onChange={handleChange}
                />
              ))}
            </div>
            <div className="col-lg-4">
              {cart.map((d, index) => (
                <CartCard
                  key={`cart-card-${index}`}
                  data={d}
                  onRemove={handleCart}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;