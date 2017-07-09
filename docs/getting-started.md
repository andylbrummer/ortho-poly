---
id: getting-started
title: Getting Started ∙ ortho-poly
---

# Getting Started

This library contains javascript files using classic script dependencies, node commonjs, modules, and umd style exports.

 - For basic web pages, use dist/index.js in a script tag
    - `<script src="[file_path]ortho-poly/dist/index.js"></script>`
 - For commonjs (require), and amd loading use the dist/index.umd.js file
    - `require('ortho-poly/dist/index.umd.js');`
 - For the new es6 import/export, use dist/index.es6.js
    - `import { laguerre, legendre, polynomial, chebyshev, chebyshev2 } from 'ortho-poly/dist/index.es6';`

## Details

These polynomials have been used for physics demos, and are setup using the physics nomrmalizations. I've implemented only the minimum polynomial operations needed to generate these polynomials. I've done this just to get my projects running.

Please contact me, submit an issue, or a PR if you have suggestions, contributions, bugs or just want to geek out about orthogonal polynomials in general.

