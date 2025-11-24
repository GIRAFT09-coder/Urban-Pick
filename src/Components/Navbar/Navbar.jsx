import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

  const [menu, setMenu] = useState("shop")
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className="nav_logo">
        <img src={logo} alt="" />
        <p>UrbanPick</p>
      </div>
      <ul className='nav_menu'> 
        <li onClick={()=>setMenu("shop")}><Link className='link' to="/">Shop</Link>{menu === "shop" ? <hr /> : ""} </li> {/* if menu is equal to shop then show hr */}
        <li onClick={()=>setMenu("mens")}><Link className='link' to="/mens">Mens</Link>{menu === "Mens" ? <hr /> : ""}</li>
        <li onClick={()=>setMenu("womens")}><Link className='link' to="/womens">Womens</Link> {menu === "Womens" ? <hr /> : ""}</li>
        <li onClick={()=>setMenu("kids")}><Link className='link' to="/kids">Kids</Link>{menu === "Kids" ? <hr /> : ""}</li>
      </ul>
      <div className='nav_login_cart'>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt="" /></Link>
        <div className="nav_cart_count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
