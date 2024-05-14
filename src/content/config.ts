import {defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
	schema: z.object({
		author: z.string(),
		date: z.string(),
		image: z.string(),
		title: z.string(),
	}),
});

// Export collections
// posts should match the name of the collection in the file system
export const collections = {
	posts: postsCollection,
};