import React from 'react'
import './RelatedProducts.css'
import Items from '../Items/Items'
import data_product from '../Assets/data'

const RelatedProducts = () => {
  return (
    <div className='related-products'>
      <h1>Related Products</h1>
      <hr />
      <div className="related-products-item">
        {
          data_product.map((item,i)=>{ // Importing data from data.js and mapping it
              return <Items key={i} //  this item is imported from Item.jsx where the data is displayed
              id={item.id}
              name = {item.name}
              image = {item.image}
              new_price = {item.new_price}
              old_price = {item.old_price}
              />
          })
        }
      </div>
    </div>
  )
}

export default RelatedProducts
