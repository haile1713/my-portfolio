import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const WorkWrapper = styled.section`
  padding: 4rem 2rem;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
  display: flex;
  align-items: center;

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
`;

const ProjectGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 900px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  background-color: #112240;
  border-radius: 8px;
  overflow: hidden;
  padding: 2rem;
  gap: 2rem;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ccd6f6;
  gap: 1rem;
  max-width: 400px;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

const FeaturedLabel = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: #8892b0;
  background-color: rgba(2, 12, 27, 0.9);
  padding: 1rem;
  border-radius: 5px;
  margin-top: 1rem;
`;

const ProjectTags = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: center;
`;

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.background};
  }
`;

const Work = () => {
  const projects = [
    {
      title: "Halcyon Theme",
      description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.",
      tags: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
      link: "https://example.com",
      github: "https://github.com",
      image: "path_to_image1", // Replace with actual image path
    },
    {
      title: "Spotify Profile",
      description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, and detailed audio information.",
      tags: ["React", "Styled Components", "Express", "Spotify API", "Heroku"],
      link: "https://example.com",
      github: "https://github.com",
      image: "path_to_image2", // Replace with actual image path
    },
  ];

  return (
    <WorkWrapper id="work">
      <Title>Some Things I’ve Built</Title>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} reverse={index % 2 !== 0}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectContent>
              <FeaturedLabel>Featured Project</FeaturedLabel>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTags>
                {project.tags.map((tag, idx) => (
                  <span key={idx}>{tag}</span>
                ))}
              </ProjectTags>
              <IconsWrapper>
                <ProjectLink href={project.github} target="_blank" aria-label="GitHub Link">
                  <FaGithub />
                </ProjectLink>
                <ProjectLink href={project.link} target="_blank" aria-label="External Link">
                  <FaExternalLinkAlt />
                </ProjectLink>
              </IconsWrapper>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </WorkWrapper>
  );
};

export default Work;
