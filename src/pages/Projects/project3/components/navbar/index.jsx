import styles from './styles.module.css'


import ArrowUp from '../../images/icon-arrow-up.svg'
import TodoList from '../../images/icon-todo.svg'
import Calendar from '../../images/icon-calendar.svg'
import Reminders from '../../images/icon-reminders.svg'
import Planing from '../../images/icon-planning.svg'

const Navbar = () => {
    return ( 
        <nav className={styles.Navbar} >
            <ul className={styles.navgation}>
                <li><a href="#Features">Features <img src={ArrowUp} alt="ArrowUp" /></a>
                <ul className={styles.Dropnav}>
                    <li><a href="#todolist"><img src={TodoList} alt="Todo List" /> TodoList</a></li>
                    <li><a href="#calendar"><img src={Calendar} alt="Calendar" /> Calendar</a></li>
                    <li><a href="#reminders"><img src={Reminders} alt="Reminders" /> Reminders</a></li>
                    <li><a href="#planing"><img src={Planing} alt="Planing" /> Planing</a></li>
                </ul>
                
                </li>
                <li><a href="#company">Company <img src={ArrowUp} alt="ArrowUp" /></a>
                    <ul  className={`${styles.Dropnav} ${styles.comapany}`}>
                        <li><a href="#history">History</a></li>
                        <li><a href="#OurTeam">Our Team</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </li>
                <li><a href="#Careers">Caerers</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;