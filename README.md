# MAN 1 Kota Bima Website

Official website for MAN 1 Kota Bima (Madrasah Aliyah Negeri 1 Kota Bima) built with Next.js and TypeScript.

## Features

- 📰 Dynamic blog/news system with markdown posts
- 🏫 School information and administration
- 👨‍🏫 Teacher profiles and staff directory
- 📱 Responsive design with modern UI
- ⚙️ Configurable settings through TypeScript
- 🎨 Custom slider and image galleries
- 📄 Static pages for school information

## Tech Stack

- **Framework**: Next.js 13+ with TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown with gray-matter for frontmatter
- **Image Processing**: Sharp for optimization
- **Icons**: Font Awesome
- **AI Integration**: OpenAI/DeepSeek for content processing

## Project Structure

```
├── _pages/                 # Static pages (markdown)
├── _posts/                 # Blog posts (markdown)
├── pages/                  # Next.js pages
│   ├── admin/             # Admin interface
│   ├── pages/             # Dynamic page routes
│   └── posts/             # Blog post routes
├── lib/                   # Utility functions
├── interfaces/            # TypeScript interfaces
├── public/                # Static assets
└── settings.ts            # Site configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn or npm

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd website-man1kotabima.sch.id
```

2. Install dependencies
```bash
yarn install
# or
npm install
```

3. Run the development server
```bash
yarn dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn typecheck` - Run TypeScript type checking

## Configuration

The site is configured through `settings.ts` which includes:

- School information (name, logo, contact details)
- Navigation menu structure
- Teacher profiles
- Slider content
- Social media links
- Quick links and popular resources

## Content Management

### Blog Posts

Posts are stored in `_posts/` directory as markdown files with frontmatter:

```markdown
---
title: "Post Title"
excerpt: "Brief description"
coverImage: "https://example.com/image.jpg"
date: "2025-01-01T00:00:00.000Z"
author:
  name: "Author Name"
  picture: "https://example.com/author.jpg"
---

Post content here...
```

### Static Pages

Static pages are stored in `_pages/` directory and can be referenced in the navigation menu through `settings.ts`.

## Admin Interface

The admin interface is located at `/admin` and includes:

- AI-powered content creation
- URL-based post generation
- Content management tools

## Deployment

### Build for Production

```bash
yarn build
```

### Deploy to Vercel

The project is optimized for Vercel deployment:

1. Connect your repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push to main branch

### Other Platforms

For other platforms, ensure Node.js 18+ support and run:

```bash
yarn build
yarn start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run type checking: `yarn typecheck`
5. Submit a pull request

## License

This project is private and belongs to MAN 1 Kota Bima.

## Contact

- **School**: MAN 1 Kota Bima
- **Address**: Jln. Seruni No.06 Kota Bima
- **Phone**: (0374) 42434
- **Email**: info@man1kotabima.sch.id