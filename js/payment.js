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
