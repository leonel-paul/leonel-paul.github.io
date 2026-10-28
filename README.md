# Leonel Paul CV website

A static portfolio and printable résumé built from Leonel's current career-ops/cv.md and config/profile.yml. No build step or package install is needed.

## Preview locally

From this directory, run:

    python3 -m http.server 8000

Open http://localhost:8000/. The résumé is at http://localhost:8000/resume.html; its **Print / Save as PDF** button opens the browser print dialog.

## Publish with GitHub Pages

1. Create a new **public, empty** repository under the leonel-paul account named leonel-paul.github.io. Leave the README, .gitignore, and license options unchecked. The site address will be https://leonel-paul.github.io/.
2. Put the *contents* of this directory in the repository root. Keep index.html, resume.html, both stylesheets, script.js, favicon.svg, and .nojekyll together.
3. Commit and push to the repository's default branch.
4. In the GitHub repository, go to **Settings → Pages → Build and deployment**. Choose **Deploy from a branch**, select the default branch and **/(root)**, then save.
5. Visit the URL shown in Pages settings after deployment finishes. GitHub says publishing may take up to 10 minutes.

For a **new empty repository**, the push in step 3 can be done from this directory:

    git init
    git add .
    git commit -m "Add CV website"
    git branch -M main
    git remote add origin https://github.com/leonel-paul/leonel-paul.github.io.git
    git push -u origin main

All asset links are relative, so the same files work on user sites and project sites. Do not upload the private career-ops folder or company-specific PDFs.

## Update content

Edit index.html for the portfolio and resume.html for the printable CV. The site currently uses a public-facing subset of the CV: no phone number, compensation details, or internal endpoints.
