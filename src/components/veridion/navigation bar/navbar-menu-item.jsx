import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { FaAngleDown } from 'react-icons/fa';
import NavbarMenuList from './navbar-menu-list';
import '../styles/navbar-styles.css';


export default function NavbarMenuItem({ item = {}, child = false }) {

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    // Rotate caret depending on whether displayCurrentChildren is true/false
    useEffect(() => {
        Object.keys(displayCurrentChildren).forEach((label) => {
            const caret = document.getElementById(`caret-${label}`);
            if (caret) {
                // Children visible
                if (displayCurrentChildren[label]) {
                    gsap.to(caret, {
                        rotation: 180,
                        duration: 0.2,
                        ease: 'linear',
                    });
                } else {
                    //Children hidden
                    gsap.to(caret, {
                        rotation: 0,
                        duration: 0.2,
                        ease: 'linear',
                    });
                }
            }
        });
    }, [displayCurrentChildren]);

    function handleMouseEnter(getCurrentLabel) {
        const showChildren = setTimeout(() => {
            setDisplayCurrentChildren({
                // Preserve existing state and toggle the visibility of children
                ...displayCurrentChildren,
                [getCurrentLabel]: true,
            });
        }, 50);
        return () => clearTimeout(showChildren);
    }

    function handleMouseLeave(getCurrentLabel) {
        displayCurrentChildren &&
            setDisplayCurrentChildren({
                ...displayCurrentChildren,
                [getCurrentLabel]: false,
            });
    }

    function handleCaretMouseEnter(getCurrentLabel) {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel]: true,
        });
    }

    function handleCaretMouseLeave(getCurrentLabel) {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel]: false,
        });
    }

    return (
        <li
            onMouseLeave={() => handleMouseLeave(item.label)}
            className={`navbar-menu-item ${child ? 'child-menu-item' : 'top-menu-item'}`}
            id={`navbar-menu-item-${item.label}`}
            style={item && item.children && item.children.length > 0
                ? { minWidth: '5rem' }
                : { minWidth: 'fit-content' }}>
            <div
                id={`label-container-${item.label}`}
                onMouseEnter={() => handleMouseEnter(item.label)}
                className={`label-container ${child ? 'child-label-container' : 'top-label-container'}`}
                style={item && item.children && item.children.length > 0 ? { borderBottom: '0'} : null}>
                <p>{item.label}</p>
                <span
                    className='list-label-caret'
                    id={`caret-${item.label}`}
                    onMouseEnter={() => handleCaretMouseEnter(item.label)}
                    onMouseLeave={() => handleCaretMouseLeave(item.label)} 
                    style={{paddingInline: `${item && item.children && item.children.length > 0 ? '0.25rem': '0'}`}}
                    >
                    {item && item.children && item.children.length > 0 && <FaAngleDown />}
                </span>
            </div>
            {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ?
                <NavbarMenuList child={true} secondary={true} list={item.children} />
                : null}
        </li>
    );
}