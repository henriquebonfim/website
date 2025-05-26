import './styles.css';
import { useState } from 'react';
import { GITHUB_URL, PROJECTS_IMAGE_URL } from './constant';
import { Trans } from '@lingui/react/macro';
import { t } from '@lingui/core/macro';

export const Projects = () => {
  const [showProjects, setShowProjects] = useState(true);
  const toggleShowProjects = () => setShowProjects(!showProjects);

  /* @__PURE__ */
  const LIST_PROJECTS = (() => [
    {
      id: 0,
      title: 'ArduEVE',
      text: t`Projeto feito com arquitetura orientada a micro serviços e Docker Swarm, utilizando NodeJS, VueJS, MongoDB, Arduino e outros, para realizar o feito de controlar um relé eletrônico, utilizado para ativar/desativar a luz e uma porta eletrônica e alguns sensores para transmitir em tempo real a leitura de dados.`,
      image: '/ardueve.gif',
      link: 'https://github.com/hpbonfim/ArduEVE',
      event_tag: 'clicked_project_ardueve',
    },
    {
      id: 1,
      title: 'Pet Porta App',
      text: t`Projeto feito com arquitetura orientada a micro serviços e Docker Swarm, utilizando NodeJS, VueJS, MongoDB e Arduino, para realizar o feito de controlar um relé eletrônico para abrir a porta do PET SISTEMAS via celular. `,
      image: '/pet.webp',
      link: 'https://github.com/hpbonfim/pet-porta-app',
      event_tag: 'clicked_project_petporta',
    },
    {
      id: 2,
      title: 'Roça Eats',
      text: t`Projeto vencedor no Hackatrouble SP 2020, construído com NodeJS, Angular e infraestrutura AWS para gerenciar um sistema de doação de alimentos hortaliços oriundos da produção excessiva dos produtores rurais, visando a distribuição para instituições de caridade.`,
      image: '/roca.webp',
      link: 'https://github.com/hpbonfim/roca-eats',
      event_tag: 'clicked_project_rocaeats',
    },
    {
      id: 3,
      title: 'Mideal',
      text: t`Projeto Top 50 do Megahack v2 2020, plataforma construída com NodeJS, Angular e infraestrutura do Google Cloud, visa construir um sistema blockchain para criação de contratos jurídicos com 100% de integridade legal e transparência.`,
      image: '/mideal.webp',
      link: 'https://github.com/hpbonfim/MegaHack-v2-2020-Projeto-Mideal',
      event_tag: 'clicked_project_mideal',
    },
    {
      id: 4,
      title: 'Canivete Perneta',
      text: t`Projeto criado no HackathonCCR, utilizando React-Native e infraestrutura AWS, visa auxiliar o caminhoneiro em suas tarefas diárias.`,
      image: '/canivete.webp',
      link: 'https://github.com/hpbonfim/HackathonCCR',
      event_tag: 'clicked_project_ccr',
    },
  ])();

  return (
    <div className="container">
      <div className="projects">
        <span onClick={toggleShowProjects} id="clicked_my_projects">
          {showProjects ? '⇊' : '⇉'} My little projects...
        </span>

        <hr />

        {showProjects && (
          <div className="card">
            {LIST_PROJECTS.map((project) => (
              <div key={project.id} className="card-list">
                <button
                  className="card-header"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <img
                    loading="lazy"
                    className="card-header-image"
                    src={project.image}
                    alt={project.title}
                    width={'100%'}
                    height={'100%'}
                    id={project.event_tag}
                  />
                </button>

                <div className="card-footer">
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    id={project.event_tag}
                  >
                    <strong className="card-title">
                      Project {project.title}
                    </strong>
                  </a>
                </div>

                <div className="card-body">
                  <div className="body-content">
                    <p>{project.text}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="card-list">
              <header className="card-header">
                <img
                  loading="lazy"
                  className="card-header-image"
                  src={PROJECTS_IMAGE_URL}
                  alt="projects"
                />
              </header>

              <div className="card-footer">
                <a
                  href={GITHUB_URL}
                  rel="noopener noreferrer"
                  target="_blank"
                  id="clicked_all_projects"
                >
                  <Trans>
                    <strong>Repositório...</strong>
                  </Trans>
                </a>
              </div>

              <div className="card-body">
                <Trans>
                  <h3>Confira outros projetos...</h3>
                </Trans>
                <Trans>
                  <p className="body-content">
                    Tenho diversos projetos open-source para qualquer pessoa
                    contribuir ou ser contribuído com minhas soluções, desde
                    API's até aplicativos completos. be my guest!
                  </p>
                </Trans>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
