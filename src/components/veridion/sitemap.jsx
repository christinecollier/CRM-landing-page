import data from './sitemapData.js';
import './styles/sitemap-styles.css';

export default function SiteMap() {
    return (
        <div className='sitemap-container'>
            {data && data.length > 0 ?
                data.map(obj => 
                    <div className='sitemap-section' key={`sitemap-${obj.label}`}>
                        <span>{obj.label}</span>
                        <ul>
                            {obj.children && obj.children.length > 0 ?
                                obj.children.map((child) => 
                                    <li key={`li-${child.label}`}>{child.label}</li>
                                )
                            : null}
                        </ul>
                    </div>
                )
                : null}
        </div>
    );
}