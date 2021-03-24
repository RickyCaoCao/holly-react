import React from 'react';
import Layout from '../layouts/index';
import Hero from '../components/hero/Hero';
import HeroIllustration from '../components/hero/HeroIllustration';

export default function IndexPage() {
	return (
		<Layout>
			<Hero
				title="Get funding for your business."
				tagline="79% of businesses fail because they started out with not enough money."
				content="Here at Project Loot, we use cutting-edge software to recommend you the best funding opportunities for your business."
				illustration={HeroIllustration}
			/>
		</Layout>
	);
}
