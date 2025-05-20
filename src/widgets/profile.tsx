import { SOCIAL_LINKS } from "#/shared/constants";
import { SocialMedia } from "./social-media";
import { Terminal } from "./terminal";
import { ToolsCarrousel } from "./tools-carousel";

export function Profile() {
  return (
    <Terminal>
      <section className="flex h-full w-full flex-col items-center justify-center text-center">
        <article className="prose prose-img:m-1 prose-h1:m-0 prose-h3:m-0 prose-sm md:prose-base justify-cente flex flex-col items-center font-serif">
          <img
            src={SOCIAL_LINKS.IMAGE}
            alt="Henrique's photo"
            title="This is me!"
            className="h-33 w-33 transition-all duration-300 hover:scale-105"
          />
          <h1>Henrique Bonfim</h1>
          <h3>Senior Software Engineer</h3>
          <div className="not-prose m-3">
            <SocialMedia />
          </div>
          <h5>
            Leveraging <i>GenAI</i> to drive <b>next-generation solutions.</b>
          </h5>
        </article>
        <ToolsCarrousel />
      </section>
    </Terminal>
  );
}
