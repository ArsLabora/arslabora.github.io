# Eleven Countries

A multi language starter for Eleventy with TailwindCSS. Check out [Eleven Countries](https://github.com/arslabora-xi/eleven-countries/)!

## Features

- Multi Language Content
- Build sites faster with the power of [Eleventy](https://www.11ty.dev/docs/), [TailwindCSS](https://tailwindcss.com) and SCSS
- [Laravel Mix](https://laravel-mix.com/docs/5.0/basic-example) (Webpack) to watch, concatenate and compile styles and scripts
- HTML minifier
- Purgecss for removing unused CSS
- ES6 support with Babel
- SEO friendly pages (including Open Graph and Twitter meta)
- Image lazyloading
- A simple blog with categories and featured images

## Requirements

Node `>=` v8.9.0

## Installation

```
yarn
```

To start the development server (and Mix), run `yarn dev` command in terminal. Eleventy has hot reloading baked in and will automatically watch your template files for changes. Mix will watch any changes to the JS and SCSS files.

## Folder Structure

The `site` folder contains all the templates, partials and content - which Eleventy will parse into HTML for us.

Each page exists in it's own folder, inside site/content/, having a copy for each languages, suffixed by the language code before the extension: about/about.en.njk, about/informazioni.it.njk, etc...
The name of the inner template will be used to have localized url (/eb/about, /it/informazioni). The permalink is automatically adjusted; just be sure to update your navigation file (see below...)!

I prefer this source tree, instead having a separate tree for each language, so you can easily spot which page is already translated for a specific language, and which aren't. For websites with lots of languages, is much less work! Also, you easily can share files with between all translations, if you choose so, putting all in the same folder.

The main index, or the landing page, reside in the site/ folder. From there, you can point to a default language, using a simple script, or let the users choose which language to browse to.

Within our `site` folder, lives a `globals` folder. Here you'll find a `site.json` file - for general config stuff e.g site name, author, email, social media links etc. You'll find also `locales.js`, which define which languages you want in your website, and `navigation.json` file, which we use to loop over in our nav partial to generate our navigation. Each language has it's own navigation...
There's also a `helpers.js` file, which just contains a simple environment helper.

Uncompiled SCSS and JS reside in the `resources` folder - as mentioned above, Mix will be watching these folders for any changes (you should restart the server when creating new partials/folders). When compiled, they go to /assets/css and /assets/js.

In development mode, **Eleven Countries** will reference `main.css` for it's stylesheet. This will be pretty chunky in filesize (around 800KB!), due to the amount of Tailwind utility classes - but don't worry, **Eleven Countries* has you covered!

## Got troubles?
If you need to debug, or test your code, you can just call `yarn test`.  

## Light local server
You can build (`yarn buyld`) your website, then serve it locally with light-server, using `yarn serve`.  

## Ready to deploy? 

Type the `yarn deploy` command to minify scripts, styles and run Purgecss.

Purge will cross reference your templates/HTML with all those Tailwind classes and will remove any classes you haven't used - pretty cool huh?

**Eleven Countries* will now reference `main.min.css` as the new stylesheet (annoyingly, Mix also minifies `main.css` as well - this bugs the hell out of me!).

## Recommendations

Once you've had a tinker with **Eleven Countries* and made something Awwwards worthy, jump over to [Netlify](https://www.netlify.com) and host your beautiful creation for free.

You can set up continuous deployment which will watch your repo and deploy when you've pushed new changes to it - Netlify will take care of all the heavy lifting for you.

Behold the true magic of a modern JAMstack workflow! :)

---
### TODO

- RTL languages
- localized tags