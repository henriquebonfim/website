import { Header } from "#/widgets/header";
import { Footer } from "#/widgets/footer";
import { About } from "#/widgets/about";
import { Skills } from "#/widgets/skills";
import { Projects } from "#/widgets/projects";
import { Terminal } from "#/widgets/terminal";
import { SwitchLanguage } from "#/widgets/switch-language";

export function Homepage() {
  return (
    <>
      <Header />
      <main>
        <SwitchLanguage />
        <About />
        <Skills />
        <Projects />
        <Terminal />
      </main>
      <Footer />
    </>
  );
}
