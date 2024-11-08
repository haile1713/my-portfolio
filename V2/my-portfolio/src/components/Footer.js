// Footer.js
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1.5rem 0;
	font-size: 0.85rem;
	color: #a8b2d1;
	text-align: center;

	.credits {
		margin-top: 0.5rem;
		font-size: 0.75rem;
		color: #8892b0;

		a {
			color: inherit;
			text-decoration: none;
			&:hover {
				color: #64ffda; /* Change to your preferred hover color */
			}
		}
	}

	.icons {
		display: flex;
		gap: 0.5rem;
		margin-top: 0.5rem;

		a {
			display: flex;
			align-items: center;
			gap: 0.2rem;
			color: inherit;
			text-decoration: none;

			&:hover {
				color: #64ffda; /* Change to your preferred hover color */
			}
		}
	}

	@media (max-width: 768px) {
		padding: 1rem 0;
		font-size: 0.8rem;

		.credits {
			font-size: 0.7rem;
		}

		.icons {
			flex-direction: column;
			align-items: center;
			gap: 0.3rem;
		}
	}

	@media (max-width: 480px) {
		padding: 0.5rem 0;
		font-size: 0.75rem;

		.credits {
			font-size: 0.65rem;
		}

		.icons {
			gap: 0.25rem;
		}
	}
`;

const Footer = () => {
	return (
		<FooterContainer>
			<div className="credits">
				Inspired by{" "}
				<a
					href="https://brittanychiang.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Brittany Chiang
				</a>{" "}
				and built by{" "}
				<a href="#" target="_blank" rel="noopener noreferrer">
					{" "}
					Haileleul
				</a>
			</div>
			{/* <div className="icons">
        <a href="https://github.com/brittanychiang" target="_blank" rel="noopener noreferrer">
          ⭐ 7,569
        </a>
        <a href="https://github.com/brittanychiang" target="_blank" rel="noopener noreferrer">
          🍴 3,756
        </a>
      </div> */}
		</FooterContainer>
	);
};

export default Footer;
