import React, { useState } from 'react';
import styled from 'styled-components';

const ExperienceWrapper = styled.section`
  padding: 4rem 8rem 4rem 30rem;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 1024px) {
    padding: 4rem 4rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;

  &::before {
    content: "02.";
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
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ExperienceContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CompanyList = styled.ul`
  flex: 1;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    display: flex;
    overflow-x: auto;
    padding-bottom: 1rem;
  }
`;

const CompanyItem = styled.li`
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  color: ${({ theme, active }) => (active ? theme.colors.primary : theme.colors.text)};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  position: relative;
  transition: color 0.3s ease;
  border-left: ${({ active, theme }) => (active ? `2px solid ${theme.colors.primary}` : '2px solid transparent')};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    margin-bottom: 0;
    padding: 0.5rem;
    border-left: none;
    border-bottom: ${({ active, theme }) => (active ? `2px solid ${theme.colors.primary}` : '2px solid transparent')};
  }
`;

const JobDetails = styled.div`
  flex: 3;
  padding-left: 2rem;

  @media (max-width: 768px) {
    padding-left: 0;
    margin-top: 1rem;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const JobCompany = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const JobDates = styled.p`
  font-size: 0.9rem;
  color: #8892b0;
  margin: 0.5rem 0 1.5rem 0;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const JobDescription = styled.ul`
  list-style: none;
  padding: 0;
`;

const JobDescriptionItem = styled.li`
  display: flex;
  align-items: flex-start;
  font-size: 1rem;
  color: #8892b0;
  margin-bottom: 1rem;

  &::before {
    content: "▸";
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Experience = () => {
  const [activeCompany, setActiveCompany] = useState('Upstatement');

  const companies = [
    { name: 'Upstatement', title: 'Lead Engineer', dates: 'May 2018 - Present' },
    { name: 'Apple', title: 'Software Engineer', dates: 'Jan 2016 - Apr 2018' },
    { name: 'Scout Studio', title: 'Front-End Developer', dates: 'Sep 2014 - Dec 2015' },
    { name: 'Starry', title: 'UI Designer', dates: 'Jun 2013 - Aug 2014' },
    { name: 'MullenLowe', title: 'Intern', dates: 'Jan 2012 - May 2013' },
  ];

  const activeJob = companies.find((company) => company.name === activeCompany);

  return (
    <ExperienceWrapper id="experience">
      <Title>Where I've Worked</Title>
      <ExperienceContainer>
        <CompanyList>
          {companies.map((company) => (
            <CompanyItem
              key={company.name}
              active={company.name === activeCompany}
              onClick={() => setActiveCompany(company.name)}
            >
              {company.name}
            </CompanyItem>
          ))}
        </CompanyList>
        <JobDetails>
          <JobTitle>
            {activeJob.title} <JobCompany>@ {activeCompany}</JobCompany>
          </JobTitle>
          <JobDates>{activeJob.dates}</JobDates>
          <JobDescription>
            <JobDescriptionItem>
              Deliver high-quality, robust production code for a diverse array of projects.
            </JobDescriptionItem>
            <JobDescriptionItem>
              Work alongside creative directors to lead the research, development, and architecture.
            </JobDescriptionItem>
            <JobDescriptionItem>
              Collaborate with designers, project managers, and other engineers.
            </JobDescriptionItem>
            <JobDescriptionItem>
              Provide leadership within the engineering department.
            </JobDescriptionItem>
          </JobDescription>
        </JobDetails>
      </ExperienceContainer>
    </ExperienceWrapper>
  );
};

export default Experience;
