import { GITHUB_URL } from "./projects/constant";
import { SocialMedia } from "./social-media";

export function Footer() {
  return (
    <footer className="bg-neutral border-base-100 mx-auto mt-1 flex w-full flex-col items-center justify-center gap-1 border-t-1 text-center">
      <div className="divider divider-base mx-auto w-3/12">
        <SocialMedia />
      </div>
      <pre className="text-base-300 -m-1 mb-3 text-xs">
        Made with &#x2764; by&nbsp;
        <a
          href={GITHUB_URL}
          title="LinkedIn"
          className="cursor-alias"
          target="_blank"
          rel="noopener noreferrer"
        >
          Henrique Bonfim
        </a>
        .
      </pre>
    </footer>
  );
}
