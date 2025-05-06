# Contributing guide to InnovationLabWebFrontend

To ensure a smooth contribution process, please follow the steps outlined below for **pull requests** and **Git workflows**.

---

## Git Workflow

1. **Navigate to your project directory**
   ```bash
   cd InnovationLabWebFrontend
   ```
2. **Ensure you're on the main branch**
   ```bash
   git checkout main
   ```
3. **Pull the latest changes from the remote main branch**
   ```bash
   git pull origin main
   ```
4. **Create a new branch for your feature or bug fix**
   ```bash
   git checkout -b feature/testimonials
   ```
5. **Make your changes in the code**

   Add or Edit files as necessary to implement your feature/bug fix.

6. **Stage the changes**
   ```bash
   git add .
   ```
7. **Commit your changes**

   **Please use meaningful commit messages by following the Conventional Commits specification.**

   Conventional Commits provide a standardized format that makes commit history easier to understand and automate. It helps with versioning, changelogs, and collaboration.

   Take a few minutes to learn the guidelines here:
   https://www.conventionalcommits.org/en/v1.0.0/

   **Key points to remember:**

   - Start your commit message with a type such as feat (new feature), fix (bug fix), docs (documentation), etc.
   - Optionally include a scope in parentheses to specify the area affected, e.g., feat(parser):.
   - Follow with a short, clear description after a colon.
   - Use a BREAKING CHANGE: footer to indicate breaking changes optionally ! to draw attention to breaking change
   - Write additional details in the body if necessary.
   - Examples:

   ```text
   - feat(auth): add support for two-factor authentication
   - BREAKING CHANGE: users must now configure 2FA in their profile settings
   ```

   ```bash
   git commit -m "feat: add login form UI"
   ```

8. **Push your branch to GitHub**
   ```bash
   git push origin feature/short-description
   ```
9. **Open a Pull Request (PR)**

   Navigate to github.com and create a PR from your branch to main

## Pull Request checklist

Before requesting a review, make sure you’ve checked off the following:

[ ] Code builds and runs locally

[ ] I’ve tested all new and existing functionality manually

[ ] I’ve followed our project naming conventions and code style

[ ] My branch is up to date with main

[ ] This PR focuses on one specific feature/fix

[ ] I’ve added comments where necessary for clarity

[ ] No secrets, passwords, or sensitive data are committed

## Branch Naming Convention

Use the following format for branch names:

- feature/\<short-description\> — for new features (Example: feature/testimonials)
- fix/\<bug-name\> — for bug fixes (Example: fix/event-filer)
- chore/\<task-name\> — for maintenance tasks (e.g., dependency updates) (Example: chore/update-dependencies)
