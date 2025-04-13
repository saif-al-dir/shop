import React from 'react';
import styles from '../Product/Product.module.scss';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';


const ProductForm = ({ sizes, colors, currentSize, setCurrentSize, currentColor, setCurrentColor, getPrice, handleAddToCart }) => {
    return (
        <form>
            <div className={styles.sizes}>
                <h3 className={styles.optionLabel}>Sizes</h3>
                <OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} />
            </div>
            <div className={styles.colors}>
                <h3 className={styles.optionLabel}>Colors</h3>
                <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor} />
            </div>
            <div className={styles.Button}>
                <Button onClick={handleAddToCart} />
            </div>
        </form>
    );
};

export default ProductForm;