import { KV_REST_API_TOKEN, KV_REST_API_URL } from '$env/static/private';
import { redirect } from '@sveltejs/kit';
import { createClient } from '@vercel/kv';

export async function load({params}) {

    const client = createClient({
        url: KV_REST_API_URL,
        token: KV_REST_API_TOKEN,
      });

      const link = await client.get(params.slug);

      if (link !== null) {
        throw redirect(302, link)

      }

      throw redirect(302, '/')
}