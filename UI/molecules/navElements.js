import Link from 'next/link';
import { forwardRef } from 'react';

export default function NavElements(){

    const NavContainer = ({children}) => { 
        return (<div className={styles.container}>
                    {children}
                </div>); 
        };
    
    const NavbarContainer = ({children}) => {
    return (<div className={styles.navbar_container}>
            {children}
            </div>) 
    };

    const NavLinkItem = forwardRef(({onClick, href, title}, ref) => {
        return (
            <a href={href} onClick={onClick} ref={ref}>
                {title}
            </a>
        )});

    const NavLinks = ({links,ref}) => { 
        return (<div className={styles.links_list}>
                  {links.map( l => <Link key={l.title} href={"/" + l.ref}>
                                        <a className={styles.links_item}>{l.title}</a>
                                    </Link>)}
                </div>); 
        };

    const NavLogo = ({img}) => { 
        return (<img className={styles.logo} src={img}/>); 
        };

    const NavUser = ({img, loginFunc}) => { 
        return (<img  className={styles.login_button} src={img} onClick={loginFunc}/>); 
        };

    const NavBurger = ({openFunc}) => { 

        return (<div className={styles.burger} onClick={openFunc}>

                </div>); 
        };

    const NavMenu = ({isOpen, links}) => {
        return (
            <div className={styles.drop_menu_list}>
                {links.map( l => <Link key={l.title} href={"/" + l.ref} className={styles.drop_menu_item}>
                                        <a>{l.title}</a>
                                </Link>)}
            </div>
        )  
    }

        return { NavContainer, NavbarContainer, NavLinks, NavLogo, NavUser, NavBurger, NavMenu}

}