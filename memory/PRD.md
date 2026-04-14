# Thryve Coworking - Landing Page PRD

## Original Problem Statement
Build a conversion-optimized landing page for Thryve Coworking (Faridabad) using an orange and blue color scheme. Must include sections for Hero, About, Amenities, Pricing, Gallery, Team, and Contact. The user explicitly decided to remove the backend/MongoDB dependencies to deploy a static frontend site to Netlify.

## Architecture
- **Frontend-only**: React + Tailwind CSS + Custom CSS animations + react-helmet-async (SEO)
- **No backend/database**: Static site for Netlify deployment
- **Multi-page routing**: /, /pricing, /amenities, /contact, /gallery via BrowserRouter

## Components
- IntroScreen (animated "Hello Faridabad!" entry)
- Header (context-aware: scroll nav on homepage, link nav on sub-pages)
- Hero (with user's uploaded background image)
- About (with user's uploaded meeting room image)
- Amenities (16 items incl. Podcast & Recording Studio, with user's uploaded image)
- Pricing (Hot Desk 6,000 / Dedicated Desk 6,500 / Private Office 42,000)
- GalleryPreview (4 preview images + "View Full Gallery" button)
- Gallery (full 11 images from user's actual photos)
- Team (company values)
- Contact (WhatsApp, Email buttons, click-to-call phone, Google Maps embed + link)
- Footer (Quick Links: Home, About Us, Amenities, Pricing Plans, Gallery, Our Team, Contact Us, Blog, Sitemap)

## Pages
- Home (/) - All sections
- PricingPage (/pricing) - Hero banner + Pricing + Contact
- AmenitiesPage (/amenities) - Hero banner + Amenities + Contact
- ContactPage (/contact) - Hero banner + Contact
- GalleryPage (/gallery) - Full 11-image gallery

## What's Been Implemented
- All sections with user's actual uploaded photos (customer-assets.emergentagent.com)
- SEO meta tags via react-helmet-async on all pages
- Gallery section between Pricing and Team on homepage
- Multi-page routing with context-aware header navigation
- Footer with Blog link to thryvecoworking.medium.com
- WhatsApp & Email CTA buttons with iOS-compatible email fallback
- Click-to-call phone numbers
- Google Maps embed in Contact section showing Thryve Coworking pin
- Google Maps link button (maps.app.goo.gl)
- Intro screen animation with orange glow
- GSTIN and Udyam Reg in footer
- Sitemap.xml

## Completed (Apr 14, 2026)
- Resolved git merge conflict markers in App.js and App.css
- Restored Gallery section, all user-uploaded photos, multi-page routing
- Restored Footer links (Home, Pricing Plans, Contact Us, Blog)
- Added Google Maps embed in Contact section

## Known Limitations
- WhatsApp/Email links may show security errors in Emergent preview iframe (works on live Netlify)

## Backlog
- None currently requested
