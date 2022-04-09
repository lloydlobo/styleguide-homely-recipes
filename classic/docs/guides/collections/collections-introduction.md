---
id: introduction
title: Collections Introduction
sidebar_label: Introduction
slug: /collections-introduction
---

The **Collections** feature provides users with a way to organize recipe files in a hierarchical format.

## Hierarchy of Collections

```bash
homely-recipes # Root directory of your site
├── collections
│   ├── collection-1
│   │   ├── recipe-1.html
│   │   └── recipe-2.html
│   ├── collection-2
│   │   ├── recipe-1.html
│   │   └── recipe-2.html
│   ├── collection-3
│   │   ├── recipe-1.html
│   │   └── recipe-2.html
│   └── collection-4
│       ├── recipe-1.html
│       └── recipe-2.html
├── about.html
├── collections.html # Your Collections Home Page
├── contact.html
├── index.html # Main Home Page
.
```

## Collections Home Page

This page will be the home page when users visit: `https://your-recipe-website.com/collections.html`.

```html reference title="collections.html"
https://github.com/lloydlobo/homely-recipes/blob/main/collections.html#L1-L13
```

:::tip

To omit the trailing slash from the URL, enable **Asset optimization** to `true` in your Netlify **Site** settings.
This will remove `.html` from the URL while browsing the site.

:::

Now, the **Collections** home page URL will be `https://your-recipe-website.com/collections`.
