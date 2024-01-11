import { useLoaderData } from "react-router-dom";
import { add } from "./CartSlice";
import { useDispatch } from "react-redux";
import { Carousel } from "@material-tailwind/react";
import electronics from "../assets/sale-electronics-banner-background-free-vector.jpg";
import summer from "../assets/summer-collection.jpg";
import sale from "../assets/web_en_QAT_MEN_SALE_HP_1cta_121123.webp";

function Products() {
  const prod = useLoaderData();
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <Carousel
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-gray-800" : "w-4 bg-gray-500"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <img
            src={electronics}
            alt="image 1"
            className=" w-full object-cover h-[200px] sm:h-[500px] md:h-[500px] lg:h-[500px] xl:h-[500px]"
          />
          <img
            src={summer}
            alt="image 2"
            className=" w-full object-cover h-[200px] sm:h-[500px] md:h-[500px] lg:h-[500px] xl:h-[500px]"
          />
          <img
            src={sale}
            alt="image 3"
            className=" w-full object-cover h-[200px] sm:h-[500px] md:h-[500px] lg:h-[500px] xl:h-[500px]"
          />
        </Carousel>
      </div>
      <div className="flex flex-wrap justify-around gap-4 ">
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
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                {item.price} $
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
                onClick={() => dispatch(add(item))}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
export const apiData = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
};
