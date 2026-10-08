import React, { useState } from "react";
import styled from "styled-components";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const SectionTitle = styled.h3`
font-size: 1.5rem;
color: ${({ theme }) => theme.colors.primary};
margin-bottom: 2rem;
text-align: center;

@media (max-width: 768px) {
font-size: clamp(1.25rem, 5vw, 1.5rem);
margin-bottom: 1.5rem;
}
`;

const ProjectsWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
padding: 2rem 1rem;

@media (max-width: 768px) {
padding: 1rem 1.5rem;
}
`;

const ProjectsContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: 20px;
max-width: 1200px;
width: 100%;

@media (max-width: 768px) {
grid-template-columns: 1fr;
gap: 16px;
}
`;

const ProjectCard = styled.div`
background-color: #112240;
padding: 1.75rem;
border-radius: 8px;
color: #ccd6f6;
transition: 
transform 0.3s ease,
box-shadow 0.3s ease,
border 0.3s ease;
display: flex;
flex-direction: column;
justify-content: space-between;
min-height: 280px;
box-shadow: 0px 10px 30px -15px rgba(2, 12, 27, 0.7);
border: 2px solid transparent;

&:hover {
transform: translateY(-5px);
border: 2px solid ${({ theme }) => theme.colors.primary};
box-shadow: 0 0 15px rgba(232, 203, 120, 0.2);
}

h4 {
margin: 0.5rem 0 1rem 0;
font-size: 1.25rem;
color: ${({ theme }) => theme.colors.primary};
transition: color 0.3s ease;

a {
color: inherit;
text-decoration: none;

&:hover {
color: ${({ theme }) => theme.colors.text};
}
}
}

.tags {
font-size: 0.85rem;
color: #8892b0;
margin-top: auto;
line-height: 1.5;
}

.icons {
display: flex;
justify-content: flex-end;
align-items: center;
gap: 0.75rem;
margin-bottom: 0.5rem;

.linkIcon,
.githubIcon {
color: ${({ theme }) => theme.colors.primary};
font-size: 1.1rem;
cursor: pointer;
transition: 
color 0.3s ease,
transform 0.2s ease;

&:hover {
color: ${({ theme }) => theme.colors.text};
transform: translateY(-2px);
}
}
}

@media (max-width: 768px) {
padding: 1.5rem;
min-height: 260px;

h4 {
font-size: 1.15rem;
}

.tags {
font-size: 0.8rem;
}
}
`;

const ToggleButton = styled.button`
display: block;
background-color: transparent;
color: ${({ theme }) => theme.colors.primary};
padding: 12px 28px;
margin: 3rem auto 0;
border: 1px solid ${({ theme }) => theme.colors.primary};
border-radius: 4px;
cursor: pointer;
font-weight: bold;
font-size: 0.95rem;
transition: 
background-color 0.3s ease,
color 0.3s ease,
transform 0.2s ease;

&:hover {
background-color: ${({ theme }) => theme.colors.primary};
color: ${({ theme }) => theme.colors.background};
transform: translateY(-2px);
}

@media (max-width: 768px) {
padding: 10px 24px;
margin-top: 2rem;
font-size: 0.9rem;
}
`;

const NoteworthyProjects = () => {
const [showAll, setShowAll] = useState(false);

const projects = [
{
title: "Expense Tracker",
tags: ["React", "Firebase", "Machine Learning", "Tailwind CSS"],
link: "https://expense-tracker-update-pi.vercel.app/",
github: "https://github.com/haile1713/Simple--Expense-tracker-app-with-ML-",
},
{
title: "Eco Tracker",
tags: ["React", "Next.js", "Drizzle", "Web3Auth", "Ethereum"],
github: "https://github.com/haile1713/EcoTrack",
},
{
title: "Match-3 Game",
tags: ["JavaScript", "HTML5", "CSS3", "Pixi.js"],
link: "https://match-3-nine.vercel.app/",
github: "https://github.com/haile1713/match-3",
},
{
title: "Snap2PDF",
tags: ["Python", "Tkinter", "PDF Generation"],
link: "https://drive.google.com/file/d/1MWf-J2pKDvBoK2Et7JSVg0zKKsUkfp27/view?usp=drive_link",
github: "https://github.com/haile1713/Snap2PDF",
},
{
title: "Nuclearn",
tags: ["Next.js", "React", "Tailwind CSS"],
github: "https://github.com/haile1713/nuclearn",
},
{
title: "Algorithm Visualized",
tags: ["Vite", "Tailwind CSS", "p5.js", "TypeScript"],
link: "https://algorithm-visualized.vercel.app/",
github: "https://github.com/haile1713/algorithm-visualized",
},
{
title: "Tetris Game",
tags: ["JavaScript", "Konva.js", "Game Development"],
github: "https://github.com/haile1713/Tetris--Konva",
},
{
title: "Bestie",
tags: ["Figma", "Flutter", "Firebase", "PostgreSQL"],
link: "https://www.figma.com/proto/ZXY8jEYI6c6zjA2cRyIiEj/Bestie?node-id=3-14&starting-point-node-id=3%3A14&t=50P36d0B2uQBod5p-1",
},
{
title: "Filega",
tags: ["Figma", "Flutter", "Express", "PostgreSQL"],
link: "https://www.figma.com/proto/oOxiDJHku9bZEiKT2fkL8F",
},
];

const displayedProjects = showAll ? projects : projects.slice(0, 3);

const toggleShow = () => {
setShowAll((prev) => !prev);
};

return (
<div>
<SectionTitle>Other Noteworthy Projects</SectionTitle>
<ProjectsWrapper>
<ProjectsContainer>
{displayedProjects.map((project, index) => (
<ProjectCard key={index}>
<div className="icons">
{project.link && (
<a
href={project.link}
target="_blank"
rel="noopener noreferrer"
aria-label="Live Link"
>
<FaExternalLinkAlt className="linkIcon" />
</a>
)}
{project.github && (
<a
href={project.github}
target="_blank"
rel="noopener noreferrer"
aria-label="GitHub Link"
>
<FaGithub className="githubIcon" />
</a>
)}
</div>
{project.link ? (
<a
href={project.link}
target="_blank"
rel="noopener noreferrer"
aria-label="Live Link"
>
<h4>{project.title}</h4>
</a>
) : (
<h4>{project.title}</h4>
)}
<div className="tags">{project.tags.join(" • ")}</div>
</ProjectCard>
))}
</ProjectsContainer>
</ProjectsWrapper>
<ToggleButton onClick={toggleShow}>
{showAll ? "Show Less" : "Show More"}
</ToggleButton>
</div>
);
};

export default NoteworthyProjects;
