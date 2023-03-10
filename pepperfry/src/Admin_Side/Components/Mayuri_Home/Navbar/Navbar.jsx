import React from 'react'
import {Box,Stack} from "@chakra-ui/react";
import './Navbar.css';
import SearchResult from './SearchResult';
// import Hamburger from "./Hamburger";
// import { useState } from 'react';
import Drawer from './Drawer'
import {Search2Icon} from "@chakra-ui/icons";
import { Appliances,Decor,Kitchen, Furnishing, Furniture,Pets, Lighting,Mattresses} from "./DropDown";
// import {useNavigate} from 'react'

const Navbar = () => {

  const [searchKey,setSearchKey] = React.useState("");
  const [search,setSearch] = React.useState(false);
    const [showDropdown, setShowDropdown] = React.useState(false);
    const [dropCategory, setdropCategory] = React.useState(null);
    // const [hamburgerOpen, setHamburgerOpen] = useState(false);

    // const toggleHamburger = () =>{
    //     setHamburgerOpen(!hamburgerOpen)
    // }
  // const navigate=useNavigate()
    const handleChange = (e) => {
      console.log("Search", search)
      setSearchKey(e.target.value)
      setSearch(false)
      
    }
    const handleRemoveSearch = () => {
      setSearch(false)
    }
  return (
    <div className="Navv_box">
         <Box bg="#f5f5f5">

          <div

            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color:"black",
              
              padding: "10px 70px",
            }}
          >
            <Stack direction={["row"]}>

              <li style={{listStyle: "none",fontSize:"14px"}}>
                <p>Sell on Pepperfry</p>
              </li>
              <li style={{listStyle: "none",fontSize:"14px",marginLeft:"10px"}}>
                <p >Become a Franchisee</p>
              </li>
              <li style={{listStyle: "none",fontSize: "14px",marginLeft:"10px"}}>
                <p>Buy in Bulk</p>
              </li>

              <li style={{listStyle: "none",fontSize: "14px",marginLeft:"10px" }}>
                <p>Find a Studio</p>
              </li>
              <li style={{listStyle: "none",fontSize: "14px" ,marginLeft:"10px"}}>
                <p>Find Design Inspiration</p>
              </li>
            </Stack>
            <Stack direction={["row"]} spacing="20px">

              <li style={{ listStyle: "none", fontSize: "12px" ,marginLeft:"10px"}}>
                <p>Enter pincode</p>
              </li>
              
              <li
                style={{
                  listStyle: "none",
                  fontSize: "12px",
                  color: "#FF7035",
                  textDecorationLine: "underline",
                  marginLeft:"10px",
                  cursor:"pointer"
                }}
              >
                <p style={{color: "#FF7035"}}>Find pepperfry studio</p>
              </li>
            </Stack>
          </div>
        </Box>
        <div id="logobox"> 
         <div id="navbar1">
      <div>
        <img className="logobar" src="https://techstory.in/wp-content/uploads/2018/03/Pepperfry.png" alt="" srcset="" /></div> 
        
         <input id="inputs"  type="text" placeholder="Your door to happiness opens with a search" value={searchKey} onChange={(e) => handleChange(e)} onClick={() => setSearch(true)}/>
         
         {search && <SearchResult handleRemoveSearch={handleRemoveSearch} />}
         <Search2Icon className="searchbar" />
        
         <div>
         <button className='navbtn'>
         <div>
             <img src="https://ii1.pepperfry.com/images/svg/web21-header-help-icon.svg" alt="" />
         </div>
         </button>
         </div>
      
         <div>
         <button className='navbtn'>
         <div>     
         <img src="https://ii1.pepperfry.com/images/svg/icon-profile-21.svg?v=1" alt="" />
        
         </div>
         </button>
         </div>
         <div>
         <button className='navbtn'>
         <div>
             <img src="https://ii1.pepperfry.com/images/svg/icon-wishlist-21.svg" alt="" />
         </div>
         </button>
         </div>
         <div>
            <button className='navbtn'>
         <div> 
          
         {/* <Link href='./Drawer.jsx'>
         <img src="https://ii1.pepperfry.com/images/svg/icon-cart-21.svg" alt="" />
         </Link> */}
         <Drawer/>
         </div>
         </button>
         </div>
         </div>

         {/* <div className="hamburger" onClick={toggleHamburger}>
                        <Hamburger isOpen={hamburgerOpen}/>
                    </div> */}
      </div>
    
      <div className='droppy'
          
        >
          <div style={{display:"flex"}} onMouseEnter={()=>{setShowDropdown(true)}} onMouseLeave={()=>{setShowDropdown(false);setdropCategory(null)}} >
            
            
            <li
              style={{ listStyle: "none", fontSize: "14px", fontWeight: "500",marginLeft:"60px"}}
            >
              <button className='menu' onMouseEnter={()=>{setdropCategory("furniture")}}>Furniture</button>
              {showDropdown && dropCategory==="furniture" ? <Furniture/> : null}
            </li>


            <li
              style={{ listStyle:"none",fontSize:"14px",fontWeight: "500" ,marginLeft:"60px"}}
            >
              <button className='menu' onMouseEnter={()=>{setdropCategory("decor")}}>HomenDecor</button>
              {showDropdown && dropCategory === "decor" ? <Decor/>: null}
            </li>


            <li
              style={{ listStyle: "none",fontSize: "14px", fontWeight: "500" ,marginLeft:"60px"}}
            >
              <button className='menu' onMouseEnter={()=>{setdropCategory("lamps")}}>Lamps & Lighting</button>
              {showDropdown && dropCategory === "lamps" ? <Lighting/> : null}
            </li>


            <li
              style={{ listStyle: "none", fontSize: "14px", fontWeight: "500" ,marginLeft:"60px"}}
            >
              <button className='menu' onMouseEnter={()=>{setdropCategory("dinning")}}>Kitchen & Dinning</button>
              {showDropdown && dropCategory === "dinning" ? <Kitchen/>: null}
            </li>


            <li
              style={{ listStyle: "none", fontSize: "14px", fontWeight: "500" ,marginLeft:"60px"}}
            >
              <button className='menu' onMouseEnter={()=>{setdropCategory("furnishing")}}>Furnishings</button>
              {showDropdown && dropCategory === "furnishing" ? <Furnishing/> : null}
            </li>
            
            <li
              style={{ listStyle: "none", fontSize: "14px", fontWeight: "500",marginLeft:"60px"}}
            >
              <button className='menu' onMouseEnter={()=>{setdropCategory("mattresses")}}>Mattresses</button>
              {showDropdown && dropCategory === "mattresses" ? <Mattresses/> : null}
            </li>
           
            <li
              style={{ listStyle: "none", fontSize: "14px", fontWeight: "500",marginLeft:"60px"  }}
            >
              <button className='menu' onMouseEnter={()=>{setdropCategory("appliances")}}>Appliances</button>
              {showDropdown && dropCategory === "appliances" ? <Appliances/> : null}
            </li>


            <li
              style={{ listStyle: "none", fontSize: "14px", fontWeight: "500",marginLeft:"60px"}}
            >
              <button className='menu' onMouseEnter={()=>{setdropCategory("pets")}}>Pets</button>
              {showDropdown && dropCategory === "pets" ? <Pets/> : null}
            </li>


            <li
              style={{ listStyle: "none", fontSize: "14px", fontWeight: "500",marginLeft:"60px"}}
            >
              <button className='menu'>Modular</button>
             
            </li>


            <li
              style={{ listStyle: "none", fontSize: "14px", fontWeight: "500",marginLeft:"60px"  }}
            >
              <button className='menu'>Gift Cards</button>
             
            </li>
          </div>
        </div>
    </div>
  )
}

export default Navbar