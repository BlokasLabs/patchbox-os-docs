var shopifyClient = ShopifyBuy.buildClient({
  domain: "blokas.myshopify.com",
  apiKey: "56a0b58f37e357bd928358beda194bf6",
  appId: "6"
});

var shopifyUI = ShopifyBuy.UI.init(shopifyClient);

shopifyUI.createComponent("cart", {
  moneyFormat: "%E2%82%AC%7B%7Bamount%7D%7D",
  options: {
    cart: {
      popup: false,
      startOpen: false,
      iframe: false,
      text: {
        notice:
          "For international deliveries outside EU custom taxes and/or VAT may apply. "
      },
      classes: {
        button:
          "shopify-buy__btn shopify-buy__btn--cart-checkout start-checkout btn btn-lg btn-warning btn-block bla-checkout-start"
      },
      styles: {
        footer: {
          "background-color": "#ffffff"
        }
      }
    },
    toggle: {
      styles: {
        toggle: {
          "background-color": "#ffeb68",
          ":hover": {
            "background-color": "#ffe435"
          },
          ":focus": {
            "background-color": "#ffe435"
          }
        },
        count: {
          color: "#000000",
          ":hover": {
            color: "#000000"
          },
          "font-size": "18px"
        },
        iconPath: {
          fill: "#000000"
        }
      }
    }
  }
});