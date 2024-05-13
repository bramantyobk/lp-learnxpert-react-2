import "./style.css";

const FeatureSection = ({ featureCards }) => {
	return (
		<section className="feature-cards">
			<div className="feature-cards-wrapper">
				{featureCards.map((item, key) => (
					<div key={key} className="feature-card">
						<div>
							<img src={item.icon} />
						</div>
						<h4>{item.title}</h4>
						<p>{item.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default FeatureSection;
