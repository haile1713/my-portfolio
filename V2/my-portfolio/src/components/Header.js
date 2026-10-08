import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import logo from "../assets/myicon.png";

const HeaderWrapper = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
padding: 1rem 2rem;
background-color: rgba(10, 25, 47, 0.85);
backdrop-filter: blur(10px);
position: fixed;
width: 100%;
top: 0;
z-index: 10;

@media (max-width: 768px) {
padding: 1rem 1.5rem;
}
`;

const Logo = styled.img`
height: 75px;
width: auto;
transition: transform 0.3s ease;
cursor: pointer;

&:hover {
transform: scale(1.1);
}

@media (max-width: 768px) {
height: 60px;
}
`;

const NavLinks = styled.nav`
display: flex;
align-items: center;
gap: 2rem;

a {
color: ${({ theme }) => theme.colors.text};
font-size: 0.9rem;
text-transform: uppercase;
font-weight: 600;
display: flex;
align-items: center;
gap: 0.5rem;
cursor: pointer;
transition: color 0.3s ease;

&:hover {
color: ${({ theme }) => theme.colors.primary};
}

span {
color: ${({ theme }) => theme.colors.primary};
font-weight: bold;
font-size: 0.8rem;
}
}

@media (max-width: 768px) {
display: none;
}
`;

const HamburgerMenu = styled.div`
display: none;
cursor: pointer;
flex-direction: column;
gap: 4px;
z-index: 11;

span {
width: 25px;
height: 2px;
background-color: ${({ theme, open }) => 
open ? theme.colors.primary : theme.colors.text};
transition: all 0.3s ease;
transform-origin: center;

&:nth-child(1) {
transform: ${({ open }) => open ? 'rotate(45deg) translateY(7px)' : 'rotate(0)'};
}

&:nth-child(2) {
opacity: ${({ open }) => open ? '0' : '1'};
}

&:nth-child(3) {
transform: ${({ open }) => open ? 'rotate(-45deg) translateY(-7px)' : 'rotate(0)'};
}
}

@media (max-width: 768px) {
display: flex;
}
`;

const MobileNavLinks = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: fixed;
top: 0;
right: 0;
background-color: rgba(10, 25, 47, 0.98);
backdrop-filter: blur(10px);
width: 70%;
max-width: 400px;
height: 100vh;
z-index: 9;
transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
box-shadow: ${({ open }) => open ? '-5px 0 15px rgba(0, 0, 0, 0.3)' : 'none'};

a {
color: ${({ theme }) => theme.colors.text};
font-size: 1.25rem;
margin: 1.5rem 0;
text-transform: uppercase;
font-weight: 600;
cursor: pointer;
transition: color 0.3s ease;
display: flex;
align-items: center;
gap: 0.75rem;

&:hover {
color: ${({ theme }) => theme.colors.primary};
}

span {
color: ${({ theme }) => theme.colors.primary};
font-size: 1rem;
}
}
`;

const Overlay = styled.div`
display: ${({ open }) => open ? 'block' : 'none'};
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
background-color: rgba(0, 0, 0, 0.5);
z-index: 8;
backdrop-filter: blur(2px);
`;

const Header = () => {
const [isMobileNavOpen, setMobileNavOpen] = useState(false);

const closeMobileNav = () => setMobileNavOpen(false);

return (
<>
<HeaderWrapper>
<Logo src={logo} alt="Logo" />
<NavLinks>
<Link to="about" smooth={true} offset={-100} duration={500}>
<span>01.</span> About
</Link>
<Link to="experience" smooth={true} offset={-100} duration={500}>
<span>02.</span> Experience
</Link>
<Link to="work" smooth={true} offset={-100} duration={500}>
<span>03.</span> Work
</Link>
<Link to="contact" smooth={true} offset={-100} duration={500}>
<span>04.</span> Contact
</Link>
</NavLinks>

<HamburgerMenu 
open={isMobileNavOpen} 
onClick={() => setMobileNavOpen(!isMobileNavOpen)}
>
<span></span>
<span></span>
<span></span>
</HamburgerMenu>
</HeaderWrapper>

<Overlay open={isMobileNavOpen} onClick={closeMobileNav} />

<MobileNavLinks open={isMobileNavOpen}>
<Link
to="about"
smooth={true}
offset={-100}
duration={500}
onClick={closeMobileNav}
>
<span>01.</span> About
</Link>
<Link
to="experience"
smooth={true}
offset={-100}
duration={500}
onClick={closeMobileNav}
>
<span>02.</span> Experience
</Link>
<Link
to="work"
smooth={true}
offset={-100}
duration={500}
onClick={closeMobileNav}
>
<span>03.</span> Work
</Link>
<Link
to="contact"
smooth={true}
offset={-100}
duration={500}
onClick={closeMobileNav}
>
<span>04.</span> Contact
</Link>
</MobileNavLinks>
</>
);
};

export default Header;
