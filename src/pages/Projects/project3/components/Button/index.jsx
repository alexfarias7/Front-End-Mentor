import styles from './style.module.css'

const Button = ({type, children}) => {
    return ( 
        <button className={styles.Btn} type={type}>{children}</button>
     );
}
 
export default Button;