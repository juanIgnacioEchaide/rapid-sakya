import { useState, useEffect } from 'react';
import Link from 'next/link';
import NavElements from '../../molecules/navElements';
import useNavabar from '../../../utils/useNavbar';

const NavBar = ({size}) => {   
    console.log(size);
    
    const { NavContainer, NavbarContainer, NavLinks, NavLogo, NavUser, NavMenu, NavBurger } = NavElements();
    const { isOpened, handleOpenMenu, closeMenuResponsive } = useNavabar();

    useEffect(() => {
        closeMenuResponsive();
    }, [size]);

    const links =[
                {title: "Tu pedido",ref:"pedido"},
                {title: "Nuestros productos",ref:"productos"},
                {title: "¿Quiénes somos?",ref:"nosotros"},
                ]

    const handleLogin = () => {
        return console.log('login');
    }

    return <NavContainer> 
        {size === size.MOBILE_SIZE && console.log("size movil")}
                <NavbarContainer>           
{/*                     <NavUser loginFunc={handleLogin}/>
                    <NavLogo/>
                    {size === size.DESKTOP_SIZE 
                    ?<NavLinks links={links} /> 
                    : <NavBurger openFunc={handleOpenMenu}/>}     */}                       
                    </NavbarContainer>             
{/*                     {<NavMenu links={links}/>} */}
            </NavContainer>   
}

export default NavBar;