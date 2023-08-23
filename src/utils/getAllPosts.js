export default async function (category_id='newest') {
    console.log('Fetching posts...');

    const res = await fetch("");

    if(!res.ok) {
        throw new Error('Fetching Posts Error.')
    }

    return res.json();
}