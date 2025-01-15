import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);

export default function GsapTitle({ sentenceList = [], sentenceContainer = '', typeDuration = 0 }) {
    const [isInViewport, setIsInViewport] = useState(false);
    const textRef = useRef(null);

    // Check if the element is in the viewport
    const checkIfInView = () => {
        if (textRef.current) {
            const rect = textRef.current.getBoundingClientRect();
            setIsInViewport(rect.top >= 0 && rect.bottom <= window.innerHeight);
        }
    };

    // Scroll event listener to check if the element is in the viewport
    useEffect(() => {
        window.addEventListener('scroll', checkIfInView);
        checkIfInView(); 

        return () => {
            window.removeEventListener('scroll', checkIfInView);
        };
    }, []);

    // GSAP typing effect animation 
    useEffect(() => {
        // Don't start the animation if the element isn't in the viewport
        if (!isInViewport) return;

        const masterTl = gsap.timeline();

        sentenceList.forEach(sentence => {
            const tl = gsap.timeline();
            tl.to(sentenceContainer, { opacity: 1 })
              .to(sentenceContainer, { duration: typeDuration, text: sentence, ease: 'linear' });
            masterTl.add(tl);
        });

        return () => {
            masterTl.kill(); 
        };
    }, [isInViewport, sentenceList, sentenceContainer, typeDuration]);

    return (
        <span ref={textRef}></span>
    );
};