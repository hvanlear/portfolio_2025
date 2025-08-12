# Claude Reference - Hunter Van Lear Portfolio

## Project Overview
This is a Next.js portfolio website (portfolio_2025) for Hunter Van Lear, a UX Engineer/Web Developer/UI Designer. The project appears to be a new iteration or redesign of his existing portfolio at https://www.huntervl.com/.

## Professional Profile - Hunter Van Lear
- **Name**: Hunter Van Lear
- **Email**: hvanlear@gmail.com
- **Role**: UX Engineer, Web Developer, UI Designer, User Advocate
- **Current Portfolio**: https://www.huntervl.com/

### Skills & Expertise
- UI Design
- Product Design  
- UX Engineering
- Design Systems
- Front-end Development
- HTML/CSS
- Python
- Node.js
- PostgreSQL

### Notable Projects (from live portfolio)
1. **BPMN Modeler** - UI Design, Product Design
2. **Consumer Bank Account Opening** - HTML/CSS, UX Engineering
3. **ProcessMaker Design System** - Design Systems work
4. **Stephen King REST API** - Python, Node.js, PostgreSQL

### Professional Links
- LinkedIn
- Instagram  
- GitHub
- Dribbble

## Project Structure
This Next.js project follows a modern app router structure with:

### Key Directories
- `/app/` - Next.js app router pages with route groups for different sections
- `/components/` - Reusable React components organized by feature
- `/data/` - Static data files (JS modules) for content
- `/public/assets/` - Static assets including images, CSS, and fonts
- `/utlis/` - Utility functions for UI interactions

### Route Structure
- Main routes: `/`, `/about`, `/portfolio`, `/services`, `/blog`, `/contact`
- Dark mode variants: Each main route has a corresponding `-dark` version
- Portfolio detail pages: Dynamic routing for individual portfolio items

### Component Architecture
- **Home components**: Multiple hero variations and section components
- **Portfolio components**: Various portfolio display layouts and masonry grids
- **Blog components**: Blog listings, single post layouts, and comment systems
- **Common components**: Shared UI elements like animations, modals, parallax effects
- **Header/Footer**: Consistent navigation and social links

### Content Management
Static content is managed through JavaScript modules in `/data/`:
- `portfolio.js` - Portfolio projects and case studies
- `services.js` - Service offerings and capabilities
- `experience.js` - Professional experience timeline
- `education.js` - Educational background
- `skills.js` - Technical and design skills
- `testimonials.js` - Client testimonials and reviews
- `blogs.js` - Blog posts and articles

### Design System
- Multiple demo themes available (fancy, gradient, modern, etc.)
- Bootstrap-based responsive grid system
- Custom CSS with component-specific styling
- Font system using modern web fonts (Clash Display, HK Grotesk, Satoshi)
- Consistent iconography using Font Awesome and custom icon sets

### Technical Stack
- **Framework**: Next.js (React)
- **Styling**: Bootstrap + Custom CSS
- **Animations**: CSS animations, parallax effects, wow.js
- **Typography**: Multiple font families for design flexibility
- **Icons**: Font Awesome, custom icon fonts

## Development Notes
- Project uses app router (Next.js 13+)
- Responsive design with mobile-first approach
- Multiple theme variations for different aesthetic preferences
- Modular component architecture for easy maintenance
- Static content management for easy updates

## Portfolio Brand & Design
- Minimalist, professional aesthetic
- Grid-based layouts
- Neutral color palette with dark mode support
- Clean typography hierarchy
- Focus on showcasing work through high-quality project imagery