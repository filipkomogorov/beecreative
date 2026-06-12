import { Link } from "react-router-dom";

import type { PortfolioProject } from "../../data/projects";
import HexIcon from "../shared/HexIcon";
import ProjectCover from "./ProjectCover";

interface ProjectCardProps {
  project: PortfolioProject;
}

const ProjectCard = ({
  project,
}: ProjectCardProps) => {
  return (
    <Link
      className="case"
      id={project.id}
      to="/kontakti"
      data-reveal
    >
      <span className="cover">
        <ProjectCover type={project.cover} />

        <span className="go" aria-hidden="true">
          →
        </span>
      </span>

      <span className="meta-row">
        <h2>{project.title}</h2>
        <span className="year">{project.year}</span>
      </span>

      <span className="summary">
        {project.summary}
      </span>

      <span className="metric">
        <HexIcon
          className="hex"
          color="var(--uv)"
        />

        {project.metric}
      </span>

      <ul className="tags">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </Link>
  );
};

export default ProjectCard;