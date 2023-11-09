'use client'
import Link from 'next/link'
import styles from '../page.module.scss'
import NavLink from './NavLink'
import { useState , useRef } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { TbClick } from 'react-icons/tb'
import Image from 'next/image'

const NavBarLinks = [
    {
        path: "#project",
        title: "Project"
    },
    {
        path: "#experience",
        title: "Experience"
    },
    {
        path: "#technologies",
        title: "Technologies"
    },
    {
        path: "#contactme",
        title: "Contact Me"
    }
]

function NavBar() {

    const [ navBarOpen, setNavBarOpen ] = useState(false);

    const menu = useRef("")
    const list = useRef("")

    const openMenu = () => {

        setNavBarOpen(true)
        menu.current.style.display = "block"
        menu.current.style.width = "100%"
        menu.current.style.height = "116px"
        menu.current.style.flexWrap = "wrap"
        menu.current.style.margin = "20px"
    }

    const closeMenu = () => {

        setNavBarOpen(false)
        menu.current.style.display = "none"
    }

    return (
        <div className={styles.navBar}>
            <div>
                <Link href='https://github.com/DwipshikhaLodh'><Image src="/images/githublogo.png" alt='github' width={50} height={50}></Image></Link>
            </div>
            <div className={styles.hamburgerContainer}>
                {
                    navBarOpen? <button type='button' onClick={closeMenu}><AiOutlineClose/></button> : <button type='button' onClick={openMenu}><GiHamburgerMenu/></button>
                }
            </div>
            <ul ref={menu}>
                {
                    NavBarLinks.map((option, index) => {
                        return (
                            <li ref={list} key={index} className={styles.navLink}>
                                <NavLink path={option.path} title={option.title}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default NavBar