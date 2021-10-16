import React from "react";
import { Link } from 'react-router-dom'
import { NavbarSection , Logo , LogoText , UlList , ListItem , Anchor  } from './style.js'





const Navbar = () => {
    return (
        <NavbarSection>
            
        <div className="container">
            
            <Logo>
                <LogoText className="logo-text">Portfolio</LogoText>
            </Logo>
            
         
            
            <UlList>
                <ListItem><Anchor href="/">Home</Anchor></ListItem>
                <ListItem><Anchor href="#">Work</Anchor></ListItem>
                <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
                <ListItem><Anchor href="#">Resume</Anchor></ListItem>
                <ListItem><Anchor href="#">About</Anchor></ListItem>
                <ListItem><Anchor href="/contact">Contact</Anchor></ListItem>
            </UlList>
            
        </div>
        
    </NavbarSection>
    )
}
export default Navbar;