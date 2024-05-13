import "./style.css";
import { heroImage } from "../../assets";

const HeroSection = () => {
	return (
		<section className="hero-section">
			<div className="hero-info">
				<h1>
					Unlock Your Learning Potential with
					<span className="hero-txt-highlight"> LearnXpert</span>.
				</h1>
				<p className="hero-desc">
					Embrace life's vastness, venture forth, and discover the wonders
					waiting beyond. The world beckons; seize its grand offerings now!
				</p>
				<div className="hero-btns">
					<button className="hero-btn-primary">Join Class</button>
					<button className="hero-btn-secondary">Get Started</button>
				</div>
				<div className="hero-icons">
					<div className="hero-icon-desc">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="#000"
							className="bi bi-check-circle-fill"
							viewBox="0 0 16 16"
						>
							<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
						</svg>
						<h4>Enroll Class</h4>
					</div>
					<div className="hero-icon-desc">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="#000"
							className="bi bi-check-circle-fill"
							viewBox="0 0 16 16"
						>
							<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
						</svg>
						<h4>Find a Mentor</h4>
					</div>
				</div>
			</div>
			<div className="hero-img-wrapper">
				<img
					src={heroImage}
					alt="Picture of kid study with headphone and laptop"
					className="hero-img"
				/>
			</div>
		</section>
	);
};

export default HeroSection;
