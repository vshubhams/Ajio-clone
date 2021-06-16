loginUser = JSON.parse(localStorage.getItem('status'))

let orderText = document.getElementById('orderText')
if(loginUser[0].login==true){
    orderText.innerHTML=`Thank you ${loginUser[0].name}, for placing an order with us. Your order <span>FL026676849</span> is confirmed We expect to deliver you order within 7 days.`  
}
function goToHome(){
    window.location.href='index.html'
}