import { getProject } from "../../sanity/schemas/sanity-utilis";

export default async function Home() {
  const projects = await getProject();
  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>{project.name}</div>
      ))}
    </div>
  );
}
