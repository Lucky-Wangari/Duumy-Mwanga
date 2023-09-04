import React from "react";
import girl from "../../assets/images/girl.png";
import './style.css';




const Products = () => {
    return (
        <section className="products">
           <h2>Solutions</h2>
            <div className="products-container">
                <div className="mobile">
                  <div>
                    <h3>Mobile App</h3>
                    <p>
                     Mwanga app plays a crucial part in <br/> 
                     registration and monitoring delayed <br/>
                     milestones. This app utilizes location  <br/> 
                     based data to effectively register and <br/> 
                     track delayed milestones by <br/> 
                     community health volunteers.
                   </p>
                  </div>
                  <div className="photo">
                    <img src={girl} alt=""/>
                  </div>
                </div>
                <div id="second-div" className= "mobile">
                  <div className="photo" >
                    <img  src={girl} alt=""/>
                  </div>
                  <div>
                   <h3>Dashboard</h3>
                    <p>
                    Our web portal is designed to <br/>
                    display analysed data concerning <br/>
                    children and community health <br/>
                    volunteers for NGOs to act upon. 
                    </p>
                  </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
