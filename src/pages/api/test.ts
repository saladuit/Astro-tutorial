import type { APIRoute } from "astro";

export async function GET() {
	return new Response(
		JSON.stringify({msg: "Hello World"}), {
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
}

export const POST: APIRoute = async ({ params, request}) => {
	let status = 200;
	const body = await request.json().catch(() => {
		status = 418;
		return { error: "Invalid JSON" };
	});
	return new Response( JSON.stringify(body), {
		status: status,
		headers: {
			"Content-Type": "application/json",
		},
	});
}
