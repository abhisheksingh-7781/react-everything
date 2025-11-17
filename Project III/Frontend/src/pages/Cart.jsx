import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncupdateuser } from "../Store/actions/userActions";

const Cart = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer.user);

  // INCREASE QTY
  const IncrementQuntityHendler = (index) => {
    const copyuser = { ...user, cart: [...user.cart] };

    copyuser.cart[index] = {
      ...copyuser.cart[index],
      quantity: copyuser.cart[index].quantity + 1,
    };

    dispatch(asyncupdateuser(copyuser.id, copyuser));
  };

  // DECREASE QTY
  const DecrementQuntityHendler = (index) => {
    const copyuser = { ...user, cart: [...user.cart] };

    if (copyuser.cart[index].quantity > 1) {
      copyuser.cart[index] = {
        ...copyuser.cart[index],
        quantity: copyuser.cart[index].quantity - 1,
      };
    } else {
      // remove item
      copyuser.cart.splice(index, 1);
    }

    dispatch(asyncupdateuser(copyuser.id, copyuser));
  };

  const RemoveItemHandler = (index) => {
  const copyuser = { ...user, cart: [...user.cart] };

  copyuser.cart.splice(index, 1);  // Only remove that item

  dispatch(asyncupdateuser(copyuser.id, copyuser));
};

  // GRAND TOTAL
  const grandTotal = user?.cart?.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black p-8">
      <h1 className="text-4xl text-center font-bold text-white mb-10">
        🛒 Your Cart
      </h1>

      {/* If cart empty */}
      {user?.cart?.length === 0 ? (
        <p className="text-center text-white text-2xl">Your Cart is Empty 😔</p>
      ) : (
        <div className="max-w-5xl mx-auto space-y-6">

          {/* MAP ONLY ITEMS HERE */}
          {user?.cart?.map((c, index) => (
            <div
              key={c.product.id}
              className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-xl 
                         flex flex-col md:flex-row items-center gap-6"
            >
              {/* IMAGE */}
              <img
                src={c.product.image}
                alt={c.product.title}
                className="w-32 h-32 rounded-xl object-cover"
              />

              {/* DETAILS */}
              <div className="flex-1 text-white">
                <h2 className="text-xl font-semibold">{c.product.title}</h2>
                <p className="text-gray-300">{c.product.desc}</p>

                <p className="text-blue-400 text-2xl font-bold mt-3">
                  ₹ {c.product.price}
                </p>
              </div>

              {/* QUANTITY BUTTONS */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => DecrementQuntityHendler(index)}
                  className="bg-gray-700 px-3 py-1 rounded-lg text-xl text-white hover:bg-gray-600"
                >
                  -
                </button>

                <span className="text-white text-xl font-bold">{c.quantity}</span>

                <button
                  onClick={() => IncrementQuntityHendler(index)}
                  className="bg-gray-700 px-3 py-1 rounded-lg text-xl text-white hover:bg-gray-600"
                >
                  +
                </button>
              </div>

              {/* REMOVE BUTTON */}
              <button
                onClick={() => RemoveItemHandler(index)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
              >
                Remove
              </button>
            </div>
          ))}

          {/* GRAND TOTAL */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl text-white text-3xl font-bold text-center mt-10">
            Grand Total: <span className="text-blue-400">₹ {grandTotal}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
