import React, { useEffect, useState } from 'react'
import google_logo from "../assets/images/google.webp";
import air_pots from "../assets/images/air pots.webp";
import smart_phone from "../assets/images/smartPhone.webp";
import game from "../assets/images/game.webp"


function Content(){
  
  const [products,setProducts]=useState([])
  const [loading,setLoading]=useState(true);
  const [error, setError] = useState(null);
 

 
  

  // Get all productList using Api 
 useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products"); // Fetching product list
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data); // Update state with fetched data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Run only once on component mount
  

 
  if (loading) return <p className="text-center text-gray-600">Loading products...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;



  
  return (
     <>
   
    <div className="container">
        <section class="nav-bar">
                 <div class="row">
        <div class="col-1"> 
            <div class="icon"><i class="bi bi-list"></i></div>
        </div>
        <div class="col-2" >
           
            <img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" class="Ws3Esf" alt="Google" width="74" height="24" data-iml="1291.5999999996275" data-atf="false"/>
            <span class="ele-1">Shopping</span>

        </div>
        <div class="col-3">
           
            <div class="input-group mb-3">
                <span class="input-group-text"><i className="bi bi-search"></i></span>
                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder="what are you looking for?"/>
                <span className="input-group-text"><i className="bi bi-mic"></i></span>
              </div>
        </div>
        <div className="col-4">
          <button type="button" className="btn btn-primary" id="registerButton" >Sign Up</button>
        </div>
       </div>
     </section>
    <section className="container-fluid">
        <div className="row">
            <div className="col-1">
                 <span className="h5 text-start " >let's go shoping,Keerthana</span>
                </div>
                <div className="col-2">
                    <img src={google_logo} alt=""/>
                </div>
        </div>
    </section>
    <section className="productList">
      <div className="p-5">
      <h2 className="text-xl font-bold text-left">Product List</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 col-sm-6 mb-4">
            <div className="card h-100 shadow">
              <img src={product.image} alt={product.title} className="card-img-top p-3" style={{ height: "200px", objectFit: "contain" }} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-muted">{product.category}</p>
                <p className="card-text fw-bold text-success">${product.price}</p>
                <a href="#" className="btn btn-primary w-100">View Product</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      </section>
      <section className="productList">
      <div className="p-5">
      <h2 className="text-xl font-bold text-left">Electronics</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 col-sm-6 mb-4">
            <div className="card h-100 shadow">
              <img src={product.image} alt={product.title} className="card-img-top p-3" style={{ height: "200px", objectFit: "contain" }} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-muted">{product.category}</p>
                <p className="card-text fw-bold text-success">${product.price}</p>
                <a href="#" className="btn btn-primary w-100">View Product</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      </section>

   
 

     
   
   

     </div>
   

    </>
   )
  }

export default Content;
 



