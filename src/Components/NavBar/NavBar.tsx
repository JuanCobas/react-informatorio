import styles from './NavBarStyles.module.css'
import { Link } from 'react-router';

function NavBar() {

    return (

        <>
            <div className={styles.container}>
                <Link to={'/'}>Home</Link>
                <Link to={'/category/1'}>Canciones mas largas</Link>
                <Link to={'/category/2'}>Canciones de Pop</Link>
                <Link to={'/category/3'}>Canciones de Ariana Sun</Link>
                <Link to={'/category/4'}>Canciones mas Escuchadas</Link>
               
            </div>
        </>
    )

}

export default NavBar;