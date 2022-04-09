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

### Custom Font sizes

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

#### Generating your font size type scale

1. For setting your own type-scale, visit https://www.fluid-type-scale.com/
2. Next copy and paste the code generated from there over into your `style.css` file.

### Inbuilt Font sizes

```css
/* * typography */
.display-large {
  font-size: clamp(1em, 0.9rem + 11.3472vw, 14.7125rem); /* 221px */
  line-height: 0.8;
  letter-spacing: 0.0618ch;
}

/* 1.38125x less than large */
.display-medium {
  font-size: clamp(2.65rem, 1rem + 8.6vw, 10rem); /* 160px */
  line-height: 1;
}

.display-small {
  font-size: clamp(2.65rem, 1rem + 4.6vw, 6.17969rem);
  line-height: 1;
}

.display-smaller {
  font-size: clamp(2.65rem, 1rem + 2.7vw, 6.17969rem);
  line-height: 1;
  font-weight: 800;
  text-transform: uppercase;
}

.display-large,
.display-medium,
.display-small {
  text-align: center;
}

.display-medium,
.display-small,
.display-smaller {
  color: var(--mdc-theme-primary, #9c413d);
}

/* uppercase and set font weight to 900 */
.display-large,
.display-medium,
.display-small,
.title-large,
.title-medium,
.title-small {
  text-transform: uppercase;
  font-weight: 900;
  font-variation-settings: "wght" var(--display-heading-weight, 900);
}

.headline-large {
  font-size: clamp(1.68056rem, 1rem + 4.16667vw, 4.752875rem); /* 76.046px */
  line-height: 1.2;
  color: #201a19;
}

.headline-medium {
  font-family: "Work Sans";
  font-size: 47px;
  line-height: 1.04;
}

.headline-small {
  font-family: "Work Sans";
  font-size: clamp(1.68106rem, 1.68106rem + 0.688978vw, 2.3rem); /* 30px */
  line-height: 1.2;
}

.headline-large,
.headline-medium,
.headline-small,
.sub-headline-medium {
  font-weight: 700;
}

.sub-headline-medium {
  font-size: clamp(1rem, 0.6rem + 1.025vw, 1.4375rem); /* 23px */
  line-height: 30px;
  letter-spacing: 0.25px;
  text-transform: uppercase;
}

.title-large {
  font-size: 120px;
  line-height: 120px;
  letter-spacing: -0.25px;
}

.title-medium {
  font-size: 90px;
  line-height: 72px;
}

.title-small {
  font-size: clamp(1.68056rem, 1rem + 2.75167vw, 3.4765rem); /* 55.6242 */
  line-height: 1.2;
}

.body-large {
  font-weight: 600;
  font-size: 30px;
  line-height: 30px;
  letter-spacing: 0.5px;
}

.body-medium {
  font-weight: 400;
  font-size: clamp(1.4375rem, 0.775rem + 0.618vw, 1.4375rem); /* 23px */
  line-height: 30px;
  letter-spacing: 0.25px;
}

.body-small {
  font-weight: 400;
  font-size: var(--body-small, clamp(1rem, 0.9rem + 0.25vw, 1.25rem));
  line-height: 1.5;
  letter-spacing: 0.4px;
}
```
