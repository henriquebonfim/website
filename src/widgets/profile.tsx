import { SocialMedia } from "./social-media";
import { UbuntuTerminal } from "./terminal/ubuntu";
import { ToolsCarrousel } from "./tools-carousel";

export function Profile() {
  return (
    <UbuntuTerminal title="Henrique's Workspace">
      <div className="flex flex-col items-center justify-center text-center">
        <img
          src="https://avatars.githubusercontent.com/u/40275173"
          alt="Henrique's photo"
          title="This is me!"
          className="h-33 w-33 rounded-full"
        />
        <h1>Henrique Bonfim</h1>
        <h2>Senior Software Engineer</h2>
        <SocialMedia />
        <hr />
        <p>
          I'm Henrique, a Senior Software Engineer with over 10 years of
          experience.
        </p>
        <ToolsCarrousel />
        <p>
          Passionate about leveraging generative AI to drive next-generation
          solutions.
        </p>
      </div>
    </UbuntuTerminal>
  );
}
