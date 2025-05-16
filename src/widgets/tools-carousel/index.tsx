import "./styles.css";

const icons = [
  { src: "/linux.svg", alt: "Linux", title: "Linux" },
  { src: "/android.svg", alt: "Android", title: "Android" },
  { src: "/apple.svg", alt: "Apple", title: "Apple", className: "invert" },
  { src: "/angular.svg", alt: "Angular", title: "Angular" },
  { src: "/css-3.svg", alt: "CSS", title: "CSS" },
  { src: "/html-5.svg", alt: "HTML", title: "HTML" },
  { src: "/javascript.svg", alt: "JavaScript", title: "JavaScript" },
  { src: "/typescript.svg", alt: "TypeScript", title: "TypeScript" },
  { src: "/react.svg", alt: "React", title: "React" },
  { src: "/redux.svg", alt: "Redux", title: "Redux" },
  { src: "/nodejs.svg", alt: "Node.js", title: "Node.js" },
  { src: "/npm.svg", alt: "NPM", title: "NPM" },
  { src: "/python.svg", alt: "Python", title: "Python" },
  { src: "/pypi.svg", alt: "pypi", title: "pypi", className: "invert" },
  { src: "/java.svg", alt: "Java", title: "Java" },
  { src: "/ruby.svg", alt: "Ruby", title: "Ruby" },
  { src: "/docker.svg", alt: "Docker", title: "Docker" },
  { src: "/kubernetes.svg", alt: "Kubernetes", title: "Kubernetes" },
  { src: "/aws.svg", alt: "AWS", title: "AWS" },
  { src: "/aws-lambda.svg", alt: "AWS Lambda", title: "AWS Lambda" },
  { src: "/gcp.svg", alt: "GCP", title: "GCP" },
  { src: "/firebase.svg", alt: "Firebase", title: "Firebase" },
  { src: "/cycle.svg", alt: "SDLC", title: "SDLC" },
  { src: "/git-branch.svg", alt: "Git", title: "Git", className: "invert" },
  { src: "/figma.svg", alt: "Figma", title: "Figma" },
  { src: "/slack.svg", alt: "Slack", title: "Slack" },
  { src: "/teams.svg", alt: "teams", title: "teams" },
  { src: "/telegram.svg", alt: "Telegram", title: "Telegram" },
  { src: "/whatsapp.svg", alt: "WhatsApp", title: "WhatsApp" },
];

export function ToolsCarrousel() {
  return (
    <div className="fade-mask relative w-full overflow-hidden py-4">
      <div className="tools-carousel-wrapper w-fit whitespace-nowrap">
        <div className="tools-carousel animate-scroll inline-flex min-w-max">
          {icons.map((icon, idx) => (
            <img
              key={idx}
              src={icon.src}
              alt={icon.alt}
              title={icon.title}
              className={`m-2 inline-block h-10 w-10 ${icon.className || ""}`}
              draggable="false"
              loading="lazy"
            />
          ))}
          {icons.map((icon, idx) => (
            <img
              key={`repeat-${idx}`}
              src={icon.src}
              alt={icon.alt}
              title={icon.title}
              className={`m-2 inline-block h-10 w-10 ${icon.className || ""}`}
              draggable="false"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
