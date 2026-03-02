# My-Portfolio

A personal portfolio website for Don Cornelius Livi — a full-stack developer student passionate about web development, React, Node.js, and guitar.

Live site: [https://don-cornelius-b.github.io/My-Portfolio/](https://don-cornelius-b.github.io/My-Portfolio/)

---

## Features

- Royal Marble & Gold theme
- Responsive layout (mobile-friendly)
- Scroll-triggered reveal animations via `IntersectionObserver`
- Accessible: keyboard focus styles, `prefers-reduced-motion` support, semantic HTML
- SEO meta tags and Open Graph support

---

## Local Development

No build step is required — this is a plain HTML/CSS/JS project.

1. **Clone the repository**

   ```bash
   git clone https://github.com/Don-Cornelius-B/My-Portfolio.git
   cd My-Portfolio
   ```

2. **Open locally**

   Simply open `index.html` in your browser, **or** use a local server for best results:

   ```bash
   # Using Python (recommended)
   python3 -m http.server 8080
   # Then open http://localhost:8080 in your browser
   ```

   > Using a local server avoids browser security restrictions on local files (e.g. Google Fonts loading).

---

## Adding / Replacing Assets

The following image files are referenced in `index.html` but are not checked into the repository. Add your own versions to the root of the project:

| File | Purpose |
|------|---------|
| `profile.jpg` | Your profile / headshot photo |
| `html-logo.png` | HTML5 skill icon |
| `css-logo.png` | CSS3 skill icon |
| `js-logo.png` | JavaScript skill icon |
| `react-logo.png` | React skill icon |
| `node-logo.png` | Node.js skill icon |
| `guitar-icon.png` | Guitar skill icon |

Images degrade gracefully — missing images are hidden automatically via `onerror` in the HTML.

---

## Deployment (GitHub Pages)

1. Push your changes to the `main` branch.
2. In the repository on GitHub, go to **Settings → Pages**.
3. Under **Source**, select **Deploy from a branch** → choose `main` and `/ (root)`.
4. Click **Save**. GitHub Pages will publish the site at:

   ```
   https://<your-username>.github.io/My-Portfolio/
   ```

   > `index.html` in the repository root is served automatically — no extra configuration needed.

---

## Project Structure

```
My-Portfolio/
├── index.html      # Main page (entry point for GitHub Pages)
├── style.css       # Royal Marble & Gold theme styles
├── profile.jpg     # Profile photo (add your own)
├── *.png           # Skill icons (add your own — see table above)
├── LICENSE         # MIT License
└── README.md       # This file
```

---

## License

This project is licensed under the [MIT License](LICENSE).
