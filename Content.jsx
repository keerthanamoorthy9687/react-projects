import React, { useEffect, useState } from 'react'
import google_logo from "../assets/images/google.webp";
import air_pots from "../assets/images/air pots.webp";
import smart_phone from "../assets/images/smartPhone.webp";
import game from "../assets/images/game.webp"


function Content(){
  
  const [products,setProducts]=useState([])
  const [loading,setLoading]=useState(true);
  const [error, setError] = useState(null);
  const [showForm,setShowForm]=useState(false);
  

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
          <button type="button" className="btn btn-primary" id="registerButton">Sign in</button>
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

   
    <section className="form"> {showForm && (
        <div className="form-container">
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}</section>

     
   
   

     </div>
   

    </>
   )
  }

export default Content;
  
  {/* <div className="container">
    <section className="container-fluid">
        <div className="row">
            <div className="col-1">
                 <span className="h5 text-start " >let's go shoping,Keerthana</span>
                </div>
                <div className="col-2">
                    <img src="../Assert/images/image-1.webp" alt="">
                </div>
        </div>
    </section>

    {/*<section className="electronics">
        <div cl assName="row">
            <h4 className="h4">Electronics</h4>
            <div className="container" style="width: 100%;">
                    <div className="row align-items-start">
                      <div className="col">
                        <div className="card border-light mb-3" style="width: 18rem;">
                            <img className="card-img-top" style="width: 250px;" src="../Assert/images/elec-image-1.webp" alt="Card image cap">
                            <div className="card-body">
                              <h5 className="card-title">₹59,999</h5>
                              <p className="card-text">motorola razr 50</p>
                            </div>
                          </div>
                      </div>
                      <div className="col">
                        <div className="card border-light mb-3" style="width: 18rem;">
                            <img className="card-img-top"  style="width: 250px;" src="../Assert/images/ele-image-2.webp" alt="Card image cap">
                            <div className="card-body">
                              <h5 className="card-title">₹2,850.00</h5>
                              
                              <p className="card-text">Amazon Fire TV Stick 3rd Gen with ALEXA Voice Remote</p>
                            </div>
                          </div>
                      </div>
                      <div className="col">
                        <div className="card border-light mb-3" style="width: 18rem;">
                            <img className="card-img-top" style="width: 250px;" src="../Assert/images/ele-img-3.webp" alt="Card image cap">
                            <div className="card-body">
                              <h5 className="card-title">₹119,999.00</h5>
                              <p className="card-text">Samsung Galaxy S23 Ultra 5G (12GB RAM, 512GB, Green)</p>
                            </div>
                          </div>
                      </div>
                      <div className="col-2" >
                        <div className="card border-light mb-3" style="width: 18rem;">
                            <img className="card-img-top" style="width: 250px;" src="../Assert/images/ele-img-3.webp" alt="Card image cap">
                            <div className="card-body">
                              <h5 className="card-title">₹119,999.00</h5>
                              <p className="card-text">Samsung Galaxy S23 Ultra 5G (12GB RAM, 512GB, Green)</p>
                            </div>
                          </div>
                      </div>
                   
                    
                    </div>
              
            
           </div>
        </div>
    </section>
    <div className="d-grid gap-1 mb-3">
        <p className="text-primary  text-center"> view more  <i className="bi bi-chevron-down"></i></p>
       
      </div>
    <hr className="border border-primary border-1 opacity-20"> */}
    {/* <section className="homedecor">
        <div className="row">
            <h4 className="h4">Home Decor</h4>
            <div className="container" style="width: 100%;">
                    <div className="row align-items-start">
                      <div className="col">
                        <div className="card border-light mb-3" style="width: 18rem;">
                            <img className="card-img-top" style="width: 250px;" src="../Assert/images/HD-img-1.webp" alt="Card image cap">
                            <div className="card-body">
                              <h5 className="card-title">₹1,199.00</h5>
                              <p className="card-text">Baby Birth Frame-Live Design 5 / A3 (12x18 Inch)</p>
                            </div>
                          </div>
                      </div>
                      <div className="col">
                        <div className="card border-light mb-3" style="width: 18rem;">
                            <img className="card-img-top"  style="width: 250px;" src="../Assert/images/HD-img-2.webp" alt="Card image cap">
                            <div className="card-body">
                              <h5 className="card-title">₹21,718.79</h5>
                              <p className="card-text">Hatch Restore 2 Sunrise Alarm Clock Sound Machine</p>
                          </div>
                      </div>
                    
                    
                    </div>
                    <div className="col">
                      <div className="card border-light mb-3" style="width: 18rem;">
                          <img className="card-img-top" style="width: 250px;" src="../Assert/images/HD-img-3.webp" alt="Card image cap">
                          <div className="card-body">
                            <h5 className="card-title">₹371.70</h5>
                            <p className="card-text">Spotify Photo Frames Online | Customized Photo Gifts</p>
                          </div>
                        </div>
                    </div>
                    <div className="col-2">
                      <div className="card border-light mb-3" style="width: 18rem;">
                          <img className="card-img-top" style="width: 250px;" src="../Assert/images/HD-img-3.webp" alt="Card image cap">
                          <div className="card-body">
                            <h5 className="card-title">₹3991.70</h5>
                            <p className="card-text">Spotify Photo Frames Online | Customized Photo Gifts</p>
                          </div>
                        </div>
                    </div>
              
            
           </div>
        </div>
        </div>
    </section>
    <div className="d-grid gap-1 mb-3">
      <p className="text-primary  text-center"> view more  <i className="bi bi-chevron-down"></i></p>
     
    </div>
    
    <hr className="border border-primary border-1 opacity-20"> */}
    {/* <section className="kitchen">
        <div className="row">
            <h4 className="h4">Kitchen & Dining</h4>
            <div className="container" style="width: 100%;">
                    <div className="row align-items-start">
                      <div className="col">
                        <div className="card border-light mb-3" style="width: 18rem;">
                            <img className="card-img-top" style="width: 250px;" src="../Assert/images/k-img-1.webp" alt="Card image cap">
                            <div className="card-body">
                              <h5 className="card-title">₹1,199.00</h5>
                              <p className="card-text">Baby Birth Frame-Live Design 5 / A3 (12x18 Inch)</p>
                            </div>
                          </div>
                      </div>
                      <div className="col">
                        <div className="card border-light mb-3" style="width: 18rem;">
                            <img className="card-img-top"  style="width: 250px;" src="../Assert/images/k-img-2.webp" alt="Card image cap">
                            <div className="card-body">
                              <h5 className="card-title">₹21,718.79</h5>
                              <p className="card-text">Hatch Restore 2 Sunrise Alarm Clock Sound Machine.</p>
                            </div>
                          </div>
                      </div>
                      <div className="col">
                        <div className="card border-light mb-3" style="width: 18rem;">
                            <img className="card-img-top" style="width: 250px;" src="../Assert/images/k-img-3.webp" alt="Card image cap">
                            <div className="card-body">
                              <h5 className="card-title">₹371.70</h5>
                              <p className="card-text">Spotify Photo Frames Online | Customized Photo Gifts</p>
                            </div>
                          </div>
                      </div>
                      <div className="col-2">
                        <div className="card border-light mb-3" style="width: 18rem;">
                            <img className="card-img-top" style="width: 250px;" src="../Assert/images/k-img-3.webp" alt="Card image cap">
                            <div className="card-body">
                              <h5 className="card-title">₹391.70</h5>
                              <p className="card-text">Spotify Photo Frames Online | Customized Photo Gifts</p>
                            </div>
                          </div>
                      </div>
                    
                    </div>
              
            
           </div>
        </div>
    </section>
    <div className="d-grid gap-1 mb-3">
      <p className="text-primary  text-center"> view more  <i className="bi bi-chevron-down"></i></p>
     
    </div>
    <hr className="border border-primary border-1 opacity-20"> */}
    {/* <section className="toys">
        <div className="row">
            <h4 className="h4">Toys</h4>
            <div className="container" style="width: 100%;">
                    <div className="row align-items-start">
                      <div className="col">
                        <div className="card border-light mb-3" style="width: 18rem;">
                            <img className="card-img-top" style="width: 250px;" src="../Assert/images/toy-img-1.webp" alt="Card image cap">
                            <div className="card-body">
                              <h5 className="card-title">₹5,786.85</h5>
                              <p className="card-text">Fire Emblem Three Houses: Pop Up Parade Edelgard Von Hresvelg.</p>
                            </div>
                          </div>
                      </div>
                      <div className="col">
                        <div className="card border-light mb-3" style="width: 18rem;">
                            <img className="card-img-top"  style="width: 250px;" src="../Assert/images/toy-img-2.webp" alt="Card image cap">
                            <div className="card-body">
                              <h5 className="card-title">₹9,114.73</h5>
                              <p className="card-text">Lego 10280 - Flower Bouquet</p>
                            </div>
                          </div>
                      </div>
                      <div className="col">
                        <div className="card border-light mb-3" style="width: 18rem;">
                            <img className="card-img-top" style="width: 250px;" src="../Assert/images/toy-img-3.webp "alt="Card image cap">
                            <div className="card-body">
                              <h5 className="card-title">₹53,990.00</h5>
                              <p className="card-text">Apple iPad Air (M2, 2024) - 11″ - Wi-Fi - 128 GB - Space Grey</p>
                            </div>
                          </div>
                      </div>
                      <div className="col-2">
                        <div className="card border-light mb-3" style="width: 18rem;">
                            <img className="card-img-top"  style="width: 250px;" src="../Assert/images/toy-img-2.webp" alt="Card image cap">
                            <div className="card-body">
                              <h5 className="card-title">₹9,114.73</h5>
                              <p className="card-text">Lego 10280 - Flower Bouquet</p>
                            </div>
                          </div>
                      </div>
                    
                    </div>
              
            
           </div>
        </div>
    </section>
    <div className="d-grid gap-1 mb-3 ">
      <p className="text-primary  text-center"> view more  <i className="bi bi-chevron-down"></i></p>
     
    </div>
    <hr className="border border-primary border-1 opacity-20"> */}
    {/* <section className="craft">
        <div className="row">
            <h4 className="h4">Craft & Hobbies</h4>
            <div className="container" style="width: 100%;">
                    <div className="row align-items-start">
                      <div className="col" style="width: 200px;">
                        <div className="card border-light mb-3" style="width: 18rem;">
                            <img className="card-img-top" style="width: 250px;" src="../Assert/images/cf-img-1.webp" alt="Card image cap">
                            <div className="card-body">
                              <h5 className="card-title">₹21,688.35</h5>
                              <p className="card-text">allout TV Pip-boy 3000 Mk V Die-Cast Replica</p>
                            </div>
                          </div>
                      </div>
                      <div className="col"style="width: 200px;">
                        <div className="card border-light mb-3" style="width: 18rem;">
                            <img className="card-img-top"  style="width: 250px;" src="../Assert/images/cf-img-2.webp" alt="Card image cap">
                            <div className="card-body">
                              <h5 className="card-title">₹1,149.00</h5>
                              <p className="card-text">Naixa Women's BSY Viscose Embroidered Straight Kurta with BSY Viscose Pant and Silk Blend Laced Dupatta Sets</p>
                            </div>
                          </div>
                      </div>
                      <div className="col" style="width: 200px;">
                        <div className="card border-light mb-3" style="width: 18rem;">
                            <img className="card-img-top" style="width: 250px;" src="../Assert/images/cf-img-3.webp" alt="Card image cap">
                            <div className="card-body">
                              <h5 className="card-title">₹897.00</h5>
                              <p className="card-text">KD Women's Anarkali Floral Printed Kurta Pent Set with Dupatta Anarkali Kurta for Women | Kurta Set | Ethnic Set | Dupatta Set</p>
                            </div>
                          </div>
                      </div>
                      <div className="col-2" style="width: 200px;">
                        <div className="card border-light mb-3" style="width: 18rem;">
                            <img className="card-img-top" style="width: 250px;" src="../Assert/images/cf-img-3.webp" alt="Card image cap">
                            <div className="card-body">
                              <h5 className="card-title">₹997.00</h5>
                              <p className="card-text">KD Women's Anarkali Floral Printed Kurta Pent Set with Dupatta Anarkali Kurta for Women | Kurta Set | Ethnic Set | Dupatta Set</p>
                            </div>
                          </div>
                      </div>
                    
                    </div>
              
            
           </div>
        </div>
    </section>
    <div className="d-grid gap-1 mb-3">
      <p className="text-primary  text-center"> view more  <i className="bi bi-chevron-down"></i></p>
     
    </div>
    <hr className="border border-primary border-1 opacity-20">
    <div className="footer">
      <p className=" text-center" ><i className="bi bi-dot"></i><span className="font-weight-bold">Chennai, Tamil Nadu, India </span>- From your Internet address - Learn more</p>
     
      
    </div> */}
 
 


  {/* <!-- google shopping sign in page  --></hr> */} 



