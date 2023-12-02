"use client ";
import Link from "next/link";
import React from "react";
import DarkModeToggle from "../DarkModeToggle/DarkMode";
import styles from "./navbar.module.css";
// import DarkModeToggle from "../DarkModeToggle/DarkMode";
const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
  ];
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        mcwachira
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}

        <button className={styles.logout}>Logout </button>
      </div>
    </div>
  );
};

export default Navbar;
