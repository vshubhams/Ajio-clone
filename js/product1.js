function return_stmt() {
    let rtn = document.getElementById('return_statement');
    let prst = document.getElementById('promise_statement');
    let btn1 = document.getElementById('return');
    let btn2 = document.getElementById('promise');

    rtn.style.display = 'block';
    prst.style.display = 'none';
    btn1.style.fontWeight = 'bold';
    btn2.style.fontWeight = '100';
    btn2.style.color = 'gray';
    btn1.style.color = 'black';


}

function promise_stmt() {
    let rtn = document.getElementById('return_statement');
    let prst = document.getElementById('promise_statement');
    let btn1 = document.getElementById('return');
    let btn2 = document.getElementById('promise');

    rtn.style.display = 'none';
    prst.style.display = 'block';
    btn1.style.color = 'gray';
    btn2.style.fontWeight = 'bold';
    btn2.style.color = 'black';
    btn1.style.fontWeight = '100';

}

function test(id) {
    let image = document.getElementById(id);

    let img = image.children;

    let img_main = document.getElementsByClassName('main_image')[0].children;

    img_main[0].src = img[0].src;
        
}

//Header portion

function showMenu(id) {
    let menuContainer = document.getElementById(id);
    menuContainer.style.visibility = "visible"
    menuContainer.style.opacity="1"
}
function hideMenu(id) {
    let menuContainer = document.getElementById(id);
    menuContainer.style.visibility = "hidden"
    menuContainer.style.opacity="0"
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

//Product object ----------->

let product = {
    image1: "images/procuct_1_images/slider_image1",
    image2: "images/procuct_1_images/slider_image2",
    image3: "images/procuct_1_images/slider_image3",
    image4: "images/procuct_1_images/slider_image4",
    image5: "images/procuct_1_images/slider_image5",
    name: "RAY BAN",
    detail: "0RB3671186/3160 UV-Protected Full-Rim Shield Sunglasses",
    price: "Rs. 950",
    price1: 950
};

localStorage.setItem('current-product', JSON.stringify(product));

function show_item() {
    let data = JSON.parse(localStorage.getItem('current-product'));

    let img1 = document.getElementById('1');
    let img2 = document.getElementById('2');
    let img3 = document.getElementById('3');
    let img4 = document.getElementById('4');
    let img5 = document.getElementById('5');

    let main_img = document.getElementsByClassName('main_image');

    let name = document.getElementsByClassName('name');
    let detail = document.getElementsByClassName('detail');
    let price = document.getElementsByClassName('price1');

    img1.innerHTML = `<img src="${data.image1}" />`
    img2.innerHTML = `<img src="${data.image2}" />`
    img3.innerHTML = `<img src="${data.image3}" />`
    img4.innerHTML = `<img src="${data.image4}" />`
    img5.innerHTML = `<img src="${data.image5}" />`

    main_img[0].innerHTML = `<img src="${data.image1}" />`

    name[0].innerHTML = `${data.name}`;
    detail[0].innerHTML = `${data.detail}`
    price[0].innerHTML = `${data.price}`
}

show_item();

let cart_items = [];

if (localStorage.getItem('cart-items') == undefined) {
    localStorage.setItem('cart-items', JSON.stringify(cart_items));
}

function add_to_cart() {
    let go_to_cart = document.getElementById('go_to_bag');
    let add_to_cart = document.getElementsByClassName('add_to_bag');

    let data = JSON.parse(localStorage.getItem('current-product'));

    let cart = JSON.parse(localStorage.getItem('cart-items'));

    let isPresent = false;

    
    cart.push(data);
    
    localStorage.setItem('cart-items', JSON.stringify(cart));

    add_to_cart[0].style.display = "none";

    go_to_cart.style.display = "flex";

}

function go_to_cart() {
    window.open("cart.html");
}

