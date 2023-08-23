export default async function() {

    console.log('Fetching Categories...');

    const url = process.env.API_BASE_URL + '/post-categories';
    console.log('url: ', url);

    const res = await fetch(url, {
        cache: 'force-cache'
    });

    if(!res.ok) {
        throw new Error('Fetching Categories Error.')
    }

    return res.json();
}