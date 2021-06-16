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
  let empty_cart = document.getElementsByClassName('empty-cart');
  let cart_product = document.getElementById('cart-product');

  if (data.length == 0) {
    empty_cart[0].style.display = 'block';
    cart_product.style.display = 'none';
  }
  else {
    let item_card = document.getElementById('item-card');
    item_card.innerHTML = "";
    empty_cart[0].style.display = 'none';
    cart_product.style.display = 'flex';

    for (let i = 0; i < data.length; i++){
    
      let div = document.createElement('div');

  
      div.setAttribute('class', 'product-show');

  
      div.innerHTML = `<img src="${data[i].poster}" alt="">
                    <a href="">${data[i].description}</a>
                    <div class="product-size">Size <span>M</span> &or;</div>
                    <div class="cart-qty" id="c${i}" onclick="show_update_pop(this.id)">Qty <span> ${data[i].quantity}</span> &or;</div>
                    <div class="delete" id="${i}" onclick="delete_item(this.id)">Delete</div>
                    <div class="amount">
                        <div class="total-amount">Rs. ${data[i].price}</div>
                        <div class="move">Move To Closet</div>
                    </div>`;
    
      item_card.appendChild(div);
    }
    
  }

  

  item_count();

}

cart_items_display();

//Total Item Count

function item_count() {
  let data = JSON.parse(localStorage.getItem('cart-items'));
  let count = document.getElementById('item-count');

  count.innerHTML = `(${data.length} Item(s))`;

  // console.log(data.length);
}

// DELETE ITEM FROM THE CART

function delete_item(id) {
  let data = JSON.parse(localStorage.getItem('cart-items'));

  let item = document.getElementById(id);

  item.parentElement.remove();

  data.splice(id, 1);

  localStorage.setItem('cart-items',JSON.stringify(data));

  

  // location.reload();
  cart_items_display();
  bill_show();
  item_count();

}

function bill_show() {
  let data = JSON.parse(localStorage.getItem('cart-items'));

  let bag_amount = document.getElementById('bag-item-amount');
  let bag_total_amount = document.getElementById('bag-total-amount');
  let bag_del_amount = document.getElementById('bag-delivery-amount');

  let total = 0

  for (let i = 0; i < data.length; i++){
    total += Number(data[i].price)*data[i].quantity;
  }

  console.log(total);

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

  if (del != "FREE") {
    bag_del_amount.innerHTML = `Rs. ${del}`;
  }
  else {
    bag_del_amount.innerHTML = `${del}`;
  }
  
  bag_total_amount.innerHTML = `Rs. ${total_amount}`;
  
}


bill_show();

//continue shopping if cart is empty starts ----->

function continue_shopping() {
  window.open('index.html');
}



//continue shopping if cart is empty starts ----->


//Quantity and size update starts ---->

let q = 1;

function show_update_pop(id) {
  let cont = document.getElementsByClassName('quantity-container');

  let cart = JSON.parse(localStorage.getItem('cart-items'));

  let quant = document.getElementsByClassName('qant');

  let newInput = id.split("");

  let index = newInput[1];

  let data = document.getElementsByClassName('update-quantity');

  data[0].setAttribute('id', `${index}`);

  q = cart[index].quantity;

  cont[0].style.display = 'flex';

  quant[0].innerHTML = `<p>${cart[index].quantity}</p>`;

  show_hide_minus();

}

function update_and_close(id) {
  let cont = document.getElementsByClassName('quantity-container');

  let data = JSON.parse(localStorage.getItem('cart-items'));

  data[id].quantity = q;

  localStorage.setItem('cart-items',JSON.stringify(data));

  cont[0].style.display = 'none';

  // location.reload();
  cart_items_display();
  bill_show();
}


function show_hide_minus() {
  let decrease = document.getElementById('minus');

if (q == 1) {
  decrease.style.visibility = 'hidden';
}
else {
  decrease.style.visibility = 'visible';
}
}



function increase_quantity() {
  let quant = document.getElementsByClassName('qant');

  q++;

  quant[0].innerHTML = `<p>${q}</p>`;

  show_hide_minus();
}

function decrease_quantity() {
  let quant = document.getElementsByClassName('qant');

  q--;

  quant[0].innerHTML = `<p>${q}</p>`;

  show_hide_minus();
}

//Quantity and size update ends ---->

