import React from 'react'
import './BreadCrumb.css'
import arrrow_icon from '../Assets/breadcrum_arrow.png'

const BreadCrums = (props) => {
    const {product} = props
    console.log(product)
  return (
    <div className='breadcrumb'>
      HOME <img src={arrrow_icon} alt="" /> SHOP <img src={arrrow_icon} alt="" /> {product?.category} <img src={arrrow_icon} alt="" /> {product?.name} 
    </div>
  )
}

export default BreadCrums
