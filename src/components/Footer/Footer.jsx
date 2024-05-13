import "./sytle.css";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="footer-section">
			<section className="footer-info">
				<div className="footer-tagline">
					<div className="footer-logo">
						<svg
							width="40"
							height="40"
							viewBox="0 0 40 40"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M25.5557 11.6853C23.9112 10.5865 21.9778 10 20 10V0C23.9556 0 27.8224 1.17298 31.1114 3.37061C34.4004 5.56823 36.9638 8.69181 38.4776 12.3463C39.9913 16.0008 40.3874 20.0222 39.6157 23.9018C38.844 27.7814 36.9392 31.3451 34.1421 34.1421C31.3451 36.9392 27.7814 38.844 23.9018 39.6157C20.0222 40.3874 16.0008 39.9913 12.3463 38.4776C8.69181 36.9638 5.56823 34.4004 3.37061 31.1114C1.17298 27.8224 0 23.9556 0 20H10C10 21.9778 10.5865 23.9112 11.6853 25.5557C12.7841 27.2002 14.3459 28.4819 16.1732 29.2388C18.0004 29.9957 20.0111 30.1937 21.9509 29.8078C23.8907 29.422 25.6725 28.4696 27.0711 27.0711C28.4696 25.6725 29.422 23.8907 29.8078 21.9509C30.1937 20.0111 29.9957 18.0004 29.2388 16.1732C28.4819 14.3459 27.2002 12.7841 25.5557 11.6853Z"
								fill="#31A0FE"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M10 4.33125e-06C10 1.31322 9.74135 2.61358 9.2388 3.82683C8.73625 5.04009 7.99965 6.14248 7.07106 7.07107C6.14249 7.99966 5.04009 8.73625 3.82683 9.2388C2.61357 9.74134 1.31322 10 4.3711e-07 10L0 20C2.62644 20 5.22715 19.4827 7.65368 18.4776C10.0802 17.4725 12.285 15.9993 14.1421 14.1421C15.9993 12.285 17.4725 10.0802 18.4776 7.65367C19.4827 5.22715 20 2.62643 20 0L10 4.33125e-06Z"
								fill="#31A0FE"
							/>
						</svg>
						LearnXpert
					</div>
					<p>
						Learn to be eXpert and embark on a path of continuous growth and
						knowledge.
					</p>
					<div className="footer-social">
						<a href="#">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="#539EF7"
								className="bi bi-facebook"
								viewBox="0 0 16 16"
							>
								<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
							</svg>
						</a>
						<a href="#">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="#539EF7"
								className="bi bi-instagram"
								viewBox="0 0 16 16"
							>
								<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
							</svg>
						</a>
						<a href="#">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="#539EF7"
								className="bi bi-twitter-x"
								viewBox="0 0 16 16"
							>
								<path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
							</svg>
						</a>
					</div>
				</div>
				<div className="footer-company">
					<div>
						<div className="footer-company-title">Company Info</div>
						<a href="#">About Us</a>
						<a href="#">Career</a>
						<a href="#">Contact Us</a>
						<a href="#">Blog</a>
					</div>
					<div>
						<div className="footer-company-title">Features</div>
						<a href="#">1 On 1 Mentoring</a>
						<a href="#">Live Chat</a>
						<a href="#">Video Meeting</a>
						<a href="#">Unlimited Support</a>
					</div>
				</div>
			</section>
			<section className="footer-copy">
				<p>
					&copy; {year}{" "}
					<a
						href="https://www.figma.com/community/file/1272279853781956793/learnxpert-e-learning-landing-page"
						target="blank"
					>
						LearnXpert
					</a>{" "}
					- All Right Reserved
				</p>
			</section>
		</footer>
	);
};

export default Footer;
