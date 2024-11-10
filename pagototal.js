const plateaSelect = document.getElementById('plateaQuantity');
const ticketSelect = document.getElementById('ticketQuantity');
const totalPriceElement = document.getElementById('totalPrice');

function updateTotalPrice() {
    const plateaPrice = parseFloat(plateaSelect.options[plateaSelect.selectedIndex].getAttribute('data-price'));
    const ticketQuantity = ticketSelect.value;
    const total = plateaPrice * ticketQuantity;
    totalPriceElement.textContent = `Total: $${total}`;
}

plateaSelect.addEventListener('change', updateTotalPrice);
ticketSelect.addEventListener('change', updateTotalPrice);
updateTotalPrice();

// Redirigir a otra página HTML y guardar el total
function saveAndRedirect() {
    const total = parseFloat(totalPriceElement.textContent.replace('Total: $', ''));
    sessionStorage.setItem('totalPrice', total);
    window.location.href = 'pago.html';
}