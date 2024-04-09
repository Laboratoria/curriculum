const currencyAmount = amounts => amounts.map(amount => Number(amount.replace(/(\$|S\/\.)|(CLP|MXN|PEN)/g, '')));

export default currencyAmount;
