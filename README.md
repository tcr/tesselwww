# tesselwww

[![Code of Conduct](https://img.shields.io/badge/%E2%9D%A4-code%20of%20conduct-blue.svg?style=flat)](https://github.com/tessel/project/blob/master/CONDUCT.md)

A future static generator for tessel.io using [hexo](https://www.npmjs.com/package/hexo) for static page structure and [Netlify](https://www.netlify.com/) for hosting/continuous deployment.

Each time `master` is updated the Netlify page at http://tesselwww.netlify.com/ gets updated.

## Development

To develop on and serve the website, inside your local directory of tesselwww run:

```
npm install
npm start
```

To also modify themes / CSS, run this in another terminal (also inside your local tesselwww directory):

```
cd themes/tessel/
npm install
gulp watch
```

### Folders

- `_config.yml` — Hexo configuration.
- **`source/`** — Markdown or Handlebar (.hbs) files for the content of each page.
- `source/_posts` — Blog posts.
- `themes/tessel/_config.yml` — Theme and layout configuration (incl. header)
- **`themes/tessel/layout/`** — Handlebar layout files for the website.
- **`themes/tessel/source/scss`** — Sass files for the whole site.
- `themes/tessel/source/scss/pages` — Sass files for individual pages.
- `scripts/` - Build scripts for Hexo (see the Hexo reference for details).

## License

CC-BY-SA
