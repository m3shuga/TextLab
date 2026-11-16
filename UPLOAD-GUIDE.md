# How to put the site on GitHub (no programming needed)

This guide is for uploading with the GitHub website. You do not need to install anything.
GitHub's buttons are sometimes renamed, so if a button looks different, look for the same words.

## What you need
- A free GitHub account (https://github.com).
- The folder with the site files on your computer (the folder that contains `index.html`).
- Chrome, Edge or Firefox. (If dragging a whole folder does not work in another browser, use Chrome.)

## A. First upload

1. Sign in to GitHub. Click the **+** at the top right, then **New repository**.
2. **Repository name:** use lowercase letters, for example `textlab`. This becomes part of the web address.
3. Choose **Public**. (GitHub Pages is free only for public repositories.)
   **Never put student names or other personal information in this repository. Everybody can see it.**
4. Do **not** tick "Add a README". Click **Create repository**.
5. On the next page click the link **uploading an existing file**.
6. Open the site folder on your computer. Select **everything inside it** (not the folder itself):
   `index.html`, `validate.html`, `LICENSE`, `README.md`, and the folders `css`, `js`, `content`, `fonts`, `assets`.
   Drag them all onto the GitHub page.
7. Wait until the list of files has finished loading. Scroll down and click **Commit changes**.
   (A single upload can hold up to 100 files. This site has fewer than 40.)
8. *(Optional)* The file `.nojekyll` is hidden on many computers. The site works without it,
   because no file name starts with an underscore. If you want it anyway: click **Add file → Create new file**,
   type `.nojekyll` as the file name, and click **Commit changes**.

## B. Turn the website on

1. In your repository click **Settings** (top row of tabs).
2. In the left menu click **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Under **Branch** choose `main` and the folder `/ (root)`. Click **Save**.
5. Wait one to two minutes and refresh the Pages settings page. A box shows your address:
   `https://YOUR-USERNAME.github.io/textlab/`
6. Open that address. Test: the home page loads, the **EN / NB** switch works, and a model text opens when you click a part.

## C. Change one file later

**Small text change:** open the file in GitHub (click through the folders), click the **pencil** icon, edit,
then click **Commit changes**.

**Replace a whole file:** click into the folder where the file lives (for example `content`), click
**Add file → Upload files**, drag in your new file **with exactly the same name**, and click **Commit changes**.
It replaces the old one.

After a change, wait one to two minutes. If you still see the old page, do a hard refresh:
**Ctrl + F5** (Windows) or **Cmd + Shift + R** (Mac).

**Always check your change first:** open `validate.html` from your own computer (double-click it).
It lists missing translations and other mistakes before you upload.

## D. Undo a mistake

1. In your repository click the **clock icon / "commits"** link to see the list of changes.
2. Click the change you want to undo.
3. Click **Revert** (top right). GitHub makes a "pull request". Click **Create pull request**, then **Merge pull request**, then **Confirm merge**.
4. Wait a minute or two. The old version is back.

Tip: keep a copy of the site folder on your own computer as a backup, with a date in its name.

## E. Rules for file names (so nothing breaks)
- Only lowercase letters, numbers and hyphens. No spaces. No æ, ø or å.
- Never start a file or folder name with an underscore (`_`).
- GitHub treats `Index.html` and `index.html` as different files. Keep the same spelling everywhere.

## F. Your licence
The file `LICENSE` says: **all rights reserved, free to use online**. Open it and replace
`[YOUR NAME]` and `[CONTACT: to be added]` with your own details before you upload.
Also change `owner` and `contact` in `js/config.js`.
Public repositories can still be viewed and forked by other GitHub users under GitHub's own terms.
The licence is legal protection, not a technical lock. If you are unsure, ask your school owner about publishing teaching materials under your name.
