import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 20px;
  text-align: center;
  color: #ccd6f6;

  @media (max-width: 768px) {
    padding: 60px 15px; /* Reduce padding on smaller screens */
  }
`;

const SectionNumber = styled.span`
  color: #64ffda;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Adjust font size for mobile */
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #ccd6f6;
  margin: 0;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem; /* Adjust title size for mobile */
  }
`;

const Description = styled.p`
  font-size: 1rem;
  max-width: 600px;
  color: #8892b0;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Adjust description font size */
    max-width: 100%; /* Expand to full width on smaller screens */
  }
`;

const ContactButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  border: 2px solid #64ffda;
  border-radius: 4px;
  color: #64ffda;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #64ffda;
    color: #0a192f;
  }

  @media (max-width: 768px) {
    padding: 10px 20px; /* Adjust padding for smaller screens */
    font-size: 0.9rem; /* Adjust button font size */
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <SectionNumber>04. What's Next?</SectionNumber>
      <Title>Get In Touch</Title>
      <Description>
        Although I’m not currently looking for any new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </Description>
      <ContactButton href="mailto:your-email@example.com">Say Hello</ContactButton>
    </ContactSection>
  );
};

export default Contact;
