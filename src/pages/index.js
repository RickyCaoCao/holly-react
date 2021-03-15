import React from 'react';
import Layout from '../layouts/index';
import Hero from '../components/hero/Hero';
import HeroIllustration from '../components/hero/HeroIllustration';

export default function IndexPage() {
	return (
		<Layout>
			<Hero
				title="Get Funding."
				content="Whether it's grants, loans, tax credits or more,
				Project Loot can help you discover the best funding opportunities for your business."
				illustration={HeroIllustration}
			/>
		</Layout>
	);
}
