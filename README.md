# V3 External API Documentation

Complete API documentation for the V3 External API, built with [Docusaurus](https://docusaurus.io/).

## Quick Start

```bash
npm install
npm start
```

Visit `http://localhost:3000`

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

Starts dev server at `http://localhost:3000`. Hot reload enabled.

### Build

```bash
npm run build
```

Generates static files in `build/` directory.

### Preview Build

```bash
npm run serve
```

Preview production build locally.

## Docker Deployment

### Build Image

```bash
docker build -t v3-docs .
```

### Run Container

```bash
docker-compose up -d
```

Access at `http://localhost:3000`


## Versioning

Create new version:

```bash
npm run docusaurus docs:version 1.0.0
```

This snapshots current docs as version 1.0.0.

## Configuration

- `docusaurus.config.ts` - Main config
- `sidebars.ts` - Sidebar navigation
- `src/css/custom.css` - Custom styles


## Project Links

- **Repository**: [Yukthi-Systems/V3-External-API-Docs](https://github.com/Yukthi-Systems/V3-External-API-Docs)
- **Live Docs**: `https://v3-api.docs.yukthi.net/`

## Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-docs`
3. Commit changes: `git commit -am 'Add new documentation'`
4. Push: `git push origin feature/new-docs`
5. Open Pull Request

## License

Copyright © 2025 Yukthi Systems