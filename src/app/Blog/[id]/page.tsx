import Btn from '@/app/components/Btn/Btn';
import Title from '@/app/components/Title/Title';
import Txt from '@/app/components/Txt/Txt';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
	title: 'Post - Smile Art Lab',
	description: 'Smile Art Lab Post Page',
  keywords: 'Smile Art Lab',
};

const Post: NextPage = () => {
	return (
		<section className="py-20">
			<div className="grid gap-10 text-center mx-auto px-10 max-w-7xl">
				<Title title="Post Page" />
				<Txt text={[`Sorry, not implament yet =)`]} />
				<Btn className="mx-auto" href="/Blog" text="Back to Blog page" />
			</div>
		</section>
	);
};

export default Post;
