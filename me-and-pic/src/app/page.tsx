import Image from "next/image";
import { getProject } from "../../sanity/schemas/sanity-utilis";

// export default async function Home() {
//   const projects = await getProject();
//   return (
// <div>
//   {projects.map((project) => (
//     <div key={project._id}>{project.name}</div>
//   ))}
// </div>
//   );
// }
export default async function Home() {
  const projects = await getProject();
  return (
    <div>
      {projects.map((project) => (
        <div key={project._id}>{project.name}</div>
      ))}
    </div>
  );
}
