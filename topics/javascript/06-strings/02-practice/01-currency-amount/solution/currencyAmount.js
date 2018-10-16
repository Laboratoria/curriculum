const currencyAmount = amounts => amounts.map(amount => Number(amount.replace(/(\$|S\/\.)|(CLP|MXN|PEN)/g, '')));

module.exports = currencyAmount;
