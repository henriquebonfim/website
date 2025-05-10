import { SocialLinkProps } from "./types";
import "./styles.css";
import { PROFILE_IMAGE_URI, SOCIAL_LINKS } from "../../constant"
import { I18nProvider } from "@lingui/react"
import { i18n } from "@lingui/core"
import { Trans } from "@lingui/macro"

const SocialLink = ({ url, className, id, icon }: SocialLinkProps) => (
  <a href={url} rel="noopener noreferrer" target="_blank" className={className} id={id}>
    <img loading="lazy" src={icon} alt={className} width={30} height={30} />
  </a>
);

const linkedin = SOCIAL_LINKS.filter(x => x.className === 'linkedin')[0].url

export const About = () => {

  return (
    <I18nProvider i18n={i18n}>
      <div className="container">
        <main className="story">
          <Trans>
            <h4>ENTRE AQUI...</h4>
          </Trans>

          <a id="clicked_photo" href={PROFILE_IMAGE_URI} target="_blank">
            <img loading="lazy" className="perfil" src={PROFILE_IMAGE_URI} alt="Minha Foto" width={100} height={100} />
          </a>

          <p>
            <Trans>
              Bem-vind@s ao <strong className="highlight">meu universo</strong>, um lugar onde as <strong className="highlight">infinitas linhas de código</strong> são responsáveis por nos permitir <strong className="highlight">navegar dentre mundos misteriosos...</strong> E como engenheiro de software há alguns anos, é meu dever guiá-los nessa jornada, desafiando o vasto mundo digital, <strong className="highlight">descobrindo novas possibilidades</strong>, construindo novas pontes e por fim, <strong className="highlight"><a href={linkedin}>a solução ideal</a></strong>.
            </Trans>
          </p>

          <p>
            <Trans>
              Sou Henrique, sou um <strong className="highlight">explorador incansável</strong> do mundo da tecnologia.
            </Trans>
          </p>

          <p>
            <Trans>
              Nas <strong className="highlight">se faz presente nas linhas de código</strong> que escrevo, refletem a qualidade do meu trabalho e a paixão que tenho por ele. <strong className="highlight">Códigos limpos, eficientes e seguros</strong> são a minha marca registrada, e eu os utilizo para criar soluções inovadoras e eficazes para os problemas que encontro.
            </Trans>
          </p>


          <p>
            <Trans>
              Trabalho sob os cargos de <strong className="highlight">Engenheiro de Software / Arquiteto Cloud / Engenheiro DevOps / Engenheiro SRE</strong>, e sou conhecido por:
            </Trans>
          </p>

          <p>
            &gt;&nbsp;
            <Trans>
              Desenvolver <strong className="highlight">códigos simples para problemas complexos</strong>, ou vice-versa, depende do problema xD <small>(a simplicidade sempre será melhor alternativa)</small>;
            </Trans>
            <br /><br />
            &gt;&nbsp;
            <Trans>
              Produzir e/ou utilizar softwares de <strong className="highlight">alta produtividade, segurança, desempenho, sustentabilidade, escalabilidade e afins</strong>;
            </Trans>
            <br /><br />
            &gt;&nbsp;
            <Trans>
              Prover as melhores <strong className="highlight">infraestruturas como código</strong>; <small>(cloud / hybrid / on-premise)</small>;
            </Trans>
            <br /><br />
            &gt;&nbsp;
            <Trans>
              Correr sempre atrás das <strong className="highlight">melhores soluções</strong> para resolver os problemas; <small>(não importa o quão difícil seja)</small>
            </Trans>
            <br /><br />
            &gt;&nbsp;
            <Trans>
              Aniquilar bugs em troca de recompensas.
            </Trans>
          </p>

          <p>
            <Trans>
              No coração do meu trabalho, você encontrará <strong className="highlight">DevOps</strong>, <strong className="highlight">Design Patterns</strong> e <strong className="highlight">Clean Code</strong>. Estas são a chave para quebrar problemas complexos e conquistar a simplicidade.
            </Trans>
          </p>

          <p>
            <Trans>
              Sou um orgulhoso membro da comunidade <strong className="highlight">open-source</strong>, um espaço onde a colaboração e a inovação andam de mãos dadas. Aqui, eu contribuo para projetos, aprendo com os melhores e participo de hackatons, sempre buscando expandir meus horizontes e aprimorar minhas habilidades. <small>(inclusive, já ganhei um evento Hackathon, mais isso é história para outro momento...)</small>
            </Trans>
          </p>

          <p>
            <Trans>
              <strong className="highlight">Vamos explorar a tecnologia, <a href={linkedin}>juntos</a>!</strong>
            </Trans>
          </p>

          <blockquote className="quote">
            <Trans>
              "A <b>imaginação</b> é mais importante que o conhecimento"
            </Trans>
            <footer>Albert Einstein</footer>
          </blockquote>

          <br></br>

          <div className="social">
            {SOCIAL_LINKS.map((obj) => (
              <SocialLink key={obj.className} {...obj} />
            ))}
          </div>
        </main>
      </div>
    </I18nProvider>
  )

}