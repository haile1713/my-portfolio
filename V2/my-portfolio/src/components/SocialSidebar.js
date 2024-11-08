import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin, FaDribbble } from 'react-icons/fa';

const Sidebar = styled.div`
  position: fixed;
  bottom: 0;
  left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    left: 1rem; /* Adjust position for smaller screens */
  }

  @media (max-width: 480px) {
    display: none; /* Hide sidebar on very small screens */
  }
`;

const IconLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #53c1c6;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem; /* Slightly smaller icons for smaller screens */
  }
`;

const Divider = styled.div`
  height: 100px;
  width: 1px;
  background-color: #64ffda;

  @media (max-width: 480px) {
    display: none; /* Hide divider on very small screens */
  }
`;

const SocialSidebar = () => {
  return (
    <Sidebar>
      <IconLink href="#"><FaGithub /></IconLink>
      <IconLink href="#"><FaInstagram /></IconLink>
      <IconLink href="#"><FaTwitter /></IconLink>
      <IconLink href="#"><FaLinkedin /></IconLink>
      <IconLink href="#"><FaDribbble /></IconLink>
      <Divider />
    </Sidebar>
  );
};

export default SocialSidebar;
