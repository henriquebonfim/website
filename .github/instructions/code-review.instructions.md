# Code Review instructions

Please use this checklist as a guide when reviewing code in this repository. It ensures we maintain high standards for code quality, security, and maintainability.

## General Guidelines

- [ ] Ensure the code adheres to our [general coding standards](.github/copilot-instructions.md).

## 1. ✅ Correctness

- [ ] Does the code behave as expected?
- [ ] Are edge cases and potential failure modes handled?
- [ ] Are there any logic bugs or incorrect assumptions?

## 2. 📖 Readability

- [ ] Is the code easy to understand?
- [ ] Are variable and function names meaningful and consistent?
- [ ] Are comments used to clarify complex or non-obvious logic?
- [ ] Is the code organized logically and consistently?

## 3. 🎨 Style & Consistency

- [ ] Does the code follow our team’s style guide or language standards?
- [ ] Is formatting (indentation, spacing, etc.) consistent?
- [ ] Are naming conventions followed across files and modules?

## 4. ⚡ Performance

- [ ] Are there any obvious performance issues?
- [ ] Is the chosen algorithm suitable and efficient for the task?
- [ ] Could the code scale under increased usage or data volume?

## 5. 🔐 Security & Validation

- [ ] Is user input properly validated and/or sanitized?
- [ ] Are any potential security issues addressed (e.g., injection, XSS)?
- [ ] Are secrets and credentials managed securely (not hardcoded)?

## 6. 🧪 Test Coverage

- [ ] Are there sufficient unit and integration tests?
- [ ] Do tests cover common scenarios and edge cases?
- [ ] Are the tests meaningful and do they pass reliably?

## 7. 🛠️ Maintainability & Scalability

- [ ] Is the code modular, reusable, and DRY (Don’t Repeat Yourself)?
- [ ] Will the code be easy to maintain and update?
- [ ] Has any technical debt been introduced, and is it justified?

## 8. 📦 Dependencies & Environment

- [ ] Are dependencies necessary, minimal, and documented?
- [ ] Will the code run consistently across different environments (local, CI/CD, production)?
- [ ] Are environment variables and configs handled appropriately?

---

### Suggestions & Comments

Provide clear, constructive feedback. Focus on **why** something should be changed, not just **what** should be changed.
