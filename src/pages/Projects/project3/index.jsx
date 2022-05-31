import Container from './components/container';
import Footer from './components/footer';
import Header from './components/header';

import styles from './styles.module.css';

const Project3 = () => {
    return ( 
        <div className={styles.Project}>
           <Header/>
           <Container/>
           <Footer/>
        </div>
     );
}
 
export default Project3;