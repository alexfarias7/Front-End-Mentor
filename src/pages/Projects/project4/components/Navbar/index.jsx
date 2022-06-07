import styles from './styles.module.css'

const Navbar = () => {
    return ( 
        <nav>
            <ul  className={styles.Navbar}>
                <li><a href="#collection">Collection</a></li>
                <li><a href="#men">Men</a></li>
                <li><a href="#women">Women</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>

        </nav>
     );
}
 
export default Navbar;