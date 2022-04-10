---
id: html-elements
title: Semantic HTML Element
slug: /semantics-html-element
---

Common Semantic HTML elements are used for building a **navigable and accessible** functional website. This allows for great user experience and accessibility. Also, **site crawlers** love semantic elements, which benefit **SEO**.

:::tip

Remember that the quality of your **content** dictates how you **rank** your website on **search engines** like Google.

So **don't worry** too much about getting everything right when starting. Build a minimum viable product first and then iterate on it.

:::

## Commonly used semantic HTML elements

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="article" label="<article>" default>
    The <code>article</code> HTML element represents a self-contained structure within a document, page, application, or website and is intended for independent distribution or reuse (such as syndication). Examples include forum posts, magazine and newspaper articles and blog posts, product cards, user-submitted comments, interactive widgets and gadgets, and other independent content. 
  </TabItem>
  <TabItem value="aside" label="<aside>" default>
    The <code>aside</code> HTML element represents part of the document whose content is only indirectly related to the main content of the document. The <code>aside</code> is often displayed as a sidebar or callout box. 
  </TabItem>
  <TabItem value="details" label="<details>" default>
    The <code>details</code> HTML element creates a disclosure widget that displays information only when the widget is in the "open" state. A summary or description must be provided on the element. Normally, disclosure widgets are displayed on the screen with a small triangle that rotates (or rotates) to indicate the open / closed state, with a caption next to the triangle. The content of the element is used as the label for the disclosure widget. 
  </TabItem>
  <TabItem value="figcaption" label="<figcaption>" default>
    The <code>figcaption</code> HTML element represents a caption or caption that describes the rest of the content of the parent figure element. 
  </TabItem>
  <TabItem value="figure" label="<figure>" default>
    The <code>figure</code> HTML element represents standalone content and may have optional captions specified using the figcaption element. Charts, their labels, and their contents are called units. 
  </TabItem>
  <TabItem value="footer" label="<footer>" default>
    The <code>footer</code> HTML element represents the footer of the content in the next section or the root element in the next section. The footer usually contains information about the author of the section, copyright information, or links to related documentation. 
  </TabItem>
</Tabs>

<Tabs>
  <TabItem value="header" label="<header>" default>
    The <code>header</code> HTML element represents an introductory content, usually a set of introductory or navigation aids. It may contain some heading elements, but it may also contain logos, search forms, author names, and other elements. 
  </TabItem>
  <TabItem value="main" label="<main>" default>
    The <code>main</code> HTML element represents the main content of the <code>body</code> of the document. The main content area consists of content that is directly related to or extends from the central theme of the document or the core functionality of the application. 
  </TabItem>
  <TabItem value="mark" label="<mark>" default>
    The <code>mark</code> HTML element represents text marked or highlighted for reference or notational purposes because of the relevance or importance of passages marked in the surrounding context.
  </TabItem>
  <TabItem value="nav" label="<nav>" default>
    The <code>nav</code> HTML element represents a section of the page intended to provide navigation links within the current document or to other documents. Typical examples of navigation sections are tables of contents, menus, and indexes. 
  </TabItem>
  <TabItem value="section" label="<section>" default>
    The <code>section</code> HTML element represents a general standalone section of the document that does not have a specific semantic element to represent it. With a few exceptions, sections should always have headings. 
  </TabItem>
  <TabItem value="summary" label="<summary>" default>
    The <code>summary</code> HTML element specifies a summary, title, or legend for the disclosure field of the <code>detail</code> element. Click a <code>summary</code> item to toggle the status of the parent <code>details</code> element, open or closed. 
  </TabItem>
  <TabItem value="time" label="<time>" default>
    The <code>time</code> HTML element represents a specific time period. You can include a `datetime` attribute that converts the date to machine-readable format. This improves custom features such as search engine results and reminders.
  </TabItem>
</Tabs>


:::note

Credits for the above goes to [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) for inspiration and data.  
For more [elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) check out resources from MDN.

:::

