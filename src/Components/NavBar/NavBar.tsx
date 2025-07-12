import styles from './NavBarStyles.module.css'
import { Link } from 'react-router';

function NavBar() {

    return (

        <>
            <div className={styles.container}>
                <Link to={'/'}>Home</Link>
                <a href="#">Canciones mas largas</a>
                <a href="#">Canciones de Pop</a>
                <a href="#">Canciones de Ariana Sun</a>
                <a href="#">Canciones mas Escuchadas</a>
            </div>
        </>
    )

}

export default NavBar;