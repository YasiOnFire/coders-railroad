[WIP]
# CodersRailroad 🚂 
[![Netlify Status](https://api.netlify.com/api/v1/badges/ce52d7e4-bfb2-497c-a46c-096a68712f34/deploy-status)](https://app.netlify.com/sites/coders-railroad/deploys)

This is a simple project made for [Hactoberfest 2020](https://hacktoberfest.digitalocean.com/). An easy entry to Pull Requests. You can add your cart to the HF2020 train by submitting a PR.

See the train in action: [https://coders-railroad.netlify.app/](https://coders-railroad.netlify.app/)

## How to contribute?

1. Fork repo
2. Clone your fork
3. Run `yarn`
4. Add your cart to `src/assets/data.json` and run `yarn serve` to see your cart
5. Run `yarn test:unit`
6. Commit, push, create pull request

### Cart config example:

```json
{
  "name": "YasiOnFire", // your Github name
  "text": "Yasio", // your message (max 18 chars)
  "cart": 1 // one of four avaiable carts, see below
}
```

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
```

### Rules

* only `data.json` may be edited
* must pass tests
* only one cart per github user 
* text may contain only letters, digits and should be maximum of 18 chars
* must comply with the code of conduct

## Requirements
* node (preferably >=14)
* yarn

---

Made with [Vue](https://github.com/vuejs/vue) 💚.
Inspired by [Twilio Open Pixel Art](https://open-pixel-art.com/) project.

