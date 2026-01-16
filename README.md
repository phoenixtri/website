# Phoenix Tri Website

Official website for Phoenix Triathlon Club, Guildford's friendly triathlon club.

Deployed automatically to **phoenixtri.co.uk** via GitHub Pages.

## Quick Start

1. Edit content (see `docs/Edit-instructions.md`)
2. Test locally: `./serve.sh`
3. Commit and push to `main` branch
4. GitHub Pages automatically builds and deploys (1-3 minutes)

## Development

### Prerequisites

- Ruby 3.2+ 
- Bundler

### Setup

```bash
bundle install
```

### Running the Development Server

```bash
./serve.sh
```

Or manually:

```bash
RUBYOPT="-r$PWD/ruby32_compat_preload.rb" bundle exec jekyll serve --livereload --host 127.0.0.1 --port 4000
```

The site will be available at:
- Website: http://127.0.0.1:4000
- LiveReload: Port 35729 (automatically refreshes browser on file changes)

### Ruby 3.2+ Compatibility

**For local development only**: This site uses compatibility patches to work with Ruby 3.2+. 

The patches are automatically loaded by `serve.sh` and are **not needed** for GitHub Pages deployment (GitHub handles compatibility in their build environment).

See `.ai/docs/ruby-compatibility-fixes.md` for technical details.

## Deployment

Changes pushed to the `main` branch are **automatically deployed** to phoenixtri.co.uk via GitHub Pages.

- Build time: 1-3 minutes
- Check status: Repository → Actions tab
- Custom domain: Configured via `CNAME` file

See `.ai/docs/github-pages-deployment.md` for complete deployment documentation.

## Editing Content

See `docs/Edit-instructions.md` for detailed instructions on updating:
- Race information
- Team members
- Sponsors
- Results
- And more

## Technology Stack

- Jekyll 3.9.0 (via github-pages gem)
- Liquid templating
- GitHub Pages compatible
- Responsive design

