---
id: configuration
title: Configuration
description: Learn how to configure your site.
sidebar_label: "Configuration"
---

Congrats on installing and forking the repository! You'll be building your website in a few minutes.

Now, Homely Recipes has a unique take on configurations.

## Initial Site Configuration

It's essential to start with small steps and gradually build up to a full-fledged configuration. 

:::note

Our purpose here is to **get your website Live first**. Later on, we'll edit it to our heart's content.

:::

### Opening the repository

1. First open the forked or cloned repository with either Github desktop or the CLI.
2. `cd` into the cloned directory and type `code .` or click on **Open in Visual Studio Code** in GitHub Desktop Application.
3. Then open the File Explorer in VS Code with the keyboard shortcut `CMD+Shift+E`.

### Making name changes to the logo

4. Locate the folder `js/components/`.
5. Open the file `logo.js`.
6. Then change the name of the website logo in `<span>` "Homely" to "My-Custom-Name".
```js reference 
https://github.com/lloydlobo/homely-recipes/blob/main/js/components/logo.js#L33-L35 
```
7. If you know what you are doing, a quicker way is to use your IDE's search engine to find the word "Homely" everywhere and replace it with your own.

### Saving and making a Git commit
8. **Save** your files.
9. Then open GitHub Desktop and type in a commit message: `Update logo and site title` in the **Summary** field.
:::tip
You can describe the changes too in the **Description** field below the **Summary** field (_required by default_).
:::
11. Click on the button `Commit to main`.
10. Then click on `Push origin` and you are done!


<!-- :::note

For the author: 

- Find a way to change the name of logo to a variable.
- Explain Netlify Forms

::: -->
## Publishing your site

At this pont, you can **publish your website** to a service like **Netlify** or **GitHub Pages**. It takes few clicks and you are ready to go.

### Hosting on a service 

- [GitHub Pages](#hosting-on-github-pages)
- [Netlify](#hosting-on-netlify)
<!-- - Render -->
<!-- - Vercel -->

:::note

For details about these services, read the following documentations:
- https://pages.github.com/
- https://docs.netlify.com/get-started/

:::

### Hosting on GitHub Pages

:::caution

>[GitHub Pages sites are publicly available on the internet by default, even if the repository for the site is private or internal](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site) — [Source](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site)

:::

1. Visit your GitHub repository.
1. Under your repository name, click **Settings**.
1. Click on **Pages** under "Code and automation."
1. Under **Source**, in the default branch **main** select a folder as your publishing source.
1. Click on **/root** as that source folder.
1. Finally click **Save**.

:::tip

[Check this Visual Guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) for more details.

:::


### Hosting on Netlify

:::note

Hosting on Netlify requires a [GitHub](https://github.com/) or [GitLab](https://about.gitlab.com/) account.

:::

#### Outcome

- You will **clone** your project code from your **GitHub** **_website-recipe_** repository to **Netlify**.
- Use the **Netlify UI** to create a new site.

#### Steps

1. Go to the **Deploy to Netlify** section. 
2. Click the **Deploy to Netlify** button. 
  
  To build a new site, you'll be taken to the Netlify app. A screen will appear, inviting you to connect to GitHub.
3. To authenticate, choose **Connect to GitHub**. 
  
  This method creates a Netlify user account if you don't have one.
4. Select **Save & Deploy** from the drop-down menu. 
5. Once the deployment is complete, you'll receive a **production URL** through which you can browse the website.
6. You may _alter the URL_ by going to **Site settings** > **Site detail**s > **Site information** in the Netlify UI and changing the site's name.

## Next Steps

Wow! That's a lot! **Congratulations** on publishing your website. Your efforts are paying off.

:::tip

We still have **some** work to do. Once you have finished all this will seem like a small task.
:::

In the next pages, we will do the following: 

1. **Learn and navigate** your site's file structure or hierarchy.
2. Edit your code to **customize the site**.
3. Learn about some **valuable features** now that we've published a site on Netlify and generated a public URL.
