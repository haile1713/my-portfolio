import React, { useState } from "react";
import styled from "styled-components";
import { FaExternalLinkAlt } from "react-icons/fa"; // Import the external link icon

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
	color: ${({ theme, active }) =>
		active ? theme.colors.primary : theme.colors.text};
	font-weight: ${({ active }) => (active ? "bold" : "normal")};
	position: relative;
	transition: color 0.3s ease;
	border-left: ${({ active, theme }) =>
		active ? `2px solid ${theme.colors.primary}` : "2px solid transparent"};

	&:hover {
		color: ${({ theme }) => theme.colors.primary};
	}

	@media (max-width: 768px) {
		margin-bottom: 0;
		padding: 0.5rem;
		border-left: none;
		border-bottom: ${({ active, theme }) =>
			active
				? `2px solid ${theme.colors.primary}`
				: "2px solid transparent"};
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
	display: flex;
	align-items: center;
	gap: 0.5rem;

	&:hover {
		color: ${({ theme }) =>
			theme.colors.primaryHover}; /* Change color on hover */
		transform: scale(1.1); /* Scale slightly on hover */
		transition:
			transform 0.3s ease,
			color 0.3s ease;
	}

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;

const ExternalLinkIcon = styled(FaExternalLinkAlt)`
	font-size: 1rem;
	color: ${({ theme }) => theme.colors.primary};
	transition: transform 0.3s ease;

	${JobTitle}:hover & {
		transform: scale(1.1);
		color: ${({ theme }) =>
			theme.colors.primaryHover}; /* Change color on hover */
	}
`;

const JobCompanyLink = styled.a`
	color: ${({ theme }) => theme.colors.primary};
	text-decoration: none;
	display: flex;
	align-items: center;
	gap: 0.5rem;

	&:hover {
		color: ${({ theme }) =>
			theme.colors.primaryHover}; /* Change color on hover */
	}
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
	const [activeCompany, setActiveCompany] = useState("Qene Games");

	const companies = [
		{
			name: "Qene Games",
			title: "Game Developer",
			dates: "Jul 2024 – Sept 2024",
			link: "https://qenetech.com/",
			details: [
				"Designed and implemented game mechanics for interactive, high-quality games.",
				"Collaborated with a creative team to optimize game performance and user experience.",
				"Enhanced game responsiveness by optimizing state management and animations.",
				"Contributed to the platform integration with Telegram for expanded accessibility.",
			],
		},
		{
			name: "Balesuq",
			title: "Co-Founder & Software Developer",
			dates: "Aug 2023 – Present",
			link: "https://www.figma.com/proto/7pxNcgVY1ZVWSusbP2PtGQ/Balesuq?node-id=42-961&starting-point-node-id=42%3A961&t=vVga0ZBXzYAs6kz9-1",
			details: [
				"Currently developing a mobile shopping app using Flutter, with integration planned for PostgreSQL.",
				"Designing secure payment processing and user analytics features to ensure safety and data-driven insights.",
				"Focusing on an intuitive and engaging user interface to enhance customer experience.",
				"Collaborating on strategic planning and feature roadmap for future enhancements and growth.",
			],
		},
		{
			name: "Maki's Gourmet Catering",
			title: "Frontend Developer",
			dates: "Private Client",
			link: "https://maki-s-gourmet-catering.vercel.app/",

			details: [
				"Developed a responsive catering website for a private client using modern frontend technologies.",
				"Designed and implemented clean user interface sections to showcase services, menu items, and business information.",
				"Focused on mobile responsiveness, smooth navigation, and an elegant visual layout for better user experience.",
				"Deployed the completed website online, making it accessible for customers and business promotion.",
			],
		},

		{
			name: "Everstone",
			title: "Frontend Software Developer",
			dates: "Sept 2025 – Feb 2026",
			link: "https://www.everstonetechnologies.com/",
			details: [
				"Worked as a Frontend Software Developer, building and maintaining user-facing features for web applications.",
				"Translated design concepts into functional, responsive, and intuitive interfaces.",
				"Wrote clean, efficient, and maintainable frontend code using modern web development practices.",
				"Collaborated with designers, backend developers, and product managers to deliver high-quality features within project deadlines.",
			],
		},
		{
			name: "Exclusive Calls",
			title: "Business Development Representative",
			dates: "Sept 2025 – Dec 2025",
			link: "https://drive.google.com/file/d/12fSDKzv4DVRtqtlidhwc-k5csDVmIiKD/view?usp=sharing",
			details: [
				"Completed Business Development Representative training as an Independent Contractor.",
				"Developed skills in client communication, lead handling, sales outreach, and customer relationship management.",
				"Practiced professional communication strategies used in remote sales and business development workflows.",
				"Gained experience working in a structured remote training environment with performance-based expectations.",
			],
		},
		{
			name: "Paz Terrazzo",
			title: "Remote Software Development Engineer",
			dates: "Jul 2024 – Sept 2024",
			link: "https://pazengineering.com",
			details: [
				"Developed automation scripts to optimize data processing for large-scale operations.",
				"Implemented user interfaces to simplify data interaction for non-technical users.",
				"Conducted code reviews and performance optimizations for smoother application flow.",
			],
		},
		{
			name: "Youser",
			title: "Public Relations Specialist",
			dates: "March 2023 – Present",
			link: "https://m.youtube.com/@Youser-vh2ob/featured",
			details: [
				"Created and executed digital strategies to boost brand visibility and engagement.",
				"Curated content for social media to increase community interaction and outreach.",
				"Designed visuals and graphics to enhance the impact of social campaigns.",
				"Managed social media interactions, fostering a positive brand presence online.",
			],
		},
	];

	const activeJob = companies.find(
		(company) => company.name === activeCompany,
	);

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
						{activeJob.link ? (
							<JobCompanyLink
								href={activeJob.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								{activeJob.title} <ExternalLinkIcon />
							</JobCompanyLink>
						) : (
							<span>{activeJob.title}</span>
						)}
					</JobTitle>
					<JobDates>{activeJob.dates}</JobDates>
					<JobDescription>
						{activeJob.details.map((detail, index) => (
							<JobDescriptionItem key={index}>
								{detail}
							</JobDescriptionItem>
						))}
					</JobDescription>
				</JobDetails>
			</ExperienceContainer>
		</ExperienceWrapper>
	);
};

export default Experience;
