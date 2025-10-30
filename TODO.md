# Logo Animation Implementation

## Tasks

- [x] Edit src/components/Header.jsx to add hover animation: logo black by default, color on hover, title appears on hover
- [x] Edit src/components/Footer.jsx to add hover animation: logo black by default, color on hover, title appears on hover
- [x] Test the hover effects by running the development server

## Information Gathered

- Logo SVG is black in assets, but inline SVGs in Header and Footer use gradients with animations.
- Header: Logo and title in Link, always visible with gradient.
- Footer: Logo and title in div, similar setup.

## Plan

- Wrap logo and title in group div for hover effects.
- Set SVG fill to black by default.
- On group-hover, change fill to gradient and show title with opacity transition.
- Apply to both Header and Footer components.

## Dependent Files

- src/components/Header.jsx
- src/components/Footer.jsx

## Followup Steps

- Run `npm run dev` to test hover animations.
