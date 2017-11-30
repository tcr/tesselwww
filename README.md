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

Files to modify:

- **`source/` — Handlebar (.hbs) or Markdown (.md) content for each page on the website.**
- **`source/_posts/` — Blog posts in Markdown format.**

### Modifying Layout or CSS

To also modify page layout or stylesheets, run this in another terminal (also inside your local tesselwww directory):

```
cd theme/
npm install
grunt watch
```

(If your shell indicates `grunt` is not installed, run `npm i -g grunt-cli` first.)

Files to modify:

- **`theme/layout/` — Handlebar layout templates for the website.**
- **`theme/source/scss/` — Sass stylesheets for the whole site.**
- **`theme/source/scss/shared/` — Sass stylesheets for common components.**
- **`theme/source/scss/pages/` — Sass stylesheets for individual pages.**

### Other files

These are the other files included in the Hexo structure:

- `_config.yml` — Hexo configuration.
- `public/` — Generated website files.
- `scripts/` - Build scripts for Hexo (see the Hexo reference for details).
- `theme/_config.yml` — Theme and layout configuration (incl. which tabs to show in the header)
- `theme/source/css/` — Generated CSS files from the `grunt` step.
- `theme/source/font/` — Font files.

## License

CC-BY-SA
