import React from 'react';
import styled from 'styled-components';

const Sidebar = styled.div`
  position: fixed;
  bottom: 0;
  right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    right: 1rem; /* Adjust the right margin on smaller screens */
  }

  @media (max-width: 480px) {
    display: none; /* Hide the sidebar on very small screens */
  }
`;

const EmailLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;
  writing-mode: vertical-rl;
  text-decoration: none;
  margin-bottom: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #E8CB78;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 0.8rem; /* Adjust font size on smaller screens */
  }
`;

const Divider = styled.div`
  height: 100px;
  width: 1px;
  background-color: #E8CB78;

  @media (max-width: 480px) {
    display: none; /* Hide the divider on very small screens */
  }
`;

const EmailSidebar = () => {
  return (
    <Sidebar>
      <EmailLink href="mailto:your.email@example.com" target="_blank">Haileleulfiseha@gmail.com</EmailLink>
      <Divider />
    </Sidebar>
  );
};

export default EmailSidebar;
