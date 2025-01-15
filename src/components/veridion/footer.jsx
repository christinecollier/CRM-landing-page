import './styles/footer-styles.css';
import SiteMap from './sitemap';
import veridion_logo from './images/logos/veridion_logo.svg';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div className='footer-wrapper'>
                <div className='footer-container'>
                    <div className='logo-container'>
                        <img className='logo' src={veridion_logo} alt='veridion logo' title='Veridion'/>
                        <h2 className='sub-title'>Veridion</h2>
                    </div>
                    <SiteMap />
                    <span className='copyright'>© {year} Veridion</span>
                </div>
            </div>
        </footer>
    );
}