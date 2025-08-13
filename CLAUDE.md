# Claude Reference - Hunter Van Lear Portfolio

## Current Task Tracking

### Image Asset Cleanup Status
**Investigation Completed:** ✅
- **Total images:** 389 files (10MB)
- **Referenced in code:** 292 images  
- **Unused images:** 174 files (~800KB+ savings potential)
- **Missing images:** 77 files (referenced but don't exist)

**Cleanup Tasks:**
- [ ] Delete demo template artifacts (84 files, ~712KB)
- [ ] Remove unused client logos (17 files, ~88KB) 
- [ ] Clean up duplicate blog/portfolio images (26 files)
- [ ] Remove unused intro/showcase images
- [ ] Remove portfolio masonry images (14 files, 104KB)

**Critical Missing Images:**
- bank-account-* images (5 files)
- design-system-* images (5 files)
- api-architecture/database/endpoints.jpg (3 files)

### Multi-Purpose Dashboard Component Plan

**Vision:** A beautifully designed, multi-purpose dashboard widget with smooth animations and intuitive UX

#### Core Features:

1. **GitHub Recent Push Display**
   - Latest commit message with truncation
   - Author avatar and name
   - Relative timestamp ("2 hours ago")
   - Repository name and branch
   - Smooth slide-in animation on updates

2. **Local Time Display**
   - Current time with smooth second transitions
   - Date display with elegant typography
   - Timezone indicator
   - 12/24 hour format toggle

3. **Weather Widget**
   - **Icons:** Animated weather icons (sun, moon, clouds, rain, snow)
   - **Temperature:** Current temp with "feels like"
   - **Conditions:** Brief description ("Partly Cloudy")
   - **Day/Night:** Dynamic sun/moon based on local time
   - **Micro-animations:** Subtle icon animations (clouds drifting, rain drops)

4. **Project Status Kanban (Expandable)**
   - **Collapsed State:** Simple progress indicator (3/8 tasks)
   - **Expanded State:** Mini kanban with smooth slide-down
   - **Columns:** Todo, In Progress, Done
   - **Tasks:** Draggable cards with color coding
   - **Animations:** Smooth expand/collapse with spring physics

#### UX Design Principles:

**Visual Design:**
- **Glassmorphism:** Semi-transparent cards with blur effects
- **Dark/Light Mode:** Adaptive theming
- **Micro-interactions:** Hover states, loading spinners, transition effects
- **Typography:** Clean, readable fonts with proper hierarchy
- **Color Palette:** Subtle gradients, accent colors for status

**Layout & Spacing:**
- **Grid System:** CSS Grid for responsive layout
- **Card Design:** Rounded corners, subtle shadows, proper padding
- **Spacing:** Consistent spacing scale (8px, 16px, 24px, 32px)
- **Mobile-First:** Responsive design that works on all devices

#### Technical Architecture:

```
components/dashboard/
├── Dashboard.jsx              // Main container
├── GitHubCard.jsx            // Recent commit display  
├── TimeCard.jsx              // Local time widget
├── WeatherCard.jsx           // Weather with animated icons
├── KanbanCard.jsx            // Expandable project status
├── icons/
│   ├── WeatherIcons.jsx      // Animated SVG weather icons
│   └── StatusIcons.jsx       // GitHub, time, project icons
├── hooks/
│   ├── useGitHub.js          // GitHub API integration
│   ├── useWeather.js         // Weather API integration
│   └── useLocalTime.js       // Time management
└── dashboard.module.css      // Component styles
```

#### API Integrations:
- **GitHub API:** `/repos/{owner}/{repo}/commits` for recent pushes
- **Weather API:** OpenWeatherMap or WeatherAPI for current conditions
- **Local Storage:** Project tasks and user preferences

#### Animation & Interactions:
- **Spring Animations:** React Spring for smooth transitions
- **Stagger Effects:** Cards animate in with slight delays
- **Loading States:** Skeleton loaders while fetching data
- **Hover Effects:** Subtle scale/glow on interactive elements
- **Auto-refresh:** Smart polling with exponential backoff

#### Implementation Priority:
1. **Phase 1:** Basic layout and time widget
2. **Phase 2:** GitHub integration and weather display
3. **Phase 3:** Kanban functionality and animations
4. **Phase 4:** Polish, micro-interactions, and themes

---

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

## Recent Development Updates

### Portfolio Data Structure Overhaul
- **Cleaned portfolio data**: Removed 600+ lines of template content, focusing on Hunter's 4 real projects
- **Enhanced data structure**: Added `detailedProjects` array with comprehensive project information
- **Real project integration**: BPMN Modeler, Consumer Bank Account Opening, ProcessMaker Design System, Stephen King REST API

### BPMN Modeler Project Enhancement
- **Live site analysis**: Reviewed https://www.huntervl.com/archive/modeler for authentic content
- **Image assets**: Downloaded 6 high-quality images (main, before/after, 3 menu rails)
- **Content upgrade**: Enhanced descriptions, challenges, solutions, features, and outcomes
- **Hero background**: Circuit board image from Unsplash for technical aesthetic

### Enhanced Portfolio Single Page
- **Dynamic content sections**: Challenge, Solution, Features/Outcomes with conditional rendering
- **Visual storytelling**: Before/after comparison, stacked visual layout for menu components
- **Proper spacing**: Bootstrap grid system with consistent margins and responsive design
- **Image showcase**: Large, impactful images (700px) with alternating left/right layout

### Reusable Modal System
- **ImageModal component**: Bootstrap 5 modal for full-size image viewing
- **ClickableImage component**: Hover effects and modal triggers
- **Cross-project usage**: Scalable system for all portfolio projects
- **Professional UX**: Click-to-zoom functionality matching industry standards

### Technical Improvements
- **Bootstrap 5 integration**: Proper card components, modal system, responsive utilities
- **Image optimization**: Consistent sizing, lazy loading, aspect ratio preservation
- **Component architecture**: Reusable components in `/components/common/`
- **File organization**: Clean separation of concerns with proper imports

### Content Quality
- **Strategic storytelling**: Problem → Solution → Impact narrative structure
- **Professional presentation**: Design case study format with detailed explanations
- **Visual hierarchy**: Proper heading structure, consistent typography, scannable content
- **Mobile responsiveness**: Proper stacking, spacing, and touch targets