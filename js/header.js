// For showing and hiding the categories from menu in nav
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

//-----------------For setting login status true or false start--------------------
let loginUser = JSON.parse(localStorage.getItem('status'))

if (loginUser == null) {
    let status = [
        {
            login: null,
            name: null,
        }
    ]
    
    localStorage.setItem('status', JSON.stringify(status));

}
if(loginUser[0].login==true){
    afterLogin(loginUser[0].name)
}


function signOut(){
    let username = document.getElementById('username')
    username.innerHTML=null
    let signin = document.getElementById('signin');
    signin.style.display='inline'
    let singout=document.getElementById('signout');
    singout.style.display='none'
    statusFalse()
    window.location.reload()
}
function statusFalse(){
    let x = JSON.parse(localStorage.getItem('status'));

  x.forEach(function(el){
      el.login=false
  })
  console.log(x)
  localStorage.setItem('status',JSON.stringify(x))
}


function statusTrue(name){
  let x = JSON.parse(localStorage.getItem('status'));

  x.forEach(function(el){
      el.login=true
      el.name=name
  })
  console.log(x)
  localStorage.setItem('status',JSON.stringify(x))
}

//----------------For setting login status true or false End--------------------


// --------------signin start --------------------
let body= document.querySelector('body')
let signInBox= document.querySelector('.sign-in-box')
let signInContainer= document.querySelector('.sign-in-container')

function hideBox(){
    signInContainer.style.display='none'
    document.body.style.overflow='auto'
    window.location.reload()
}

function showBox(){
    signInContainer.style.display='flex'
    document.body.style.overflow='hidden'
}

//-------------------taking input form user----------------------------------
let i=0;
let log=false;
function goToSignUP(){
    let number = document.getElementById('number').value;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    
    let localUser=[]
    localUser = JSON.parse(localStorage.getItem('users'));

    if (!(localUser == null)) {
        localUser.forEach(function (el) {
            if (number == el.number) {
                log =true;
                login(number)
            }
        })
    }
    if(log){
        return
    }

    
    let warning =document.getElementById('warning');
    if(i==0){
        if(number.length<10){
            warning.innerHTML='Please enter valid Mobile Number.'
            return
        }
        warning.innerHTML=null

        let inputHeading =document.getElementById('inputHeading');
        inputHeading.innerHTML='Please set up your account'
        
        let inputCont = document.getElementById('inputCont');
        inputCont.classList.remove("hide")
        
        let continueBtn = document.getElementById('continueBtn');
        continueBtn.innerHTML='START SHOPPING'
    }
    
    let userData={
        number:number,
        name:name,
        email:email,
        password
    }

    if(i==1){
        warning.innerHTML=null
        if(number.length<10||name==''||email==''||password==''){
            warning.innerHTML='Please enter valid details.'
            return
        }
        let arr;
        arr = JSON.parse(localStorage.getItem('users'))
        if(arr==null){
            arr=[];
        }
        arr.push(userData);
        localStorage.setItem('users',JSON.stringify(arr));
        warning.innerHTML='SignUp Successfully'
        setTimeout(function(){
            statusTrue(name)
            window.location.reload()
            hideBox()
        },2000)
        
    }
    i=1
}

//-------Login-----if user alreay had an account-----------
let j=0;
function login(number){
    
    if(j==0){
        warning.innerHTML=null
        let inputHeading =document.getElementById('inputHeading');
        inputHeading.innerHTML='Please Login to your account'
        
        let inputCont = document.getElementById('inputCont');
        inputCont.classList.remove("hide")

        let radioBox =document.getElementById('radioBox');
        radioBox.style.display='none'
        let name = document.getElementById('name')
        name.style.display='none'
        let email = document.getElementById('email')
        email.style.display='none'
        
        let continueBtn = document.getElementById('continueBtn');
        continueBtn.innerHTML='START SHOPPING'


    }
    if(j==1){
        let bool =true;
        let arr = JSON.parse(localStorage.getItem('users'))
        arr.forEach(function(el){
            if(el.password==password.value&&el.number==number){
                // username.innerHTML=`Hi ${el.name}`
                console.log('login')
                warning.innerHTML='Login Successfully'
                setTimeout(function(){
                    statusTrue(el.name)
                    hideBox()
                    window.location.reload()
                },1000)
                bool = false;
                return
            }
        })
        if(bool){
            warning.innerHTML=null
            warning.innerHTML='Please enter valid Password.'
            return
        }
    }
    
    j=1
}
// -------------------------signin end -------------------------

function afterLogin(name){
    let username = document.getElementById('username')
    username.innerHTML=`Hi ${name}`
    let signin = document.getElementById('signin');
    signin.style.display='none'
    let singout=document.getElementById('signout');
  singout.style.display='inline'
}