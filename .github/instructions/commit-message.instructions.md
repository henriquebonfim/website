# Git Commit Message Standards

## Format

Use conventional commits format:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

## Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring without feature/bug changes
- `test`: Adding or updating tests
- `chore`: Build process, dependency updates

## Guidelines

- Use imperative mood in description ("add" not "added")
- Keep description under 50 characters
- Don't capitalize first letter of description
- No period at end of description
- Include scope when applicable (api, ui, auth)
- Use body to explain what and why, not how

## Examples

```
feat(auth): add OAuth2 login support
fix(api): resolve user validation error
docs: update installation instructions
test(user): add unit tests for profile service
```
