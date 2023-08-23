import {console} from "next/dist/compiled/@edge-runtime/primitives";

export default async function(post_id) {
    console.log('Fetching single post...');

    const url = process.env.API_BASE_URL + '/post-details/' + post_id;
    console.log('url: ', url);

    const res = await fetch(url);

    if(!res.ok) {
        throw new Error('Fetching Single Post Error.')
    }

    return res.json();
}