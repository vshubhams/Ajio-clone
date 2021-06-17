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

function placeOrder(a){
    let cardNumbr = document.getElementById('cardNumber').value
    let name =document.getElementById('holderName').value
    let cvv = document.getElementById('cvv').value
    let payWarning = document.getElementById('payWarning');
    let upiWarning = document.getElementById('upiWarning');
    let upiInput= document.getElementById('upiInput').value
    payWarning.innerHTML=null
    upiWarning.innerHTML=null
    if(a=='card'){
        if(cardNumbr.length!=16||name==''||cvv==''){
            payWarning.innerHTML='Enter valid details.'
            return
        }
    }else if(a=='upi'&&upiInput==''){
       upiWarning.innerHTML='Enter your UPI Id'
       return
    }
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
