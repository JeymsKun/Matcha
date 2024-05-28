document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('customer-info-form').addEventListener('submit', displayCustomerInfo);
    document.getElementById('order-info-form').addEventListener('submit', displayOrderInfo);
});

function displayCustomerInfo(event) {
    event.preventDefault();
    const name = document.getElementById('customer-name').value;
    const phone = document.getElementById('phone-number').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    document.getElementById('customer-info-display').innerHTML = `
        <p>Customer Name: ${name}</p>
        <p>Phone Number: ${phone}</p>
        <p>Email: ${email}</p>
        <p>Address: ${address}</p>
    `;
}

function displayOrderInfo(event) {
    event.preventDefault();
    const orderNumber = document.getElementById('order-number').value;
    const orderDate = document.getElementById('order-date').value;
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;

    document.getElementById('order-info-display').innerHTML = `
        <p>Order #: ${orderNumber}</p>
        <p>Order Date: ${orderDate}</p>
        <p>Payment Method: ${paymentMethod}</p>
    `;
}
