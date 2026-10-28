# Skte8 — DJ Site

One-page site for Skte8 (house / EDM / techno). Plain HTML/CSS/JS with no build step, made for GitHub Pages.

## Files
- `index.html`: the page
- `styles.css`: all styling
- `script.js`: mobile menu, scroll reveals, spinning wheel
- `fonts/`: the a Another Tag font used for the Skte8 logo
- `404.html`: custom "Bailed" not-found page
- `.nojekyll`: tells GitHub Pages to serve files as-is

## Deploy to GitHub Pages
1. Create a repo (name it `<your-username>.github.io` if you want the site at the root URL).
2. Upload everything in this folder, including `.nojekyll` and `fonts/`.
3. Go to the repo's **Settings → Pages**, set **Source: Deploy from a branch**, then choose **Branch: main / (root)**.
4. The site goes live at `https://<your-username>.github.io/` (or `/<repo-name>/`) after a minute or two.

## Images (`images/` folder)
Use these exact filenames. They're lowercase, and GitHub Pages cares about case.

| File | What | Size |
|---|---|---|
| `profile.jpg` | Main bio photo, vertical | ~1000×1250 (4:5) |
| `action-1.jpg`, `action-2.jpg`, `action-3.jpg` | Optional square shots: DJing, skating, crowd | ~800×800 |
| `share.jpg` | Preview image that shows when you text/DM the link | 1200×630 |
| `favicon.png` | Browser tab icon | 512×512 |

Any action shot you leave out is hidden automatically.

## Things to fill in
- **Bio:** the paragraph text and the facts list (city, set length, etc.) in `index.html`.
- **Mixes:** paste each mix's SoundCloud or Mixcloud link into `data-url=""` on its `<article class="deck">`, then edit the title, genre and blurb. Copy a whole `<article>` to add more.
- **Played At:** add a `<li>Venue</li>` inside `<ul class="venues">` for each new venue, and update the "Played at" line in the bio facts.
- **Booking:** change `you@example.com` (it's in two places in `index.html`). A mailto form opens the visitor's email app. If you want a real inbox form, use a free service like Formspree and set its URL as the `action`.
- **Socials:** add your links in the footer.

Note: file paths on GitHub Pages are case-sensitive, so keep `fonts/aAnotherTag.otf` spelled exactly like that.
