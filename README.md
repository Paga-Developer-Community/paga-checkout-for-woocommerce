# PagaCheckout for WooCommerce

- Contributors: pagadevcomm.
- Official link: [https://www.paga.dev/](https://www.paga.dev/)
- Tags: woocommerce, checkout, online payment, express checkout, card - payment, paga, pagacheckout, bank payment
- Requires at least: `PHP: >=5.0.0`
- Tested up to: 5.7.1
- Stable tag: 2.0.0
- License: GPLv2
- License URI: [http://www.gnu.org/licenses/gpl-2.0.html](`http://www.gnu.org/licenses/gpl-2.0.html`)

The one plugin for making online payments which is embedded to your woocommerce site. PagaCheckout payment geteway provides
an easy-to-integrate payment collection tool for any online merchant.

## Description

### Introduction

PagaCheckout payment plugin can be easily installed to your WordPress / WooCommerce website. PagaCheckout supports multiple customer funding sources including:

* Payment with Cards
* Payment with Bank accounts
* Payment with Paga
* Fully Supports WooCommerce Payment Tokens!
* Compatible with WooCommerce Subscriptions!

## Installation

### Minimum Requirements

* WooCommerce 5.0 or higher

### Automatic installation

Automatic installation is the easiest option as WordPress handles the file transfers itself. To do an automatic installation of PagaCheckout for WooCommerce:

* Log in to your WordPress dashboard,
* Navigate to the Plugins menu
* Click Add New.
* Search for PagaCheckout in the search field and click search plugins.
* Once you've found the PagaCheckout plugin you can view details about it such as the the rating and description. Most importantly, of course, you can install it by simply clicking Install Now.

### Manual Installation

1. Unzip the files and upload the folder into your plugins folder (/wp-content/plugins/) overwriting older versions if they exist
2. You can clone PagaCheckout from our github repository(https://github.com/pagadevcomm/wc-pagaCheckout)
3. Activate the plugin in your WordPress admin area.

### Usage

1. Open the settings page for WooCommerce and click the "Payments" tab
2. Click on the sub-item for PagaCheckout.
3. Enter your API credentials and adjust any other settings to suit your needs.


### Configuring the Plugin

To configure the plugin, go to __Woocommerce > Settings__ fron the left hand side of the menu, then click __Payment__ from the top tab. You will see __PagaCheckout__ as part of the available Payment methods. Click on it to configure the payment gateway.

* **Enable/Disable** - check the box to enable PagaCheckout.
* __Description__ - controls the message that appears under the payment fields on the checkout page. Here you can list the types of cards you accept.
* __Test Mode__ - Check to enable test mode. Test mode enables you to test payments before going live. If you ready to start receving real payment on your site, kindly uncheck this.
* __Test Public Key__ - Enter your Test Public Key here. Get your API keys from your Paga Business account. For more details check the [Documentation](https://developer-docs.paga.com/docs/overview)
* __Live Public Key__ - Enter your Live Public Key here. Get your API keys from your Paga Business account. For more details check the [Documentation](https://developer-docs.paga.com/docs/overview)
* __Test Secret Key__ - Enter your Test Secret Key here. Get your API keys from your Paga Business account. For more details check the [Documentation](https://developer-docs.paga.com/docs/overview)
* __Live Secret Key__ - Enter your Live Secret Key here. Get your API keys from your Paga Business account. For more details check the [Documentation](https://developer-docs.paga.com/docs/overview)
* Click on __Save Changes__ for the changes you made to be effected.

### Updating

Automatic updates should work great for you.  As always, though, we recommend backing up your site prior to making any updates just to be sure nothing goes wrong.

### Changelog

#### 1.0.0

Just released into the wild.

#### 1.0.1

* Added assets for PagaCheckout plugin logo and banner on the marketplace.

#### 1.0.2

* Removed both test_secret_key and live_secret_key in paga checkout setting page.
* Added the data charge url field, to specify the url to redirect to after successful transaction.

#### 1.0.3

* Updated  Paga Checkout Documentation.

#### 1.0.4

* Updated the taglines a customers sees when they want to make payment

#### 1.0.5

* Fixed the bug to display a tagline when selecting a payment method if the tagline is not specified in the plugin setting.

#### 2.0.0

* Implmented transaction verification after payment.
* Implemented updating order status after the verifying that the transaction was successful.
* Added field to provide secret key in the plugin admin setting and removed the charge url field .

### Feedback

We are  open for your suggestions and feedback - Thank you for using or trying out one of my plugins!
You can tweet us [@pagadevcomm](http://twitter.com/#!/pagadevcomm) on Twitter
Follow us on [my Facebook page](http://www.facebook.com/pagadevcomm)
Or send a mail to [pagadevcomm](devcomm@paga.com)
Check out our developer community on[Paga Developer] (https://developer.paga.com/)
