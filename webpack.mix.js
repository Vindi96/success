/**
 * Docs: https://laravel-mix.com/docs/6.0/installation
 * @type {(function(*=): {postcssPlugin: string, plugins})|{postcss?: boolean}}
 */
/**
 * Docs: https://laravel-mix.com/docs/6.0/installation
 * @type {(function(*=): {postcssPlugin: string, plugins})|{postcss?: boolean}}
 */

// Import required build packages
let tailwindcss = require("tailwindcss");
let mix = require("laravel-mix");
require('laravel-mix-tailwind');

// Javascript & Vue files
mix.js("web/src/js/app.js", "web/dist/js/app.min.js")
    .vue({ version: 2 })
    .copy("web/src/images", "web/dist/images")
    // CSS files
    .sass("web/src/scss/base.scss", "web/dist/css/base.css")
    .sass("web/src/scss/app.scss", "web/dist/css/app.css")
    // .sass("web/src/scss/editor.scss", "web/dist/css/editor.css")
    .tailwind()

    // Options
    .sourceMaps()
    .options({
        processCssUrls: false,
        postCss: [
            require("autoprefixer"), // auto prefix
            require('postcss-pxtorem')({ // convert all pixel values to rem
                rootValue: 16,
                propList: ['*'],
            }),
        ],
        clearConsole: true,
        publicPath: ""
    })
;
