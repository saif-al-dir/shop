import styles from './Product.module.scss';
import React, { useMemo, useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import Button from '../Button/Button';




const Product = ({ id, name, title, basePrice, colors, sizes }) => {
  const [currentColor, setCurrentColor] = useState(colors[id]);
  const [currentSize, setCurrentSize] = useState(sizes[id].name);
  const price = useMemo(() => {
    const selectedSize = sizes.find(size => size.name === currentSize);
    return basePrice + (selectedSize ? selectedSize.additionalPrice : 0);
  }, [basePrice, sizes, currentSize]);
  const handleAddToCart = (event) => {
    event.preventDefault();
    console.log(`Product: ${title}, Price: ${price}$, Color: ${currentColor}, Size: ${currentSize}`);
  };

  return (
    <article className={styles.product}>
      <ProductImage name={name} title={title} currentColor={currentColor} />
      <header>
        <h2 className={styles.name}>{title}</h2>
        <span className={styles.price}>Price: {price}$</span>
      </header>
      <ProductForm
        sizes={sizes}
        colors={colors}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
        getPrice={price}

      />
      <Button onClick={handleAddToCart} />
    </article>
  )
};

export default Product;