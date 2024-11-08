import React, { useState } from "react";
import styled from "styled-components";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const SectionTitle = styled.h3`
	font-size: 1.5rem;
	color: ${({ theme }) => theme.colors.primary};
	margin-bottom: 1rem;
	text-align: center;
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
		border: 2px solid ${({ theme }) => theme.colors.primary};
		box-shadow: 0 0 15px ${({ theme }) => theme.colors.primary};
	}

	h4 {
		margin: 0;
		font-size: 1.2rem;
		color: ${({ theme }) => theme.colors.primary};
	}

	.tags {
		font-size: 0.8rem;
		color: ${({ theme }) => theme.colors.text};
		margin-top: auto;
	}

	.icons {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 1rem;

		.linkIcon,
		.githubIcon {
			color: ${({ theme }) => theme.colors.primary};
			font-size: 1rem;
			cursor: pointer;
			transition: color 0.3s ease;

			&:hover {
				color: ${({ theme }) => theme.colors.text};
			}
		}
	}

	@media (max-width: 768px) {
		width: 100%;
		height: auto;
		padding: 1rem;
	}
`;

const ToggleButton = styled.button`
	display: block;
	background-color: ${({ theme }) => theme.colors.primary};
	color: #ffffff;
	padding: 10px 20px;
	margin: 2rem auto 0;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-weight: bold;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: ${({ theme }) => theme.colors.text};
	}

	@media (max-width: 768px) {
		padding: 8px 16px;
	}
`;

const NoteworthyProjects = () => {
	const [showAll, setShowAll] = useState(false);

	const projects = [
		{
			title: "Paz Terrazzo",
			tags: ["Next.js", "React", "Tailwind CSS", "ShadCN"],
			link: "https://paz-sigma.vercel.app/",
			github: "https://github.com/haile1713/PAZ",
		},
		{
			title: "Nuclearn",
			tags: ["Next.js", "React", "Tailwind CSS"],
			link: "https://nuclearn.vercel.app/",
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
			link: "https://tetris-konva.vercel.app/",
			github: "https://github.com/haile1713/Tetris--Konva",
		},
		{
			title: "Bestie",
			tags: ["Figma", "Flutter", "Firebase", "PostgreSQL"],
			link: "https://www.figma.com/proto/ZXY8jEYI6c6zjA2cRyIiEj/Bestie?node-id=3-14&starting-point-node-id=3%3A14&t=50P36d0B2uQBod5p-1",
			// link: "https://www.figma.com/proto/ZXY8jEYI6c6zjA2cRyIiEj/Bestie?node-id=117-469&starting-point-node-id=117%3A469&t=50P36d0B2uQBod5p-1",
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
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Live Link"
								>
									<FaExternalLinkAlt className="linkIcon" />
								</a>
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
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Live Link"
							>
								<h4>{project.title}</h4>
							</a>
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
