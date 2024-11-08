// import React from 'react';
import React, { useState } from "react";
import styled from "styled-components";
import SocialSidebar from "./SocialSidebar";
import EmailSidebar from "./EmailSidebar";

const HeroWrapper = styled.section`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 0 2rem 0 40rem;
	background-color: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};

	@media (max-width: 1024px) {
		padding-left: 20rem; /* Adjust left padding for smaller screens */
	}

	@media (max-width: 768px) {
		align-items: center;
		text-align: center;
		padding: 0 1.5rem; /* Further reduce padding for mobile */
	}
`;

const IntroText = styled.p`
	color: ${({ theme }) => theme.colors.primary};
	font-size: 1rem;
	margin-bottom: 1rem;

	@media (max-width: 768px) {
		font-size: 0.9rem; /* Slightly reduce font size for mobile */
	}
`;

const Name = styled.h1`
	font-size: 3.5rem;
	font-weight: bold;
	color: #ffffff;
	margin: 0;

	@media (max-width: 768px) {
		font-size: 2.5rem; /* Adjust heading size for mobile */
	}
`;

const Subtitle = styled.h2`
	font-size: 3rem;
	font-weight: 600;
	color: #a8b2d1;
	margin-top: 0.5rem;

	@media (max-width: 768px) {
		font-size: 2rem; /* Adjust subtitle size for mobile */
	}
`;

const Description = styled.p`
	font-size: 1.25rem;
	color: #8892b0;
	max-width: 540px;
	margin-top: 1.5rem;
	line-height: 1.5;

	@media (max-width: 768px) {
		font-size: 1rem; /* Reduce description font size for mobile */
		max-width: 100%; /* Expand width to fit smaller screens */
	}
`;

// const Button = styled.a`
//   display: inline-block;
//   padding: 0.75rem 1.5rem;
//   border: 1px solid ${({ theme }) => theme.colors.primary};
//   border-radius: 5px;
//   color: ${({ theme }) => theme.colors.primary};
//   font-weight: bold;
//   margin-top: 2rem;
//   text-decoration: none;
//   transition: all 0.3s ease;

//   &:hover {
//     background-color: ${({ theme }) => theme.colors.primary};
//     color: ${({ theme }) => theme.colors.background};
//   }

//   @media (max-width: 768px) {
//     padding: 0.5rem 1.25rem; /* Adjust button padding for mobile */
//   }
// `;
const ResumeButton = styled.a`
	padding: 0.7rem 2rem;
	margin-top: 2rem;
	border: 1px solid ${({ theme }) => theme.colors.primary};
	border-radius: 5px;
	color: ${({ theme }) => theme.colors.primary};
	font-weight: bold;
	transition: background-color 0.3s ease, color 0.3s ease;
	text-decoration: none;

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.text};
		transform: scale(1.1);
	}
`;
const Hero = () => {
	const [isMobileNavOpen, setMobileNavOpen] = useState(false);
	return (
		<>
			<SocialSidebar />
			<EmailSidebar />
			<HeroWrapper>
				<IntroText>Hi, my name is</IntroText>
				<Name>Haileleul F.Mezgebe</Name>
				<Subtitle>Electrical Engineer & Software Developer.</Subtitle>
				<Description>
					Electrical & Computer Engineering student eager to explore
					machine learning, AI, and VLSI. Skilled in full-stack and mobile
					development, I'm passionate about creating impactful tech
					solutions and advancing my knowledge in emerging technologies.
				</Description>
				<ResumeButton href="/resume.pdf" target="_blank">
					Resume
				</ResumeButton>
				{/* <Button href="#contact">Check out my course!</Button> */}
			</HeroWrapper>
		</>
	);
};

export default Hero;
