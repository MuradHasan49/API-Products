import { useState, useEffect } from "react";
import "./App.css";
import SalesCard from "./SalesCard";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  const [Product, setProduct] = useState([]);
  const [Product2, setProduct2] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/search?q=phone")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.products);
      });
  }, []);

  console.log(Product)

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct2(data.products);
      });
  }, []);

  return (
    <>
    <div className="w-6xl mx-auto">
    <Navbar/>
    </div>
      <div className="w-7xl h-full gap-30 mx-auto flex flex-col items-center py-12">
        <div className="grid grid-cols-4 gap-10">
          {Product2.map((items2) => (
            <SalesCard
            Discount={items2.category}
              img={items2.thumbnail}
              h2={items2.title}
              price={items2.price}
            />
          ))}
        </div>
        <div className="flex flex-col items-center">
          <h1 className="py-22 text-5xl font-semibold ">
            Phone Accessories and Phone
          </h1>
          <div className="grid grid-cols-4 gap-10">
            {Product.map((items) => (
              <SalesCard
              Discount={items.category}
                img={items.thumbnail}
                h2={items.title}
                price={items.price}
              />
            ))}
          </div>
        </div>
      </div>
      
      <Footer/>
    </>
  );
}

export default App;
