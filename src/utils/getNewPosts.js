export default async function() {
    console.log('Fetching new posts...');

    const url = process.env.API_BASE_URL + '/post-newest';
    console.log('url: ', url);

    const res = await fetch(url);

    if(!res.ok) {
        throw new Error('Fetching Posts Error.')
    }

    return res.json();
}