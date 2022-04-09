---
sidebar_label: "Brand Style"
---

# Style Guide Overview

Welcome to the style guide overview. You can find all the style guide sections here.

## Typography

### Font family

```css
--ff-cursive: "Parisienne", cursive; /* Logo */
--ff-sans: "Work Sans", Helvetica, Arial, sans-serif; /* Body */
```

### Font sizes

```css
/* fluid-type-scale - type-scale-ration: 1.618, min-width: 320px, max-width: 1920px */
--fs-100: clamp(0.2656rem, 0.0738vw + 0.2508rem, 0.3394rem);
--fs-200: clamp(0.4297rem, 0.1194vw + 0.4059rem, 0.5491rem);
--fs-300: clamp(0.6953rem, 0.1931vw + 0.6567rem, 0.8884rem);
--fs-400: clamp(1.125rem, 0.4464vw + 1.0357rem, 1.4375rem);
--fs-500: clamp(1.8203rem, 0.5056vw + 1.7191rem, 2.3259rem);
--fs-600: clamp(2.9452rem, 0.8181vw + 2.7815rem, 3.7633rem);
--fs-700: clamp(4.7653rem, 1.3237vw + 4.5005rem, 6.089rem);
--fs-800: clamp(7.7102rem, 2.1417vw + 7.2819rem, 9.8519rem);
--fs-900: clamp(12.4751rem, 3.4653vw + 11.7821rem, 15.9404rem);
--fs-1000: clamp(20.1848rem, 5.6069vw + 19.0634rem, 25.7916rem);
```

#### Generating your font-size type scale

1. For setting your own type-scale, visit https://www.fluid-type-scale.com/
2. Next copy and paste the code generated from there over into your `style.css` file.
