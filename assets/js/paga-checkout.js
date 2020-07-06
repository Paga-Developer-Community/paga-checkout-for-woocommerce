const embedCheckout = document.getElementById('embed-checkout');
// console.log(embedCheckout);
const {checkout,charge_url,public_key,amount,currency,txn_ref,phone_number,email,display_image_url,paga_checkout_display_name,display_tagline} = wc_paga_checkout_params;
// console.log(wc_paga_checkout_params);
const pagaForm = document.createElement('form');
pagaForm.setAttribute('action',wc_paga_checkout_params['charge_url']);
pagaForm.setAttribute('method','POST');
const scriptTag  = document.createElement('script');
scriptTag.type = 'text/javascript';

scriptTag.setAttribute('src', checkout);
scriptTag.setAttribute('data-charge_url',charge_url);
scriptTag.setAttribute('data-public_key',public_key);
scriptTag.setAttribute('data-amount',amount);
scriptTag.setAttribute('data-currency',currency);
scriptTag.setAttribute('data-payment_reference',txn_ref);
scriptTag.setAttribute('data-phone_number',phone_number);
scriptTag.setAttribute('data-email',email);
scriptTag.setAttribute('data-display_image',display_image_url);
scriptTag.setAttribute('data-display_name',display_image_url);
scriptTag.setAttribute('data-display_tagline',display_tagline);


pagaForm.appendChild(scriptTag);
embedCheckout.appendChild(pagaForm);

// console.log(pagaForm);

// console.log(wc_paga_checkout_params);

function checkoutForm() {
    const attributeKeys=['data-public_key','data-display_name','data-charge_url','data-display_image','data-display_tagline','data-email','data-amount','data-payment_reference','data-currency','data-phone_number','src']
    const attributeValues = Object.values(wc_paga_checkout_params);
    for (let index = 0; index < attributeValues.length; index++) {
        scriptTag.setAttribute(attributeKeys[index],attributeValues[index]);
    }
    console.log(scriptTag);
}
checkoutForm();