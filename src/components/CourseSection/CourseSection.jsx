import "./style.css";
import { ratingStars } from "../../assets";

const CourseSection = ({ courseCards }) => {
	return (
		<section className="course-section">
			<div className="course-container">
				<div className="course-title">
					<h2>Explore Featured Courses</h2>
					<p>
						<a href="#">View All</a>
					</p>
				</div>
				<div className="course-cards">
					{courseCards.map((card, key) => (
						<div className="course-card" key={key}>
							<div>
								<img src={card.image} />
							</div>
							<div className="course-info">
								<h4>{card.title}</h4>
								<p>{card.teacher}</p>
								<div>
									<img src={ratingStars} />
								</div>
								<p>{card.review}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CourseSection;
