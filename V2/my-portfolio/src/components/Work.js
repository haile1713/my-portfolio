import React from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import abe from "../assets/abe.png";
import catering from "../assets/maki.png";
import dcmme from "../assets/dcmme.png";
import paz from "../assets/paz.png";
import leulseged from "../assets/leulseged.png";

const WorkWrapper = styled.section`
padding: 4rem 2rem;
color: ${({ theme }) => theme.colors.text};
margin-top: 6rem;
display: flex;
flex-direction: column;
align-items: center;

@media (max-width: 768px) {
padding: 3rem 1.5rem;
margin-top: 3rem;
}
`;

const Title = styled.h2`
font-size: 1.5rem;
font-weight: bold;
color: ${({ theme }) => theme.colors.primary};
margin-bottom: 3rem;
display: flex;
align-items: center;
width: 100%;
max-width: 900px;

&::before {
content: "03.";
margin-right: 0.5rem;
color: ${({ theme }) => theme.colors.primary};
font-weight: bold;
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
margin-bottom: 2rem;
}
`;

const ProjectGrid = styled.div`
display: flex;
flex-direction: column;
gap: 4rem;
max-width: 900px;
width: 100%;

@media (max-width: 768px) {
gap: 3rem;
}
`;

const ProjectImage = styled.img`
width: 100%;
max-width: 400px;
height: 250px;
object-fit: cover;
border-radius: 8px;
filter: grayscale(100%) brightness(0.7) sepia(0.8) hue-rotate(45deg)
saturate(1.5);
transition: filter 0.3s ease;

&:hover {
filter: grayscale(0%) brightness(1) sepia(0.3) hue-rotate(20deg)
saturate(1.2);
}

@media (max-width: 768px) {
max-width: 100%;
height: 220px;
order: 1;
}
`;

const ProjectCard = styled.div`
display: flex;
flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
background-color: #112240;
border-radius: 8px;
overflow: hidden;
padding: 2rem;
gap: 2rem;
cursor: pointer;
align-items: center;
justify-content: center;
transition:
transform 0.3s ease,
box-shadow 0.3s ease,
border 0.3s ease;
border: 2px solid transparent;

&:hover {
transform: translateY(-5px);
border: 2px solid ${({ theme }) => theme.colors.primary};
box-shadow: 0 0 15px rgba(232, 203, 120, 0.2);
}

&:hover ${ProjectImage} {
filter: grayscale(0%) brightness(1) sepia(0) hue-rotate(0deg) saturate(1);
}

@media (max-width: 768px) {
flex-direction: column;
padding: 1.5rem;
gap: 1.5rem;
}
`;

const ProjectContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
color: #ccd6f6;
gap: 0.75rem;
max-width: 400px;

@media (max-width: 768px) {
max-width: 100%;
text-align: left;
order: 2;
}
`;

const FeaturedLabel = styled.span`
color: ${({ theme }) => theme.colors.primary};
font-size: 0.85rem;
font-weight: bold;
text-transform: uppercase;
letter-spacing: 0.5px;

@media (max-width: 768px) {
font-size: 0.8rem;
}
`;

const ProjectTitle = styled.h3`
font-size: 1.5rem;
color: ${({ theme }) => theme.colors.primary};
margin: 0;
line-height: 1.2;

@media (max-width: 768px) {
font-size: clamp(1.25rem, 5vw, 1.4rem);
}
`;

const ProjectDescription = styled.p`
font-size: 0.95rem;
color: #8892b0;
background-color: rgba(2, 12, 27, 0.9);
padding: 1.25rem;
border-radius: 5px;
margin-top: 0.5rem;
line-height: 1.6;

@media (max-width: 768px) {
font-size: 0.9rem;
padding: 1rem;
background-color: rgba(2, 12, 27, 0.5);
}
`;

const ProjectTags = styled.div`
font-size: 0.85rem;
color: #8892b0;
margin-top: 0.5rem;
display: flex;
gap: 0.75rem;
flex-wrap: wrap;

@media (max-width: 768px) {
font-size: 0.8rem;
gap: 0.5rem;
}
`;

const IconsWrapper = styled.div`
display: flex;
gap: 1rem;
margin-top: 0.75rem;

@media (max-width: 768px) {
margin-top: 1rem;
}
`;

const ProjectLink = styled.a`
color: ${({ theme }) => theme.colors.primary};
font-size: 1.3rem;
transition: 
color 0.3s ease,
transform 0.2s ease;

&:hover {
color: ${({ theme }) => theme.colors.text};
transform: translateY(-2px);
}

@media (max-width: 768px) {
font-size: 1.2rem;
}
`;

const Work = () => {
const projects = [
{
title: "DCMME",
description:
"A comprehensive microservice-based web application designed to automate and digitize key operational processes for DCMME Company, including auditing, document management, and risk analysis.",
tags: ["Next.js", "Microservices", "Frontend Development"],
image: dcmme,
},
{
title: "Maki's Gourmet Catering",
description:
"A responsive catering website showcasing services, menu items, and business information with an elegant, mobile-friendly design.",
tags: ["Typescript", "Responsive Design", "Modern UI"],
link: "https://maki-s-gourmet-catering.vercel.app/",
image: catering,
},
{
title: "Lulesegd Retta Artist Portfolio",
description:
"A professional artist portfolio website showcasing creative works, exhibitions, and artistic journey with modern responsive design.",
tags: ["React", "Next.js", "Responsive Design", "Portfolio"],
link: "https://lulesegedrettaartist.vercel.app/",
image: leulseged,
},
{
title: "Abe - Amharic Voice Assistant",
description:
"An AI-powered voice assistant for Android that understands and responds to Amharic voice commands with natural language processing.",
tags: ["Android", "AI", "Voice Recognition", "Amharic NLP"],
link: "https://haile-1713.itch.io/abe",
image: abe,
},
{
title: "Paz Terrazzo",
description:
"A professional terrazzo and tile company website showcasing premium flooring solutions with modern design and client portfolio.",
tags: ["Next.js", "React", "Tailwind CSS", "ShadCN"],
link: "https://pazengineering.com",
github: "https://github.com/haile1713/PAZ",
image: paz,
},
];

return (
<WorkWrapper id="work">
<Title>Some Things I've Built</Title>
<ProjectGrid>
{projects.map((project, index) => (
<ProjectCard key={index} reverse={index % 2 !== 0}>
<ProjectImage src={project.image} alt={project.title} />
<ProjectContent>
<FeaturedLabel>Featured Project</FeaturedLabel>
<ProjectTitle>{project.title}</ProjectTitle>
<ProjectDescription>
{project.description}
</ProjectDescription>
<ProjectTags>
{project.tags.map((tag, idx) => (
<span key={idx}>{tag}</span>
))}
</ProjectTags>
<IconsWrapper>
{project.github && (
<ProjectLink
href={project.github}
target="_blank"
aria-label="GitHub Link"
>
<FaGithub />
</ProjectLink>
)}
{project.link && (
<ProjectLink
href={project.link}
target="_blank"
aria-label="External Link"
>
<FaExternalLinkAlt />
</ProjectLink>
)}
</IconsWrapper>
</ProjectContent>
</ProjectCard>
))}
</ProjectGrid>
</WorkWrapper>
);
};

export default Work;
