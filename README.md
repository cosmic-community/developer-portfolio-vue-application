# Developer Portfolio Vue Application

![App Preview](https://imgix.cosmicjs.com/c897cfe0-ebac-11f0-a31c-ad849e04e6f2-photo-1557821552-17105176677c-1767778777784.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive developer portfolio application built with Vue.js 3 and Cosmic CMS. Showcase your projects, work experience, skills, and client testimonials through a beautiful single-page application.

## Features

- ⚡ **Vue.js 3 with Composition API** - Modern reactive framework with script setup syntax
- 🎨 **Tailwind CSS Styling** - Beautiful, responsive design with utility-first CSS
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop viewing
- 🚀 **Dynamic Content** - All content managed through Cosmic CMS
- 💼 **Project Showcase** - Display your best work with images, descriptions, and live URLs
- 👔 **Work Experience Timeline** - Professional journey with company logos and achievements
- 🛠️ **Skills Matrix** - Categorized technical skills with proficiency levels
- 💬 **Client Testimonials** - Social proof with ratings and project references
- ⚡ **Fast Performance** - Optimized loading with Vue Router and component-based architecture
- 🎯 **SEO Friendly** - Proper meta tags and semantic HTML structure

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=695e26d8260c7ebb13e4e2c0&clone_repository=695e2ad8260c7ebb13e4e66d)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a web developer portfolio with projects, skills, work experience, and testimonials"

### Code Generation Prompt

> Develop a Vue.js application that uses my existing object types and objects

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Vue.js 3** - Progressive JavaScript framework
- **Vue Router** - Official router for Vue.js
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic SDK** - Headless CMS integration
- **TypeScript** - Type-safe JavaScript
- **Marked** - Markdown parsing for descriptions

## Getting Started

### Prerequisites

- Node.js 18+ or Bun runtime
- Cosmic account with bucket set up
- Git for version control

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd developer-portfolio-vue
```

2. Install dependencies:
```bash
bun install
```

3. Create a `.env` file in the root directory:
```env
VITE_COSMIC_BUCKET_SLUG=your-bucket-slug
VITE_COSMIC_READ_KEY=your-read-key
```

4. Start the development server:
```bash
bun run dev
```

5. Open your browser to `http://localhost:5173`

## Cosmic SDK Examples

### Fetching Projects

```typescript
import { cosmic } from './lib/cosmic'

// Get all projects with depth=1 for connected objects
const response = await cosmic.objects
  .find({ type: 'projects' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const projects = response.objects
```

### Fetching Work Experience

```typescript
// Get work experience sorted by start date
const response = await cosmic.objects
  .find({ type: 'work-experience' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const experiences = response.objects.sort((a, b) => {
  const dateA = new Date(a.metadata.start_date).getTime()
  const dateB = new Date(b.metadata.start_date).getTime()
  return dateB - dateA // Newest first
})
```

### Fetching Skills by Category

```typescript
// Get all skills
const response = await cosmic.objects
  .find({ type: 'skills' })
  .props(['id', 'title', 'slug', 'metadata'])

const skills = response.objects

// Group by category
const skillsByCategory = skills.reduce((acc, skill) => {
  const category = skill.metadata.category?.key || 'other'
  if (!acc[category]) {
    acc[category] = []
  }
  acc[category].push(skill)
  return acc
}, {} as Record<string, Skill[]>)
```

### Fetching Testimonials

```typescript
// Get testimonials with project references
const response = await cosmic.objects
  .find({ type: 'testimonials' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1) // Include connected project objects

const testimonials = response.objects
```

## Cosmic CMS Integration

This application uses the Cosmic SDK to fetch content from your Cosmic bucket. All content is dynamically loaded, so you can update your portfolio by simply editing content in the Cosmic dashboard.

### Content Types Used

- **Projects** - Your portfolio projects with images, descriptions, technologies, and URLs
- **Work Experience** - Your professional work history with dates, companies, and achievements
- **Skills** - Your technical skills organized by category with proficiency levels
- **Testimonials** - Client feedback with ratings and project references

### Environment Variables

The application requires these environment variables (automatically set in Cosmic deployments):

- `VITE_COSMIC_BUCKET_SLUG` - Your Cosmic bucket slug
- `VITE_COSMIC_READ_KEY` - Your Cosmic read API key

Note: In Vite applications, environment variables must be prefixed with `VITE_` to be exposed to the client.

## Deployment Options

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Connect repository in Netlify
3. Build command: `bun run build`
4. Publish directory: `dist`
5. Add environment variables
6. Deploy

### Build for Production

```bash
bun run build
```

The production build will be in the `dist` directory.

## Project Structure

```
├── src/
│   ├── assets/          # Static assets
│   ├── components/      # Vue components
│   ├── lib/            # Utility functions and Cosmic SDK
│   ├── router/         # Vue Router configuration
│   ├── views/          # Page components
│   ├── App.vue         # Root component
│   └── main.ts         # Application entry point
├── public/             # Public static files
├── index.html          # HTML entry point
└── package.json        # Dependencies and scripts
```

## Learn More

- [Vue.js Documentation](https://vuejs.org/)
- [Cosmic Documentation](https://www.cosmicjs.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)

<!-- README_END -->