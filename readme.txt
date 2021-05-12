=== PagaCheckout for WooCommerce===
Contributors: Paga
Donate link: https://www.mypaga.com/
Tags: wooCommerce, Paga, express checkout, payment, cards, bank, e-commerce, commerce, woothemes, WordPress e-commerce, store, sales, sell, shop, shopping, cart, checkout,
Requires at least: PHP: >=5.0.0
Tested up to: 5.7.1
Stable tag: 1.0.3
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html


== Description ==

This is a PagaCheckout payment gateway for WooCommerce.
Paga solves two key problems that exist around the world - eliminating the use of cash for transactions and access to financial services. 

PagaCheckout payment gateway provides an easy-to-integrate payment collection tool for any online merchant. It supports multiple customer funding sources including cards, bank accounts and ​[Paga](https://www.mypaga.com/) wallet​.

With  PagaCheckout WooCommerce Payment Gateway plugin, you can  accept the following payment methods on your woocommerce site:

* __Paga__
* __Mastercard__
* __Visa__
* __Verve__
* __Bank Account__

= Note =

This plugin is recommended for merchants who do business in Naira.

= Plugin Features =

*   __Accepts payment__ seamlessly directly on your site.
*   __Seamless integration__ into the WooCommerce checkout page.


= Suggestions / Feature Request =

If you have suggestions or a new feature request, feel free to get in touch with us via the contact form on our website [here](https://www.paga.dev/).

You can also follow us on Twitter! **[@PagaDeveloper](https://twitter.com/pagadeveloper)**



== Installation ==

= Manual Installation =
1. 	Download the plugin zip file from [Github](https://github.com/pagadevcomm/paga-checkout-for-woocommerce) or [composer](https://packagist.org/packages/pagadevcomm/paga-checkout-for-woocommerce) by running composer require pagadevcomm/paga-checkout-for-woocommerce. Unzip the file.
2. 	Login to your WordPress Admin. Click on "Plugins > Add New" from the left-hand menu.
3.  Click on the "Upload" option, then click "Choose File" to select the unzipped file from your computer. Once selected, press "OK" and press the "Install Now" button.
4.  Activate the plugin.
5. 	Open the settings page for WooCommerce and click the "Checkout" tab.
6. 	Click on the __PagaCheckout__ link from the available Checkout Options
7.	Configure your __PagaCheckout payment plugin__ settings. See below for details.


= Configure the plugin =
To configure the plugin, go to __WooCommerce > Settings__ from the left hand menu, then click __Payment__ from the top tab. You will see __PagaCheckout__ as part of the available Payment methods. Click on it to configure the payment gateway.

* __Enable/Disable__ - check the box to enable PagaCheckout.
* __Description__ - controls the message that appears under the payment fields on the checkout page. Here you can list the types of cards you accept.
* __Test Mode__ - Check to enable test mode. Test mode enables you to test payments before going live. If you ready to start receving real payment on your site, kindly uncheck this.
* __Test Public Key__ - Enter your Test Public Key here. Get your API keys from your Paga Business account. For more details check the [Documentation](https://developer-docs.paga.com/docs/overview)
* __Live Secret Key__ - Enter your Live Secret Key here. Get your API keys from your Paga Business account. For more details check the [Documentation](https://developer-docs.paga.com/docs/overview)
* __Data Charge url__ - Enter Url to redirect after successful transaction
* Click on __Save Changes__ for the changes you made to be effected.

== Frequently Asked Questions ==

= What Do I Need To Use The Plugin =

1.	You need to have WooCommerce plugin installed and activated on your WordPress site.
2.	You need to ensure the Naira currency is enabled in your WordPress site setting.
3.	You need to open a Paga Business account on [Paga](https://www.mypaga.com/paga-business/register.paga), for test business account click [here]((https://beta.mypaga.com/paga-business/register.paga))


== Changelog ==

= 1.0.0 =
* First release

= 1.0.1 =
* Added assets for PagaCheckout Plugin logo and banner on marketplace

= 1.0.2 =
* Removed both test_secret_key and live_secret_key in paga checkout setting page
* Added the data charge url field, to specify url to redirect to after successful transaction

= 1.0.3 =
* Updated the Paga checkout plugin Documentation


== Screenshots ==
1. PagaCheckout WooCommerce Payment Gateway Setting Page
2. PagaCheckout WooCommerce Payment Gateway on Payment Page
3. PagaCheckout WooCommerce Payment Gateway on Checkout page




