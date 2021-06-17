function showMethod(box,method){
 let allTab=document.querySelectorAll('.box')
 let allPaymentBox=document.querySelectorAll('.payment-box-2')
 let tab=document.getElementById(box)
 let paymentBox=document.getElementById(method)

 
 allTab.forEach(function(el){
     el.classList.remove('selected-tab')
 })

 allPaymentBox.forEach(function(el){
     el.classList.remove('selected-box')
 })

 tab.classList.add('selected-tab')
 paymentBox.classList.add('selected-box') 
}

function placeOrder(){
    setTimeout(function(){
        window.location.href='order.html'
    },2000)
}

//Summary total ----------------------->

function summary_amount() {
    let data = JSON.parse(localStorage.getItem('bill'));
    let bg = document.getElementById('summary-bag-total');
    let del = document.getElementById('summary-delivery');
    let total = document.getElementById('summary-total');
    let amount = document.getElementById('amount-payable');

    bg.innerHTML = `₹ ${data[0]}`;
    
    if (del != 'FREE') {
        del.innerHTML = `${data[1]}`;
    }
    else {
        del.innerHTML = `₹ ${data[1]}`;
    }

    total.innerHTML = `₹ ${data[2]}`;

    amount.innerHTML = `₹ ${data[2]}`;
}

summary_amount();

//Summary total ends ------------------>
