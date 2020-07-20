function pixelAddToCart(product) {
	//nsole.log(product)
	fbq('track', 'AddToCart', {
		content_name: product.model.attrs.title,
		content_ids: [product.model.attrs.product_id,],
		content_type: 'product',
		//value: Number( product.model.formattedPrice.replace(/[^0-9\.]+/g,"")),
		currency: 'EUR'
	});
};

function ShopifyBuyInit() {

	var client = ShopifyBuy.buildClient({
		domain: 'blokas.myshopify.com',
		apiKey: '56a0b58f37e357bd928358beda194bf6',
		appId: '6',
	});

	ShopifyBuy.UI.onReady(client).then(function (ui) {

		jQuery(".wps-buy-button").each(function () {

			elementId = '';
			productId = jQuery(this).attr("data-id");
			varId = jQuery(this).attr("data-var");
			productTitle = jQuery(this).attr("data-title");

			if (varId) {
				elementId = productId + "-" + varId;
			} else {
				elementId = productId;
			}


			ui.createComponent('product', {
				id: [parseInt(productId)],
				variantId: parseInt(varId),
				node: document.getElementById(elementId),
				moneyFormat: '%E2%82%AC%7B%7Bamount%7D%7D',
				options: {
					product: {
						events: {
							addVariantToCart: function (product) {
								pixelAddToCart(product)
							},
							updateQuantity: function (product) {
								console.log('update')
							},
							openCheckout: function (product) {
								console.log('check')
							},
						},
						iframe: false,
						variantId: "all",
						width: "240px",
						contents: {
							"img": false,
							"imgWithCarousel": false,
							"title": false,
							"variantTitle": false,
							"price": false,
							"description": false,
							"buttonWithQuantity": false,
							"quantity": false
						},
						text: {
							"button": "Order " + productTitle
						},
						templates: {
							button: '<div class="{{data.classes.product.buttonWrapper}}" data-element="product.buttonWrapper"><button id="product_'+productId+'" {{#data.buttonDisabled}}disabled{{/data.buttonDisabled}} class="{{data.classes.product.button}} {{data.buttonClass}}" data-element="product.button">{{data.buttonText}}</button></div>',
						},
						styles: {
							"product": {
								"text-align": "left",
								"@media (min-width: 601px)": {
									"max-width": "100%",
									"margin-left": "0",
									"margin-bottom": "50px"
								}
							},
							"button": {
								"background-color": "#ffeb68",
								"color": "#000000",
								"font-size": "18px",
								"padding-top": "17px",
								"padding-bottom": "17px",
								":hover": {
									"background-color": "#e6d45e",
									"color": "#000000"
								},
								":focus": {
									"background-color": "#e6d45e"
								}
							},
							"title": {
								"font-size": "26px"
							},
							"price": {
								"font-size": "18px"
							},
							"quantityInput": {
								"font-size": "18px",
								"padding-top": "17px",
								"padding-bottom": "17px"
							},
							"compareAt": {
								"font-size": "15px"
							}
						}
					},
					cart: {
						popup: true,
						events : {
							openCheckout: function (cart) {
								console.log('checkout')
							},
							updateItemQuantity: function (cart) {
							},
						},
						text: {
							notice: "For international deliveries outside EU custom taxes or VAT may apply. "
						},
						classes: {
							button: "shopify-buy__btn shopify-buy__btn--cart-checkout start-checkout",
						},
						styles: {
							"button": {
								"background-color": "#ffeb68",
								"color": "#000000",
								"font-size": "18px",
								"padding-top": "17px",
								"padding-bottom": "17px",
								":hover": {
									"background-color": "#e6d45e",
									"color": "#000000"
								},
								":focus": {
									"background-color": "#e6d45e"
								}
							},
							"footer": {
								"background-color": "#ffffff"
							}
						}
					},
					"toggle": {
						"styles": {
							"toggle": {
								"background-color": "#ffeb68",
								":hover": {
									"background-color": "#e6d45e"
								},
								":focus": {
									"background-color": "#e6d45e"
								}
							},
							"count": {
								"color": "#000000",
								":hover": {
									"color": "#000000"
								},
								"font-size": "18px"
							},
							"iconPath": {
								"fill": "#000000"
							}
						}
					},
					"productSet": {
						"styles": {
							"products": {
								"@media (min-width: 601px)": {
									"margin-left": "-20px"
								}
							}
						}
					}
				}
			});
		});
	});
}

jQuery(document).ready(function () {
	ShopifyBuyInit();
});