import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className={styles.container}>
          <div className={styles.cartcontainer}>
            <h1 className={styles.title}>Welcome to Your App</h1>
            <p>Explore and learn languages!</p>

            {/* Signup Button */}
            <Link to="/signup">
                <button>Signup</button>
            </Link>

            {/* Login Button */}
            <Link to="/login">
                <button>Login</button>
            </Link>
            </div>
        </div>
    );
}

export default HomePage;