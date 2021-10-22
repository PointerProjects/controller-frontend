import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { IconContext } from 'react-icons';
import { GoSignOut } from 'react-icons/go';

import { MenuContext } from '../../contexts/menu';
import { SidebarData } from './SidebarData';

import perfilImg from '../../assets/perfil.jpg';
import logoImg from '../../assets/logo.png';

import styles from "./styles.module.scss";

export function NavBar() {
  const { showSidebar, sideBar } = useContext(MenuContext);

  return (
    <IconContext.Provider value={{ color: '#555' }}>
    <div className={styles.navBarBoxWrapper}>
      <div className={styles.menu}>
        <Link to='#' className={styles.menuBars}>
          <img src={logoImg} alt="Pointer Softwares" onClick={showSidebar} />
        </Link>
        <h2 className={styles.title}>Pointer Imobiliária</h2>
      </div>

      <div className={styles.user}>
        <img src={perfilImg} alt="Imagem de Perfil" />
        <Link to='/login'>
          <GoSignOut size="20" />
        </Link>
      </div>
    </div>

    <nav className={`${styles.navMenu} ${sideBar ? styles.active : ""}`}>
          <ul className={styles.navMenuItems}>
            {SidebarData.map((item, index) => {
              return (
                <>
                {sideBar ? 
                  <li key={item.title} className={styles.navText} onClick={showSidebar}>
                    <Link to={item.path}>
                      <div className={styles.iconMenu}>
                        {item.icon}
                      </div>
                      <span className={sideBar ? styles.spanMenu : styles.span}>{item.title}</span>                                   
                    </Link>
                  </li>
                :
                  <li key={index} className={styles.navText}>
                    <Link to={item.path}>
                      <div className={styles.icon}>
                        {item.icon}
                      </div>
                      <span className={sideBar ? styles.spanMenu : styles.span}>{item.title}</span>                                   
                    </Link>
                  </li>
                }
                </>
              );
            })}
          </ul>
        </nav>
    </IconContext.Provider>
  );
}