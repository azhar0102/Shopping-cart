import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, increaseCount, decreaseCount } from "./cartSlice";
function Cart() {
  const prod = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const calculateTotalPrice = (item) => {
    return item.price * item.count;
  };
  if (prod.length === 0) {
    return (
      <p className="text-4xl text-center font-bold my-9">Your cart is empty.</p>
    );
  }
  return (
    <div className="h-full max-w-[1000px] mx-auto flex flex-wrap justify-around gap-4">
      {prod.map((item) => (
        <div
          key={item.id}
          className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-72"
        >
          <div className="flex justify-center items-center relative h-56 mx-4  overflow-hidden text-white shadow-lg bg-clip-border rounded-xl shadow-blue-gray-500/40">
            <img className="h-[150px]" src={item.image} alt="card-image" />
          </div>
          <div className="p-6">
            <h5 className="truncate block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {item.title}
            </h5>
            <p className="text-xs mt-2">Items: {item.count}</p>
            {/* increase/ decrease buttons */}
            <div className="flex mt-2">
              <button
                className="mr-2 px-2 py-1 border rounded-md"
                onClick={() => dispatch(decreaseCount(item.id))}
              >
                -
              </button>
              <span>{item.count}</span>
              <button
                className="ml-2 px-2 py-1 border rounded-md"
                onClick={() => dispatch(increaseCount(item.id))}
              >
                +
              </button>
            </div>
            {/* =========== */}
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              {calculateTotalPrice(item).toFixed(2)} $
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
              onClick={() => dispatch(remove(item.id))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
