import { useState, useMemo } from 'react';
import './styles.css'
import { GITHUB_URL, PROJECTS_IMAGE_URL, LIST_PROJECTS } from '../../constant';
import { useLingui } from '@lingui/react';
import { Trans } from '@lingui/macro';
import { MessageDescriptor } from '@lingui/core';

interface ProjectData<T> {
  id: number;
  title: string;
  text: T;
  image: string;
  link: string;
  idTag: string;
}

const ProjectCard = ({ project }: { project: ProjectData<string> }) => (
  <div key={project.id} className="card-list">
    <button className="card-header"
      onClick={() => window.open(project.link, '_blank')}>
      <img loading="lazy"
        className="card-header-image"
        src={project.image}
        alt={project.title}
        width={'100%'}
        height={'100%'}
        id={project.idTag} />
    </button>

    <div className="card-footer">
      <a href={project.link} rel="noopener noreferrer" target="_blank" id={project.idTag}>
        <strong className="card-title">Project {project.title}</strong>
      </a>
    </div>

    <div className="card-body">
      <div className="body-content">
        <p>{project.text}</p>
      </div>
    </div>
  </div>
);

export const Projects = () => {
  const [showProjects, setShowProjects] = useState(true);
  const i18n = useLingui()

  const projects = useMemo(() => LIST_PROJECTS.reduce((prev: ProjectData<string>[], curr: ProjectData<MessageDescriptor>) => [...prev, { ...curr, text: i18n._(curr.text) }], []), [i18n])

  const toggleShowProjects = () => setShowProjects(!showProjects);

  return (
    <div className="container">
      <div className="projects">
        <span onClick={toggleShowProjects} id="clicked_my_projects">
          {showProjects ? "⇊" : "⇉"} My little projects...
        </span>

        <hr />

        {showProjects && (
          <div className="card">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}

            <div className="card-list">

              <header className="card-header">
                <img loading="lazy" className="card-header-image" src={PROJECTS_IMAGE_URL} alt="projects" />
              </header>

              <div className="card-footer">
                <a href={GITHUB_URL} rel="noopener noreferrer" target="_blank" id='clicked_all_projects'>
                  <Trans><strong>Repositório...</strong></Trans>
                </a>
              </div>

              <div className="card-body">
                <Trans><h3>Confira outros projetos...</h3></Trans>
                <Trans><p className="body-content">Tenho diversos projetos open-source para qualquer pessoa contribuir ou ser contribuído com minhas soluções, desde API's até aplicativos completos. be my guest!</p></Trans>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};
