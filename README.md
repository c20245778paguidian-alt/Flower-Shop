# Bloom & Bliss Flower Shop

**Live site:** https://github.com/c20245778paguidian-alt/Flower-Shop.git

## About

Bloom & Bliss Flower Shop is a responsive website designed to showcase beautiful flower arrangements and bouquets. It allows customers to explore available products, learn about the shop, and send inquiries through the contact section.

## Design System

### Palette (60-30-10)

| Role | Share | Color | Used for |
|---|---|---|---|
| Dominant | 60% | `#FFF9F5` | Main page background |
| Secondary | 30% | `#FFF0F3` | Cards, sections, and navigation |
| Accent | 10% | `#E8A6B5` | Buttons, links, and highlights |

### Visual style

**Style chosen:** Minimalism with an elegant floral aesthetic.

**Why I chose it:** I chose this style to create a clean, soft, and welcoming design that highlights the beauty of the flower arrangements without making the website look crowded.

### Contrast check

Body text color vs. background color: `#633B4A` on `#FFF9F5`

Contrast ratio: approximately **8.4 : 1** (needs to be at least 4.5 : 1)

Tool used: WebAIM Contrast Checker

## Features

- [x] Mobile-first responsive layout
- [x] Dark mode toggle
- [x] Page-load intro animation (GSAP timeline)
- [x] Scroll reveals on every section below the hero (ScrollTrigger)
- [x] Scroll progress bar (scrub)
- [x] Reduced-motion support

## Built With

- HTML
- Tailwind CSS
- JavaScript
- GSAP 3.13.0
- GSAP ScrollTrigger 3.13.0
- Google Fonts (Poppins)

## Project Structure

```text
bloom-bliss-flower-shop/
├── index.html
├── README.md
└── .gitignore
```

## How to Run

1. Download or clone the project.
2. Open the project folder in Visual Studio Code.
3. Install the Live Server extension.
4. Right-click `index.html`.
5. Select **Open with Live Server**.

## GitHub Setup

1. Create a new repository on GitHub.
2. Upload your project files or push them using Git.
3. Open your repository's **Settings**.
4. Select **Pages**.
5. Under Build and deployment, select **Deploy from a branch**.
6. Choose the `main` branch and `/ (root)` folder.
7. Click **Save**.
8. Wait for GitHub Pages to publish your website.

## Notes

- The contact form is a front-end demonstration and does not send actual messages.
- Product prices and images are sample content.
- Tailwind CSS is loaded using its browser CDN for this project.