# CodersRailroad 🚂 
[![Netlify Status](https://api.netlify.com/api/v1/badges/ce52d7e4-bfb2-497c-a46c-096a68712f34/deploy-status)](https://app.netlify.com/sites/coders-railroad/deploys) [![GitHub contributors](https://img.shields.io/github/contributors/YasiOnFire/coders-railroad.svg)](https://GitHub.com/YasiOnFire/coders-railroad/graphs/contributors/) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![Twitter share](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?url=https%3A%2F%2Fcoders-railroad.netlify.app%2F&via=YasiOnFire&text=Add%20your%20cart%20to%20the%20Hacktoberfest%20Train%21&hashtags=hacktoberfest)

This is a simple project made for [Hactoberfest](https://hacktoberfest.digitalocean.com/). An easy entry to Pull Requests. You can add your cart to the HF train by submitting a PR.

## See the train in action: >>> [https://coders-railroad.netlify.app/](https://coders-railroad.netlify.app/) <<<

## How to contribute?

1. Fork repo
2. Clone your fork
3. Run `yarn`
4. Add your cart to `src/assets/data.json` and run `yarn serve` to see your cart
5. Run `yarn test:unit`
6. Create your branch, commit, push, create pull request

### Cart config example:

```json
{
  "name": "YasiOnFire",
  "text": "Yasio",
  "cart": 1
}
```

| property | description                            |
|------|---------------------------------------------|
| `name` | your Github name                            |
| `text` | your message to show on cart (max 22 chars) |
| `cart` | # of cart to use (see below)                |

### Avaiable carts:
```
__.oO.oOo.oOo.oOo.__ 
|                  | 
|        #0        | 
"OO--------------OO"=
                      
_____________________ 
|                   | 
|        #1         | 
"OO---------------OO"=
  ________________
 |                |  
 |                |  
_|       #2       |_ 
"OO--------------OO"=
      _________
 ____||_______||____
|                   |
|_       #3        _|
"OO---------------OO"=

.                     .
|         #4          |
"OO-----------------OO"=

_-_-_-_-_-_-_-_-_-_-_-_
|                     |
|         #5          |
"OO-----------------OO"=

_______________________
\                     /
 |        #6         |
"OO-----------------OO"=
```

### Rules

* only `data.json` may be edited
* must pass tests
* only one cart per github user 
* text may contain only letters, digits and should be maximum of 22 chars
* must comply with the code of conduct

## Requirements
* node (preferably >=14)
* yarn

---

Made with [Vue](https://github.com/vuejs/vue) 💚 by [Yasio](https://yasio.pl).
Inspired by [Twilio Open Pixel Art](https://open-pixel-art.com/) project.

