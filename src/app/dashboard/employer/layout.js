
import React from 'react';
import SideBar from '../../ui/dashboard/employer/sidebar/sidebar';
import NavBar from '../../ui/dashboard/employer/navbar/navbar';
import '../../../../public/css/custom.css';
import styles from '../../ui/dashboard/employer/dashboard.module.css'


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