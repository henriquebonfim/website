# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/27b1d4c5-a2a6-4f2b-af32-36bad3719111

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/27b1d4c5-a2a6-4f2b-af32-36bad3719111) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Bun (Runtime & Package Manager)
- LinguiJS (Internationalization)

## 🌍 Internationalization (i18n)

This project uses **LinguiJS** for internationalization. It supports English (`en`), Portuguese (`pt`), and Spanish (`es`).

### Automated AI Translations

We have an automated workflow that uses **OpenRouter** (free tier models like Gemini 2.0 Flash or Llama 3) to generate missing translations.

**To run translations locally:**

1. Get a free API key from [OpenRouter](https://openrouter.ai/).
2. Export the key and run the translation script:

```bash
export OPENAI_API_KEY=your_key_here
bun run translate:ai
```

**CI/CD Integration:**

Translations are automatically generated and committed on every push to the `main` branch via GitHub Actions, provided the `OPENAI_API_KEY` secret is set in the repository.

### Manual Translation Workflow

If you prefer to translate manually:

1. Extract strings:
   ```bash
   bun run i18n:extract
   ```
2. Edit the `.po` files in `src/shared/i18n/locales/`.
3. Compile the catalogs:
   ```bash
   bun run i18n:compile
   ```

Simply open [Lovable](https://lovable.dev/projects/27b1d4c5-a2a6-4f2b-af32-36bad3719111) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
