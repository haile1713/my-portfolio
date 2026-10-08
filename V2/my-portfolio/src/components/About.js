import React from "react";
import styled from "styled-components";
import profileImage from "../assets/me.jpg";

const AboutWrapper = styled.section`
min-height: 100vh;
display: flex;
align-items: center;
padding: 4rem 8rem 4rem 30rem;
background-color: ${({ theme }) => theme.colors.background};
color: ${({ theme }) => theme.colors.text};

@media (max-width: 1024px) {
padding: 4rem 4rem;
}

@media (max-width: 768px) {
flex-direction: column;
padding: 3rem 1.5rem;
text-align: left;
min-height: auto;
}
`;

const Content = styled.div`
max-width: 600px;

@media (max-width: 768px) {
max-width: 100%;
margin-bottom: 2.5rem;
}
`;

const Title = styled.h2`
display: flex;
align-items: center;
font-size: 1.5rem;
font-weight: bold;
color: ${({ theme }) => theme.colors.primary};

&::before {
content: "01.";
margin-right: 0.5rem;
color: ${({ theme }) => theme.colors.primary};
}

&::after {
content: "";
flex-grow: 1;
height: 1px;
margin-left: 1rem;
background-color: ${({ theme }) => theme.colors.text};
opacity: 0.4;
}

@media (max-width: 768px) {
font-size: clamp(1.25rem, 5vw, 1.5rem);
margin-bottom: 1.5rem;

&::after {
margin-left: 0.75rem;
}
}
`;

const Description = styled.p`
font-size: 1rem;
line-height: 1.7;
color: #8892b0;
margin-top: 1.5rem;

@media (max-width: 768px) {
font-size: clamp(0.9rem, 3.5vw, 1rem);
line-height: 1.8;
margin-top: 1rem;
}
`;

const SkillsList = styled.ul`
display: grid;
grid-template-columns: repeat(2, minmax(140px, 200px));
gap: 0.75rem;
list-style-type: none;
padding: 0;
margin-top: 2rem;
color: ${({ theme }) => theme.colors.primary};

@media (max-width: 768px) {
grid-template-columns: repeat(2, 1fr);
gap: 0.5rem;
margin-top: 1.5rem;
}
`;

const SkillItem = styled.li`
display: flex;
align-items: center;
font-size: 0.95rem;

&::before {
content: "▸";
margin-right: 0.75rem;
color: ${({ theme }) => theme.colors.primary};
font-size: 1.1rem;
}

@media (max-width: 768px) {
font-size: clamp(0.85rem, 3vw, 0.95rem);

&::before {
margin-right: 0.5rem;
}
}
`;

const ProfileImageWrapper = styled.div`
margin-left: 4rem;
border: 2px solid ${({ theme }) => theme.colors.primary};
border-radius: 5px;
overflow: hidden;
width: 100%;
max-width: 280px;
aspect-ratio: 1;
transition:
transform 0.3s ease,
border-color 0.3s ease,
box-shadow 0.3s ease;

&:hover {
transform: scale(1.05);
box-shadow: 0 8px 20px rgba(232, 203, 120, 0.3);
border-color: ${({ theme }) => theme.colors.primary};
}

@media (max-width: 768px) {
margin: 0 auto;
max-width: 200px;
}
`;

const ProfileImage = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
filter: grayscale(100%) brightness(0.7) sepia(0.8) hue-rotate(45deg)
saturate(1.5);
transition: filter 0.3s ease;

${ProfileImageWrapper}:hover & {
filter: grayscale(0%) brightness(1) sepia(0.3) hue-rotate(20deg)
saturate(1.2);
}
`;

const About = () => {
return (
<AboutWrapper id="about">
<Content>
<Title>About Me</Title>
<Description>
Hello! My name is Haileleul Fiseha, and I discovered my passion
for technology and problem-solving when I first embarked on my
adventure in Electrical & Computer Engineering. Since then, I've
dived into mobile applications, Front-end development, and
AI-driven solutions, building practical experience through a
variety of innovative projects.
<br />
<br />
Today, I am focused on creating products that have an impact,
have co-founded a mobile shopping app, and have contributed to
social innovation initiatives . Two of my most recent projects
are an expense tracker that integrates machine learning and an
intelligent waste management software.
<br />
<br />
Here are a few technologies I've been working with recently:
</Description>
<SkillsList>
<SkillItem>JavaScript (ES6+)</SkillItem>
<SkillItem>React</SkillItem>
<SkillItem>TypeScript</SkillItem>
<SkillItem>TensorFlow & Gemini AI</SkillItem>
<SkillItem>Flutter</SkillItem>
<SkillItem>Python & Dart</SkillItem>
<SkillItem>Pixi.js</SkillItem>
<SkillItem>Next.js</SkillItem>
</SkillsList>
</Content>
<ProfileImageWrapper>
<ProfileImage src={profileImage} alt="Your Profile" />
</ProfileImageWrapper>
</AboutWrapper>
);
};

export default About;
