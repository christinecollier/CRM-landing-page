import NavbarMenuItem from './navbar-menu-item';
import '../styles/navbar-styles.css';

export default function NavbarMenuList({ showMenuList, list = [], secondary = false, child = false}) {

    return (
        <ul className={secondary ? 'navbar-menu-list secondary-menu-list': `navbar-menu-list primary-menu-list ${showMenuList ? 'visible' : 'hidden'}`} > 
            {list && list.length ? 
            list.map((listItem) => {
                return <NavbarMenuItem child={child} item={listItem} key={`navbarMenuItem-${listItem.label}`}/>
            })
            : null}
        </ul>
    );
}