import '../styles/toggle-navbar-menu-styles.css';
import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function ToggleNavbarMenu({ buttonIsVisible, toggleMenuVisibility, showMenuList }) {
    const handleClickToggle = () => {
        // Toggle the visibility of the menu
        toggleMenuVisibility(); 
    };

    // Toggle between the hamburger / X icon menus. Trigger whenever showMenuList changes
    useEffect(() => {
        const animDuration = 0.2;

        if (showMenuList) {
            gsap.to('#middle-line-container', {
                opacity: 0,
                ease: 'power2.in',
                duration: animDuration,
            });
            gsap.to('#top-line-container', {
                y: '7px',
                rotationZ: 45,
                transformOrigin: '50% 50%',
                ease: 'power2.in',
                duration: animDuration,
            });
            gsap.to('#bottom-line-container', {
                y: '-7px',
                rotationZ: -45,
                transformOrigin: '50% 50%',
                ease: 'power2.in',
                duration: animDuration,
            });
        } else {
            gsap.to('#middle-line-container', {
                opacity: 1,
                ease: 'power2.in',
                duration: animDuration,
            });
            gsap.to('#top-line-container', {
                y: '0px',
                rotation: 0,
                ease: 'power2.in',
                duration: animDuration,
            });
            gsap.to('#bottom-line-container', {
                y: '0px',
                rotation: 0,
                ease: 'power2.in',
                duration: animDuration,
            });
        }
    }, [showMenuList]);

    // Effect to reset the hamburger icon when screen width > 840px
    useEffect(() => {
        const handleResize = () => {
            // Reset to hamburger state when screen width is larger than 840px
            if (window.innerWidth > 840) {
                // Close the menu if it's open
                // if (showMenuList) {
                //     toggleMenuVisibility(); 
                // }
            }
        };

        window.addEventListener('resize', handleResize);
        // Call here to initialise in the correct state on page load
        handleResize(); 

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [showMenuList, toggleMenuVisibility]);

    return (
        <div
            onClick={handleClickToggle}
            className={`toggle-container ${buttonIsVisible ? 'visible' : 'hidden'}`} 
            id='toggle-btn'
            role='button'
        >
            <div className='line-container' id='top-line-container'>
                <hr className='line' id='top-line' />
            </div>
            <div className='line-container' id='middle-line-container'>
                <hr className='line' id='middle-line' />
            </div>
            <div className='line-container' id='bottom-line-container'>
                <hr className='line' id='bottom-line' />
            </div>
        </div>
    );
}

// Original code:

// import '../styles/toggle-navbar-menu-styles.css';
// import { useEffect, useState } from 'react';
// import { gsap } from 'gsap';


// export default function ToggleNavbarMenu({ buttonIsVisible, toggleMenuVisibility, showMenuList, crossedBtn }) {

//     const newShowMenuList = !showMenuList;
//     const newCrossedBtn = !crossedBtn;

//     const handleClickToggle = () => {
//         //because setState is asynchronous, showMenuList and crossedBtn aren't updated by the time handleClickToggle is called. This means that the menu button only toggles from the second click.
//         const animDuration = 0.2;

//         toggleMenuVisibility();

//         if (newShowMenuList) {
//             gsap.to('#middle-line-container', {
//                 // display: 'none',
//                 opacity: 0,
//                 ease: 'power2.in',
//                 duration: animDuration,
//             });
//             gsap.to('#top-line-container', {
//                 y: '7px',
//                 rotationZ: 45,
//                 transformOrigin: '50% 50%',
//                 ease: 'power2.in',
//                 duration: animDuration,
//             });
//             gsap.to('#bottom-line-container', {
//                 y: '-7px',
//                 rotationZ: -45,
//                 transformOrigin: '50% 50%',
//                 ease: 'power2.in',
//                 duration: animDuration,
//             });
//         } else {
//             gsap.to('#middle-line-container', {
//                 opacity: 1,
//                 ease: 'power2.in',
//                 duration: animDuration,
//             });
//             gsap.to('#top-line-container', {
//                 y: '0px',
//                 rotation: 0,
//                 ease: 'power2.in',
//                 duration: animDuration,
//             });
//             gsap.to('#bottom-line-container', {
//                 y: '0px',
//                 rotation: 0,
//                 ease: 'power2.in',
//                 duration: animDuration,
//             });
//         };
//     };


//     const handleResize = () => {
//         //If width < 840px, close the menu list, load hamburger menu
//         if (window.innerWidth > 840) {
//             newShowMenuList = false;
//         }
//         toggleMenuVisibility();
//     };

//     window.addEventListener('resize', handleResize);
//     window.removeEventListener('resize', handleResize)

// return (
//     <div
//         onClick={handleClickToggle}
//         className={`toggle-container ${buttonIsVisible ? 'visible' : 'hidden'}`} id='toggle-btn'
//         role='button'
//     >
//         <div className='line-container' id='top-line-container'>
//             <hr className='line' id='top-line' />
//         </div>
//         <div className='line-container' id='middle-line-container'>
//             <hr className='line' id='middle-line' />
//         </div>
//         <div className='line-container' id='bottom-line-container'>
//             <hr className='line' id='bottom-line' />
//         </div>
//     </div>
// );
// }