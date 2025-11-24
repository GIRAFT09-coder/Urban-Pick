import React, { useContext } from 'react';
import BreadCrums from '../Components/BreadCrums/BreadCrums';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { all_products } = useContext(ShopContext); 
  const { id } = useParams();
  console.log(id);

  const product = all_products.find(
    (product) => product.id === Number(id)
  );

  return (
    <div className='product'>
      <BreadCrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  );
};

export default Product;
