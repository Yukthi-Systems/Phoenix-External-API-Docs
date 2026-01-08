# V3 External API Documentation

High-performance REST API documentation for email infrastructure management built with Docusaurus.


## 🚀 Features

- **Modern UI**: Clean, responsive design with dark/light theme support
- **Interactive Documentation**: Comprehensive API reference with code examples
- **Mobile Friendly**: Optimized for all devices
- **Easy Updates**: Just edit markdown files to update docs

## 📋 Prerequisites

- Node.js 18.0 or higher
- npm or yarn

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/Yukthi-Systems/V3-External-API-Docs.git

# Navigate to the project
cd V3-External-API-Docs

# Install dependencies
npm install
```

## 🏃 Local Development

```bash
# Start development server
npm start
```

Visit `http://localhost:3000` to view the documentation.

## 🏗️ Build

```bash
# Build for production
npm run build

# Serve built files locally
npm run serve
```

## 📁 Project Structure

```
V3-External-API-Docs/
├── docs/                  # Documentation markdown files
│   ├── intro.md
│   └── api/              # API endpoint documentation
├── src/
│   ├── pages/            # Custom pages
│   │   └── index.tsx     # Homepage
│   ├── css/              # Custom styles
│   └── theme/            # Custom components
│       ├── Footer/
│       └── Navbar/
├── static/               # Static assets
│   └── img/             # Images and logos
├── docusaurus.config.ts  # Docusaurus configuration
└── sidebars.ts           # Sidebar configuration
```

## ✏️ Adding Documentation

1. Create a new `.md` file in the `docs/` directory
2. Add frontmatter:
   ```md
   ---
   id: your-doc-id
   title: Your Title
   sidebar_position: 1
   ---
   
   Your content here...
   ```
3. Update `sidebars.ts` if needed
4. Commit and push changes

## 🎨 Customization

### Styling
Edit `src/css/custom.css` to customize colors, fonts, and layouts.

### Components
Override default components in `src/theme/` directory.

### Configuration
Modify `docusaurus.config.ts` for site-wide settings.


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Live Documentation](https://v3-api.docs.yukthi.net)
- [Report Issues](https://github.com/Yukthi-Systems/V3-External-API-Docs/issues)
- [Docusaurus Documentation](https://docusaurus.io/)

## 💡 Support

For questions or support, please [open an issue](https://github.com/Yukthi-Systems/V3-External-API-Docs/issues).

---

**Built with ❤️ by Yukthi Systems**