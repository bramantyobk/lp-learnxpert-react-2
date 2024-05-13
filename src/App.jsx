import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import CourseSection from "./components/CourseSection/CourseSection";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import InfoSection from "./components/InfoSection/InfoSection";
import ReviewSection from "./components/ReviewSection/ReviewSection";
import CallToActionSection from "./components/CallToActionSection/CallToActionSection";
import {
	cardStreamLineIcon,
	cardPeopleIcon,
	cardLoveIcon,
	course1,
	course2,
	course3,
	course4,
	course5,
	infoIconGraph,
	infoIconCheck,
	infoIconMail,
} from "./assets";

function App() {
	const navLinks = ["Home", "About", "Contact", "Blogs"];
	const featureCards = [
		{
			icon: cardStreamLineIcon,
			title: "Learn more skills",
			description: "The gradual accumulation of information about atomic.",
		},
		{
			icon: cardLoveIcon,
			title: "Choose courses",
			description: "The gradual accumulation of information about atomic.",
		},
		{
			icon: cardPeopleIcon,
			title: "Learn at your own pace",
			description: "The gradual accumulation of information about atomic.",
		},
	];
	const courseCards = [
		{
			image: course1,
			title: "Intro Web Development",
			teacher: "Rizky Ramadhan",
			review: "1200 (students)",
		},
		{
			image: course2,
			title: "HTML",
			teacher: "Rizky Ramadhan",
			review: "1200 (students)",
		},
		{
			image: course3,
			title: "CSS",
			teacher: "Rizky Ramadhan",
			review: "1200 (students)",
		},
		{
			image: course4,
			title: "Javascript",
			teacher: "Tapri Andi",
			review: "1200 (students)",
		},
		{
			image: course5,
			title: "Tailwind",
			teacher: "Avip Syaifulloh",
			review: "1200 (students)",
		},
		{
			image: course1,
			title: "React",
			teacher: "Muhsin Sutanto",
			review: "1200 (students)",
		},
	];
	const infoCards = [
		{
			title: "Interactive Courses",
			description:
				"Things on a very small scale behave like nothing that you have any direct experience",
			image: infoIconGraph,
			statusPrimary: true,
		},
		{
			title: "Flexible Learning",
			description:
				"Things on a very small scale behave like nothing that you have any direct experience",
			image: infoIconCheck,
			statusPrimary: false,
		},
		{
			title: "Expert Instructors",
			description:
				"Things on a very small scale behave like nothing that you have any direct experience",
			image: infoIconMail,
			statusPrimary: false,
		},
	];

	return (
		<>
			<Navbar navLinks={navLinks} />
			<HeroSection />
			<main>
				<FeatureSection featureCards={featureCards} />
				<CourseSection courseCards={courseCards} />
				<InfoSection infoCards={infoCards} />

				<ReviewSection />
				<CallToActionSection />
			</main>
			<Footer />
		</>
	);
}

export default App;
