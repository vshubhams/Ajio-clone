window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//Sign-in functionality

function close1() {
    let pop = document.getElementById('sign-in');
    pop.style.display = "none";

}

function open1() {
    let pop = document.getElementById('sign-in');
    let blur = document.getElementById('container');

    pop.style.display = "inline";

    
}

function cart_items_display() {
  let data = JSON.parse(localStorage.getItem('cart-items'));

  let item_card = document.getElementById('item-card');

  for (let i = 0; i < data.length; i++){
    
    let div = document.createElement('div');

  
    div.setAttribute('class', 'product-show');

  
    div.innerHTML = `<img src="${data[i].image1}" alt="">
                    <a href="">${data[i].detail}</a>
                    <div class="product-size">Size <span>OS</span> &or;</div>
                    <div class="cart-qty">Qty <span> 1</span> &or;</div>
                    <div class="delete" id="${i}" onclick="delete_item(this.id)">Delete</div>
                    <div class="amount">
                        <div class="total-amount">${data[i].price}</div>
                        <div class="move">Move To Closet</div>
                    </div>`;
    
    item_card.appendChild(div);
  }

}

cart_items_display();

// DELETE ITEM FROM THE CART

function delete_item(id) {
  let data = JSON.parse(localStorage.getItem('cart-items'));

  let item = document.getElementById(id);

  data.splice(id, 1);

  localStorage.setItem('cart-items',JSON.stringify(data));

  item.parentElement.remove();

  location.reload();

}

function bill_show() {
  let data = JSON.parse(localStorage.getItem('cart-items'));

  let bag_amount = document.getElementById('bag-item-amount');
  let bag_total_amount = document.getElementById('bag-total-amount');
  let bag_del_amount = document.getElementById('bag-delivery-amount');

  let total = 0

  for (let i = 0; i < data.length; i++){
    total += data[i].price1;
  }

  let del = "FREE";

  if (total < 999) {
    del = 50;
  }

  let total_amount = 0;

  if (del != "FREE") {
    total_amount = total + del;
  }
  else {
    total_amount = total;
  }

  bag_amount.innerHTML = `Rs. ${total}`;
  bag_del_amount.innerHTML = `Rs. ${del}`;
  bag_total_amount.innerHTML = `Rs. ${total_amount}`;
  
}


bill_show();