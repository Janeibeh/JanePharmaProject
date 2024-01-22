import React, { useEffect, useState } from "react";

import axios from "axios";
import { BASE_URL } from "../config";
import ProductsCard from "../Components/ProductsCard";

const Pharmacy = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState([]);


  

  // TO DISPLAY ALL PRODUCTS ON PHARMACY PAGE, CREATE AN ASYNC FETCH PRODUCTS FUNCTION 
  // IT WILL FETCH PRODUCTS FROM THE PRODUCTS data in the mongoonse SCHEMA MENTIONED IN THE PRODUCTS CONTROLLERS ON THE GET ALL PRODUCTS FUNCTION
  const fetch_product = async () => {
    try {
      // const {data} = await axios.get(`${BASE_URL}/products/${currentPage}/${itemsPerPage}`)

      //when using await, do not use .then
      const {data} = await axios.get(`${BASE_URL}/products`);
      // console.log("NEWData", data)
      setProducts(data.products)
    } catch (error) {

    }
  }


  useEffect(()=> {
    fetch_product()
  }, [])



  return (
    <>
      <div className="w-full h-[100vw] ">
        <div
          className="w-full h-[9.5vw] sticky top-20 "
          style={{
            backgroundImage: "url(./Media/medplus.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full items-center justify-center ">
            <div className="flex items-center justify-between px-[5.5vw] py-[3.5vw] w-full fixed ">
              <div className="font-bold flex items-center justify-center  text-[1rem]  ">
                {" "}
                SHOP BY CATEGORY
              </div>
              <form className="flex items-center justify-center  ml-[8vw] gap-[1vw] " >
                <input
                  type="text"
                  placeholder="Search drugs, products, categories"
                  className="w-[35vw] h-[2.8vw] border rounded-lg  "
                  style={{
                    backgroundImage: "url(/Media/icons8-search-24 (1).png)",
                    backgroundSize: "20px",
                    backgroundPosition: "10px center",
                    backgroundRepeat: "no-repeat",
                    paddingLeft: "40px",
                  }}
                />
                <button className="h-[2.5vw] text-[1rem] text-white w-[9vw] border rounded-lg hover:bg-orange-200 border-white ">
                  SEARCH
                </button>
              </form>
              <div className="font-bold flex items-center justify-center ml-[2vw] text-[0.92rem]" to="/cart" >
                {/* <Badge count={cart?.length} showZero>CART</Badge> */}
              </div>

            </div>
          </div>
        </div>

        {/* Display error message */}
        {error && <div className="error-message">{error}</div>}

        <div className="flex  w-[100vw] ">
          <div className=" w-[12.5vw] ml-[6vw] fixed ">
            <input
              type="checkbox"
              id="antibiotics"
              name="antibiotics"
              value="antibiotics"
            />
            <label for="all-products"> All products</label>
            <br></br>

            <input
              type="checkbox"
              id="antibiotics"
              name="antibiotics"
              value="antibiotics"
            />
            <label for="antibiotics"> Antibiotics</label>
            <br></br>

            <input
              type="checkbox"
              id="pain-relief"
              name="pain-relief"
              value="pain-relief"
            />
            <label for="pain-relief"> Pain relief</label>
            <br></br>

            <input
              type="checkbox"
              id="dietary-supplements"
              name="dietary-supplements"
              value="dietary-supplements"
            />
            <label for="dietary-supplements"> Dietary Supplements</label>
            <br></br>

            <input
              type="checkbox"
              id="contraceptives"
              name="contraceptives"
              value="contraceptives"
            />
            <label for="contraceptives"> Contraceptives</label>
            <br></br>

            <input
              type="checkbox"
              id="contraceptives"
              name="contraceptives"
              value="contraceptives"
            />
            <label for="contraceptives"> Sanitary pads</label>
            <br></br>

            <input
              type="checkbox"
              id="contraceptives"
              name="contraceptives"
              value="contraceptives"
            />
            <label for="contraceptives"> Skincare</label>
            <br></br>

            <p className="font-bold flex items-center justify-center mt-[2vw] w-fit text-[1rem]">
              {" "}
              FILTER BY PRICE
            </p>
            <br />

            <input
              type="checkbox"
              id="zero-ninecube"
              name="zero-ninecube"
              value="zero-ninecube"
            />
            <label for="zero-ninecube"> ₦0 to ₦999 </label>
            <br></br>

            <input
              type="checkbox"
              id="zero-ninecube"
              name="zero-ninecube"
              value="zero-ninecube"
            />
            <label for="zero-ninecube"> ₦1000 to ₦9999 </label>
            <br></br>

            <input
              type="checkbox"
              id="zero-ninecube"
              name="zero-ninecube"
              value="zero-ninecube"
            />
            <label for="zero-ninecube"> ₦10000 or more </label>
            <br></br>

            <button className="flex items-center justify-center w-[12.5vw] mt-[2vw] h-[2.5vw]  pr-[1vw] border bg-[red] text-[1rem] rounded-lg text-[white]   ">
              {" "}
              RESET FILTERS
            </button>
          </div>

          <div className="  w-[100vw]  h-screen">
            <div className="  flex items-center justify-center mt-[1vw] ml-[16vw] w-[82vw] ">
              <p className="font-bold text-[1rem] text-[green] ">
                OUR BEST SELLERS
              </p>
            </div>
          

            {/* It is best practise to map a component or card in a parent tag */}
            <div className=" container w-[80.7vw] ml-[19vw] flex items-center justify-center mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-[1vw]  mt-[2vw]">
            {products && products.map((product,index)=>  (
              
                <ProductsCard  key={product._id} product={product}/>
                // products should be logged in console to be sure it is really fetched
            ))}

        </div>

            </div>
        </div>
      </div>
    </>
  );
};

export default Pharmacy;
