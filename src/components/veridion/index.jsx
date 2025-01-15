import Navbar from './navigation bar/navbar';
import Hero from './hero';
import Introduction from './introduction';
import ProductBenefits from './product-benefits';
import Statistics from './statistics';
import Founders from './founders';
import FaqsAccordion from './faqs-section';
import SignupForm from './signupForm';
import Footer from './footer';
import Credits from './credits';
// import SlotTextEffect from './slot-number-effect';
import './styles/top-section-wrapper-styles.css';
import './styles/hero-styles.css';

export default function Veridion() {
    return (
        <div className='top-section-wrapper'>
            <Navbar />
            <Hero />
            <Introduction />
            <ProductBenefits />
            <Statistics />
            <Founders />
            <FaqsAccordion />
            <SignupForm />
            <Footer />
            <Credits />
            {/* <SlotTextEffect number={9}/> */}
        </div>
    );
}