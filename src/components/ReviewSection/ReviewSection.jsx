import "./style.css";
import { ratingStarsFill, profilePicture } from "../../assets";

const ReviewSection = () => {
	return (
		<section className="review-section">
			<h3>What Our Learners Say</h3>
			<div className="review-comments">
				<img src={profilePicture} />
				<h5>Dandy Summers</h5>
				<img src={ratingStarsFill} />
				<p>
					I'm impressed by the quality of courses, excelent instructors and the
					support from LearnXpert's team. Highly recommended!
				</p>
			</div>
			<div className="review-paging">
				<div className="review-paging-btn0"></div>
				<div className="review-paging-btn1"></div>
				<div className="review-paging-btn0"></div>
			</div>
		</section>
	);
};

export default ReviewSection;
