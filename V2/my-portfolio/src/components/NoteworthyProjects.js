import React, { useState } from 'react';
import styled from 'styled-components';
import { FaFolder, FaExternalLinkAlt } from 'react-icons/fa';

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  color: #64ffda;
  margin-bottom: 1rem;
  text-align: center;
`;

const Subtitle = styled.a`
  color: #64ffda;
  text-align: center;
  font-size: 0.9rem;
  display: block;
  margin-bottom: 2rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1200px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background-color: #112240;
  width: 250px;
  height: 250px;
  padding: 1.5rem;
  border-radius: 8px;
  color: #ccd6f6;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 10px 30px -15px rgba(2, 12, 27, 0.7);

  &:hover {
    transform: translateY(-5px);
  }

  h4 {
    margin: 0;
    font-size: 1.2rem;
    color: #64ffda;
  }

  p {
    font-size: 0.9rem;
    margin: 1rem 0;
  }

  .tags {
    font-size: 0.8rem;
    color: #a8b2d1;
    margin-top: auto;
  }

  .icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    .folderIcon {
      color: #64ffda;
      font-size: 1.5rem;
    }

    .linkIcon {
      color: #64ffda;
      font-size: 1rem;
      cursor: pointer;

      &:hover {
        color: #52d6c5;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 1rem;
  }
`;

const ShowMoreButton = styled.button`
  display: block;
  background-color: #64ffda;
  color: #0a192f;
  padding: 10px 20px;
  margin: 2rem auto 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #52d6c5;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;

const NoteworthyProjects = () => {
  const [showMore, setShowMore] = useState(false);

  const projects = [
    { title: 'Integrating Algolia Search', description: 'A WordPress multisite search plugin with Algolia.', tags: ['Algolia', 'WordPress', 'PHP'] },
    { title: 'Time to Have More Fun', description: 'A travel planning app built with Next.js.', tags: ['Next.js', 'Tailwind CSS', 'Firebase'] },
    { title: 'Building a Headless CMS', description: 'A headless CMS built with Node and Firebase.', tags: ['Node', 'Express', 'Firebase', 'Vue'] },
    { title: 'OctoProfile', description: 'A GitHub profile visualizer with stats.', tags: ['Next.js', 'Chart.js', 'GitHub API'] },
    { title: 'Google Keep Clone', description: 'A clone of Google Keep with Vue and Firebase.', tags: ['Vue', 'Firebase'] },
    { title: 'Apple Music Player Widget', description: 'Music player widget for Apple Music.', tags: ['MusicKit.js', 'JS', 'SCSS'] },
    { title: 'Project 7', description: 'Additional project description 1.', tags: ['React', 'Node.js'] },
    { title: 'Project 8', description: 'Additional project description 2.', tags: ['Python', 'Django'] },
    { title: 'Project 9', description: 'Additional project description 3.', tags: ['Angular', 'TypeScript'] },
  ];

  const displayedProjects = showMore ? projects : projects.slice(0, 6);

  return (
    <div>
      <SectionTitle>Other Noteworthy Projects</SectionTitle>
      <Subtitle href="#">view the archive</Subtitle>
      <ProjectsWrapper>
        <ProjectsContainer>
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index}>
              <div className="icons">
                <FaFolder className="folderIcon" />
                <FaExternalLinkAlt className="linkIcon" />
              </div>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="tags">{project.tags.join(' • ')}</div>
            </ProjectCard>
          ))}
        </ProjectsContainer>
      </ProjectsWrapper>
      <ShowMoreButton onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Show Less' : 'Show More'}
      </ShowMoreButton>
    </div>
  );
};

export default NoteworthyProjects;
