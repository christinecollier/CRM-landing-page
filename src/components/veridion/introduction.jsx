import './styles/introduction-styles.css';
import './styles/main-styles.css';
import IntroductionList from './introduction-list';
import tab1 from './images/intro_images/intro_tab_1.bmp'
import tab2 from './images/intro_images/intro_tab_2.bmp'
import GsapText from './gsap-typing-text';

export default function Introduction() {
    const sentenceList = ['Making CRMs easy.'];
    const sentenceContainer = ['#intro-title-container'];
    const typeDuration = 1;
    const yearMinusOne = new Date().getFullYear() - 1;

    return (
        <div className='introduction-wrapper'>
            <div className="introduction-container">
                <h2 className="sub-title intro-container-title" id='intro-title-container'>
                    <GsapText sentenceList={sentenceList} sentenceContainer={sentenceContainer} typeDuration={typeDuration}/>
                </h2>
                <IntroductionList />
                <div className='analytics-container'>
                    <p className='catchphrase'>
                        <span className='catchphrase-subheading'>Simplify Your Workflow</span>
                        Our CRM solutions streamline the way you manage customer data. With an intuitive interface and powerful analytics, you can easily track leads, monitor interactions, and gain valuable insights to drive growth—all in one platform.
                   </p>
                    <div className='analytics-tab-container'>
                        <img className='analytics-tabs tab-1' src={tab1} alt='lead source graph'/>
                        <img className='analytics-tabs tab-2' src={tab2} alt='time spent on page'/>
                    </div>
                </div>
                <div className='pilot-to-prod'>
                    <h2 className='pilot-to-prod-header'>From setup to scaling</h2>
                    <p>With only 30% of CRM implementations meeting business goals*, Veridion's adaptive solutions integrates intelligent automation and real-time insights to help sales teams optimise <strong>customer interactions</strong>, ensuring a <strong>seamless</strong>, <strong>data-driven approach</strong> for long-term success.</p>
                    <span>*source: ExampleStat Aug {yearMinusOne}</span>
                </div>
            </div>
        </div>
    );
}