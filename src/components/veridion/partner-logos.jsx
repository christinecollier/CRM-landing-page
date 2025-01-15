import data from './logosData';
import './styles/statistics-styles.css';

export default function partnerLogos() {
    return(
        <div className='logos-container'>
            {data && data.length > 0 ?
                data.map(item => 
                    <div className='logo-item' key={`logo-item-${item.id}`}>
                        <img className='logo-img' id={`logo-img-${item.id}`} src={item.src} alt={item.company} title={item.company}/>
                        <p className='logo-text' style={{fontFamily: `${item.fontFamily}`, fontWeight: `${item.fontWeight}`}}>{item.company}</p>
                    </div>
                )
            : null}
        </div>
    );
}