import { json } from '@sveltejs/kit';
import { ShortCrypt } from 'short-crypt';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { url } = await request.json();
	const sc = new ShortCrypt('ei');

	const hash = sc.encryptToURLComponent(url);
	console.log(hash);

	return json({ hash });
}
