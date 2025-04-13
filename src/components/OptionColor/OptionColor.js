import React from 'react';
import styles from '../Product/Product.module.scss';


const OptionColor = ({ colors, currentColor, setCurrentColor }) => {
    return (
        <div>
            <ul className={styles.choices}>
                {colors.map(color => (
                    <li key={color}>
                        <button
                            type="button"
                            className={currentColor === color ? 'active' : ''}
                            onClick={() => setCurrentColor(color)}
                            style={{
                                backgroundColor: color,
                            }}
                        >
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OptionColor;