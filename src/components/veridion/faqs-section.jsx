import { useState } from 'react';
import faqsData from './faqsData.js';
import {FaAngleDown, FaAngleUp} from 'react-icons/fa';
import './styles/faq-styles.css';

export default function FaqsAccordion() {

    const [selected, setSelected] = useState(null);

    function handleSingleSelection(getCurrentId) {
        //Dsiplay answer when clicked. If the answer is already open, close it.
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    console.log(selected)
    return (
        <div className='faqs-wrapper'>
            <div className='section-container'>
                <h2 className='sub-title'>FAQs</h2>
                <div className='faqs-accordion'>
                    {faqsData && faqsData.length > 0 ?
                        faqsData.map(faqItem =>
                            <div className='faq-item' key={`faqItem-${faqItem.id}`}>
                                <div onClick={() => handleSingleSelection(faqItem.id)} className='faq-title subtitle'>
                                    <h3><p>{faqItem.question}</p>
                                        <span className='faq-caret'>{selected === faqItem.id ? 
                                            <FaAngleUp /> : <FaAngleDown />}
                                        </span>
                                    </h3>
                                </div>
                                {selected === faqItem.id &&
                                    <div className='faq-content'>{faqItem.answer}</div>
                                }
                            </div>)
                        : <div>No data found</div>}
                </div>
            </div>
        </div>
    );
}