import React, { useState, useEffect, useRef } from 'react';
import './styles/introduction-styles.css';

const TypingEffectTitle = ({ sentence, wordClassNames, split}) => {

    const text = sentence.split(split); // Split sentence into words

    const [typedText, setTypedText] = useState('');
    const [isInViewport, setIsInViewport] = useState(false);
    const [hasTyped, setHasTyped] = useState(false); // Track if typing has already happened
    const textRef = useRef(null);

    // Check if element is in the viewport
    const checkIfInView = () => {
        if (textRef.current) {
            const rect = textRef.current.getBoundingClientRect();
            setIsInViewport(rect.top >= 0 && rect.bottom <= window.innerHeight);
        }
    };

    // Scroll event listener to trigger the typing effect
    useEffect(() => {
        window.addEventListener('scroll', checkIfInView);
        checkIfInView(); // Check initially if element is in viewport

        return () => {
            window.removeEventListener('scroll', checkIfInView);
        };
    }, []);

    // Function to type the text sequentially
    const typeTextSequentially = () => {
        let currentWordIndex = 0;
        let currentCharIndex = 0;
        let currentTypedText = '';

        const typeWord = () => {
            if (currentWordIndex < text.length) {
                const word = text[currentWordIndex];
                if (currentCharIndex < word.length) {
                    currentTypedText += word.charAt(currentCharIndex);
                    setTypedText(currentTypedText);
                    currentCharIndex += 1;
                    setTimeout(typeWord, 50); // Typing speed
                } else {
                    currentTypedText += ' '; // Add space after each word
                    setTypedText(currentTypedText);
                    currentWordIndex += 1;
                    currentCharIndex = 0;
                    setTimeout(typeWord, 50); // Delay before starting the next word
                }
            }
        };

        typeWord();
    };

    useEffect(() => {
        if (isInViewport && !hasTyped) {
            setTypedText(''); // Clear previous text when it comes into view
            typeTextSequentially();
            setHasTyped(true); // Prevent typing effect from triggering again
        }
    }, [isInViewport, hasTyped]);

    // Each word gets different classNames 
    const styledText = typedText.split(split).map((wordText, i) => (
        <span key={i} className={wordClassNames[i] || 'default'}> {/* Add classname to each word */}
            {wordText.split('').map((char, index) => (
                <span key={index} className="char">
                    {char}
                </span>
            ))}
        </span>
    ));

    return (
        <h2 id="typing-text" className="typing-text" ref={textRef}>
            {styledText}
        </h2>
    );
};

export default TypingEffectTitle;


//Previous code:

// import React, { useState, useEffect } from 'react';
// import './styles/introduction-styles.css';

// const TypingEffectTitle = ({ letterStyle }) => {

//     const sentence = 'Because LLMs are hard.'
//     const text = sentence.split(' ');

//     const [typedText_1, setTypedText_1] = useState('');
//     const [typedText_2, setTypedText_2] = useState('');
//     const [typedText_3, setTypedText_3] = useState('');
//     const [typedText_4, setTypedText_4] = useState('');
//     const [index_1, setIndex_1] = useState(0);
//     const [index_2, setIndex_2] = useState(0);
//     const [index_3, setIndex_3] = useState(0);
//     const [index_4, setIndex_4] = useState(0);

//     //First word
//     useEffect(() => {
//         if (index_1 < text[0].length) {
//             const timeout_1 = setTimeout(() => {
//                 setTypedText_1((prevText) => prevText + text[0].charAt(index_1));
//                 setIndex_1(index_1 + 1);
//             }, 35);

//             return () => clearTimeout(timeout_1);
//         };
//     }, [index_1, text[0]]);

//     //Second word
//     useEffect(() => {
//         // const timeout_2_delay = setTimeout(() => {
//             if (index_2 < text[1].length) {
//                 const timeout_2 = setTimeout(() => {
//                     setTypedText_2((prevText) => prevText + text[1].charAt(index_2));
//                     setIndex_2(index_2 + 1);
//                 }, 35);

//                 return () => clearTimeout(timeout_2);
//             };
//         // }, 500);
//     }, [index_2, text[1]]);

//     //Third word
//     useEffect(() => {
//         // const timeout_3_delay = setTimeout(() => {
//             if (index_3 < text[2].length) {
//                 const timeout_3 = setTimeout(() => {
//                     setTypedText_3((prevText) => prevText + text[2].charAt(index_3));
//                     setIndex_3(index_3 + 1);
//                 }, 35);

//                 return () => clearTimeout(timeout_3);
//             };
//         // }, 1000);
//     }, [index_3, text[2]]);

//     useEffect(() => {
//         // const timeout_4_delay = setTimeout(() => {
//             if (index_4 < text[3].length) {
//                 const timeout_4 = setTimeout(() => {
//                     setTypedText_4((prevText) => prevText + text[3].charAt(index_4));
//                     setIndex_3(index_4 + 1);
//                 }, 35);

//                 return () => clearTimeout(timeout_4);
//             };
//         // }, 1500);
//     }, [index_4, text[3]]);

//     const styledText_1 = typedText_1.split('').map((char, i) => (
//         <span key={i} style={letterStyle} class='char'>
//         {char}
//         </span>
//     ));

//     const styledText_2 = typedText_2.split('').map((char, i) => (
//         <span key={i} style={letterStyle} class='char'>
//             {char}
//         </span>
//     ));

//     const styledText_3 = typedText_3.split('').map((char, i) => (
//         <span key={i} style={letterStyle} class='char'>
//             {char}
//         </span>
//     ));

//     const styledText_4 = typedText_4.split('').map((char, i) => (
//         <span key={i} style={letterStyle} class='char'>
//             {char}
//         </span>
//     ));

//     return (
//         <h2 id='typing-text-dark' className='typing-text'>
//             <span class='word default'>{styledText_1} </span>
//             <span class='word dual'>{styledText_2} </span>
//             <span class='word default'>{styledText_3} </span>
//             <span class='word default'>{styledText_4} </span>
//         </h2>
//     );
// };

// export default TypingEffectTitle;
