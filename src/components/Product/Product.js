import styles from './Product.module.scss';
import React, { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';




const Product = ({ id, name, title, basePrice, colors, sizes }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);
  const getPrice = () => {
    const selectedSize = sizes.find(size => size.name === currentSize);
    return basePrice + (selectedSize ? selectedSize.additionalPrice : 0);
  };
  const handleAddToCart = (event) => {
    event.preventDefault();
    console.log(`Product: ${title}, Price: ${getPrice()}$, Color: ${currentColor}, Size: ${currentSize}`);
  };

  return (
    <article className={styles.product}>
      <ProductImage name={name} title={title} currentColor={currentColor} />
      <header>
        <h2 className={styles.name}>{title}</h2>
        <span className={styles.price}>Price: {getPrice()}$</span>
      </header>
      <ProductForm
        sizes={sizes}
        colors={colors}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
        getPrice={getPrice}
        handleAddToCart={handleAddToCart}
      />
    </article>
  )
};

export default Product;