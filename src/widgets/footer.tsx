import { SocialMedia } from "./social-media";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mx-auto flex flex-col items-center bg-gray-900 text-gray-300 dark:bg-gray-100 dark:text-gray-700">
      <SocialMedia />
      <pre>
        © {currentYear} Henrique Bonfim. All rights reserved.
      </pre>
    </footer>
  );
}
