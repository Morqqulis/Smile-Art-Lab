
import AboutGradient from '../components/AboutGradient/AboutGradient';
import AboutLab from '../components/AboutLab/AboutLab';
import Collaborate from '../components/Collaborate/Collaborate';
import Hero from '../components/Hero/Hero';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
	title: 'About - Smile Art Lab',
	description: 'Smile Art Lab About Page',
	keywords: 'Smile Art Lab About Page',
}


const About: NextPage = () => {
	return (
		<>
			<Hero
				num="2"
				bgUrl="bg-[url('/hero/bg-2.jpg')] bg-cover"
				title="Headline - Lorem Ipsum Dolor ..."
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure."
			/>

			<AboutLab />
			<AboutGradient />
			<Collaborate />
		</>
	);
};

export default About;
