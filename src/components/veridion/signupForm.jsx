import './styles/signup-form-styles.css';

export default function SignupForm() {

    function handleClickSignup() {

    };

    return (
        <div className='form-wrapper'>
            <div className='form-container'>
                <h2 className='sub-title'>Sign up for beta testing</h2>
                <p>Join our exclusive beta testing program and help shape the future of CRM technology. Sign up now to get early access and provide valuable feedback. We're excited to hear from you!</p>
                <form className="form-area">
                    <ul className="personal-details">
                        <li key='form-section-1' className='form-section-1'>
                            <label>First Name *</label>
                            <input className='first-name form-input' type='text' name='first name' placeholder='First Name'required/>
                        </li>
                        <li key='form-section-2' className='form-section-2'>
                            <label>Last Name *</label>
                            <input className='last-name form-input' type='text' name='last name' placeholder='Last Name' required/>
                        </li>
                        <li key='form-section-3' className='form-section-3'>
                            <label>Work email *</label>
                            <input className='email form-input' type='email' name='email' placeholder='example@example.com' required/>
                        </li>
                    </ul>
                    <div key='form-section-4' className='form-section-4'>
                        <label>Tell us briefly about your use case *</label>
                        <textarea className='details form-input' id='' type='email' name='details' placeholder='Enter text here' required></textarea>
                    </div>
                    <button className='submit-btn' type='subtmit' onClick={handleClickSignup}>Sign up</button>
                </form>
            </div>
            <div className='form-disclaimer'>
                <p>                    
                    * Our CRM platform delivers seamless integration with over 50 popular business tools, ensuring a smooth transition for teams without disrupting workflows. Unlike traditional CRM solutions that require extensive customization and manual data entry, our platform automates routine tasks and syncs data in real time across systems. For optimal performance, we recommend regular updates to your CRM configuration to ensure compatibility with the latest software integrations. Actual implementation times may vary based on factors such as the complexity of your existing infrastructure, user requirements, and system scale.
                </p>
            </div>
        </div>
    );
}