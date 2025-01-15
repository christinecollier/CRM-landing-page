import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import '../styles/navbar-styles.css';
import ToggleNavbarMenu from './toggle-navbar-menu';
import NavbarMenuList from './navbar-menu-list';
import navbarMenuData from './navbarMenuData';
import veridion_logo from '../images/logos/veridion_logo.svg';

export default function Navbar() {
    const menuData = navbarMenuData;
    const [showNavbar, setShowNavbar] = useState(true);
    const [showMenuList, setShowMenuList] = useState(window.innerWidth < 840 ? false : true);

    console.log(`Screen width: ${window.innerWidth}, showMenuList: ${showMenuList}`);

    // Callback to toggle menu visibility
    const toggleMenuVisibility = () => {
        setShowMenuList(!showMenuList);
    };

    useEffect(() => {
        const handleResize = () => {
            //If width < 840px, close the menu list, load hamburger menu
            if (window.innerWidth < 840) {
                setShowMenuList(false);
            }
            //If width > 840px, make the menu list visible, load crossed btn
            else {
                setShowMenuList(true);
            }
        };

        window.addEventListener('resize', handleResize);
        //Call handleResize here so that the menu visibility is set correctly when the page initially loads
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50 && showNavbar) {
                // Navbar disappears at scrollY > 50
                gsap.to('.navbar-wrapper', {
                    opacity: 0,
                    y: -500,
                    duration: 0.2,
                    ease: 'power2.out',
                    onComplete: () => setShowNavbar(false)
                });
                setShowMenuList(false);
                console.log(window.scrollY);
            } else if (window.scrollY <= 50 && !showNavbar) {
                // Navbar reappears at scrollY < 50
                gsap.to('.navbar-wrapper', {
                    opacity: 1,
                    y: 0,
                    duration: 0,
                    ease: 'linear',
                    onComplete: () => setShowNavbar(true)
                });
                //Menu list reappears if navbar is scrolled out then back into view ^ width >840px
                if (window.innerWidth >= 840) {
                setShowMenuList(true);
                } else {
                    setShowMenuList(false);
                }
            }
        }; 
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [showNavbar]);

    return (
        <div className={`navbar-wrapper ${showNavbar ? 'visible' : 'hidden'} ${showMenuList ? 'opaque' : 'filter'}`} >
            {showNavbar &&
                <div className='navbar-container'>
                    <div className='logo-container'>
                        <img src={veridion_logo} alt='Veridion logo' title='Veridion' />
                        <h1>Veridion</h1>
                    </div>
                    <ToggleNavbarMenu
                        buttonIsVisible={!showNavbar}
                        toggleMenuVisibility={toggleMenuVisibility}
                        showMenuList={showMenuList}
                    />
                    <NavbarMenuList showMenuList={showMenuList}
                        secondary={false}
                        list={menuData}
                    />
                </div>
            }
        </div>
    );
}