loginUser = JSON.parse(localStorage.getItem('status'))

let orderText = document.getElementById('orderText')
if(loginUser[0].login==true){
    orderText.innerHTML=`Thank you ${loginUser[0].name}, for placing an order with us. Your order <span>FL026676849</span> is confirmed We expect to deliver you order within 7 days.`  
}
function goToHome(){
    window.location.href='index.html'
}

function show_items() {
    let data = JSON.parse(localStorage.getItem('cart-items'));
    let cont = document.getElementById('item-card');

    for (let i = 0; i < data.length; i++){

        let total = data[i].price * data[i].quantity;

        let div = document.createElement('div');
        div.setAttribute('class', 'product-show');



        div.innerHTML = `<img src="${data[i].poster}">
                <a href=""><strong>${data[i].company_name}</strong> ${data[i].description}</a>
                <div class="product-size">Size <span>M</span> &or;</div>
                <div class="cart-qty">Qty <span> ${data[i].quantity}</span> &or;</div>
                <div class="total-amount">Rs. ${total}</div>`;
        
        cont.appendChild(div);

    }

    
}

show_items();


function order_summary() {
    let data = JSON.parse(localStorage.getItem('bill'));
    let bg = document.getElementById('summary-bag-total');
    let del = document.getElementById('summary-delivery');
    let total = document.getElementById('summary-total');
    let amount = document.getElementById('amount-payable');

    bg.innerHTML = `Rs. ${data[0]}`;
    
    if (del != 'FREE') {
        del.innerHTML = `${data[1]}`;
    }
    else {
        del.innerHTML = `₹ ${data[1]}`;
    }

    total.innerHTML = `₹ ${data[2]}`;

    amount.innerHTML = `₹ ${data[2]}`;
}

order_summary();