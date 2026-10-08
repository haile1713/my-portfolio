import React from "react";
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
padding-left: 20rem;
}

@media (max-width: 768px) {
align-items: flex-start;
text-align: left;
padding: 0 1.5rem;
justify-content: center;
min-height: calc(100vh - 80px);
}
`;

const IntroText = styled.p`
color: ${({ theme }) => theme.colors.primary};
font-size: 1rem;
margin-bottom: 1rem;
font-weight: 400;

@media (max-width: 768px) {
font-size: clamp(0.875rem, 4vw, 1rem);
margin-bottom: 1.5rem;
}
`;

const Name = styled.h1`
font-size: 3.5rem;
font-weight: bold;
color: #ffffff;
margin: 0;
line-height: 1.1;

@media (max-width: 768px) {
font-size: clamp(2rem, 8vw, 2.5rem);
margin-bottom: 0.5rem;
}

@media (max-width: 480px) {
font-size: clamp(1.75rem, 7vw, 2rem);
}
`;

const Subtitle = styled.h2`
font-size: 3rem;
font-weight: 600;
color: #a8b2d1;
margin-top: 0.5rem;
line-height: 1.1;

@media (max-width: 768px) {
font-size: clamp(1.5rem, 6vw, 2rem);
margin-top: 0.25rem;
margin-bottom: 1.5rem;
}

@media (max-width: 480px) {
font-size: clamp(1.25rem, 5vw, 1.75rem);
}
`;

const Description = styled.p`
font-size: 1.25rem;
color: #8892b0;
max-width: 540px;
margin-top: 1.5rem;
line-height: 1.6;

@media (max-width: 768px) {
font-size: clamp(0.9rem, 4vw, 1.1rem);
max-width: 100%;
margin-top: 1rem;
line-height: 1.7;
}
`;

const ResumeButton = styled.a`
padding: 0.7rem 2rem;
margin-top: 2rem;
border: 1px solid ${({ theme }) => theme.colors.primary};
border-radius: 5px;
color: ${({ theme }) => theme.colors.primary};
font-weight: bold;
transition:
background-color 0.3s ease,
color 0.3s ease,
transform 0.2s ease;
text-decoration: none;
display: inline-block;

&:hover {
background-color: ${({ theme }) => theme.colors.primary};
color: ${({ theme }) => theme.colors.text};
transform: scale(1.05);
}

@media (max-width: 768px) {
padding: 0.75rem 1.75rem;
margin-top: 2rem;
font-size: 0.95rem;
width: fit-content;
text-align: center;
}
`;

const Hero = () => {
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
machine learning, AI, and VLSI. Skilled in Front-end Development
and mobile development, I'm passionate about creating impactful
tech solutions and advancing my knowledge in emerging
technologies.
</Description>
<ResumeButton
href="https://drive.google.com/file/d/1pKtcsBEliW1shjpKMEJUgdxMhNIb4dDs/view?usp=sharing"
target="_blank"
rel="noopener noreferrer"
>
Resume
</ResumeButton>
</HeroWrapper>
</>
);
};

export default Hero;
