import './styles/hero-styles.css';
import crmDemo from './images/hero_images/mock_crm_sreenshot.png';
import crmDemo_left from './images/hero_images/hero_tab_4.png';
import crmDemo_right from './images/hero_images/hero_tab_3.png';
import GsapText from './gsap-typing-text';

export default function Hero() {

    const sentenceList = ['Powerful CRM solutions.'];
    const sentenceContainer = ['#hero-container-title'];
    const typeDuration = 1;

    function handleClickSignUp() {
        const signupForm = document.querySelector('.form-wrapper')
        if (signupForm !== null) {
            signupForm.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <div className='hero-wrapper'>
            <div className='hero-backdrop'>
                <div className='crm-img-container'>
                    <img className='side-crm-demo left crm-border' src={crmDemo_left} alt='crm demo' />
                    <img className='crm-demo crm-border' src={crmDemo} alt='crm demo' />
                    <img className='side-crm-demo right crm-border' src={crmDemo_right} alt='crm demo' />
                </div>
            </div>
            <div className='hero-container'>
                <h2 className="title hero-container-title" id='hero-container-title'>
                    <GsapText sentenceList={sentenceList} sentenceContainer={sentenceContainer} typeDuration={typeDuration}/></h2>
                <div className='hero-container-subtitle'>
                    <p>Adaptive CRM solutions that empower your business to streamline operations and drive growth.</p>
                    <p>Now calling for beta test partners</p>
                    <button onClick={handleClickSignUp}>Sign up</button>
                </div>
            </div>
        </div>
    );
}