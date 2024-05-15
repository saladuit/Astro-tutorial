import {defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
	schema: ({image}) => z.object({
		author: z.string(),
		date: z.string(),
		image: image(),
		title: z.string(),
	}),
});

// Export collections
// posts should match the name of the collection in the file system
export const collections = {
	posts: postsCollection,
};