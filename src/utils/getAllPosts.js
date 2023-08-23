export default async function(category_id = 1) {
    console.log('Fetching category posts...');

    const url = process.env.API_BASE_URL + '/post-list/' + category_id;
    console.log('url: ', url);

    const res = await fetch(url);

    if(!res.ok) {
        throw new Error('Fetching Posts Error.')
    }

    return res.json();
}