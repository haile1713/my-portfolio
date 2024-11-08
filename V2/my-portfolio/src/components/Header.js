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
	position: fixed;
	width: 100%;
	top: 0;
	z-index: 10;

	@media (max-width: 768px) {
		padding: 1rem;
	}
`;

const Logo = styled.img`
	height: 75px;
	width: auto;
	transition: transform 0.3s ease;

	&:hover {
		transform: scale(1.1);
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

		&:hover {
			color: ${({ theme }) => theme.colors.primary};
			cursor: pointer;
		}

		span {
			color: ${({ theme }) => theme.colors.primary};
			font-weight: bold;
			font-size: 0.8rem;
		}
	}

	@media (max-width: 768px) {
		display: none; /* Hide on mobile */
	}
`;

const ResumeButton = styled.a`
	padding: 0.5rem 1rem;
	border: 1px solid ${({ theme }) => theme.colors.primary};
	border-radius: 5px;
	color: ${({ theme }) => theme.colors.primary};
	font-weight: bold;
	transition: background-color 0.3s ease, color 0.3s ease;
	text-decoration: none;

	&:hover {
		background-color: ${({ theme }) => theme.colors.background};
		color: ${({ theme }) => theme.colors.primary};
	}
`;

const HamburgerMenu = styled.div`
	display: none;
	cursor: pointer;

	@media (max-width: 768px) {
		display: block;
		font-size: 1.5rem;
		color: ${({ theme }) => theme.colors.text};
	}
`;

const MobileNavLinks = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: fixed;
	top: 60px;
	right: 0;
	background-color: rgba(10, 25, 47, 0.95);
	width: 100%;
	height: calc(100% - 60px);
	z-index: 9;
	transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
	transition: transform 0.3s ease-in-out;

	a {
		color: ${({ theme }) => theme.colors.text};
		font-size: 1.5rem;
		margin: 1.5rem 0;
		text-transform: uppercase;
		font-weight: 600;

		&:hover {
			color: ${({ theme }) => theme.colors.primary};
		}
	}
`;

const Header = () => {
	const [isMobileNavOpen, setMobileNavOpen] = useState(false);

	return (
		<HeaderWrapper>
			<Logo src={logo} alt="Logo" />
			<NavLinks>
				<Link to="about" smooth={true} offset={-100}>
					<span>01.</span> About
				</Link>
				<Link to="experience" smooth={true} offset={-100}>
					<span>02.</span> Experience
				</Link>
				<Link to="work" smooth={true} offset={-100}>
					<span>03.</span> Work
				</Link>
				<Link to="contact" smooth={true} offset={-100}>
					<span>04.</span> Contact
				</Link>
				{/* <ResumeButton href="/resume.pdf" target="_blank">
					Resume
				</ResumeButton> */}
			</NavLinks>

			<HamburgerMenu onClick={() => setMobileNavOpen(!isMobileNavOpen)}>
				☰
			</HamburgerMenu>

			<MobileNavLinks open={isMobileNavOpen}>
				<Link
					to="about"
					smooth={true}
					offset={-100}
					onClick={() => setMobileNavOpen(false)}
				>
					About
				</Link>
				<Link
					to="experience"
					smooth={true}
					offset={-100}
					onClick={() => setMobileNavOpen(false)}
				>
					Experience
				</Link>
				<Link
					to="work"
					smooth={true}
					offset={-100}
					onClick={() => setMobileNavOpen(false)}
				>
					Work
				</Link>
				<Link
					to="contact"
					smooth={true}
					offset={-100}
					onClick={() => setMobileNavOpen(false)}
				>
					Contact
				</Link>
				{/* <ResumeButton
					href="/resume.pdf"
					target="_blank"
					onClick={() => setMobileNavOpen(false)}
				>
					Resume
				</ResumeButton> */}
			</MobileNavLinks>
		</HeaderWrapper>
	);
};

export default Header;
