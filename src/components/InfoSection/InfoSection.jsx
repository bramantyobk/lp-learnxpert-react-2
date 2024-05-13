import "./style.css";
import { infoImage } from "../../assets";

const InfoSection = ({ infoCards }) => {
	return (
		<section className="info-section">
			<div className="info-image-container">
				<img src={infoImage} className="info-image" />
			</div>
			<div className="info-description">
				<div className="info-title">
					<h3>We take the work off your hands.</h3>
					<p>
						Embrace life's vastness, venture forth, and discover the wonders
						waiting beyond. The world beckons; seize its grand offerings now!
					</p>
				</div>
				<div className="info-cards">
					{infoCards.map((card, key) => (
						<div
							className={card.statusPrimary ? "info-card-primary" : "info-card"}
							key={key}
						>
							<div>
								<img src={card.image} />
							</div>
							<div className="info-card-description">
								<h4>{card.title}</h4>
								<p>{card.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default InfoSection;
