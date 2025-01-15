import './styles/product-benefits-styles.css';
import productBenefitsData from './productBenefits.js';
import GsapTitle from './gsap-typing-text.jsx';

export default function ProductBenefits() {

    const sentenceList = ['Work smarter.'];
    const sentenceContainer = ['#prod-bf-container-title'];
    const typeDuration = 1;

    function handleClickSignup() {
        //make page scroll down to signup section
        const signupForm = document.querySelector('.form-wrapper')
        if (signupForm !== null) {
            signupForm.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <div className="prod-bf-wrapper">
            <div className='prod-bf-container'>
                <h2 id='prod-bf-container-title'><GsapTitle sentenceList={sentenceList} sentenceContainer={sentenceContainer} typeDuration={typeDuration}/></h2>
                <p className='prod-bf-description'>Veridion empowers businesses to enhance customer relationships by centralizing data, improving collaboration, and delivering personalized experiences with ease.</p>

                <ul className="prod-bf-list-container">
                    {productBenefitsData && productBenefitsData.length > 0 ?
                        productBenefitsData.map(benefit =>
                            <li className={`prod-bf-li-wrapper ${benefit.id % 2 === 0 ? 'wrap-reverse' : 'wrap-normal'}`} key={`product-bf-${benefit.id}`}>
                                {benefit.id % 2 === 0 ?
                                    <div className='product-bf-img-container'>
                                        <img className='prod_bf_tabs' src={benefit.img.src} alt={benefit.img.alt} />
                                    </div>
                                    : null}
                                <div className={`prod-bf ${benefit.id % 2 === 0 ? 'right' : 'left'}`}>
                                    <span>{benefit.topCaption}</span>
                                    <p className='prod-bf-title'>{benefit.title}</p>
                                    <p className='prod-bf-caption'>{benefit.caption}</p>
                                </div>
                                {benefit.id % 2 === 1 ?
                                    <div className='product-bf-img-container'>
                                        <img className='prod_bf_tabs' src={benefit.img.src} alt={benefit.img.alt} />
                                    </div>
                                    : null}
                            </li>
                        )
                        : null}
                </ul>
                <div className='btn-container'>
                    <div className='learn-more-btn' role='button'>Learn more</div>
                    <div onClick={handleClickSignup} className='signup-btn' role='button'>Sign up</div>
                </div>
            </div>
        </div>
    );
}