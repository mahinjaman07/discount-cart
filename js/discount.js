document.getElementById('discount-btn').addEventListener('click',function(){
    const inputCouponCode  = document.getElementById('coupon-code');
    const couponCode = inputCouponCode.value;
    if (couponCode === 'DISC30') {
        const regularPrice = getThePrice('price');
        const discountPercentage = 30;
        const getDiscountPrice = getPercentage(regularPrice,discountPercentage);
        const discountPrice = regularPrice - getDiscountPrice;
        const pleasePay = document.getElementById('discount-price');
        pleasePay.innerText = discountPrice;
        inputCouponCode.value = '';
        
    }
    else{
        alert('Invalid Coupon Code');
        const regularPrice = getThePrice('price');
        const pleasePay = document.getElementById('discount-price');
        pleasePay.innerText = regularPrice;
        inputCouponCode.value = '';
    }
})