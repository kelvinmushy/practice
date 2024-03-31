
import React from 'react';
import SideBar from '../ui/dashbar/sidebar/sidebar';
import NavBar from '../ui/dashbar/navbar/navbar';
import '../../../public/css/custom.css';
import styles from '../ui/dashbar/dashboard.module.css'



const Layout=({children})=>{

    return (
        <div className={styles.container}>

            <div className={styles.menu}>

                <SideBar/>

            </div>

            <div className={styles.content}>
             
              <NavBar/>

              {children}

            </div>
        </div>  
    )


}

export default Layout;