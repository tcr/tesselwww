# tesselwww

A future static generator for <tessel.io>.

Each time `master` is updated the Netlify page at http://tesselwww.netlify.com/ gets updated.

## Development

To develop on and serve the website:

```
npm install
hexo server
```

To also modify themes / CSS, run this in another terminal:

```
cd themes/
npm install
gulp watch
```

### Folders

- **`source/`** — Markdown or Handlebar (.hbs) files for the content of each page.
- `source/_posts` — Blog posts.
- **`themes/tessel/layout/`** — Handlebar layout files for the website.
- **`themes/tessel/source/scss`** — Sass files for the whole site.
- `themes/tessel/source/scss/pages` — Sass files for individual pages.
- `scripts/` - Build scripts for Hexo (see the Hexo reference for details).

## License

CC-BY-SA