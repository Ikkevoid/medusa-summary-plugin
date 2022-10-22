# Medusa Hackathon 2022 - Medusa Summary Plugin

![Medusa Hackathon 2022](https://i.imgur.com/CndOHt2.jpg)

## About

### Participants
[Github](https://github.com/Ikkevoid),
[Twitter](https://twitter.com/Ikkevoid),
Discord: ikke#3486

### Description

Really simple medusa plugin that gives summary of different stats

### Preview / Suggested use in Medusa Admin

![Preview / Suggested use in Medusa Admin](https://i.imgur.com/2fXGMx9.png)

### Roadmap

Since it's my first experience with backend, I know that how I made this plugin is probably wrong, so I plan to learn Express.js and TypeORM, then refactor the code, implement the new features. Here's what I have in mind:

- [ ] Refactor
- [ ] Add more statistic types
  - [ ] Most common products in discarded carts
  - [ ] Top sold products
  - [ ] Top sold product groups (Pair or more)
  - [ ] Most used fulfilment and payment methods
  - [ ] Daily/monthly/yearly sale stats

## Set up Project

### Prerequisites

- Medusa Server (Link to [Quickstart](https://docs.medusajs.com/quickstart/quick-start) here).

### Installation steps

1. Install the plugin:
    ```bash
    npm install medusa-summary-plugin
    ``` 
    or
    ```bash
    yarn add medusa-summary-plugin
    ```
2. Add the plugin to your `medusa-config.js` file:
    ```js
    {
      resolve: `medusa-summary-plugin`
    }
    ```

## Resources

- [Medusa Hackathon 2022](https://medusajs.com/blog/medusa-hackathon)
- [Medusa’s GitHub repository](https://github.com/medusajs/medusa)
- [Medusa Documentation](https://docs.medusajs.com/)

