import './styles/introduction-list-styles.css';
import introListData from './introListData.js';

export default function IntroductionList() {
    return (
        <ul className='introduction-list'>
            {introListData && introListData.length > 0 ? introListData.map(item => 
            <li className='intro-li-wrapper' key={`intro-li-${item.id}`}>
                <div className='intro-li-container'>
                    <div className='intro-li-img-container'>
                        <img className='intro-li-img' src={item.src} alt={item.alt} />
                    </div>
                    <span>{item.caption}</span>
                </div>
            </li>
            ): null}
        </ul>
    );
}