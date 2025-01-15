import foundersData from './foundersData';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import './styles/founders-styles.css'

export default function Founders() {
    return (
        <div className="founders-wrapper">
            <div className="founders-container">
                <h2 className='sub-title'>Founding team</h2>
                <p className='sub-caption'>Our founding team combines decades of experience in technology, sales, and customer management to create a CRM that truly drives results.</p>
                <ul className="profile-container">
                    {foundersData && foundersData.length > 0 ?
                    foundersData.map(founder => 
                    <li key={`founder-${founder.id}`}>
                        <div className='profile-card'>
                            <img src={founder.picture} alt={founder.name}/>
                            <div className='profile-details'>
                                <p className='name'><strong>{founder.name}</strong></p>
                                <p className='role'>{founder.role}</p>
                                <FaLinkedin src={founder.linkedin} role='button' alt='linkedin logo' target='_blank' rel='noreferrer noopener' className='linkedin-icon'/>
                                <FaTwitter src={founder.twitter} role='button' alt='X(twitter) logo' target='_blank' rel='noreferrer noopener' className='twitter-icon'/>
                            </div>
                        </div>
                    </li>
                    )
                    : null}
                </ul>
            </div>
        </div>
    );
}