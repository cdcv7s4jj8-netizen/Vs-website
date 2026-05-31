Deploying the site (quick steps)

I can't push or publish on your behalf. Follow one of the methods below to get a live link.

1) GitHub Pages (via the included Action)

Ensure `main` is your default branch. From the project root run:

    git init
    git add .
    git commit -m "Initial site scaffold"
    # create a repo and push using GitHub CLI (replace USER/REPO)
    gh repo create USER/REPO --public --source=. --remote=origin --push

After pushing, the GitHub Action will build and publish `dist` to GitHub Pages. Expected URL:

    https://<YOUR_GITHUB_USERNAME>.github.io/<REPO>

2) Netlify (continuous deploy)

Create a Netlify site and point it to your Git provider (GitHub). Use the `dist` folder as the publish directory and `npm run build` as the build command. Or run a one-off deploy:

    npm run build
    npx netlify deploy --prod --dir=dist

3) Quick local preview (no deploy)

    npm install
    npm run dev
    # open http://localhost:5173

If you want, share your GitHub repo URL (or grant access) and I will confirm the live URL after deployment.
