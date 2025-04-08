import React from "react";
import styles from './Header.module.css'
import HeaderUserProfile from "../../features/users/HeaderUserProfile"
import { MenuIcon } from "@/shared/ui/icons";

const Header = ({onMenuClick}) => {

  return (
    <header className={styles.header}>
      <section className={styles.leftSection}>
        <MenuIcon onClick={onMenuClick}/>
      </section>
      <section className={styles.centerSection}></section>
      <section className={styles.rightSection}>
        <HeaderUserProfile/>
      </section>
    </header>
  )
}
export default Header