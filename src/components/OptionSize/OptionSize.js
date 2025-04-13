import React from 'react';
import styles from '../Product/Product.module.scss';


const OptionSize = ({ sizes, currentSize, setCurrentSize }) => {
    return (
        <div>
            <ul className={styles.choices}>
                {sizes.map(size => (
                    <li key={size.name}>
                        <button
                            type="button"
                            className={currentSize === size.name ? 'active' : ''}
                            onClick={() => setCurrentSize(size.name)}
                        >
                            {size.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default OptionSize;