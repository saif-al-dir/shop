import styles from './Button.module.scss';


const Button = ({ onClick }) => {
    return (
        <button className={styles.button} onClick={onClick}>
            <span className="fa fa-shopping-cart" />
        </button>
    );
};

export default Button;