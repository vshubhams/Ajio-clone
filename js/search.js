var box = document.getElementById('product_box')

let title = localStorage.getItem("title");
let headingTitle = document.getElementById('title');
headingTitle.innerHTML=title
document.title= title;
let productCount=document.getElementById("productCount");
function appendproducts(data) {
    productCount.innerHTML=`${data.length} Items Found`
    // var data = JSON.parse(localStorage.getItem('product_details'))
    box.innerHTML = null
    var id = 0

    data.forEach(function (el) {
        let div = document.createElement('div')
        // div.setAttribute('class', 'box')
        div.setAttribute('id', `${id}`)
        div.setAttribute('onclick', 'extract_detail(this.id)')

        id++
        div.innerHTML =
            `<img src="${el.poster}" alt="img${id}"/>
                    <div>
                        <p>${el.company_name}</p>
                        <p>${el.description}</p>
                        <div>
                            <span>Rs. ${el.price}</span>
                            <span>${el.original_price}</span>
                            <span>${el.discount}</span>
                        </div>
                    </div>`
        box.append(div)
    })
}
appendproducts(JSON.parse(localStorage.getItem('product_details')))


function short() {
    var select = document.getElementById('select').value
    console.log('select:', select)

    if (select == 'price_lowest') {
        let product_details = JSON.parse(localStorage.getItem('product_details'))

        product_details = product_details.sort(function (a, b) {
            return a.price - b.price
        })
        // console.log(product_details);
        appendproducts(product_details)
    } else if (select == 'price_high') {
        let product_details = JSON.parse(localStorage.getItem('product_details'))

        product_details = product_details.sort(function (a, b) {
            return b.price - a.price
        })
        // console.log(product_details);
        appendproducts(product_details)
    } else if (select == 'discount') {
        let product_details = JSON.parse(localStorage.getItem('product_details'))

        product_details = product_details.sort(function (a, b) {
            return a.discount - b.discount
        })
        // console.log(product_details);
        appendproducts(product_details)
    } else {
        var data = JSON.parse(localStorage.getItem('product_details'))
        appendproducts(data)
    }
}

//for left side script

var btn1 = document.getElementById('btn1')
var add1 = document.getElementById('add1')
var count1 = 0

function create1() {
    var div = document.createElement('div')
    div.innerHTML = `<div><input type="checkbox"> Men (9,211)</div>
        <div><input type="checkbox"> Women (1)</div>
        <hr>`
    count1++
    // console.log(count1);
    if (count1 % 2 == 1) {
        add1.appendChild(div)
        btn1.style.color = "blue"
    } else if (count1 % 2 == 0) {
        let p = add1.firstChild
        // console.log(p);
        p.remove()
        btn1.style.color = "black"
    }
    // console.log(btn1);
}
btn1.addEventListener('click', create1)

var btn2 = document.getElementById('btn2')
var add2 = document.getElementById('add2')
var count2 = 0

function create2() {
    var div = document.createElement('div')
    div.innerHTML = `<div><input type="checkbox"> Belts (1,310)</div>
        <div><input type="checkbox"> Tshirts (1,167)</div>
        <div><input type="checkbox"> Sports Shoes (806)</div>
        <div><input type="checkbox"> Casual Shoes (744)</div>
        <div><input type="checkbox"> Shirts (789)</div>
        <hr>`
    count2++
    if (count2 % 2 == 1) {
        add2.appendChild(div)
        btn2.style.color = "blue"
    } else if (count2 % 2 == 0) {
        let p = add2.firstChild
        p.remove()
        btn2.style.color = "black"
    }
}
btn2.addEventListener('click', create2)

var btn3 = document.getElementById('btn3')
var add3 = document.getElementById('add3')
var count3 = 0

function create3() {
    var div = document.createElement('div')
    div.innerHTML = `<div><input type="checkbox"> Below Rs.500 (2,052)</div>
        <div><input type="checkbox"> Rs.500-1000 (5,576)</div>
        <div><input type="checkbox"> Rs.1001-1500 (1,196)</div>
        <div><input type="checkbox"> Rs.1501-2000 (316)</div>
        <div><input type="checkbox"> Rs.2001-2500 (46)</div>
        <hr>`
    count3++
    if (count3 % 2 == 1) {
        console.log(div);
        add3.appendChild(div)
        btn3.style.color = "blue"
    } else if (count3 % 2 == 0) {
        let p = add3.firstChild
        p.remove()
        btn3.style.color = "black"
    }
}
btn3.addEventListener('click', create3)

var btn4 = document.getElementById('btn4')
var add4 = document.getElementById('add4')
var count4 = 0

function create4() {
    var div = document.createElement('div')
    div.innerHTML = `<div><input type="checkbox"> RED TAPE (115)</div>
        <div><input type="checkbox"> The Indian Garage Co (52)</div>
        <div><input type="checkbox"> DELIZE (27)</div>
        <div><input type="checkbox"> ROADIES (20)</div>
        <div><input type="checkbox"> MONDAIN (16)</div>
        <hr>`
    count4++
    if (count4 % 2 == 1) {
        console.log(div);
        add4.appendChild(div)
        btn4.style.color = "blue"
    } else if (count4 % 2 == 0) {
        let p = add4.firstChild
        p.remove()
        btn4.style.color = "black"
    }
}
btn4.addEventListener('click', create4)

var btn5 = document.getElementById('btn5')
var add5 = document.getElementById('add5')
var count5 = 0

function create5() {
    var div = document.createElement('div')
    div.innerHTML = `<div><input type="checkbox"> UK10 (121)</div>
        <div><input type="checkbox"> UK9 (27)</div>
        <div><input type="checkbox"> UK8 (68)</div>
        <div><input type="checkbox"> UK7 (20)</div>
        <div><input type="checkbox"> UK11 (16)</div>
        <hr>`
    count5++
    if (count5 % 2 == 1) {
        add5.appendChild(div)
        btn5.style.color = "blue"
    } else if (count5 % 2 == 0) {
        let p = add5.firstChild
        p.remove()
        btn5.style.color = "black"
    }

}
btn5.addEventListener('click', create5)

//Extracting product detail on click

function extract_detail(id) {
    let d = [];

    if (localStorage.getItem('products') == undefined) {
        localStorage.setItem('products', JSON.stringify(d));
    }

    let data = JSON.parse(localStorage.getItem('products'));
    let prod = JSON.parse(localStorage.getItem('product_details'));

    console.log(prod[id]);

    data.push(prod[id]);

    console.log(data);

    localStorage.setItem('products', JSON.stringify(data));

    window.open('procuct1.html')

}
