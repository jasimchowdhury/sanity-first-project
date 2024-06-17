import { createClient, groq } from "next-sanity";
import { Project } from "../../types/Project";

export async function getProject(): Promise<Project[]>{
    const client = createClient({
        projectId: '54x35z0z',
        dataset: 'production',
        apiVersion: '2023-06-12',
    });

    return client.fetch(
        groq`*[_type == 'project']{
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