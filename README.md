# Whistle Aligners Frontend Assessment

A production-quality React 18 + Vite landing page implementation for the Whistle invisible aligners assessment. The UI follows the provided desktop and mobile Figma screenshots, uses plain CSS, and integrates dynamic product data from DummyJSON.

## Features

- React functional components with hooks only.
- Plain CSS architecture with variables, responsive grids, hover states, focus styles, and keyframe phone animation.
- API-driven product/result/testimonial cards from `https://dummyjson.com/products`.
- Loading, error, and empty states for dynamic content.
- Accessible booking form with required field validation and numeric-only phone entry.
- Accessible accordion where only one FAQ is open at a time.
- Semantic landmarks, alt text, ARIA attributes, keyboard-friendly controls, and visible focus rings.
- Responsive layouts for desktop, laptop, tablet, and mobile without horizontal scrolling.

## Installation

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Folder Structure

```text
src/
  assets/
  components/
    Navbar/
    Hero/
    BookingForm/
    OfferStrip/
    Results/
    FAQ/
    Footer/
    common/
  services/
  hooks/
  utils/
  App.jsx
  main.jsx
```

Each feature component has its own `Component.jsx` and `Component.css` file to keep responsibilities isolated and maintainable.

## API Used

The app fetches products from DummyJSON via `src/services/api.js`. `src/hooks/useProducts.js` owns the asynchronous state machine: loading, success, empty, and error.

## Design Decisions

- The Figma screenshots were decomposed into reusable landing-page sections: navbar, offer strip, hero, booking form, pricing overview, results, reasons to choose Whistle, difference cards, comparison table, process steps, doctor-led proof, testimonials, FAQ, and footer.
- DummyJSON product imagery is mapped into the results/testimonial UI so cards are never hardcoded.
- CSS variables centralize colors, shadows, and spacing while each component keeps local layout styles in its own CSS file.
- Decorative image areas use lightweight gradients and semantic `role="img"` labels where real assessment image assets were not available in the repository.

## Accessibility

- Semantic `header`, `nav`, `main`, `section`, `form`, and `footer` structure.
- Clickable phone links use `tel:01169328350`.
- Form fields have labels and validation errors.
- FAQ buttons expose `aria-expanded` and are keyboard-operable.
- Interactive elements include visible focus outlines and hover transitions.

## Responsiveness

- Fluid typography with `clamp()`.
- CSS Grid/Flexbox layouts collapse at tablet and mobile breakpoints.
- Sticky booking actions stack on smaller screens.
- Cards and images scale to avoid horizontal scrolling.

## Future Improvements

- Replace gradient placeholders with final exported Figma image assets.
- Add automated accessibility tests with axe.
- Add unit tests for form validation and accordion behavior.
- Add route-level code splitting if the project expands beyond a landing page.
