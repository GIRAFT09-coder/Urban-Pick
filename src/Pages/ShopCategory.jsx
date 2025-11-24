import React from "react";
import "./CSS/ShopCategory.css";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Items from "../Components/Items/Items";

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>
        <div className="shopCategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopCategory-products">
        {
          all_products.map((items,i)=>{
            if(items.category == props.category)
            {
              return (
                <Items
                  key={i}
                  id={items.id}
                  name={items.name}
                  image={items.image}
                  new_price={items.new_price}
                  old_price={items.old_price}
                />
              );
            }
            else
            {
              return null
            }
          })
        }
      </div>
      <div className="shopCategory-loadMore">
        <p>Load More</p>
      </div>
    </div>
  );
};

export default ShopCategory;
