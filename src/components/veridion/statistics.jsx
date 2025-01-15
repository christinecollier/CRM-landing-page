import './styles/statistics-styles.css';
import './styles/main-styles.css';
import statistics from './statisticsData.js';
import GsapTitle from './gsap-typing-text.jsx';
import PartnerLogos from './partner-logos'; 

export default function Statistics() {
    
    const sentenceList = ['Trusted by businesses.'];
    const sentenceContainer = ['#stats-title'];
    const typeDuration = 1;

    return (
        <div className='stats-wrapper'>
            <div className="stats-container">
                <h2 className='sub-title' id='stats-title'><GsapTitle sentenceList={sentenceList} sentenceContainer={sentenceContainer} typeDuration={typeDuration}/></h2>
                <div className='manifesto'>
                    <p>
                        <span className='manifesto-header'>We believe that CRMs should empower stronger customer relationships.</span><br /><br />
                        As a spin-out from SentiCore, we have a proven track record of developing innovative customer management tools and strategies that drive real business results.<br /><br />
                        At Veridion, we focus on delivering <strong>intelligent</strong>, <strong>user-friendly</strong> CRM solutions that streamline workflows, enhance data insights, and optimize customer engagement.
                    </p>
                </div>
                <div className='stats-top-section'>
                    <ul className='stats-table'>
                        {statistics && statistics.length > 0 ?
                            statistics.map(statistic =>
                                <li key={`table-item-${statistic.id}`}>
                                    <div className='stats-table-item'>
                                        <span>{statistic.number}+</span>
                                        <p>{statistic.sentence}</p>
                                    </div>
                                </li>
                            )
                            : null}
                    </ul>
                </div>
                <p className='stats-subcaption'>Developed in partnership with</p>
                <PartnerLogos />
            </div> 
        </div >
    );
}