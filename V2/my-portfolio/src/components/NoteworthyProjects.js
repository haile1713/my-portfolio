import React, { useState } from "react";
import styled from "styled-components";
import { FaFolder, FaExternalLinkAlt } from "react-icons/fa";

const SectionTitle = styled.h3`
	font-size: 1.5rem;
	color: ${({ theme }) => theme.colors.primary};
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
     border: 2px solid ${({ theme }) => theme.colors.primary}; /* LED border color */
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.primary}; /* Glow effect */
	}

	h4 {
		margin: 0;
		font-size: 1.2rem;
		color: ${({ theme }) => theme.colors.primary};
	}

	p {
		font-size: 0.9rem;
		margin: 1rem 0;
	}

	.tags {
		font-size: 0.8rem;
		color: ${({ theme }) => theme.colors.text};
		margin-top: auto;
	}

	.icons {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;

		.folderIcon {
			color: ${({ theme }) => theme.colors.text};
			font-size: 1.5rem;
		}

		.linkIcon {
			color: ${({ theme }) => theme.colors.primary};
			font-size: 1rem;
			cursor: pointer;

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
			link: "https://paz-sigma.vercel.app/", // Replace with actual link
			github: "https://github.com/haile1713/PAZ", // Replace with actual GitHub link if available
			image: "path_to_image_paz", // Replace with actual image path
		},
		{
			title: "Nuclearn",
			tags: ["Next.js", "React", "Tailwind CSS"],
			link: "https://nuclearn.vercel.app/", // Live demo link
			github: "https://github.com/haile1713/nuclearn", // GitHub link
			image: "path_to_image_nuclearn", // Replace with actual image path
		},
		{
			title: "Algorithm Visualized",
			tags: ["Vite", "Tailwind CSS", "p5.js", "TypeScript"],
			link: "https://algorithm-visualized.vercel.app/", // Live demo link
			github: "https://github.com/haile1713/algorithm-visualized", // Replace with actual GitHub link if available
			image: "path_to_image_algorithm_visualized", // Replace with actual image path
		},
		{
			title: "Tetris game",
			tags: ["Vite", "Tailwind CSS", "p5.js", "TypeScript"],
			link: "https://algorithm-visualized.vercel.app/", // Live demo link
			github: "https://github.com/user/algorithm-visualized", // Replace with actual GitHub link if available
			image: "path_to_image_algorithm_visualized", // Replace with actual image path
		},
		{
			title: "Bestie",
			tags: ["Vite", "Tailwind CSS", "p5.js", "TypeScript"],
			link: "https://algorithm-visualized.vercel.app/", // Live demo link
			github: "https://github.com/user/algorithm-visualized", // Replace with actual GitHub link if available
			image: "path_to_image_algorithm_visualized", // Replace with actual image path
		},
		{
			title: "Filega",
			tags: ["Vite", "Tailwind CSS", "p5.js", "TypeScript"],
			link: "https://algorithm-visualized.vercel.app/", // Live demo link
			github: "https://github.com/user/algorithm-visualized", // Replace with actual GitHub link if available
			image: "path_to_image_algorithm_visualized", // Replace with actual image path
		},
	];

	const displayedProjects = showAll ? projects : projects.slice(0, 3);

	const toggleShow = () => {
		setShowAll((prev) => !prev);
	};

	return (
		<div>
			<SectionTitle>Other Noteworthy Projects</SectionTitle>
			{/* <Subtitle href="#">view the archive</Subtitle> */}
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
