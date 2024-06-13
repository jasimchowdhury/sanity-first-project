import { createClient, groq } from "next-sanity";

export async function getProject(){
    const client = createClient({
        projectId: '54x35z0z',
        dataset: 'production',
        apiVersion: '2023-06-12',
    });

    return client.fetch(
        groq`*[_type = 'project']{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
        }`
    )
}