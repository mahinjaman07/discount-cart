function getThePrice(strPrice) {
    const regularPrice  = document.getElementById(strPrice);
    const regularPriceStr = regularPrice.innerText;
    const price = parseFloat(regularPriceStr);
    return price;
}


function getPercentage(getPrice,percentage) {
    const getPercentage = percentage;
        const price = getPrice;
        const result = (getPercentage / 100) * price;
        return result;
}

