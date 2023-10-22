import { KV_REST_API_TOKEN, KV_REST_API_URL } from '$env/static/private';
import { json } from '@sveltejs/kit';
import { createClient } from '@vercel/kv';

/** @type {import('./$types').RequestHandler} */
export async function POST({request}) {

	const { hash, url } = await request.json();
	const client = createClient({
		url: KV_REST_API_URL,
		token: KV_REST_API_TOKEN,
	});


	try {
		
		await client.set(hash, url);
		return json({message: 'ok'});

	} catch (error) {
		throw new Error("erro ao salvar hash");
		
	}
}



