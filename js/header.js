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
            warning.style.color='red';
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
            warning.style.color='red'
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
        warning.style.color='green'
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
                warning.style.color='green'
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
            warning.style.color='red'
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



//------------------Searching features start------------------
const men_items = [
  {
    company_name: 'ROADSTER',
    description: 'Graphic Regular Fit Crew- Neck T-shirt',
    price: '330',
    original_price: 'Rs. 1,099',
    discount: '(70% off)',
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210428/iTgD/60897ebaf997dd7b64c785eb/dennislingo_premium_attire_pink_full_sleeves_slim_fit_classic_shirt.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210428/iTgD/60897ebaf997dd7b64c785eb/dennislingo_premium_attire_pink_full_sleeves_slim_fit_classic_shirt.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210428/iTgD/60897ebaf997dd7b64c785eb/dennislingo_premium_attire_pink_full_sleeves_slim_fit_classic_shirt.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210428/iTgD/60897ebaf997dd7b64c785eb/dennislingo_premium_attire_pink_full_sleeves_slim_fit_classic_shirt.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210428/iTgD/60897ebaf997dd7b64c785eb/dennislingo_premium_attire_pink_full_sleeves_slim_fit_classic_shirt.jpg"
  },

  {
    company_name: 'DNMX',
    description: 'Mid-Rise Fitted Jeans',
    price: '679',
    original_price: 'Rs. 799',
    discount: '(70% off)',
    quantity: 1,
    poster: 'https://assets.ajio.com/medias/sys_master/root/ha5/h6b/14876613738526/-473Wx593H-441038483-black-MODEL3.jpg',
    poster2: 'https://assets.ajio.com/medias/sys_master/root/ha5/h6b/14876613738526/-473Wx593H-441038483-black-MODEL3.jpg',
    poster3: 'https://assets.ajio.com/medias/sys_master/root/hd4/h47/14876632547358/-473Wx593H-441038483-black-MODEL4.jpg',
    poster4: 'https://assets.ajio.com/medias/sys_master/root/hd4/h47/14876632547358/-473Wx593H-441038483-black-MODEL4.jpg',
    poster5: 'https://assets.ajio.com/medias/sys_master/root/hd4/h47/14876632547358/-473Wx593H-441038483-black-MODEL4.jpg'
  },
  {
    company_name: "Indie Picks",
    description: "Cotton Dobby Short Kurta",
    price: "559",
    orginal_price: "Rs. 1,299",
    discount: "(57% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20201112/w6e5/5fad57c3aeb269d5630c0748/indie_picks_peach_cotton_dobby_short_kurta.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20201112/w6e5/5fad57c3aeb269d5630c0748/indie_picks_peach_cotton_dobby_short_kurta.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20201112/w6e5/5fad57c3aeb269d5630c0748/indie_picks_peach_cotton_dobby_short_kurta.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20201112/w6e5/5fad57c3aeb269d5630c0748/indie_picks_peach_cotton_dobby_short_kurta.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20201112/w6e5/5fad57c3aeb269d5630c0748/indie_picks_peach_cotton_dobby_short_kurta.jpg"
  },
  {
    company_name: "MUJI",
    description: "Cotton Washed Oxford Stand-Collar Shirt",
    price: "1990",
    original_price: "",
    discount: "",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20201021/ppzA/5f8f31a2f997dd8c836ff14b/muji_blue_cotton_washed_oxford_stand-collar_shirt.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20201021/ppzA/5f8f31a2f997dd8c836ff14b/muji_blue_cotton_washed_oxford_stand-collar_shirt.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20201021/ppzA/5f8f31a2f997dd8c836ff14b/muji_blue_cotton_washed_oxford_stand-collar_shirt.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20201021/ppzA/5f8f31a2f997dd8c836ff14b/muji_blue_cotton_washed_oxford_stand-collar_shirt.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20201021/ppzA/5f8f31a2f997dd8c836ff14b/muji_blue_cotton_washed_oxford_stand-collar_shirt.jpg"
  },
  {
    company_name: "DENNISLINGO PREMIUM ATTIRE",
    description: "Slim Fit Shirt with Patch Pocket",
    price: "573",
    original_price: "Rs. 1,849",
    discount: "(69% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/dd2q/606867587cdb8c1f1475204d/dennislingo_premium_attire_purple_slim_fit_shirt_with_patch_pocket.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/dd2q/606867587cdb8c1f1475204d/dennislingo_premium_attire_purple_slim_fit_shirt_with_patch_pocket.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/dd2q/606867587cdb8c1f1475204d/dennislingo_premium_attire_purple_slim_fit_shirt_with_patch_pocket.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/dd2q/606867587cdb8c1f1475204d/dennislingo_premium_attire_purple_slim_fit_shirt_with_patch_pocket.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/dd2q/606867587cdb8c1f1475204d/dennislingo_premium_attire_purple_slim_fit_shirt_with_patch_pocket.jpg"
  },
  {
    company_name: 'FRENCH COLLECTION',
    description: 'Columbia Lightly Washed Skinny Fit Jeans',
    price: '1715',
    original_price: 'Rs. 3,299 ',
    discount: '(70% off)',
    quantity: 1,
    poster: 'https://assets.ajio.com/medias/sys_master/root/20210212/LQXd/6026a890aeb26969816477e8/-473Wx593H-460827661-ltblue-MODEL.jpg',
    poster2: 'https://assets.ajio.com/medias/sys_master/root/20210212/rYyF/6026a890f997dd5c40ef6cf7/-473Wx593H-460827661-ltblue-MODEL4.jpg',
    poster3: 'https://assets.ajio.com/medias/sys_master/root/20210212/rYyF/6026a890f997dd5c40ef6cf7/-473Wx593H-460827661-ltblue-MODEL4.jpg',
    poster4: 'https://assets.ajio.com/medias/sys_master/root/20210212/rYyF/6026a890f997dd5c40ef6cf7/-473Wx593H-460827661-ltblue-MODEL4.jpg',
    poster5: 'https://assets.ajio.com/medias/sys_master/root/20210212/rYyF/6026a890f997dd5c40ef6cf7/-473Wx593H-460827661-ltblue-MODEL4.jpg'
  },
  {
    company_name: "Calvin Klein Jeans",
    description: "Slim Fit Shirt with Spread Collar",
    price: "4249",
    original_price: "Rs. 4,999",
    discount: "(15% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210525/J4i5/60ac3947f997ddb312a871e6/calvin_klein_jeans_grey_slim_fit_shirt_with_spread_collar.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210525/J4i5/60ac3947f997ddb312a871e6/calvin_klein_jeans_grey_slim_fit_shirt_with_spread_collar.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210525/J4i5/60ac3947f997ddb312a871e6/calvin_klein_jeans_grey_slim_fit_shirt_with_spread_collar.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210525/J4i5/60ac3947f997ddb312a871e6/calvin_klein_jeans_grey_slim_fit_shirt_with_spread_collar.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210525/J4i5/60ac3947f997ddb312a871e6/calvin_klein_jeans_grey_slim_fit_shirt_with_spread_collar.jpg"
  },
  {
    company_name: "MUJI",
    description: "Cotton Washed Oxford Stand-Collar Shirt",
    price: "1990",
    original_price: "",
    discount: "",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20201021/ppzA/5f8f31a2f997dd8c836ff14b/muji_blue_cotton_washed_oxford_stand-collar_shirt.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20201021/ppzA/5f8f31a2f997dd8c836ff14b/muji_blue_cotton_washed_oxford_stand-collar_shirt.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20201021/ppzA/5f8f31a2f997dd8c836ff14b/muji_blue_cotton_washed_oxford_stand-collar_shirt.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20201021/ppzA/5f8f31a2f997dd8c836ff14b/muji_blue_cotton_washed_oxford_stand-collar_shirt.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20201021/ppzA/5f8f31a2f997dd8c836ff14b/muji_blue_cotton_washed_oxford_stand-collar_shirt.jpg"
  },
  {
    company_name: "DENNISLINGO PREMIUM ATTIRE",
    description: "Slim Fit Shirt with Patch Pocket",
    price: "573",
    original_price: "Rs. 1,849",
    discount: "(69% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/dd2q/606867587cdb8c1f1475204d/dennislingo_premium_attire_purple_slim_fit_shirt_with_patch_pocket.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/dd2q/606867587cdb8c1f1475204d/dennislingo_premium_attire_purple_slim_fit_shirt_with_patch_pocket.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/dd2q/606867587cdb8c1f1475204d/dennislingo_premium_attire_purple_slim_fit_shirt_with_patch_pocket.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/dd2q/606867587cdb8c1f1475204d/dennislingo_premium_attire_purple_slim_fit_shirt_with_patch_pocket.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/dd2q/606867587cdb8c1f1475204d/dennislingo_premium_attire_purple_slim_fit_shirt_with_patch_pocket.jpg"
  },
  {
    company_name: "DENNISLINGO PREMIUM ATTIRE",
    description: "Band Collar Slim Fit Shirt",
    price: "573",
    original_price: "Rs. 1,849",
    discount: "(69% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/ORxf/60691fd6aeb269a9e33ea526/dennislingo_premium_attire_purple_band_collar_slim_fit_shirt.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/ORxf/60691fd6aeb269a9e33ea526/dennislingo_premium_attire_purple_band_collar_slim_fit_shirt.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/ORxf/60691fd6aeb269a9e33ea526/dennislingo_premium_attire_purple_band_collar_slim_fit_shirt.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/ORxf/60691fd6aeb269a9e33ea526/dennislingo_premium_attire_purple_band_collar_slim_fit_shirt.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/ORxf/60691fd6aeb269a9e33ea526/dennislingo_premium_attire_purple_band_collar_slim_fit_shirt.jpg"
  },
  {
    company_name: "Bene Kleed",
    description: "Floral Print Slim Fit Shirt with Patch Pocket",
    price: "630",
    original_price: "Rs. 2,099",
    discount: "(70% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/AU4p/60686d0d7cdb8c1f14758483/bene_kleed_beige_floral_print_slim_fit_shirt_with_patch_pocket.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/AU4p/60686d0d7cdb8c1f14758483/bene_kleed_beige_floral_print_slim_fit_shirt_with_patch_pocket.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/AU4p/60686d0d7cdb8c1f14758483/bene_kleed_beige_floral_print_slim_fit_shirt_with_patch_pocket.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/AU4p/60686d0d7cdb8c1f14758483/bene_kleed_beige_floral_print_slim_fit_shirt_with_patch_pocket.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/AU4p/60686d0d7cdb8c1f14758483/bene_kleed_beige_floral_print_slim_fit_shirt_with_patch_pocket.jpg"
  },
  {
    company_name: 'IVOC',
    description: 'Mid-Rise Jogger Jeans with Zip Pocket',
    price: '792',
    original_price: 'Rs. 1,799',
    discount: '(80% off)',
    quantity: 1,
    poster: 'https://assets.ajio.com/medias/sys_master/root/20210403/3vuZ/606864cc7cdb8c1f1474f313/-473Wx593H-461094398-blue-MODEL.jpg',
    poster2: 'https://assets.ajio.com/medias/sys_master/root/20210403/ntpG/606864cb7cdb8c1f1474f297/-473Wx593H-461094398-blue-MODEL6.jpg',
    poster3: 'https://assets.ajio.com/medias/sys_master/root/20210403/ntpG/606864cb7cdb8c1f1474f297/-473Wx593H-461094398-blue-MODEL6.jpg',
    poster4: 'https://assets.ajio.com/medias/sys_master/root/20210403/ntpG/606864cb7cdb8c1f1474f297/-473Wx593H-461094398-blue-MODEL6.jpg',
    poster5: 'https://assets.ajio.com/medias/sys_master/root/20210403/ntpG/606864cb7cdb8c1f1474f297/-473Wx593H-461094398-blue-MODEL6.jpg'
  },
  {
    company_name: "Indie Picks",
    description: "Mandarin-Collar South-Cotton Kurta",
    price: "1400",
    orginal_price: "Rs. 3,499",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20200918/FRiX/5f63c2cff997dd8c8341f4ab/indie_picks_orange_mandarin-collar_south-cotton_kurta.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20200918/FRiX/5f63c2cff997dd8c8341f4ab/indie_picks_orange_mandarin-collar_south-cotton_kurta.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20200918/FRiX/5f63c2cff997dd8c8341f4ab/indie_picks_orange_mandarin-collar_south-cotton_kurta.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20200918/FRiX/5f63c2cff997dd8c8341f4ab/indie_picks_orange_mandarin-collar_south-cotton_kurta.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20200918/FRiX/5f63c2cff997dd8c8341f4ab/indie_picks_orange_mandarin-collar_south-cotton_kurta.jpg"
  },
  {
    company_name: 'DENNISLINGO PREMIUM ATTIRE',
    description: 'Full Sleeves Slim Fit Classic Shirt',
    price: '573',
    original_price: 'Rs.1849',
    discount: '(10% off)',
    quantity: 1,
    poster: 'https://assets.ajio.com/medias/sys_master/root/20210428/D6Ix/60897dc6f997dd7b64c7767b/-473Wx593H-462323964-pink-MODEL5.jpg',
    poster2: 'https://assets.ajio.com/medias/sys_master/root/20210428/D6Ix/60897dc6f997dd7b64c7767b/-473Wx593H-462323964-pink-MODEL5.jpg',
    poster3: 'https://assets.ajio.com/medias/sys_master/root/20210428/D6Ix/60897dc6f997dd7b64c7767b/-473Wx593H-462323964-pink-MODEL5.jpg',
    poster4: 'https://assets.ajio.com/medias/sys_master/root/20210428/D6Ix/60897dc6f997dd7b64c7767b/-473Wx593H-462323964-pink-MODEL5.jpg',
    poster5: 'https://assets.ajio.com/medias/sys_master/root/20210428/D6Ix/60897dc6f997dd7b64c7767b/-473Wx593H-462323964-pink-MODEL5.jpg'
  },
  {
    company_name: 'DENNISLINGO PREMIUM ATTIRE',
    description: 'Full Sleeves Slim Fit Shirt',
    price: '573',
    original_price: 'Rs. 1849',
    discount: '(65% off)',
    quantity: 1,
    poster: 'https://assets.ajio.com/medias/sys_master/root/20210420/opz8/607ecd0df997dd7b64b802f5/-473Wx593H-462323964-white-MODEL7.jpg',
    poster2: 'https://assets.ajio.com/medias/sys_master/root/20210420/opz8/607ecd0df997dd7b64b802f5/-473Wx593H-462323964-white-MODEL7.jpg',
    poster3: 'https://assets.ajio.com/medias/sys_master/root/20210420/opz8/607ecd0df997dd7b64b802f5/-473Wx593H-462323964-white-MODEL7.jpg',
    poster4: 'https://assets.ajio.com/medias/sys_master/root/20210420/opz8/607ecd0df997dd7b64b802f5/-473Wx593H-462323964-white-MODEL7.jpg',
    poster5: 'https://assets.ajio.com/medias/sys_master/root/20210420/opz8/607ecd0df997dd7b64b802f5/-473Wx593H-462323964-white-MODEL7.jpg'
  },
  {
    company_name: "NETPLAY",
    description: "Slim Fit Shirt with Patch Pocket",
    price: "490",
    original_price: "Rs. 999",
    discount: "(51% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/had/hee/15130607321118/netplay_yellow_slim_fit_shirt_with_patch_pocket.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/had/hee/15130607321118/netplay_yellow_slim_fit_shirt_with_patch_pocket.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/had/hee/15130607321118/netplay_yellow_slim_fit_shirt_with_patch_pocket.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/had/hee/15130607321118/netplay_yellow_slim_fit_shirt_with_patch_pocket.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/had/hee/15130607321118/netplay_yellow_slim_fit_shirt_with_patch_pocket.jpg"
  },
  {
    company_name: "GLITO",
    description: "Colourblock Slim Fit Shirt",
    price: "420",
    original_price: "Rs. 1,199",
    discount: "(65% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/8mWH/60688ecaaeb269a9e3346e03/glito_white_colourblock_slim_fit_shirt.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/8mWH/60688ecaaeb269a9e3346e03/glito_white_colourblock_slim_fit_shirt.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/8mWH/60688ecaaeb269a9e3346e03/glito_white_colourblock_slim_fit_shirt.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/8mWH/60688ecaaeb269a9e3346e03/glito_white_colourblock_slim_fit_shirt.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/8mWH/60688ecaaeb269a9e3346e03/glito_white_colourblock_slim_fit_shirt.jpg"
  },
  {
    company_name: 'THE INDIAN GARAGE CO',
    description: 'Checked Slim Fit Shirt with Patch Pocket',
    price: '612',
    original_price: 'Rs. 1749',
    discount: '(70% off)',
    quantity: 1,
    poster: 'https://assets.ajio.com/medias/sys_master/root/20210316/TIPl/604faba1f997dd5c401134c8/-473Wx593H-460698898-navy-MODEL.jpg',
    poster2: 'https://assets.ajio.com/medias/sys_master/root/20200902/UTIy/5f4e9d76aeb269ef8eb53a48/-473Wx593H-460698898-navy-MODEL2.jpg',
    poster3: 'https://assets.ajio.com/medias/sys_master/root/20200902/iAFU/5f4e95f3aeb269ef8eb51119/-473Wx593H-460698898-navy-MODEL3.jpg',
    poster4: 'https://assets.ajio.com/medias/sys_master/root/20200902/BNq5/5f4e99ef7cdb8c76629047fe/-473Wx593H-460698898-navy-MODEL4.jpg',
    poster5: 'https://assets.ajio.com/medias/sys_master/root/20200902/a63Y/5f4e9fc8f997dd6918b21746/-473Wx593H-460698898-navy-MODEL5.jpg'
  },
  {
    company_name: 'THE INDIAN GARAGE CO',
    description: 'Checked Slim Fit Shirt with Patch Pocket',
    price: '612',
    original_price: 'Rs. 1749',
    discount: '(70% off)',
    quantity: 1,
    poster: 'https://assets.ajio.com/medias/sys_master/root/20210316/XA79/604fbf6c7cdb8c1f14635bff/-473Wx593H-460698915-navy-MODEL.jpg',
    poster2: 'https://assets.ajio.com/medias/sys_master/root/20200821/kW8T/5f3fef03aeb2693e046c88ee/-473Wx593H-460698915-navy-MODEL2.jpg',
    poster3: 'https://assets.ajio.com/medias/sys_master/root/20200821/D04c/5f3fe568f997dd2277a33e16/-473Wx593H-460698915-navy-MODEL3.jpg',
    poster4: 'https://assets.ajio.com/medias/sys_master/root/20200821/eWJU/5f3fe4efaeb2693e046c605d/-473Wx593H-460698915-navy-MODEL4.jpg',
    poster5: 'https://assets.ajio.com/medias/sys_master/root/20200821/WLLF/5f3fe70bf997dd2277a34960/-473Wx593H-460698915-navy-MODEL5.jpg'
  },
  {
    company_name: 'DENNISLINGO PREMIUM ATTIRE',
    description: 'Slim Fit Shirt with Spread Collar',
    price: '573',
    original_price: 'Rs. 1849',
    discount: '(70% off)',
    quantity: 1,
    poster: 'https://assets.ajio.com/medias/sys_master/root/20210420/1o3B/607eccfeaeb269a9e3972a05/-473Wx593H-462323964-purple-MODEL.jpg',
    poster2: 'https://assets.ajio.com/medias/sys_master/root/20210420/FIfr/607eccfeaeb269a9e3972979/-473Wx593H-462323964-purple-MODEL2.jpg',
    poster3: 'https://assets.ajio.com/medias/sys_master/root/20210420/EgRb/607eccfeaeb269a9e397297a/-473Wx593H-462323964-purple-MODEL3.jpg',
    poster4: 'https://assets.ajio.com/medias/sys_master/root/20210420/1l5v/607eccfeaeb269a9e3972987/-473Wx593H-462323964-purple-MODEL4.jpg',
    poster5: 'https://assets.ajio.com/medias/sys_master/root/20210420/PdwT/607eccfeaeb269a9e397297e/-473Wx593H-462323964-purple-MODEL7.jpg'
  },
  {
    company_name: 'PERFORMAX',
    description: 'Panelled Track Pants with Elasticated Drawstring Waist',
    price: '449',
    original_price: 'Rs. 599',
    discount: '(70% off)',
    quantity: 1,
    poster: 'https://assets.ajio.com/medias/sys_master/root/20200919/8kRX/5f64febb7cdb8c21e36685ad/-473Wx593H-440971924-jetblack-MODEL.jpg',
    poster2: 'https://assets.ajio.com/medias/sys_master/root/20200919/Hibw/5f6509147cdb8c21e366c964/-473Wx593H-440971924-jetblack-MODEL2.jpg',
    poster3: 'https://assets.ajio.com/medias/sys_master/root/20200919/zxmw/5f6503b37cdb8c21e3669ad5/-473Wx593H-440971924-jetblack-MODEL3.jpg',
    poster4: 'https://assets.ajio.com/medias/sys_master/root/20200919/KwWv/5f64fec0f997dd8c8346059b/-473Wx593H-440971924-jetblack-MODEL4.jpg',
    poster5: 'https://assets.ajio.com/medias/sys_master/root/20200919/5BhS/5f64ff48aeb269d563c55e48/-473Wx593H-440971924-jetblack-MODEL6.jpg'
  },
  {
    company_name: 'PERFORMAX',
    description: 'Panelled Track Pants with Elasticated Drawstring Waist',
    price: '449',
    original_price: 'Rs. 599',
    discount: '(70% off)',
    quantity: 1,
    poster: 'https://assets.ajio.com/medias/sys_master/root/hc7/h73/13989388288030/-473Wx593H-440971924-teal-MODEL.jpg',
    poster2: 'https://assets.ajio.com/medias/sys_master/root/h6f/h2f/13989386092574/-473Wx593H-440971924-teal-MODEL2.jpg',
    poster3: 'https://assets.ajio.com/medias/sys_master/root/h21/hac/13989405032478/-473Wx593H-440971924-teal-MODEL3.jpg',
    poster4: 'https://assets.ajio.com/medias/sys_master/root/he7/ha8/13989398347806/-473Wx593H-440971924-teal-MODEL4.jpg',
    poster5: 'https://assets.ajio.com/medias/sys_master/root/he5/haa/13989401624606/-473Wx593H-440971924-teal-MODEL5.jpg'
  },
  {
    company_name: 'TEAMSPIRIT',
    description: 'Heathered Track Pants with Contrast Taping',
    price: '374',
    original_price: 'Rs. 499',
    discount: '(70% off)',
    quantity: 1,
    poster: 'https://assets.ajio.com/medias/sys_master/root/had/he4/15155852640286/-473Wx593H-441031716-charcoal-MODEL.jpg',
    poster2: 'https://assets.ajio.com/medias/sys_master/root/hee/h6b/15155849986078/-473Wx593H-441031716-charcoal-MODEL2.jpg',
    poster3: 'https://assets.ajio.com/medias/sys_master/root/h76/hfb/15155863912478/-473Wx593H-441031716-charcoal-MODEL3.jpg',
    poster4: 'https://assets.ajio.com/medias/sys_master/root/hbf/hab/15155846905886/-473Wx593H-441031716-charcoal-MODEL4.jpg',
    poster5: 'https://assets.ajio.com/medias/sys_master/root/hbf/hab/15155846905886/-473Wx593H-441031716-charcoal-MODEL4.jpg'
  }
]
const women_items = [
  {
    company_name: 'OM SAI LATEST CREATION',
    description: 'Block Print A-line Kurti',
    price: '538',
    original_price: 'Rs. 699',
    discount: '(23% off)',
    quantity: 1,
    poster: 'https://assets.ajio.com/medias/sys_master/root/20210403/06W9/6068a885aeb269a9e3365751/om_sai_latest_creation_grey_block_print_a-line_kurti.jpg',
    poster2: 'https://assets.ajio.com/medias/sys_master/root/20210403/06W9/6068a885aeb269a9e3365751/om_sai_latest_creation_grey_block_print_a-line_kurti.jpg',
    poster3: 'https://assets.ajio.com/medias/sys_master/root/20210403/06W9/6068a885aeb269a9e3365751/om_sai_latest_creation_grey_block_print_a-line_kurti.jpg',
    poster4: 'https://assets.ajio.com/medias/sys_master/root/20210403/06W9/6068a885aeb269a9e3365751/om_sai_latest_creation_grey_block_print_a-line_kurti.jpg',
    poster5: 'https://assets.ajio.com/medias/sys_master/root/20210403/06W9/6068a885aeb269a9e3365751/om_sai_latest_creation_grey_block_print_a-line_kurti.jpg'

  },
  {
    company_name: 'KIPEK',
    description: 'Straight Tunic with Lace Detail',
    price: '576',
    original_price: 'Rs. 1,799',
    discount: '(68% off)',
    quantity: 1,
    poster: 'https://assets.ajio.com/medias/sys_master/root/20210403/FKtk/60687fd8aeb269a9e3335aa5/kipek_bottle_green_straight_tunic_with_lace_detail.jpg',
    poster2: 'https://assets.ajio.com/medias/sys_master/root/20210403/FKtk/60687fd8aeb269a9e3335aa5/kipek_bottle_green_straight_tunic_with_lace_detail.jpg',
    poster3: 'https://assets.ajio.com/medias/sys_master/root/20210403/FKtk/60687fd8aeb269a9e3335aa5/kipek_bottle_green_straight_tunic_with_lace_detail.jpg',
    poster4: 'https://assets.ajio.com/medias/sys_master/root/20210403/FKtk/60687fd8aeb269a9e3335aa5/kipek_bottle_green_straight_tunic_with_lace_detail.jpg',
    poster5: 'https://assets.ajio.com/medias/sys_master/root/20210403/FKtk/60687fd8aeb269a9e3335aa5/kipek_bottle_green_straight_tunic_with_lace_detail.jpg'

  },
  {
    company_name: "Teamspirit",
    description: "Printed Hooded Dress with Side Pockets",
    price: "490",
    orginal_price: "Rs. 999",
    discount: "(51% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210112/gwZl/5ffca9e77cdb8c1f1425e831/teamspirit_pink_printed_hooded_dress_with_side_pockets.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210112/gwZl/5ffca9e77cdb8c1f1425e831/teamspirit_pink_printed_hooded_dress_with_side_pockets.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210112/gwZl/5ffca9e77cdb8c1f1425e831/teamspirit_pink_printed_hooded_dress_with_side_pockets.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210112/gwZl/5ffca9e77cdb8c1f1425e831/teamspirit_pink_printed_hooded_dress_with_side_pockets.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210112/gwZl/5ffca9e77cdb8c1f1425e831/teamspirit_pink_printed_hooded_dress_with_side_pockets.jpg"
  },
  {
    company_name: "RIO",
    description: "Striped Fit & Flare Dress with Lettuce Hems",
    price: "479",
    orginal_price: "Rs. 799",
    discount: "(40% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210316/ewNu/604fbcaaf997dd5c40118bc6/rio_pink_striped_fit_&_flare_dress_with_lettuce_hems.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210316/ewNu/604fbcaaf997dd5c40118bc6/rio_pink_striped_fit_&_flare_dress_with_lettuce_hems.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210316/ewNu/604fbcaaf997dd5c40118bc6/rio_pink_striped_fit_&_flare_dress_with_lettuce_hems.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210316/ewNu/604fbcaaf997dd5c40118bc6/rio_pink_striped_fit_&_flare_dress_with_lettuce_hems.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210316/ewNu/604fbcaaf997dd5c40118bc6/rio_pink_striped_fit_&_flare_dress_with_lettuce_hems.jpg"
  },
  {
    company_name: "FUSION",
    description: "Floral Print Straight Kurti",
    price: "245",
    orginal_price: "Rs. 499",
    discount: "(51% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/haf/h2e/14491337424926/fusion_coral_red_floral_print_straight_kurti.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/haf/h2e/14491337424926/fusion_coral_red_floral_print_straight_kurti.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/haf/h2e/14491337424926/fusion_coral_red_floral_print_straight_kurti.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/haf/h2e/14491337424926/fusion_coral_red_floral_print_straight_kurti.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/haf/h2e/14491337424926/fusion_coral_red_floral_print_straight_kurti.jpg"
  },
  {
    company_name: "OM SAI LATEST CREATION",
    description: "Block Print Straight Kurti",
    price: "524",
    orginal_price: "Rs. 699",
    discount: "(25% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/kKA1/6068a6acaeb269a9e3363363/om_sai_latest_creation_pink_block_print_straight_kurti.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/kKA1/6068a6acaeb269a9e3363363/om_sai_latest_creation_pink_block_print_straight_kurti.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/kKA1/6068a6acaeb269a9e3363363/om_sai_latest_creation_pink_block_print_straight_kurti.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/kKA1/6068a6acaeb269a9e3363363/om_sai_latest_creation_pink_block_print_straight_kurti.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/kKA1/6068a6acaeb269a9e3363363/om_sai_latest_creation_pink_block_print_straight_kurti.jpg"
  },
  {
    company_name: "FOUR SEASONS",
    description: "Traditional Saree with Zari Border",
    price: '699',
    original_price: "Rs. 1399",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/h67/hff/15479545004062/satya_paul_maroon_polka-dot_print_saree_with_contrast_border.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/h67/hff/15479545004062/satya_paul_maroon_polka-dot_print_saree_with_contrast_border.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/h67/hff/15479545004062/satya_paul_maroon_polka-dot_print_saree_with_contrast_border.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/h67/hff/15479545004062/satya_paul_maroon_polka-dot_print_saree_with_contrast_border.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/h67/hff/15479545004062/satya_paul_maroon_polka-dot_print_saree_with_contrast_border.jpg"
  },
  {
    company_name: 'DNMX',
    description: 'Lightly Washed Mid-Rise Jeans',
    price: '637',
    original_price: 'Rs. 1,299',
    discount: '(51% off)',
    quantity: 1,
    poster: 'https://assets.ajio.com/medias/sys_master/root/h4b/h30/15785539338270/dnmx_blue_lightly_washed_mid-rise_jeans.jpg',
    poster1: 'https://assets.ajio.com/medias/sys_master/root/h4b/h30/15785539338270/dnmx_blue_lightly_washed_mid-rise_jeans.jpg',
    poster2: 'https://assets.ajio.com/medias/sys_master/root/h4b/h30/15785539338270/dnmx_blue_lightly_washed_mid-rise_jeans.jpg',
    poster3: 'https://assets.ajio.com/medias/sys_master/root/h4b/h30/15785539338270/dnmx_blue_lightly_washed_mid-rise_jeans.jpg',
    poster4: 'https://assets.ajio.com/medias/sys_master/root/h4b/h30/15785539338270/dnmx_blue_lightly_washed_mid-rise_jeans.jpg',
    poster5: 'https://assets.ajio.com/medias/sys_master/root/h4b/h30/15785539338270/dnmx_blue_lightly_washed_mid-rise_jeans.jpg'

  },
  {
    company_name: "OM SAI LATEST CREATION",
    description: "Block Print A-line Kurti",
    price: "538",
    orginal_price: "Rs. 699",
    discount: "(23% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/JTla/6068993b7cdb8c1f1478a3e1/om_sai_latest_creation_yellow_block_print_a-line_kurti.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/JTla/6068993b7cdb8c1f1478a3e1/om_sai_latest_creation_yellow_block_print_a-line_kurti.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/JTla/6068993b7cdb8c1f1478a3e1/om_sai_latest_creation_yellow_block_print_a-line_kurti.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/JTla/6068993b7cdb8c1f1478a3e1/om_sai_latest_creation_yellow_block_print_a-line_kurti.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/JTla/6068993b7cdb8c1f1478a3e1/om_sai_latest_creation_yellow_block_print_a-line_kurti.jpg"
  },
  {
    company_name: "FOUR SEASONS",
    description: "Traditional Saree with Zari Border",
    price: "629",
    original_price: "Rs. 1099",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20201110/bQIa/5fa9f699aeb269d563066722/manjula_sarees_blue_traditional_saree_with_contrast_zari_border.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20201110/bQIa/5fa9f699aeb269d563066722/manjula_sarees_blue_traditional_saree_with_contrast_zari_border.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20201110/bQIa/5fa9f699aeb269d563066722/manjula_sarees_blue_traditional_saree_with_contrast_zari_border.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20201110/bQIa/5fa9f699aeb269d563066722/manjula_sarees_blue_traditional_saree_with_contrast_zari_border.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20201110/bQIa/5fa9f699aeb269d563066722/manjula_sarees_blue_traditional_saree_with_contrast_zari_border.jpg"
  },
  {
    company_name: "SATRANI",
    description: "Traditional Saree with Zari Border",
    price: "2544",
    original_price: "Rs. 1119",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210304/QsWQ/60402333f997dd5c400369bb/saree_mall_brown_silk_blend_saree_with_embellished_border.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210304/QsWQ/60402333f997dd5c400369bb/saree_mall_brown_silk_blend_saree_with_embellished_border.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210304/QsWQ/60402333f997dd5c400369bb/saree_mall_brown_silk_blend_saree_with_embellished_border.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210304/QsWQ/60402333f997dd5c400369bb/saree_mall_brown_silk_blend_saree_with_embellished_border.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210304/QsWQ/60402333f997dd5c400369bb/saree_mall_brown_silk_blend_saree_with_embellished_border.jpg"
  },
  {
    company_name: "ANAITA",
    description: "Embroidered Straight Kurti",
    price: "492",
    orginal_price: "Rs. 1,229",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210423/DLEQ/6082bdf1aeb269a9e39c61a3/anaita_green_embroidered_straight_kurti.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210423/DLEQ/6082bdf1aeb269a9e39c61a3/anaita_green_embroidered_straight_kurti.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210423/DLEQ/6082bdf1aeb269a9e39c61a3/anaita_green_embroidered_straight_kurti.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210423/DLEQ/6082bdf1aeb269a9e39c61a3/anaita_green_embroidered_straight_kurti.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210423/DLEQ/6082bdf1aeb269a9e39c61a3/anaita_green_embroidered_straight_kurti.jpg"
  },
  {
    company_name: "APNISHA",
    description: "Traditional Saree with Zari Border",
    price: '349',
    original_price: "Rs. 799",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20200908/HRb7/5f568bf57cdb8c7662957870/satya_paul_blue_floral_print_chiffon_saree.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20200908/HRb7/5f568bf57cdb8c7662957870/satya_paul_blue_floral_print_chiffon_saree.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20200908/HRb7/5f568bf57cdb8c7662957870/satya_paul_blue_floral_print_chiffon_saree.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20200908/HRb7/5f568bf57cdb8c7662957870/satya_paul_blue_floral_print_chiffon_saree.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20200908/HRb7/5f568bf57cdb8c7662957870/satya_paul_blue_floral_print_chiffon_saree.jpg"
  },
  {
    company_name: "SATRANI",
    description: "Traditional Saree with Zari Border",
    price: '499',
    original_price: "Rs. 990",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210404/2lSe/606a9696aeb269a9e359b4d6/runaya_nx_blue_pack_of_2_traditional_sarees_with_contrast_print_border.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210404/2lSe/606a9696aeb269a9e359b4d6/runaya_nx_blue_pack_of_2_traditional_sarees_with_contrast_print_border.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210404/2lSe/606a9696aeb269a9e359b4d6/runaya_nx_blue_pack_of_2_traditional_sarees_with_contrast_print_border.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210404/2lSe/606a9696aeb269a9e359b4d6/runaya_nx_blue_pack_of_2_traditional_sarees_with_contrast_print_border.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210404/2lSe/606a9696aeb269a9e359b4d6/runaya_nx_blue_pack_of_2_traditional_sarees_with_contrast_print_border.jpg"
  },
  {
    company_name: 'OM SAI LATEST CREATION',
    description: 'Block Print A-line Kurti',
    price: '538',
    original_price: 'Rs. 699',
    discount: '(23% off)',
    quantity: 1,
    poster: 'https://assets.ajio.com/medias/sys_master/root/20210403/JTla/6068993b7cdb8c1f1478a3e1/om_sai_latest_creation_yellow_block_print_a-line_kurti.jpg',
    poster2: 'https://assets.ajio.com/medias/sys_master/root/20210403/JTla/6068993b7cdb8c1f1478a3e1/om_sai_latest_creation_yellow_block_print_a-line_kurti.jpg',
    poster3: 'https://assets.ajio.com/medias/sys_master/root/20210403/JTla/6068993b7cdb8c1f1478a3e1/om_sai_latest_creation_yellow_block_print_a-line_kurti.jpg',
    poster4: 'https://assets.ajio.com/medias/sys_master/root/20210403/JTla/6068993b7cdb8c1f1478a3e1/om_sai_latest_creation_yellow_block_print_a-line_kurti.jpg',
    poster5: 'https://assets.ajio.com/medias/sys_master/root/20210403/JTla/6068993b7cdb8c1f1478a3e1/om_sai_latest_creation_yellow_block_print_a-line_kurti.jpg'

  }

]
const saree = [
  {
    company_name: "GRIVA DESIGNER",
    description: "Traditional Saree with Zari Border",
    price: "1085",
    original_price: "Rs. 1299",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210316/IkBu/604faa587cdb8c1f14631133/satrani_orange_geometric_print_traditional_saree.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210316/IkBu/604faa587cdb8c1f14631133/satrani_orange_geometric_print_traditional_saree.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210316/IkBu/604faa587cdb8c1f14631133/satrani_orange_geometric_print_traditional_saree.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210316/IkBu/604faa587cdb8c1f14631133/satrani_orange_geometric_print_traditional_saree.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210316/IkBu/604faa587cdb8c1f14631133/satrani_orange_geometric_print_traditional_saree.jpg"
  },
  {
    company_name: "SATRANI",
    description: "Traditional Saree with Zari Border",
    price: "684",
    original_price: "Rs. 899",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/fPHA/6068b7ecaeb269a9e3377c9b/awesome_lime_awesome_traditional_pure_cotton_silk_traditional_saree.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/fPHA/6068b7ecaeb269a9e3377c9b/awesome_lime_awesome_traditional_pure_cotton_silk_traditional_saree.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/fPHA/6068b7ecaeb269a9e3377c9b/awesome_lime_awesome_traditional_pure_cotton_silk_traditional_saree.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/fPHA/6068b7ecaeb269a9e3377c9b/awesome_lime_awesome_traditional_pure_cotton_silk_traditional_saree.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/fPHA/6068b7ecaeb269a9e3377c9b/awesome_lime_awesome_traditional_pure_cotton_silk_traditional_saree.jpg"
  },
  {
    company_name: "FOUR SEASONS",
    description: "Traditional Saree with Zari Border",
    price: "967",
    original_price: "Rs. 1399",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/h67/hff/15479545004062/satya_paul_maroon_polka-dot_print_saree_with_contrast_border.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/h67/hff/15479545004062/satya_paul_maroon_polka-dot_print_saree_with_contrast_border.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/h67/hff/15479545004062/satya_paul_maroon_polka-dot_print_saree_with_contrast_border.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/h67/hff/15479545004062/satya_paul_maroon_polka-dot_print_saree_with_contrast_border.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/h67/hff/15479545004062/satya_paul_maroon_polka-dot_print_saree_with_contrast_border.jpg"
  },
  {
    company_name: "APNISHA",
    description: "Traditional Saree with Zari Border",
    price: "595",
    original_price: "Rs. 799",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20200908/HRb7/5f568bf57cdb8c7662957870/satya_paul_blue_floral_print_chiffon_saree.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20200908/HRb7/5f568bf57cdb8c7662957870/satya_paul_blue_floral_print_chiffon_saree.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20200908/HRb7/5f568bf57cdb8c7662957870/satya_paul_blue_floral_print_chiffon_saree.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20200908/HRb7/5f568bf57cdb8c7662957870/satya_paul_blue_floral_print_chiffon_saree.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20200908/HRb7/5f568bf57cdb8c7662957870/satya_paul_blue_floral_print_chiffon_saree.jpg"
  },
  {
    company_name: "SATRANI",
    description: "Traditional Saree with Zari Border",
    price: "639",
    original_price: "Rs. 990",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210404/2lSe/606a9696aeb269a9e359b4d6/runaya_nx_blue_pack_of_2_traditional_sarees_with_contrast_print_border.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210404/2lSe/606a9696aeb269a9e359b4d6/runaya_nx_blue_pack_of_2_traditional_sarees_with_contrast_print_border.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210404/2lSe/606a9696aeb269a9e359b4d6/runaya_nx_blue_pack_of_2_traditional_sarees_with_contrast_print_border.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210404/2lSe/606a9696aeb269a9e359b4d6/runaya_nx_blue_pack_of_2_traditional_sarees_with_contrast_print_border.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210404/2lSe/606a9696aeb269a9e359b4d6/runaya_nx_blue_pack_of_2_traditional_sarees_with_contrast_print_border.jpg"
  },
  {
    company_name: "FOUR SEASONS",
    description: "Traditional Saree with Zari Border",
    price: "629",
    original_price: "Rs. 1099",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20201110/bQIa/5fa9f699aeb269d563066722/manjula_sarees_blue_traditional_saree_with_contrast_zari_border.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20201110/bQIa/5fa9f699aeb269d563066722/manjula_sarees_blue_traditional_saree_with_contrast_zari_border.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20201110/bQIa/5fa9f699aeb269d563066722/manjula_sarees_blue_traditional_saree_with_contrast_zari_border.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20201110/bQIa/5fa9f699aeb269d563066722/manjula_sarees_blue_traditional_saree_with_contrast_zari_border.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20201110/bQIa/5fa9f699aeb269d563066722/manjula_sarees_blue_traditional_saree_with_contrast_zari_border.jpg"
  },
  {
    company_name: "SATRANI",
    description: "Traditional Saree with Zari Border",
    price: "2544",
    original_price: "Rs. 1119",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210304/QsWQ/60402333f997dd5c400369bb/saree_mall_brown_silk_blend_saree_with_embellished_border.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210304/QsWQ/60402333f997dd5c400369bb/saree_mall_brown_silk_blend_saree_with_embellished_border.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210304/QsWQ/60402333f997dd5c400369bb/saree_mall_brown_silk_blend_saree_with_embellished_border.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210304/QsWQ/60402333f997dd5c400369bb/saree_mall_brown_silk_blend_saree_with_embellished_border.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210304/QsWQ/60402333f997dd5c400369bb/saree_mall_brown_silk_blend_saree_with_embellished_border.jpg"
  },
  {
    company_name: "APNISHA",
    description: "Traditional Saree with Zari Border",
    price: "1591",
    original_price: "Rs. 1899",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/OVqh/6068dde2f997dd7b64674229/choiceit_pink_floral_print_traditional_saree.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/OVqh/6068dde2f997dd7b64674229/choiceit_pink_floral_print_traditional_saree.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/OVqh/6068dde2f997dd7b64674229/choiceit_pink_floral_print_traditional_saree.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/OVqh/6068dde2f997dd7b64674229/choiceit_pink_floral_print_traditional_saree.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/OVqh/6068dde2f997dd7b64674229/choiceit_pink_floral_print_traditional_saree.jpg"
  },
  {
    company_name: "FOUR SEASONS",
    description: "Traditional Saree with Zari Border",
    price: "893",
    original_price: "Rs. 1299",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/cEvD/6068f4edaeb269a9e33c0e57/saree_mall_cream_patola_silk_banarasi_saree.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/cEvD/6068f4edaeb269a9e33c0e57/saree_mall_cream_patola_silk_banarasi_saree.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/cEvD/6068f4edaeb269a9e33c0e57/saree_mall_cream_patola_silk_banarasi_saree.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/cEvD/6068f4edaeb269a9e33c0e57/saree_mall_cream_patola_silk_banarasi_saree.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/cEvD/6068f4edaeb269a9e33c0e57/saree_mall_cream_patola_silk_banarasi_saree.jpg"
  },
  {
    company_name: "SATRANI",
    description: "Traditional Saree with Zari Border",
    price: "3977",
    original_price: "Rs. 5,399",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210404/ZwP7/606a34faaeb269a9e352c28d/anni_designer_grey_traditional_saree_with_contrast_border.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210404/ZwP7/606a34faaeb269a9e352c28d/anni_designer_grey_traditional_saree_with_contrast_border.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210404/ZwP7/606a34faaeb269a9e352c28d/anni_designer_grey_traditional_saree_with_contrast_border.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210404/ZwP7/606a34faaeb269a9e352c28d/anni_designer_grey_traditional_saree_with_contrast_border.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210404/ZwP7/606a34faaeb269a9e352c28d/anni_designer_grey_traditional_saree_with_contrast_border.jpg"
  },
  {
    company_name: "GRIVA DESIGNER",
    description: "Traditional Saree with Zari Border",
    price: "700",
    original_price: "Rs. 1290",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210404/mHT5/6069b496f997dd7b647735ad/saree_mall_violet_linen_printed_saree.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210404/mHT5/6069b496f997dd7b647735ad/saree_mall_violet_linen_printed_saree.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210404/mHT5/6069b496f997dd7b647735ad/saree_mall_violet_linen_printed_saree.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210404/mHT5/6069b496f997dd7b647735ad/saree_mall_violet_linen_printed_saree.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210404/mHT5/6069b496f997dd7b647735ad/saree_mall_violet_linen_printed_saree.jpg"
  },
  {
    company_name: "SATRANI",
    description: "Traditional Saree with Zari Border",
    price: "2632",
    original_price: "Rs. 1299",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210304/y370/603ff6d97cdb8c1f1453d6f9/apnisha_peach_floral_print_cotton_saree_with_satin_border.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210304/y370/603ff6d97cdb8c1f1453d6f9/apnisha_peach_floral_print_cotton_saree_with_satin_border.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210304/y370/603ff6d97cdb8c1f1453d6f9/apnisha_peach_floral_print_cotton_saree_with_satin_border.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210304/y370/603ff6d97cdb8c1f1453d6f9/apnisha_peach_floral_print_cotton_saree_with_satin_border.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210304/y370/603ff6d97cdb8c1f1453d6f9/apnisha_peach_floral_print_cotton_saree_with_satin_border.jpg"
  },
  {
    company_name: "APNISHA",
    description: "Traditional Saree with Zari Border",
    price: "640",
    original_price: "Rs. 999",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/cIrI/60688f51f997dd7b6460f00a/aarrah_peach_woven_pattern_silk_blend_saree_.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/cIrI/60688f51f997dd7b6460f00a/aarrah_peach_woven_pattern_silk_blend_saree_.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/cIrI/60688f51f997dd7b6460f00a/aarrah_peach_woven_pattern_silk_blend_saree_.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/cIrI/60688f51f997dd7b6460f00a/aarrah_peach_woven_pattern_silk_blend_saree_.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/cIrI/60688f51f997dd7b6460f00a/aarrah_peach_woven_pattern_silk_blend_saree_.jpg"
  },
  {
    company_name: "SATRANI",
    description: "Traditional Saree with Zari Border",
    price: "585",
    original_price: "Rs. 899",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/YWt1/60688e797cdb8c1f1477e92b/four_seasons_blue_poly_georgette_mukaish_embellished_saree_.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/YWt1/60688e797cdb8c1f1477e92b/four_seasons_blue_poly_georgette_mukaish_embellished_saree_.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/YWt1/60688e797cdb8c1f1477e92b/four_seasons_blue_poly_georgette_mukaish_embellished_saree_.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/YWt1/60688e797cdb8c1f1477e92b/four_seasons_blue_poly_georgette_mukaish_embellished_saree_.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/YWt1/60688e797cdb8c1f1477e92b/four_seasons_blue_poly_georgette_mukaish_embellished_saree_.jpg"
  },
  {
    company_name: "FOUR SEASONS",
    description: "Traditional Saree with Zari Border",
    price: "623",
    original_price: "Rs. 1299",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210108/Bsop/5ff82d27f997dd5c40d11172/saree_mall_red_georgette_printed_saree.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210108/Bsop/5ff82d27f997dd5c40d11172/saree_mall_red_georgette_printed_saree.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210108/Bsop/5ff82d27f997dd5c40d11172/saree_mall_red_georgette_printed_saree.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210108/Bsop/5ff82d27f997dd5c40d11172/saree_mall_red_georgette_printed_saree.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210108/Bsop/5ff82d27f997dd5c40d11172/saree_mall_red_georgette_printed_saree.jpg"
  },
  {
    company_name: "APNISHA",
    description: "Traditional Saree with Zari Border",
    price: "585",
    original_price: "Rs. 999",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/fPHA/6068b7ecaeb269a9e3377c9b/awesome_lime_awesome_traditional_pure_cotton_silk_traditional_saree.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/fPHA/6068b7ecaeb269a9e3377c9b/awesome_lime_awesome_traditional_pure_cotton_silk_traditional_saree.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/fPHA/6068b7ecaeb269a9e3377c9b/awesome_lime_awesome_traditional_pure_cotton_silk_traditional_saree.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/fPHA/6068b7ecaeb269a9e3377c9b/awesome_lime_awesome_traditional_pure_cotton_silk_traditional_saree.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/fPHA/6068b7ecaeb269a9e3377c9b/awesome_lime_awesome_traditional_pure_cotton_silk_traditional_saree.jpg"
  },
  {
    company_name: "SATRANI",
    description: "Traditional Saree with Zari Border",
    price: "752",
    original_price: "Rs. 1299",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/cIrI/60688f51f997dd7b6460f00a/aarrah_peach_woven_pattern_silk_blend_saree_.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/cIrI/60688f51f997dd7b6460f00a/aarrah_peach_woven_pattern_silk_blend_saree_.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/cIrI/60688f51f997dd7b6460f00a/aarrah_peach_woven_pattern_silk_blend_saree_.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/cIrI/60688f51f997dd7b6460f00a/aarrah_peach_woven_pattern_silk_blend_saree_.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/cIrI/60688f51f997dd7b6460f00a/aarrah_peach_woven_pattern_silk_blend_saree_.jpg"
  },
  {
    company_name: "GRIVA DESIGNER",
    description: "Traditional Saree with Zari Border",
    price: "792",
    original_price: "Rs. 999",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/WNJt/6068c9217cdb8c1f147be448/aarrah_yellow_woven_design_silk_saree_with_zari_border.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/WNJt/6068c9217cdb8c1f147be448/aarrah_yellow_woven_design_silk_saree_with_zari_border.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/WNJt/6068c9217cdb8c1f147be448/aarrah_yellow_woven_design_silk_saree_with_zari_border.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/WNJt/6068c9217cdb8c1f147be448/aarrah_yellow_woven_design_silk_saree_with_zari_border.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/WNJt/6068c9217cdb8c1f147be448/aarrah_yellow_woven_design_silk_saree_with_zari_border.jpg"
  },
  {
    company_name: "GRIVA DESIGNER",
    description: "Traditional Saree with Zari Border",
    price: "809",
    original_price: "Rs. 1099",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/YJFy/606964afaeb269a9e342fe54/griva_designer_orange_digital_printed_linen_saree.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/YJFy/606964afaeb269a9e342fe54/griva_designer_orange_digital_printed_linen_saree.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/YJFy/606964afaeb269a9e342fe54/griva_designer_orange_digital_printed_linen_saree.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/YJFy/606964afaeb269a9e342fe54/griva_designer_orange_digital_printed_linen_saree.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/YJFy/606964afaeb269a9e342fe54/griva_designer_orange_digital_printed_linen_saree.jpg"
  },
  {
    company_name: "GRIVA DESIGNER",
    description: "Traditional Saree with Zari Border",
    price: "629",
    original_price: "Rs. 1,099",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/Ndb4/606880c87cdb8c1f1476efa2/four_seasons_black_geometric_print_saree_with_tassels.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/Ndb4/606880c87cdb8c1f1476efa2/four_seasons_black_geometric_print_saree_with_tassels.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/Ndb4/606880c87cdb8c1f1476efa2/four_seasons_black_geometric_print_saree_with_tassels.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/Ndb4/606880c87cdb8c1f1476efa2/four_seasons_black_geometric_print_saree_with_tassels.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/Ndb4/606880c87cdb8c1f1476efa2/four_seasons_black_geometric_print_saree_with_tassels.jpg"
  },
  {
    company_name: "GRIVA DESIGNER",
    description: "Traditional Saree with Zari Border",
    price: "916",
    original_price: "Rs. 1399",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20201223/e7xx/5fe28b8daeb269d5634f6741/trundz_blue_floral_print_saree_with_contrast_border.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20201223/e7xx/5fe28b8daeb269d5634f6741/trundz_blue_floral_print_saree_with_contrast_border.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20201223/e7xx/5fe28b8daeb269d5634f6741/trundz_blue_floral_print_saree_with_contrast_border.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20201223/e7xx/5fe28b8daeb269d5634f6741/trundz_blue_floral_print_saree_with_contrast_border.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20201223/e7xx/5fe28b8daeb269d5634f6741/trundz_blue_floral_print_saree_with_contrast_border.jpg"
  },
  {
    company_name: "SATRANI",
    description: "Traditional Saree with Zari Border",
    price: "999",
    original_price: "Rs. 1299",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20201020/25I2/5f8e053cf997dd8c836e8305/awesome_yellow_awesome_designer_pure_silk_saree_with_jaccaurd_saree.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20201020/25I2/5f8e053cf997dd8c836e8305/awesome_yellow_awesome_designer_pure_silk_saree_with_jaccaurd_saree.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20201020/25I2/5f8e053cf997dd8c836e8305/awesome_yellow_awesome_designer_pure_silk_saree_with_jaccaurd_saree.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20201020/25I2/5f8e053cf997dd8c836e8305/awesome_yellow_awesome_designer_pure_silk_saree_with_jaccaurd_saree.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20201020/25I2/5f8e053cf997dd8c836e8305/awesome_yellow_awesome_designer_pure_silk_saree_with_jaccaurd_saree.jpg"
  }
]
const jeans = [
  {
    company_name: "DNMX",
    description: "Mid-Rise Fitted Jeans",
    price: "679",
    original_price: "Rs. 799",
    discount: "(15% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/h47/hb8/14876616851486/dnmx_black_mid-rise_fitted_jeans.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/h47/hb8/14876616851486/dnmx_black_mid-rise_fitted_jeans.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/h47/hb8/14876616851486/dnmx_black_mid-rise_fitted_jeans.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/h47/hb8/14876616851486/dnmx_black_mid-rise_fitted_jeans.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/h47/hb8/14876616851486/dnmx_black_mid-rise_fitted_jeans.jpg"
  },
  {
    company_name: "iVOC",
    description: "Solid Jogger Jeans with Drawstring",
    price: "702",
    original_price: "Rs. 1,799",
    discount: "(61% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/OXIo/60687013aeb269a9e3323261/ivoc_black_solid_jogger_jeans_with_drawstring.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/OXIo/60687013aeb269a9e3323261/ivoc_black_solid_jogger_jeans_with_drawstring.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/OXIo/60687013aeb269a9e3323261/ivoc_black_solid_jogger_jeans_with_drawstring.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/OXIo/60687013aeb269a9e3323261/ivoc_black_solid_jogger_jeans_with_drawstring.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/OXIo/60687013aeb269a9e3323261/ivoc_black_solid_jogger_jeans_with_drawstring.jpg"
  },
  {
    company_name: "ARMANI EXCHANGE",
    description: "Lightly Washed Straight Fit Jeans",
    price: "6929",
    original_price: "Rs. 8,999",
    discount: "(23% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210312/VqQC/604b290f7cdb8c1f145feb17/armani_exchange_blue_lightly_washed_straight_fit_jeans.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210312/VqQC/604b290f7cdb8c1f145feb17/armani_exchange_blue_lightly_washed_straight_fit_jeans.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210312/VqQC/604b290f7cdb8c1f145feb17/armani_exchange_blue_lightly_washed_straight_fit_jeans.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210312/VqQC/604b290f7cdb8c1f145feb17/armani_exchange_blue_lightly_washed_straight_fit_jeans.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210312/VqQC/604b290f7cdb8c1f145feb17/armani_exchange_blue_lightly_washed_straight_fit_jeans.jpg"
  },
  {
    company_name: "GAS",
    description: "Toki Mid-Wash Straight Fit Jeans",
    price: "5529",
    original_price: "Rs. 6,999",
    discount: "(21% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210219/ploi/602ec136f997dd5c40f3f3a1/gas_blue_toki_mid-wash_straight_fit_jeans.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210219/ploi/602ec136f997dd5c40f3f3a1/gas_blue_toki_mid-wash_straight_fit_jeans.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210219/ploi/602ec136f997dd5c40f3f3a1/gas_blue_toki_mid-wash_straight_fit_jeans.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210219/ploi/602ec136f997dd5c40f3f3a1/gas_blue_toki_mid-wash_straight_fit_jeans.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210219/ploi/602ec136f997dd5c40f3f3a1/gas_blue_toki_mid-wash_straight_fit_jeans.jpg"
  },
  {
    company_name: "iVOC",
    description: "Solid Jogger Jeans with Drawstring",
    price: "702",
    original_price: "Rs. 1,799",
    discount: "(61% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/rzPp/606872ffaeb269a9e3326c91/ivoc_black_solid_jogger_jeans_with_drawstring.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/rzPp/606872ffaeb269a9e3326c91/ivoc_black_solid_jogger_jeans_with_drawstring.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/rzPp/606872ffaeb269a9e3326c91/ivoc_black_solid_jogger_jeans_with_drawstring.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/rzPp/606872ffaeb269a9e3326c91/ivoc_black_solid_jogger_jeans_with_drawstring.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/rzPp/606872ffaeb269a9e3326c91/ivoc_black_solid_jogger_jeans_with_drawstring.jpg"
  },
  {
    company_name: "DNMX",
    description: "Lightly Washed Fitted Jeans",
    price: "679",
    original_price: "Rs. 799",
    discount: "(15% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/hf8/hae/14876749791262/dnmx_blue_lightly_washed_fitted_jeans.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/hf8/hae/14876749791262/dnmx_blue_lightly_washed_fitted_jeans.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/hf8/hae/14876749791262/dnmx_blue_lightly_washed_fitted_jeans.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/hf8/hae/14876749791262/dnmx_blue_lightly_washed_fitted_jeans.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/hf8/hae/14876749791262/dnmx_blue_lightly_washed_fitted_jeans.jpg"
  },
  {
    company_name: "G STAR RAW",
    description: "3301 Mid Wash Slim Jeans",
    price: "7999",
    original_price: "",
    discount: "",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/h7f/hc1/13599262769182/g_star_raw_blue_3301_mid_wash_slim_jeans.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/h7f/hc1/13599262769182/g_star_raw_blue_3301_mid_wash_slim_jeans.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/h7f/hc1/13599262769182/g_star_raw_blue_3301_mid_wash_slim_jeans.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/h7f/hc1/13599262769182/g_star_raw_blue_3301_mid_wash_slim_jeans.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/h7f/hc1/13599262769182/g_star_raw_blue_3301_mid_wash_slim_jeans.jpg"
  },
  {
    company_name: "iVOC",
    description: "Mid-Rise Jogger Jeans with Zip Pocket",
    price: "702",
    original_price: "Rs. 1,799",
    discount: "(61% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/3vuZ/606864cc7cdb8c1f1474f313/ivoc_navy_blue_mid-rise_jogger_jeans_with_zip_pocket.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/3vuZ/606864cc7cdb8c1f1474f313/ivoc_navy_blue_mid-rise_jogger_jeans_with_zip_pocket.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/3vuZ/606864cc7cdb8c1f1474f313/ivoc_navy_blue_mid-rise_jogger_jeans_with_zip_pocket.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/3vuZ/606864cc7cdb8c1f1474f313/ivoc_navy_blue_mid-rise_jogger_jeans_with_zip_pocket.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/3vuZ/606864cc7cdb8c1f1474f313/ivoc_navy_blue_mid-rise_jogger_jeans_with_zip_pocket.jpg"
  },
  {
    company_name: "Campus Sutra",
    description: "Lightly Washed Slim Fit Jogger Jeans",
    price: "1000",
    original_price: "Rs. 1,999",
    discount: "(50% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/utJ6/60687973aeb269a9e332e508/campus_sutra_blue_lightly_washed_slim_fit_jogger_jeans.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/utJ6/60687973aeb269a9e332e508/campus_sutra_blue_lightly_washed_slim_fit_jogger_jeans.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/utJ6/60687973aeb269a9e332e508/campus_sutra_blue_lightly_washed_slim_fit_jogger_jeans.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/utJ6/60687973aeb269a9e332e508/campus_sutra_blue_lightly_washed_slim_fit_jogger_jeans.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/utJ6/60687973aeb269a9e332e508/campus_sutra_blue_lightly_washed_slim_fit_jogger_jeans.jpg"
  },
  {
    company_name: "DNMX",
    description: "Mid-Rise Skinny Jeans",
    price: "679",
    original_price: "Rs. 799",
    discount: "(15% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210312/VqQC/604b290f7cdb8c1f145feb17/armani_exchange_blue_lightly_washed_straight_fit_jeans.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210312/VqQC/604b290f7cdb8c1f145feb17/armani_exchange_blue_lightly_washed_straight_fit_jeans.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210312/VqQC/604b290f7cdb8c1f145feb17/armani_exchange_blue_lightly_washed_straight_fit_jeans.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210312/VqQC/604b290f7cdb8c1f145feb17/armani_exchange_blue_lightly_washed_straight_fit_jeans.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210312/VqQC/604b290f7cdb8c1f145feb17/armani_exchange_blue_lightly_washed_straight_fit_jeans.jpg"
  },
  {
    company_name: "French Connection",
    description: "Columbia Lightly Washed Skinny Fit Jeans",
    price: "1715",
    original_price: "Rs. 3,299",
    discount: "(48% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/OXIo/60687013aeb269a9e3323261/ivoc_black_solid_jogger_jeans_with_drawstring.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/OXIo/60687013aeb269a9e3323261/ivoc_black_solid_jogger_jeans_with_drawstring.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/OXIo/60687013aeb269a9e3323261/ivoc_black_solid_jogger_jeans_with_drawstring.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/OXIo/60687013aeb269a9e3323261/ivoc_black_solid_jogger_jeans_with_drawstring.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/OXIo/60687013aeb269a9e3323261/ivoc_black_solid_jogger_jeans_with_drawstring.jpg"
  },
  {
    company_name: "GAS",
    description: "Norton Distressed Tapered Jeans",
    price: "4719",
    original_price: "Rs. 7,999",
    discount: "(41% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/utJ6/60687973aeb269a9e332e508/campus_sutra_blue_lightly_washed_slim_fit_jogger_jeans.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/utJ6/60687973aeb269a9e332e508/campus_sutra_blue_lightly_washed_slim_fit_jogger_jeans.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/utJ6/60687973aeb269a9e332e508/campus_sutra_blue_lightly_washed_slim_fit_jogger_jeans.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/utJ6/60687973aeb269a9e332e508/campus_sutra_blue_lightly_washed_slim_fit_jogger_jeans.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/utJ6/60687973aeb269a9e332e508/campus_sutra_blue_lightly_washed_slim_fit_jogger_jeans.jpg"
  },
  {
    company_name: "MUFTI",
    description: "Mid-Rise Slim Fit Jeans",
    price: "1623",
    original_price: "Rs. 2,799",
    discount: "(42% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210219/ploi/602ec136f997dd5c40f3f3a1/gas_blue_toki_mid-wash_straight_fit_jeans.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210219/ploi/602ec136f997dd5c40f3f3a1/gas_blue_toki_mid-wash_straight_fit_jeans.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210219/ploi/602ec136f997dd5c40f3f3a1/gas_blue_toki_mid-wash_straight_fit_jeans.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210219/ploi/602ec136f997dd5c40f3f3a1/gas_blue_toki_mid-wash_straight_fit_jeans.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210219/ploi/602ec136f997dd5c40f3f3a1/gas_blue_toki_mid-wash_straight_fit_jeans.jpg"
  },
  {
    company_name: "DNMX",
    description: "Mid-Rise Skinny Jeans",
    price: "679",
    original_price: "Rs. 799",
    discount: "(15% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/3vuZ/606864cc7cdb8c1f1474f313/ivoc_navy_blue_mid-rise_jogger_jeans_with_zip_pocket.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/3vuZ/606864cc7cdb8c1f1474f313/ivoc_navy_blue_mid-rise_jogger_jeans_with_zip_pocket.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/3vuZ/606864cc7cdb8c1f1474f313/ivoc_navy_blue_mid-rise_jogger_jeans_with_zip_pocket.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/3vuZ/606864cc7cdb8c1f1474f313/ivoc_navy_blue_mid-rise_jogger_jeans_with_zip_pocket.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/3vuZ/606864cc7cdb8c1f1474f313/ivoc_navy_blue_mid-rise_jogger_jeans_with_zip_pocket.jpg"
  },
  {
    company_name: "DNMX",
    description: "Mid-Rise Slim Fit Jeans",
    price: "849",
    original_price: "Rs. 999",
    discount: "(15% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/h47/hb8/14876616851486/dnmx_black_mid-rise_fitted_jeans.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/h47/hb8/14876616851486/dnmx_black_mid-rise_fitted_jeans.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/h47/hb8/14876616851486/dnmx_black_mid-rise_fitted_jeans.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/h47/hb8/14876616851486/dnmx_black_mid-rise_fitted_jeans.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/h47/hb8/14876616851486/dnmx_black_mid-rise_fitted_jeans.jpg"
  },
  {
    company_name: "Campus Sutra",
    description: "Mid Rise Jeans with Applique Detail",
    price: "950",
    original_price: "Rs. 1,899",
    discount: "(50% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210312/VqQC/604b290f7cdb8c1f145feb17/armani_exchange_blue_lightly_washed_straight_fit_jeans.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210312/VqQC/604b290f7cdb8c1f145feb17/armani_exchange_blue_lightly_washed_straight_fit_jeans.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210312/VqQC/604b290f7cdb8c1f145feb17/armani_exchange_blue_lightly_washed_straight_fit_jeans.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210312/VqQC/604b290f7cdb8c1f145feb17/armani_exchange_blue_lightly_washed_straight_fit_jeans.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210312/VqQC/604b290f7cdb8c1f145feb17/armani_exchange_blue_lightly_washed_straight_fit_jeans.jpg"
  }
]
const shirts = [
  {
    company_name: "Seta",
    description: "Slim Fit Shirt with Patch Pocket",
    price: "924",
    original_price: "Rs. 2,099",
    discount: "(56% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210404/3PUe/606a68e0f997dd7b6484695c/seta_red_slim_fit_shirt_with_patch_pocket.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210404/3PUe/606a68e0f997dd7b6484695c/seta_red_slim_fit_shirt_with_patch_pocket.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210404/3PUe/606a68e0f997dd7b6484695c/seta_red_slim_fit_shirt_with_patch_pocket.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210404/3PUe/606a68e0f997dd7b6484695c/seta_red_slim_fit_shirt_with_patch_pocket.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210404/3PUe/606a68e0f997dd7b6484695c/seta_red_slim_fit_shirt_with_patch_pocket.jpg"
  },
  {
    company_name: "Bene Kleed",
    description: "Floral Print Slim Fit Shirt",
    price: "672",
    original_price: "Rs. 2,099",
    discount: "(68% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/MoGA/60687431aeb269a9e3328140/bene_kleed_cream_floral_print_slim_fit_shirt.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/MoGA/60687431aeb269a9e3328140/bene_kleed_cream_floral_print_slim_fit_shirt.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/MoGA/60687431aeb269a9e3328140/bene_kleed_cream_floral_print_slim_fit_shirt.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/MoGA/60687431aeb269a9e3328140/bene_kleed_cream_floral_print_slim_fit_shirt.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/MoGA/60687431aeb269a9e3328140/bene_kleed_cream_floral_print_slim_fit_shirt.jpg"
  },
  {
    company_name: "DENNISLINGO PREMIUM ATTIRE",
    description: "Full Sleeves Slim Fit Classic Shirt",
    price: "573",
    original_price: "Rs. 1,849",
    discount: "(69% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210428/iTgD/60897ebaf997dd7b64c785eb/dennislingo_premium_attire_pink_full_sleeves_slim_fit_classic_shirt.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210428/iTgD/60897ebaf997dd7b64c785eb/dennislingo_premium_attire_pink_full_sleeves_slim_fit_classic_shirt.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210428/iTgD/60897ebaf997dd7b64c785eb/dennislingo_premium_attire_pink_full_sleeves_slim_fit_classic_shirt.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210428/iTgD/60897ebaf997dd7b64c785eb/dennislingo_premium_attire_pink_full_sleeves_slim_fit_classic_shirt.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210428/iTgD/60897ebaf997dd7b64c785eb/dennislingo_premium_attire_pink_full_sleeves_slim_fit_classic_shirt.jpg"
  },
  {
    company_name: "Kuons Avenue",
    description: "Slim Fit Shirt with Patch Pocket",
    price: "924",
    original_price: "Rs. 2,099",
    discount: "(56% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/mBy9/60689a0af997dd7b6461ce51/kuons_avenue_blue_slim_fit_shirt_with_patch_pocket.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/mBy9/60689a0af997dd7b6461ce51/kuons_avenue_blue_slim_fit_shirt_with_patch_pocket.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/mBy9/60689a0af997dd7b6461ce51/kuons_avenue_blue_slim_fit_shirt_with_patch_pocket.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/mBy9/60689a0af997dd7b6461ce51/kuons_avenue_blue_slim_fit_shirt_with_patch_pocket.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/mBy9/60689a0af997dd7b6461ce51/kuons_avenue_blue_slim_fit_shirt_with_patch_pocket.jpg"
  },
  {
    company_name: "NETPLAY",
    description: "Shirt with Patch Pocket",
    price: "490",
    original_price: "Rs. 999",
    discount: "(51% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/h9f/h5f/15254545367070/netplay_navy_blue_shirt_with_patch_pocket.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/h9f/h5f/15254545367070/netplay_navy_blue_shirt_with_patch_pocket.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/h9f/h5f/15254545367070/netplay_navy_blue_shirt_with_patch_pocket.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/h9f/h5f/15254545367070/netplay_navy_blue_shirt_with_patch_pocket.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/h9f/h5f/15254545367070/netplay_navy_blue_shirt_with_patch_pocket.jpg"
  },
  {
    company_name: "DENNISLINGO PREMIUM ATTIRE",
    description: "Full Sleeves Slim Fit Shirt",
    price: "573",
    original_price: "Rs. 1,849",
    discount: "(69% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210420/GnFa/607ecd0df997dd7b64b80350/dennislingo_premium_attire_white_full_sleeves_slim_fit_shirt.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210420/GnFa/607ecd0df997dd7b64b80350/dennislingo_premium_attire_white_full_sleeves_slim_fit_shirt.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210420/GnFa/607ecd0df997dd7b64b80350/dennislingo_premium_attire_white_full_sleeves_slim_fit_shirt.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210420/GnFa/607ecd0df997dd7b64b80350/dennislingo_premium_attire_white_full_sleeves_slim_fit_shirt.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210420/GnFa/607ecd0df997dd7b64b80350/dennislingo_premium_attire_white_full_sleeves_slim_fit_shirt.jpg"
  },
  {
    company_name: "NETPLAY",
    description: "Slim Fit Shirt with Patch Pocket",
    price: "490",
    original_price: "Rs. 999",
    discount: "(51% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/h61/h19/14491282178078/netplay_blue_slim_fit_shirt_with_patch_pocket.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/h61/h19/14491282178078/netplay_blue_slim_fit_shirt_with_patch_pocket.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/h61/h19/14491282178078/netplay_blue_slim_fit_shirt_with_patch_pocket.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/h61/h19/14491282178078/netplay_blue_slim_fit_shirt_with_patch_pocket.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/h61/h19/14491282178078/netplay_blue_slim_fit_shirt_with_patch_pocket.jpg"
  },
  {
    company_name: "Calvin Klein Jeans",
    description: "Slim Fit Shirt with Button-Down Collar",
    price: "4249",
    original_price: "Rs. 4,999",
    discount: "(15% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210521/ysbD/60a6bb0df997ddb312a4dced/calvin_klein_jeans_pink_slim_fit_shirt_with_button-down_collar.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210521/ysbD/60a6bb0df997ddb312a4dced/calvin_klein_jeans_pink_slim_fit_shirt_with_button-down_collar.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210521/ysbD/60a6bb0df997ddb312a4dced/calvin_klein_jeans_pink_slim_fit_shirt_with_button-down_collar.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210521/ysbD/60a6bb0df997ddb312a4dced/calvin_klein_jeans_pink_slim_fit_shirt_with_button-down_collar.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210521/ysbD/60a6bb0df997ddb312a4dced/calvin_klein_jeans_pink_slim_fit_shirt_with_button-down_collar.jpg"
  },
  {
    company_name: "NETPLAY",
    description: "Slim Fit Checked Shirt",
    price: "343",
    original_price: "Rs. 699",
    discount: "(51% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210216/5ztA/602ad72b7cdb8c1f14412643/netplay_blue_slim_fit_checked_shirt.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210216/5ztA/602ad72b7cdb8c1f14412643/netplay_blue_slim_fit_checked_shirt.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210216/5ztA/602ad72b7cdb8c1f14412643/netplay_blue_slim_fit_checked_shirt.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210216/5ztA/602ad72b7cdb8c1f14412643/netplay_blue_slim_fit_checked_shirt.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210216/5ztA/602ad72b7cdb8c1f14412643/netplay_blue_slim_fit_checked_shirt.jpg"
  },
  {
    company_name: "DENNISLINGO PREMIUM ATTIRE",
    description: "Slim Fit Shirt with Spread Collar",
    price: "573",
    original_price: "Rs. 1,849",
    discount: "(69% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210420/1o3B/607eccfeaeb269a9e3972a05/dennislingo_premium_attire_purple__slim_fit_shirt_with_spread_collar.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210420/1o3B/607eccfeaeb269a9e3972a05/dennislingo_premium_attire_purple__slim_fit_shirt_with_spread_collar.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210420/1o3B/607eccfeaeb269a9e3972a05/dennislingo_premium_attire_purple__slim_fit_shirt_with_spread_collar.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210420/1o3B/607eccfeaeb269a9e3972a05/dennislingo_premium_attire_purple__slim_fit_shirt_with_spread_collar.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210420/1o3B/607eccfeaeb269a9e3972a05/dennislingo_premium_attire_purple__slim_fit_shirt_with_spread_collar.jpg"
  },
  {
    company_name: "DENNISLINGO PREMIUM ATTIRE",
    description: "Slim Fit Shirt with Patch Pocket",
    price: "647",
    original_price: "Rs. 1,849",
    discount: "(65% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/M8x9/60686522f997dd7b645d60d4/dennislingo_premium_attire_sky_blue_slim_fit_shirt_with_patch_pocket.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/M8x9/60686522f997dd7b645d60d4/dennislingo_premium_attire_sky_blue_slim_fit_shirt_with_patch_pocket.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/M8x9/60686522f997dd7b645d60d4/dennislingo_premium_attire_sky_blue_slim_fit_shirt_with_patch_pocket.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/M8x9/60686522f997dd7b645d60d4/dennislingo_premium_attire_sky_blue_slim_fit_shirt_with_patch_pocket.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/M8x9/60686522f997dd7b645d60d4/dennislingo_premium_attire_sky_blue_slim_fit_shirt_with_patch_pocket.jpg"
  },
  {
    company_name: "NETPLAY",
    description: "Slim Fit Shirt with Patch Pocket",
    price: "490",
    original_price: "Rs. 999",
    discount: "(51% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/h1b/h4b/15130609516574/netplay_blue_slim_fit_shirt_with_patch_pocket.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/h1b/h4b/15130609516574/netplay_blue_slim_fit_shirt_with_patch_pocket.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/h1b/h4b/15130609516574/netplay_blue_slim_fit_shirt_with_patch_pocket.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/h1b/h4b/15130609516574/netplay_blue_slim_fit_shirt_with_patch_pocket.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/h1b/h4b/15130609516574/netplay_blue_slim_fit_shirt_with_patch_pocket.jpg"
  },
  {
    company_name: "DENNISLINGO PREMIUM ATTIRE",
    description: "Band Collar Slim Fit Shirt",
    price: "647",
    original_price: "Rs. 1,849",
    discount: "(65% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/PyUm/6068b45ef997dd7b64640db8/dennislingo_premium_attire_dusty_green_band_collar_slim_fit_shirt.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/PyUm/6068b45ef997dd7b64640db8/dennislingo_premium_attire_dusty_green_band_collar_slim_fit_shirt.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/PyUm/6068b45ef997dd7b64640db8/dennislingo_premium_attire_dusty_green_band_collar_slim_fit_shirt.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/PyUm/6068b45ef997dd7b64640db8/dennislingo_premium_attire_dusty_green_band_collar_slim_fit_shirt.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/PyUm/6068b45ef997dd7b64640db8/dennislingo_premium_attire_dusty_green_band_collar_slim_fit_shirt.jpg"
  },
  {
    company_name: "Calvin Klein Jeans",
    description: "Slim Fit Shirt with Spread Collar",
    price: "4249",
    original_price: "Rs. 4,999",
    discount: "(15% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210525/J4i5/60ac3947f997ddb312a871e6/calvin_klein_jeans_grey_slim_fit_shirt_with_spread_collar.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210525/J4i5/60ac3947f997ddb312a871e6/calvin_klein_jeans_grey_slim_fit_shirt_with_spread_collar.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210525/J4i5/60ac3947f997ddb312a871e6/calvin_klein_jeans_grey_slim_fit_shirt_with_spread_collar.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210525/J4i5/60ac3947f997ddb312a871e6/calvin_klein_jeans_grey_slim_fit_shirt_with_spread_collar.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210525/J4i5/60ac3947f997ddb312a871e6/calvin_klein_jeans_grey_slim_fit_shirt_with_spread_collar.jpg"
  },
  {
    company_name: "MUJI",
    description: "Cotton Washed Oxford Stand-Collar Shirt",
    price: "1990",
    original_price: "",
    discount: "",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20201021/ppzA/5f8f31a2f997dd8c836ff14b/muji_blue_cotton_washed_oxford_stand-collar_shirt.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20201021/ppzA/5f8f31a2f997dd8c836ff14b/muji_blue_cotton_washed_oxford_stand-collar_shirt.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20201021/ppzA/5f8f31a2f997dd8c836ff14b/muji_blue_cotton_washed_oxford_stand-collar_shirt.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20201021/ppzA/5f8f31a2f997dd8c836ff14b/muji_blue_cotton_washed_oxford_stand-collar_shirt.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20201021/ppzA/5f8f31a2f997dd8c836ff14b/muji_blue_cotton_washed_oxford_stand-collar_shirt.jpg"
  },
  {
    company_name: "DENNISLINGO PREMIUM ATTIRE",
    description: "Slim Fit Shirt with Patch Pocket",
    price: "573",
    original_price: "Rs. 1,849",
    discount: "(69% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/dd2q/606867587cdb8c1f1475204d/dennislingo_premium_attire_purple_slim_fit_shirt_with_patch_pocket.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/dd2q/606867587cdb8c1f1475204d/dennislingo_premium_attire_purple_slim_fit_shirt_with_patch_pocket.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/dd2q/606867587cdb8c1f1475204d/dennislingo_premium_attire_purple_slim_fit_shirt_with_patch_pocket.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/dd2q/606867587cdb8c1f1475204d/dennislingo_premium_attire_purple_slim_fit_shirt_with_patch_pocket.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/dd2q/606867587cdb8c1f1475204d/dennislingo_premium_attire_purple_slim_fit_shirt_with_patch_pocket.jpg"
  },
  {
    company_name: "DENNISLINGO PREMIUM ATTIRE",
    description: "Band Collar Slim Fit Shirt",
    price: "573",
    original_price: "Rs. 1,849",
    discount: "(69% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/ORxf/60691fd6aeb269a9e33ea526/dennislingo_premium_attire_purple_band_collar_slim_fit_shirt.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/ORxf/60691fd6aeb269a9e33ea526/dennislingo_premium_attire_purple_band_collar_slim_fit_shirt.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/ORxf/60691fd6aeb269a9e33ea526/dennislingo_premium_attire_purple_band_collar_slim_fit_shirt.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/ORxf/60691fd6aeb269a9e33ea526/dennislingo_premium_attire_purple_band_collar_slim_fit_shirt.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/ORxf/60691fd6aeb269a9e33ea526/dennislingo_premium_attire_purple_band_collar_slim_fit_shirt.jpg"
  },
  {
    company_name: "Bene Kleed",
    description: "Floral Print Slim Fit Shirt with Patch Pocket",
    price: "630",
    original_price: "Rs. 2,099",
    discount: "(70% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/AU4p/60686d0d7cdb8c1f14758483/bene_kleed_beige_floral_print_slim_fit_shirt_with_patch_pocket.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/AU4p/60686d0d7cdb8c1f14758483/bene_kleed_beige_floral_print_slim_fit_shirt_with_patch_pocket.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/AU4p/60686d0d7cdb8c1f14758483/bene_kleed_beige_floral_print_slim_fit_shirt_with_patch_pocket.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/AU4p/60686d0d7cdb8c1f14758483/bene_kleed_beige_floral_print_slim_fit_shirt_with_patch_pocket.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/AU4p/60686d0d7cdb8c1f14758483/bene_kleed_beige_floral_print_slim_fit_shirt_with_patch_pocket.jpg"
  },
  {
    company_name: "NETPLAY",
    description: "Slim Fit Shirt with Patch Pocket",
    price: "490",
    original_price: "Rs. 999",
    discount: "(51% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/had/hee/15130607321118/netplay_yellow_slim_fit_shirt_with_patch_pocket.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/had/hee/15130607321118/netplay_yellow_slim_fit_shirt_with_patch_pocket.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/had/hee/15130607321118/netplay_yellow_slim_fit_shirt_with_patch_pocket.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/had/hee/15130607321118/netplay_yellow_slim_fit_shirt_with_patch_pocket.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/had/hee/15130607321118/netplay_yellow_slim_fit_shirt_with_patch_pocket.jpg"
  },
  {
    company_name: "GLITO",
    description: "Colourblock Slim Fit Shirt",
    price: "420",
    original_price: "Rs. 1,199",
    discount: "(65% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/8mWH/60688ecaaeb269a9e3346e03/glito_white_colourblock_slim_fit_shirt.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/8mWH/60688ecaaeb269a9e3346e03/glito_white_colourblock_slim_fit_shirt.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/8mWH/60688ecaaeb269a9e3346e03/glito_white_colourblock_slim_fit_shirt.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/8mWH/60688ecaaeb269a9e3346e03/glito_white_colourblock_slim_fit_shirt.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/8mWH/60688ecaaeb269a9e3346e03/glito_white_colourblock_slim_fit_shirt.jpg"
  },
  {
    company_name: "NETPLAY",
    description: "Cotton Shirt with Patch Pocket",
    price: "719",
    original_price: "Rs. 899",
    discount: "(20% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/h6c/h16/13001739960350/netplay_white_cotton_shirt_with_patch_pocket.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/h6c/h16/13001739960350/netplay_white_cotton_shirt_with_patch_pocket.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/h6c/h16/13001739960350/netplay_white_cotton_shirt_with_patch_pocket.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/h6c/h16/13001739960350/netplay_white_cotton_shirt_with_patch_pocket.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/h6c/h16/13001739960350/netplay_white_cotton_shirt_with_patch_pocket.jpg"
  },
  {
    company_name: "NETPLAY",
    description: "Shirt with Patch Pocket",
    price: "490",
    original_price: "Rs. 999",
    discount: "(51% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/hfd/h50/15099327152158/netplay_pink_shirt_with_patch_pocket.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/hfd/h50/15099327152158/netplay_pink_shirt_with_patch_pocket.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/hfd/h50/15099327152158/netplay_pink_shirt_with_patch_pocket.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/hfd/h50/15099327152158/netplay_pink_shirt_with_patch_pocket.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/hfd/h50/15099327152158/netplay_pink_shirt_with_patch_pocket.jpg"
  },
  {
    company_name: "NETPLAY",
    description: "Checked Slim Fit Shirt",
    price: "343",
    original_price: "Rs. 699",
    discount: "(51% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210225/dnLO/6037c5cfaeb2696981706fda/netplay_red_checked_slim_fit_shirt.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210225/dnLO/6037c5cfaeb2696981706fda/netplay_red_checked_slim_fit_shirt.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210225/dnLO/6037c5cfaeb2696981706fda/netplay_red_checked_slim_fit_shirt.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210225/dnLO/6037c5cfaeb2696981706fda/netplay_red_checked_slim_fit_shirt.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210225/dnLO/6037c5cfaeb2696981706fda/netplay_red_checked_slim_fit_shirt.jpg"
  },
  {
    company_name: "NETPLAY",
    description: "Slim Fit Shirt with Patch Pocket",
    price: "490",
    original_price: "Rs. 999",
    discount: "(51% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/h14/hdf/14489829179422/netplay_khaki_slim_fit_shirt_with_patch_pocket.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/h14/hdf/14489829179422/netplay_khaki_slim_fit_shirt_with_patch_pocket.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/h14/hdf/14489829179422/netplay_khaki_slim_fit_shirt_with_patch_pocket.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/h14/hdf/14489829179422/netplay_khaki_slim_fit_shirt_with_patch_pocket.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/h14/hdf/14489829179422/netplay_khaki_slim_fit_shirt_with_patch_pocket.jpg"
  },
  {
    company_name: "NETPLAY",
    description: "Striped Slim Fit Shirt with Patch Pocket",
    price: "490",
    original_price: "Rs. 999",
    discount: "(51% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/h3e/h78/16743039434782/netplay_blue_striped_slim_fit_shirt_with_patch_pocket.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/h3e/h78/16743039434782/netplay_blue_striped_slim_fit_shirt_with_patch_pocket.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/h3e/h78/16743039434782/netplay_blue_striped_slim_fit_shirt_with_patch_pocket.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/h3e/h78/16743039434782/netplay_blue_striped_slim_fit_shirt_with_patch_pocket.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/h3e/h78/16743039434782/netplay_blue_striped_slim_fit_shirt_with_patch_pocket.jpg"
  },
  {
    company_name: "NETPLAY",
    description: "Cotton Shirt with Patch Pocket",
    price: "719",
    original_price: "Rs. 899",
    discount: "(20% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/hfe/h8d/13003060183070/netplay_maroon_cotton_shirt_with_patch_pocket.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/hfe/h8d/13003060183070/netplay_maroon_cotton_shirt_with_patch_pocket.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/hfe/h8d/13003060183070/netplay_maroon_cotton_shirt_with_patch_pocket.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/hfe/h8d/13003060183070/netplay_maroon_cotton_shirt_with_patch_pocket.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/hfe/h8d/13003060183070/netplay_maroon_cotton_shirt_with_patch_pocket.jpg"
  },
  {
    company_name: "FIRST CLASS",
    description: "Shirt with Patch Pocket",
    price: "288",
    original_price: "Rs. 599",
    discount: "(52% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/h53/hc0/15085619183646/first_class_sky_blue_shirt_with_patch_pocket.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/h53/hc0/15085619183646/first_class_sky_blue_shirt_with_patch_pocket.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/h53/hc0/15085619183646/first_class_sky_blue_shirt_with_patch_pocket.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/h53/hc0/15085619183646/first_class_sky_blue_shirt_with_patch_pocket.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/h53/hc0/15085619183646/first_class_sky_blue_shirt_with_patch_pocket.jpg"
  },
  {
    company_name: "NETPLAY",
    description: "Striped Cotton Shirt",
    price: "450",
    original_price: "Rs. 899",
    discount: "(50% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210112/nMO3/5ffca80a7cdb8c1f1425e324/netplay_coral_pink_striped_cotton_shirt.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210112/nMO3/5ffca80a7cdb8c1f1425e324/netplay_coral_pink_striped_cotton_shirt.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210112/nMO3/5ffca80a7cdb8c1f1425e324/netplay_coral_pink_striped_cotton_shirt.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210112/nMO3/5ffca80a7cdb8c1f1425e324/netplay_coral_pink_striped_cotton_shirt.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210112/nMO3/5ffca80a7cdb8c1f1425e324/netplay_coral_pink_striped_cotton_shirt.jpg"
  },
  {
    company_name: "NETPLAY",
    description: "Checked Shirt with Patch Pocket",
    price: "650",
    original_price: "Rs. 1,299",
    discount: "(50% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20201222/TSt1/5fe0f4e7f997dd8c83db66de/netplay_khaki_checked_shirt_with_patch_pocket.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20201222/TSt1/5fe0f4e7f997dd8c83db66de/netplay_khaki_checked_shirt_with_patch_pocket.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20201222/TSt1/5fe0f4e7f997dd8c83db66de/netplay_khaki_checked_shirt_with_patch_pocket.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20201222/TSt1/5fe0f4e7f997dd8c83db66de/netplay_khaki_checked_shirt_with_patch_pocket.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20201222/TSt1/5fe0f4e7f997dd8c83db66de/netplay_khaki_checked_shirt_with_patch_pocket.jpg"
  },
  {
    company_name: "NETPLAY",
    description: "Striped Shirt with Patch Pocket",
    price: "490",
    original_price: "Rs. 999",
    discount: "(51% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/he6/h2c/15343416705054/netplay_blue_striped_shirt_with_patch_pocket.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/he6/h2c/15343416705054/netplay_blue_striped_shirt_with_patch_pocket.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/he6/h2c/15343416705054/netplay_blue_striped_shirt_with_patch_pocket.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/he6/h2c/15343416705054/netplay_blue_striped_shirt_with_patch_pocket.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/he6/h2c/15343416705054/netplay_blue_striped_shirt_with_patch_pocket.jpg"
  },
  {
    company_name: "FIRST CLASS",
    description: "Herringbone Shirt with Patch Pocket",
    price: "288",
    original_price: "Rs. 599",
    discount: "(52% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20200918/1Xt3/5f63b1f07cdb8c21e36345d9/first_class_blue_herringbone_shirt_with_patch_pocket.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20200918/1Xt3/5f63b1f07cdb8c21e36345d9/first_class_blue_herringbone_shirt_with_patch_pocket.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20200918/1Xt3/5f63b1f07cdb8c21e36345d9/first_class_blue_herringbone_shirt_with_patch_pocket.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20200918/1Xt3/5f63b1f07cdb8c21e36345d9/first_class_blue_herringbone_shirt_with_patch_pocket.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20200918/1Xt3/5f63b1f07cdb8c21e36345d9/first_class_blue_herringbone_shirt_with_patch_pocket.jpg"
  },
  {
    company_name: "DENNISLINGO PREMIUM ATTIRE",
    description: "Slim Fit Shirt with Band Collar",
    price: "647",
    original_price: "Rs. 1,849",
    discount: "(65% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/pExX/606867877cdb8c1f147523fc/dennislingo_premium_attire_sky_blue_slim_fit_shirt_with_band_collar.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/pExX/606867877cdb8c1f147523fc/dennislingo_premium_attire_sky_blue_slim_fit_shirt_with_band_collar.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/pExX/606867877cdb8c1f147523fc/dennislingo_premium_attire_sky_blue_slim_fit_shirt_with_band_collar.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/pExX/606867877cdb8c1f147523fc/dennislingo_premium_attire_sky_blue_slim_fit_shirt_with_band_collar.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/pExX/606867877cdb8c1f147523fc/dennislingo_premium_attire_sky_blue_slim_fit_shirt_with_band_collar.jpg"
  },
  {
    company_name: "NETPLAY",
    description: "Striped Shirt with Patch Pocket",
    price: "899",
    original_price: "Rs. 999",
    discount: "(10% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210216/vDIV/602ad0967cdb8c1f14411458/netplay_white_striped_shirt_with_patch_pocket.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210216/vDIV/602ad0967cdb8c1f14411458/netplay_white_striped_shirt_with_patch_pocket.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210216/vDIV/602ad0967cdb8c1f14411458/netplay_white_striped_shirt_with_patch_pocket.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210216/vDIV/602ad0967cdb8c1f14411458/netplay_white_striped_shirt_with_patch_pocket.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210216/vDIV/602ad0967cdb8c1f14411458/netplay_white_striped_shirt_with_patch_pocket.jpg"
  },
  {
    company_name: "Rare Rabbit",
    description: "Checked Full Sleeves Shirt",
    price: "1500",
    original_price: "Rs. 2,999",
    discount: "(50% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210227/13kK/6039c0afaeb269698173019e/rare_rabbit_yellow_checked_full_sleeves_shirt.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210227/13kK/6039c0afaeb269698173019e/rare_rabbit_yellow_checked_full_sleeves_shirt.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210227/13kK/6039c0afaeb269698173019e/rare_rabbit_yellow_checked_full_sleeves_shirt.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210227/13kK/6039c0afaeb269698173019e/rare_rabbit_yellow_checked_full_sleeves_shirt.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210227/13kK/6039c0afaeb269698173019e/rare_rabbit_yellow_checked_full_sleeves_shirt.jpg"
  },
  {
    company_name: "Jack & Jones",
    description: "Kobi Printed Striped Shirt with Button-Down Collar",
    price: "1120",
    original_price: "Rs. 2,799",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/h17/h2e/15750213828638/jack_&_jones_mustard_yellow_kobi_printed_striped_shirt_with_button-down_collar.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/h17/h2e/15750213828638/jack_&_jones_mustard_yellow_kobi_printed_striped_shirt_with_button-down_collar.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/h17/h2e/15750213828638/jack_&_jones_mustard_yellow_kobi_printed_striped_shirt_with_button-down_collar.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/h17/h2e/15750213828638/jack_&_jones_mustard_yellow_kobi_printed_striped_shirt_with_button-down_collar.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/h17/h2e/15750213828638/jack_&_jones_mustard_yellow_kobi_printed_striped_shirt_with_button-down_collar.jpg"
  },
  {
    company_name: "The Indian Garage Co",
    description: "Printed Slim Fit Shirt with Patch Pocket",
    price: "612",
    original_price: "Rs. 1,749",
    discount: "(65% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210316/P2J1/6050c8b6aeb269698187e445/the_indian_garage_co_white_printed_slim_fit_shirt_with_patch_pocket.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210316/P2J1/6050c8b6aeb269698187e445/the_indian_garage_co_white_printed_slim_fit_shirt_with_patch_pocket.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210316/P2J1/6050c8b6aeb269698187e445/the_indian_garage_co_white_printed_slim_fit_shirt_with_patch_pocket.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210316/P2J1/6050c8b6aeb269698187e445/the_indian_garage_co_white_printed_slim_fit_shirt_with_patch_pocket.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210316/P2J1/6050c8b6aeb269698187e445/the_indian_garage_co_white_printed_slim_fit_shirt_with_patch_pocket.jpg"
  },
  {
    company_name: "NETPLAY",
    description: "Striped Shirt with Patch Pocket",
    price: "539",
    original_price: "Rs. 899",
    discount: "(40% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210112/CHft/5ffcaf147cdb8c1f1425f6d3/netplay_blue_striped_shirt_with_patch_pocket.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210112/CHft/5ffcaf147cdb8c1f1425f6d3/netplay_blue_striped_shirt_with_patch_pocket.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210112/CHft/5ffcaf147cdb8c1f1425f6d3/netplay_blue_striped_shirt_with_patch_pocket.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210112/CHft/5ffcaf147cdb8c1f1425f6d3/netplay_blue_striped_shirt_with_patch_pocket.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210112/CHft/5ffcaf147cdb8c1f1425f6d3/netplay_blue_striped_shirt_with_patch_pocket.jpg"
  },
  {
    company_name: "Seta",
    description: "Slim Fit Shirt with Patch Pocket",
    price: "924",
    original_price: "Rs. 2,099",
    discount: "(56% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210404/6nWQ/606ad42cf997dd7b648b321a/seta_blue_slim_fit_shirt_with_patch_pocket.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210404/6nWQ/606ad42cf997dd7b648b321a/seta_blue_slim_fit_shirt_with_patch_pocket.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210404/6nWQ/606ad42cf997dd7b648b321a/seta_blue_slim_fit_shirt_with_patch_pocket.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210404/6nWQ/606ad42cf997dd7b648b321a/seta_blue_slim_fit_shirt_with_patch_pocket.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210404/6nWQ/606ad42cf997dd7b648b321a/seta_blue_slim_fit_shirt_with_patch_pocket.jpg"
  },
  {
    company_name: "BROOKS BROTHERS",
    description: "Slim Fit Cotton Shirt",
    price: "4500",
    original_price: "Rs. 6,000",
    discount: "(25% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210211/0y3E/6024c135f997dd5c40ed5d95/brooks_brothers_yellow_slim_fit_cotton_shirt.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210211/0y3E/6024c135f997dd5c40ed5d95/brooks_brothers_yellow_slim_fit_cotton_shirt.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210211/0y3E/6024c135f997dd5c40ed5d95/brooks_brothers_yellow_slim_fit_cotton_shirt.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210211/0y3E/6024c135f997dd5c40ed5d95/brooks_brothers_yellow_slim_fit_cotton_shirt.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210211/0y3E/6024c135f997dd5c40ed5d95/brooks_brothers_yellow_slim_fit_cotton_shirt.jpg"
  }
]
const kurtis = [
  {
    company_name: "OM SAI LATEST CREATION",
    description: "Block Print A-line Kurti",
    price: "538",
    orginal_price: "Rs. 699",
    discount: "(23% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/06W9/6068a885aeb269a9e3365751/om_sai_latest_creation_grey_block_print_a-line_kurti.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/06W9/6068a885aeb269a9e3365751/om_sai_latest_creation_grey_block_print_a-line_kurti.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/06W9/6068a885aeb269a9e3365751/om_sai_latest_creation_grey_block_print_a-line_kurti.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/06W9/6068a885aeb269a9e3365751/om_sai_latest_creation_grey_block_print_a-line_kurti.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/06W9/6068a885aeb269a9e3365751/om_sai_latest_creation_grey_block_print_a-line_kurti.jpg"
  },
  {
    company_name: "OM SAI LATEST CREATION",
    description: "Block Print Anarkali Kurti",
    price: "559",
    orginal_price: "Rs. 699",
    discount: "(20% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/IcDX/6068a1fcaeb269a9e335daee/om_sai_latest_creation_grey_block_print_anarkali_kurti.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/IcDX/6068a1fcaeb269a9e335daee/om_sai_latest_creation_grey_block_print_anarkali_kurti.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/IcDX/6068a1fcaeb269a9e335daee/om_sai_latest_creation_grey_block_print_anarkali_kurti.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/IcDX/6068a1fcaeb269a9e335daee/om_sai_latest_creation_grey_block_print_anarkali_kurti.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/IcDX/6068a1fcaeb269a9e335daee/om_sai_latest_creation_grey_block_print_anarkali_kurti.jpg"
  },
  {
    company_name: "OM SAI LATEST CREATION",
    description: "High-Low Kurti with Tie-Up",
    price: "538",
    orginal_price: "Rs. 699",
    discount: "(23% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/feZy/606887877cdb8c1f14776a8c/om_sai_latest_creation_grey_high-low_kurti_with_tie-up.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/feZy/606887877cdb8c1f14776a8c/om_sai_latest_creation_grey_high-low_kurti_with_tie-up.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/feZy/606887877cdb8c1f14776a8c/om_sai_latest_creation_grey_high-low_kurti_with_tie-up.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/feZy/606887877cdb8c1f14776a8c/om_sai_latest_creation_grey_high-low_kurti_with_tie-up.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/feZy/606887877cdb8c1f14776a8c/om_sai_latest_creation_grey_high-low_kurti_with_tie-up.jpg"
  },
  {
    company_name: "OM SAI LATEST CREATION",
    description: "Block Print A-line Kurti",
    price: "538",
    orginal_price: "Rs. 699",
    discount: "(23% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/JTla/6068993b7cdb8c1f1478a3e1/om_sai_latest_creation_yellow_block_print_a-line_kurti.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/JTla/6068993b7cdb8c1f1478a3e1/om_sai_latest_creation_yellow_block_print_a-line_kurti.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/JTla/6068993b7cdb8c1f1478a3e1/om_sai_latest_creation_yellow_block_print_a-line_kurti.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/JTla/6068993b7cdb8c1f1478a3e1/om_sai_latest_creation_yellow_block_print_a-line_kurti.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/JTla/6068993b7cdb8c1f1478a3e1/om_sai_latest_creation_yellow_block_print_a-line_kurti.jpg"
  },
  {
    company_name: "ANAITA",
    description: "Embroidered Straight Kurti",
    price: "492",
    orginal_price: "Rs. 1,229",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210423/DLEQ/6082bdf1aeb269a9e39c61a3/anaita_green_embroidered_straight_kurti.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210423/DLEQ/6082bdf1aeb269a9e39c61a3/anaita_green_embroidered_straight_kurti.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210423/DLEQ/6082bdf1aeb269a9e39c61a3/anaita_green_embroidered_straight_kurti.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210423/DLEQ/6082bdf1aeb269a9e39c61a3/anaita_green_embroidered_straight_kurti.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210423/DLEQ/6082bdf1aeb269a9e39c61a3/anaita_green_embroidered_straight_kurti.jpg"
  },
  {
    company_name: "ANAITA",
    description: "Floral Embroidered Straight Kurti",
    price: "492",
    orginal_price: "Rs. 1,229",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210423/hHlx/6082be16f997dd7b64bda006/anaita_green_floral_embroidered_straight_kurti.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210423/hHlx/6082be16f997dd7b64bda006/anaita_green_floral_embroidered_straight_kurti.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210423/hHlx/6082be16f997dd7b64bda006/anaita_green_floral_embroidered_straight_kurti.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210423/hHlx/6082be16f997dd7b64bda006/anaita_green_floral_embroidered_straight_kurti.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210423/hHlx/6082be16f997dd7b64bda006/anaita_green_floral_embroidered_straight_kurti.jpg"
  },
  {
    company_name: "FUSION",
    description: "Floral Print Straight Kurti",
    price: "245",
    orginal_price: "Rs. 499",
    discount: "(51% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/hda/hfa/14491444379678/fusion_yellow_floral_print_straight_kurti.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/hda/hfa/14491444379678/fusion_yellow_floral_print_straight_kurti.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/hda/hfa/14491444379678/fusion_yellow_floral_print_straight_kurti.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/hda/hfa/14491444379678/fusion_yellow_floral_print_straight_kurti.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/hda/hfa/14491444379678/fusion_yellow_floral_print_straight_kurti.jpg"
  },
  {
    company_name: "ANAITA",
    description: "Embroidered Straight Kurti",
    price: "492",
    orginal_price: "Rs. 1,229",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210510/a1Cn/60997196aeb269a9e3b9a922/anaita_purple_embroidered_straight_kurti.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210510/a1Cn/60997196aeb269a9e3b9a922/anaita_purple_embroidered_straight_kurti.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210510/a1Cn/60997196aeb269a9e3b9a922/anaita_purple_embroidered_straight_kurti.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210510/a1Cn/60997196aeb269a9e3b9a922/anaita_purple_embroidered_straight_kurti.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210510/a1Cn/60997196aeb269a9e3b9a922/anaita_purple_embroidered_straight_kurti.jpg"
  },
  {
    company_name: "VBUYZ",
    description: "Embellished Round-Neck Straight Kurti",
    price: "930",
    orginal_price: "Rs. 2,999",
    discount: "(69% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/rvB9/60687947aeb269a9e332e19e/vbuyz_green_embellished_round-neck_straight_kurti.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/rvB9/60687947aeb269a9e332e19e/vbuyz_green_embellished_round-neck_straight_kurti.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/rvB9/60687947aeb269a9e332e19e/vbuyz_green_embellished_round-neck_straight_kurti.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/rvB9/60687947aeb269a9e332e19e/vbuyz_green_embellished_round-neck_straight_kurti.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/rvB9/60687947aeb269a9e332e19e/vbuyz_green_embellished_round-neck_straight_kurti.jpg"
  },
  {
    company_name: "Tissue",
    description: "Floral Print Round-Neck Straight Kurti",
    price: "549",
    orginal_price: "Rs. 999",
    discount: "(45% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/izEF/6068b7a77cdb8c1f147abf47/tissue_navy_floral_print_round-neck_straight_kurti.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/izEF/6068b7a77cdb8c1f147abf47/tissue_navy_floral_print_round-neck_straight_kurti.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/izEF/6068b7a77cdb8c1f147abf47/tissue_navy_floral_print_round-neck_straight_kurti.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/izEF/6068b7a77cdb8c1f147abf47/tissue_navy_floral_print_round-neck_straight_kurti.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/izEF/6068b7a77cdb8c1f147abf47/tissue_navy_floral_print_round-neck_straight_kurti.jpg"
  },
  {
    company_name: "VBUYZ",
    description: "Embroidered Straight Kurti",
    price: "750",
    orginal_price: "Rs. 2,499",
    discount: "(70% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210404/9hv4/606b31207cdb8c1f14a34577/vbuyz_black_embroidered_straight_kurti.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210404/9hv4/606b31207cdb8c1f14a34577/vbuyz_black_embroidered_straight_kurti.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210404/9hv4/606b31207cdb8c1f14a34577/vbuyz_black_embroidered_straight_kurti.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210404/9hv4/606b31207cdb8c1f14a34577/vbuyz_black_embroidered_straight_kurti.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210404/9hv4/606b31207cdb8c1f14a34577/vbuyz_black_embroidered_straight_kurti.jpg"
  },
  {
    company_name: "VBUYZ",
    description: "Printed Round-Neck Straight Kurti",
    price: "800",
    orginal_price: "Rs. 2,499",
    discount: "(68% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210404/lSmA/606a67e7f997dd7b6484570c/vbuyz_green_printed_round-neck_straight_kurti.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210404/lSmA/606a67e7f997dd7b6484570c/vbuyz_green_printed_round-neck_straight_kurti.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210404/lSmA/606a67e7f997dd7b6484570c/vbuyz_green_printed_round-neck_straight_kurti.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210404/lSmA/606a67e7f997dd7b6484570c/vbuyz_green_printed_round-neck_straight_kurti.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210404/lSmA/606a67e7f997dd7b6484570c/vbuyz_green_printed_round-neck_straight_kurti.jpg"
  },
  {
    company_name: "Bhama Couture",
    description: "Indian Print Flared Kurti",
    price: "792",
    orginal_price: "Rs. 1,799",
    discount: "(56% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/ST7U/6068bc92aeb269a9e337d50b/bhama_couture_off_white_indian_print_flared_kurti.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/ST7U/6068bc92aeb269a9e337d50b/bhama_couture_off_white_indian_print_flared_kurti.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/ST7U/6068bc92aeb269a9e337d50b/bhama_couture_off_white_indian_print_flared_kurti.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/ST7U/6068bc92aeb269a9e337d50b/bhama_couture_off_white_indian_print_flared_kurti.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/ST7U/6068bc92aeb269a9e337d50b/bhama_couture_off_white_indian_print_flared_kurti.jpg"
  },
  {
    company_name: "FUSION",
    description: "Floral Print Straight Kurti",
    price: "245",
    orginal_price: "Rs. 499",
    discount: "(51% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/h9e/h54/14491338997790/fusion_yellow_floral_print_straight_kurti.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/h9e/h54/14491338997790/fusion_yellow_floral_print_straight_kurti.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/h9e/h54/14491338997790/fusion_yellow_floral_print_straight_kurti.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/h9e/h54/14491338997790/fusion_yellow_floral_print_straight_kurti.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/h9e/h54/14491338997790/fusion_yellow_floral_print_straight_kurti.jpg"
  },
  {
    company_name: "FUSION",
    description: "Floral Print Straight Kurti",
    price: "245",
    orginal_price: "Rs. 499",
    discount: "(51% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/haf/h2e/14491337424926/fusion_coral_red_floral_print_straight_kurti.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/haf/h2e/14491337424926/fusion_coral_red_floral_print_straight_kurti.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/haf/h2e/14491337424926/fusion_coral_red_floral_print_straight_kurti.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/haf/h2e/14491337424926/fusion_coral_red_floral_print_straight_kurti.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/haf/h2e/14491337424926/fusion_coral_red_floral_print_straight_kurti.jpg"
  },
  {
    company_name: "OM SAI LATEST CREATION",
    description: "Block Print Straight Kurti",
    price: "524",
    orginal_price: "Rs. 699",
    discount: "(25% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/kKA1/6068a6acaeb269a9e3363363/om_sai_latest_creation_pink_block_print_straight_kurti.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/kKA1/6068a6acaeb269a9e3363363/om_sai_latest_creation_pink_block_print_straight_kurti.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/kKA1/6068a6acaeb269a9e3363363/om_sai_latest_creation_pink_block_print_straight_kurti.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/kKA1/6068a6acaeb269a9e3363363/om_sai_latest_creation_pink_block_print_straight_kurti.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/kKA1/6068a6acaeb269a9e3363363/om_sai_latest_creation_pink_block_print_straight_kurti.jpg"
  },
  {
    company_name: "OM SAI LATEST CREATION",
    description: "Block Print A-line Kurti",
    price: "538",
    orginal_price: "Rs. 699",
    discount: "(23% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/kwvT/606891c1f997dd7b646123b2/om_sai_latest_creation_beige_block_print_a-line_kurti.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/kwvT/606891c1f997dd7b646123b2/om_sai_latest_creation_beige_block_print_a-line_kurti.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/kwvT/606891c1f997dd7b646123b2/om_sai_latest_creation_beige_block_print_a-line_kurti.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/kwvT/606891c1f997dd7b646123b2/om_sai_latest_creation_beige_block_print_a-line_kurti.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/kwvT/606891c1f997dd7b646123b2/om_sai_latest_creation_beige_block_print_a-line_kurti.jpg"
  },
  {
    company_name: "Bhama Couture",
    description: "Geometric Pattern Tunic with Embellished",
    price: "840",
    orginal_price: "Rs. 1,999",
    discount: "(58% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210404/wlgc/606ad722aeb269a9e35dcce5/bhama_couture_white_geometric_pattern_tunic_with_embellished.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210404/wlgc/606ad722aeb269a9e35dcce5/bhama_couture_white_geometric_pattern_tunic_with_embellished.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210404/wlgc/606ad722aeb269a9e35dcce5/bhama_couture_white_geometric_pattern_tunic_with_embellished.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210404/wlgc/606ad722aeb269a9e35dcce5/bhama_couture_white_geometric_pattern_tunic_with_embellished.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210404/wlgc/606ad722aeb269a9e35dcce5/bhama_couture_white_geometric_pattern_tunic_with_embellished.jpg"
  },
  {
    company_name: "KIPEK",
    description: "Printed Straight Kurti",
    price: "608",
    orginal_price: "Rs. 1,899",
    discount: "(68% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/EqHB/606875467cdb8c1f14761ded/kipek_red_printed_straight_kurti.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/EqHB/606875467cdb8c1f14761ded/kipek_red_printed_straight_kurti.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/EqHB/606875467cdb8c1f14761ded/kipek_red_printed_straight_kurti.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/EqHB/606875467cdb8c1f14761ded/kipek_red_printed_straight_kurti.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/EqHB/606875467cdb8c1f14761ded/kipek_red_printed_straight_kurti.jpg"
  },
  {
    company_name: "FUSION",
    description: "Floral Print Straight Kurti with Band Collar",
    price: "245",
    orginal_price: "Rs. 499",
    discount: "(51% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/h34/h2b/14489855131678/fusion_mustard_floral_print_straight_kurti_with_band_collar.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/h34/h2b/14489855131678/fusion_mustard_floral_print_straight_kurti_with_band_collar.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/h34/h2b/14489855131678/fusion_mustard_floral_print_straight_kurti_with_band_collar.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/h34/h2b/14489855131678/fusion_mustard_floral_print_straight_kurti_with_band_collar.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/h34/h2b/14489855131678/fusion_mustard_floral_print_straight_kurti_with_band_collar.jpg"
  },
  {
    company_name: "ANAITA",
    description: "Floral Embroidered Straight Kurti",
    price: "492",
    orginal_price: "Rs. 1,229",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210423/blHp/6082be16f997dd7b64bda005/anaita_navy_floral_embroidered_straight_kurti.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210423/blHp/6082be16f997dd7b64bda005/anaita_navy_floral_embroidered_straight_kurti.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210423/blHp/6082be16f997dd7b64bda005/anaita_navy_floral_embroidered_straight_kurti.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210423/blHp/6082be16f997dd7b64bda005/anaita_navy_floral_embroidered_straight_kurti.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210423/blHp/6082be16f997dd7b64bda005/anaita_navy_floral_embroidered_straight_kurti.jpg"
  }
]
const kurtas = [
  {
    company_name: "Indie Picks",
    description: "Pure Silk Viscose Long Kurta with Embroidery",
    price: "1406",
    orginal_price: "Rs. 3,799",
    discount: "(63% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20201029/qZvj/5f99c685f997dd8c837d6054/indie_picks_white_pure_silk_viscose_long_kurta_with_embroidery.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20201029/qZvj/5f99c685f997dd8c837d6054/indie_picks_white_pure_silk_viscose_long_kurta_with_embroidery.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20201029/qZvj/5f99c685f997dd8c837d6054/indie_picks_white_pure_silk_viscose_long_kurta_with_embroidery.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20201029/qZvj/5f99c685f997dd8c837d6054/indie_picks_white_pure_silk_viscose_long_kurta_with_embroidery.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20201029/qZvj/5f99c685f997dd8c837d6054/indie_picks_white_pure_silk_viscose_long_kurta_with_embroidery.jpg"
  },
  {
    company_name: "Indie Picks",
    description: "Pure Silk Viscose Slim Fit Long Kurta",
    price: "1470",
    orginal_price: "Rs. 3,499",
    discount: "(58% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20201117/AyUf/5fb2c939f997dd8c839c825c/indie_picks_burgundy_pure_silk_viscose_slim_fit_long_kurta.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20201117/AyUf/5fb2c939f997dd8c839c825c/indie_picks_burgundy_pure_silk_viscose_slim_fit_long_kurta.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20201117/AyUf/5fb2c939f997dd8c839c825c/indie_picks_burgundy_pure_silk_viscose_slim_fit_long_kurta.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20201117/AyUf/5fb2c939f997dd8c839c825c/indie_picks_burgundy_pure_silk_viscose_slim_fit_long_kurta.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20201117/AyUf/5fb2c939f997dd8c839c825c/indie_picks_burgundy_pure_silk_viscose_slim_fit_long_kurta.jpg"
  },
  {
    company_name: "Indie Picks",
    description: "South Cotton Checked Shirt Kurta with Roll-Up Sleeves",
    price: "400",
    orginal_price: "Rs. 999",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20201112/m9Uw/5fad4f9aaeb269d5630bb9a7/indie_picks_lime_green_south_cotton_checked_shirt_kurta_with_roll-up_sleeves.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20201112/m9Uw/5fad4f9aaeb269d5630bb9a7/indie_picks_lime_green_south_cotton_checked_shirt_kurta_with_roll-up_sleeves.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20201112/m9Uw/5fad4f9aaeb269d5630bb9a7/indie_picks_lime_green_south_cotton_checked_shirt_kurta_with_roll-up_sleeves.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20201112/m9Uw/5fad4f9aaeb269d5630bb9a7/indie_picks_lime_green_south_cotton_checked_shirt_kurta_with_roll-up_sleeves.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20201112/m9Uw/5fad4f9aaeb269d5630bb9a7/indie_picks_lime_green_south_cotton_checked_shirt_kurta_with_roll-up_sleeves.jpg"
  },
  {
    company_name: "Indie Picks",
    description: "Cotton Dobby Short Kurta",
    price: "559",
    orginal_price: "Rs. 1,299",
    discount: "(57% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20201112/w6e5/5fad57c3aeb269d5630c0748/indie_picks_peach_cotton_dobby_short_kurta.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20201112/w6e5/5fad57c3aeb269d5630c0748/indie_picks_peach_cotton_dobby_short_kurta.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20201112/w6e5/5fad57c3aeb269d5630c0748/indie_picks_peach_cotton_dobby_short_kurta.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20201112/w6e5/5fad57c3aeb269d5630c0748/indie_picks_peach_cotton_dobby_short_kurta.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20201112/w6e5/5fad57c3aeb269d5630c0748/indie_picks_peach_cotton_dobby_short_kurta.jpg"
  },
  {
    company_name: "Indie Picks",
    description: "Cotton Dobby Short Kurta",
    price: "520",
    orginal_price: "Rs. 1,299",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20201112/pvYF/5fad4f8faeb269d5630bb934/indie_picks_turquoise_blue_cotton_dobby_short_kurta.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20201112/pvYF/5fad4f8faeb269d5630bb934/indie_picks_turquoise_blue_cotton_dobby_short_kurta.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20201112/pvYF/5fad4f8faeb269d5630bb934/indie_picks_turquoise_blue_cotton_dobby_short_kurta.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20201112/pvYF/5fad4f8faeb269d5630bb934/indie_picks_turquoise_blue_cotton_dobby_short_kurta.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20201112/pvYF/5fad4f8faeb269d5630bb934/indie_picks_turquoise_blue_cotton_dobby_short_kurta.jpg"
  },
  {
    company_name: "Indie Picks",
    description: "Mandarin-Collar South-Cotton Kurta",
    price: "1400",
    orginal_price: "Rs. 3,499",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20200918/FRiX/5f63c2cff997dd8c8341f4ab/indie_picks_orange_mandarin-collar_south-cotton_kurta.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20200918/FRiX/5f63c2cff997dd8c8341f4ab/indie_picks_orange_mandarin-collar_south-cotton_kurta.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20200918/FRiX/5f63c2cff997dd8c8341f4ab/indie_picks_orange_mandarin-collar_south-cotton_kurta.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20200918/FRiX/5f63c2cff997dd8c8341f4ab/indie_picks_orange_mandarin-collar_south-cotton_kurta.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20200918/FRiX/5f63c2cff997dd8c8341f4ab/indie_picks_orange_mandarin-collar_south-cotton_kurta.jpg"
  },
  {
    company_name: "Indie Picks",
    description: "South Cotton Textured Kurta Fabric",
    price: "400",
    orginal_price: "Rs. 999",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20201006/thYN/5f7b6c7ef997dd8c83582674/indie_picks_pink_south_cotton_textured_kurta_fabric.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20201006/thYN/5f7b6c7ef997dd8c83582674/indie_picks_pink_south_cotton_textured_kurta_fabric.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20201006/thYN/5f7b6c7ef997dd8c83582674/indie_picks_pink_south_cotton_textured_kurta_fabric.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20201006/thYN/5f7b6c7ef997dd8c83582674/indie_picks_pink_south_cotton_textured_kurta_fabric.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20201006/thYN/5f7b6c7ef997dd8c83582674/indie_picks_pink_south_cotton_textured_kurta_fabric.jpg"
  },
  {
    company_name: "",
    description: "Cotton Dobby Short Kurta with Roll-Tab Sleeves",
    price: "585",
    orginal_price: "Rs. 1,299",
    discount: "(55% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210324/GDWc/605a427baeb269a9e325698a/indie_picks_pink_cotton_dobby_short_kurta_with_roll-tab_sleeves.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210324/GDWc/605a427baeb269a9e325698a/indie_picks_pink_cotton_dobby_short_kurta_with_roll-tab_sleeves.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210324/GDWc/605a427baeb269a9e325698a/indie_picks_pink_cotton_dobby_short_kurta_with_roll-tab_sleeves.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210324/GDWc/605a427baeb269a9e325698a/indie_picks_pink_cotton_dobby_short_kurta_with_roll-tab_sleeves.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210324/GDWc/605a427baeb269a9e325698a/indie_picks_pink_cotton_dobby_short_kurta_with_roll-tab_sleeves.jpg"
  },
  {
    company_name: "",
    description: "Nima South Cotton Dobby Long Kurta",
    price: "1319",
    orginal_price: "Rs. 2,199",
    discount: "(40% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210126/VIpB/600f10cd7cdb8c1f142fba91/indie_picks_green_nima_south_cotton_dobby_long_kurta.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210126/VIpB/600f10cd7cdb8c1f142fba91/indie_picks_green_nima_south_cotton_dobby_long_kurta.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210126/VIpB/600f10cd7cdb8c1f142fba91/indie_picks_green_nima_south_cotton_dobby_long_kurta.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210126/VIpB/600f10cd7cdb8c1f142fba91/indie_picks_green_nima_south_cotton_dobby_long_kurta.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210126/VIpB/600f10cd7cdb8c1f142fba91/indie_picks_green_nima_south_cotton_dobby_long_kurta.jpg"
  },
  {
    company_name: "Indie Picks",
    description: "Pure Silk Viscose Straight Kurta with Top Stitch Details",
    price: "1520",
    orginal_price: "Rs. 3,799",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210107/WMMI/5ff61169aeb269698146b48f/indie_picks_brown_pure_silk_viscose_straight_kurta_with_top_stitch_details.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210107/WMMI/5ff61169aeb269698146b48f/indie_picks_brown_pure_silk_viscose_straight_kurta_with_top_stitch_details.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210107/WMMI/5ff61169aeb269698146b48f/indie_picks_brown_pure_silk_viscose_straight_kurta_with_top_stitch_details.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210107/WMMI/5ff61169aeb269698146b48f/indie_picks_brown_pure_silk_viscose_straight_kurta_with_top_stitch_details.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210107/WMMI/5ff61169aeb269698146b48f/indie_picks_brown_pure_silk_viscose_straight_kurta_with_top_stitch_details.jpg"
  },
  {
    company_name: "Indie Picks",
    description: "Nima South Cotton Dobby Long Kurta",
    price: "1275",
    orginal_price: "Rs. 2,199",
    discount: "(42% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20201221/h9jB/5fe0499bf997dd8c83d9ed3e/indie_picks_red_nima_south_cotton_dobby_long_kurta.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20201221/h9jB/5fe0499bf997dd8c83d9ed3e/indie_picks_red_nima_south_cotton_dobby_long_kurta.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20201221/h9jB/5fe0499bf997dd8c83d9ed3e/indie_picks_red_nima_south_cotton_dobby_long_kurta.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20201221/h9jB/5fe0499bf997dd8c83d9ed3e/indie_picks_red_nima_south_cotton_dobby_long_kurta.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20201221/h9jB/5fe0499bf997dd8c83d9ed3e/indie_picks_red_nima_south_cotton_dobby_long_kurta.jpg"
  },
  {
    company_name: "Indie Picks",
    description: "Nima South Cotton Dobby Long Kurta",
    price: "1319",
    orginal_price: "Rs. 2,199",
    discount: "(40% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20201221/wZmc/5fe04ed2f997dd8c83da0471/indie_picks_grey_nima_south_cotton_dobby_long_kurta.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20201221/wZmc/5fe04ed2f997dd8c83da0471/indie_picks_grey_nima_south_cotton_dobby_long_kurta.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20201221/wZmc/5fe04ed2f997dd8c83da0471/indie_picks_grey_nima_south_cotton_dobby_long_kurta.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20201221/wZmc/5fe04ed2f997dd8c83da0471/indie_picks_grey_nima_south_cotton_dobby_long_kurta.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20201221/wZmc/5fe04ed2f997dd8c83da0471/indie_picks_grey_nima_south_cotton_dobby_long_kurta.jpg"
  }
]
const shoes = [
  {
    company_name: "Mactree",
    description: "Panelled Loafers with Perforations",
    price: "825",
    orginal_price: "Rs. 2,499",
    discount: "(67% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/R9md/60687dabaeb269a9e333343c/mactree_blue_panelled_loafers_with_perforations.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/R9md/60687dabaeb269a9e333343c/mactree_blue_panelled_loafers_with_perforations.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/R9md/60687dabaeb269a9e333343c/mactree_blue_panelled_loafers_with_perforations.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/R9md/60687dabaeb269a9e333343c/mactree_blue_panelled_loafers_with_perforations.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/R9md/60687dabaeb269a9e333343c/mactree_blue_panelled_loafers_with_perforations.jpg"
  },
  {
    company_name: "Campus",
    description: "Oxyfit Low-Top Slip-On Sports Shoes",
    price: "679",
    orginal_price: "Rs. 799",
    discount: "(15% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/ha0/h50/14416399466526/campus_blue_oxyfit_low-top_slip-on_sports_shoes.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/ha0/h50/14416399466526/campus_blue_oxyfit_low-top_slip-on_sports_shoes.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/ha0/h50/14416399466526/campus_blue_oxyfit_low-top_slip-on_sports_shoes.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/ha0/h50/14416399466526/campus_blue_oxyfit_low-top_slip-on_sports_shoes.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/ha0/h50/14416399466526/campus_blue_oxyfit_low-top_slip-on_sports_shoes.jpg"
  },
  {
    company_name: "CROCS",
    description: "Bayaband Slingback Clogs",
    price: "2516",
    orginal_price: "Rs. 3,495",
    discount: "(28% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20200723/i9yC/5f19ad997cdb8c2207843f9b/crocs_black_bayaband_slingback_clogs.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20200723/i9yC/5f19ad997cdb8c2207843f9b/crocs_black_bayaband_slingback_clogs.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20200723/i9yC/5f19ad997cdb8c2207843f9b/crocs_black_bayaband_slingback_clogs.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20200723/i9yC/5f19ad997cdb8c2207843f9b/crocs_black_bayaband_slingback_clogs.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20200723/i9yC/5f19ad997cdb8c2207843f9b/crocs_black_bayaband_slingback_clogs.jpg"
  },
  {
    company_name: "CROCS",
    description: "Bayaband Slingback Clogs",
    price: "2656",
    orginal_price: "Rs. 3,495",
    discount: "(24% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20200723/CFmP/5f19acf37cdb8c2207843537/crocs_navy_bayaband_slingback_clogs.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20200723/CFmP/5f19acf37cdb8c2207843537/crocs_navy_bayaband_slingback_clogs.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20200723/CFmP/5f19acf37cdb8c2207843537/crocs_navy_bayaband_slingback_clogs.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20200723/CFmP/5f19acf37cdb8c2207843537/crocs_navy_bayaband_slingback_clogs.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20200723/CFmP/5f19acf37cdb8c2207843537/crocs_navy_bayaband_slingback_clogs.jpg"
  },
  {
    company_name: "Walkstyle",
    description: "Casual Shoes with Textured Detail",
    price: "520",
    orginal_price: "Rs. 1,299",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/xEQP/6068b2947cdb8c1f147a6625/walkstyle_brown_casual_shoes_with_textured_detail.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/xEQP/6068b2947cdb8c1f147a6625/walkstyle_brown_casual_shoes_with_textured_detail.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/xEQP/6068b2947cdb8c1f147a6625/walkstyle_brown_casual_shoes_with_textured_detail.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/xEQP/6068b2947cdb8c1f147a6625/walkstyle_brown_casual_shoes_with_textured_detail.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/xEQP/6068b2947cdb8c1f147a6625/walkstyle_brown_casual_shoes_with_textured_detail.jpg"
  },
  {
    company_name: "Leatherkraft",
    description: "Dyed-Washed Round Toe Slip-on Shoes",
    price: "562",
    orginal_price: "Rs. 1,249",
    discount: "(55% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/Zyvf/6068c2e9aeb269a9e3384f99/leatherkraft_blue_dyed-washed_round_toe_slip-on_shoes_.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/Zyvf/6068c2e9aeb269a9e3384f99/leatherkraft_blue_dyed-washed_round_toe_slip-on_shoes_.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/Zyvf/6068c2e9aeb269a9e3384f99/leatherkraft_blue_dyed-washed_round_toe_slip-on_shoes_.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/Zyvf/6068c2e9aeb269a9e3384f99/leatherkraft_blue_dyed-washed_round_toe_slip-on_shoes_.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/Zyvf/6068c2e9aeb269a9e3384f99/leatherkraft_blue_dyed-washed_round_toe_slip-on_shoes_.jpg"
  },
  {
    company_name: "CROCS",
    description: "Bayaband Thong-Strap Flip-Flops",
    price: "2156",
    orginal_price: "Rs. 2,995",
    discount: "(28% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20200723/qCsD/5f19ae0d7cdb8c22078446bb/crocs_navy_blue_bayaband_thong-strap_flip-flops.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20200723/qCsD/5f19ae0d7cdb8c22078446bb/crocs_navy_blue_bayaband_thong-strap_flip-flops.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20200723/qCsD/5f19ae0d7cdb8c22078446bb/crocs_navy_blue_bayaband_thong-strap_flip-flops.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20200723/qCsD/5f19ae0d7cdb8c22078446bb/crocs_navy_blue_bayaband_thong-strap_flip-flops.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20200723/qCsD/5f19ae0d7cdb8c22078446bb/crocs_navy_blue_bayaband_thong-strap_flip-flops.jpg"
  },
  {
    company_name: "Campus",
    description: "Bull Lace-up Running Shoes",
    price: "779",
    orginal_price: "Rs. 999",
    discount: "(22% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/h25/h24/13795340451870/campus_grey_bull_lace-up_running_shoes.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/h25/h24/13795340451870/campus_grey_bull_lace-up_running_shoes.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/h25/h24/13795340451870/campus_grey_bull_lace-up_running_shoes.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/h25/h24/13795340451870/campus_grey_bull_lace-up_running_shoes.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/h25/h24/13795340451870/campus_grey_bull_lace-up_running_shoes.jpg"
  },
  {
    company_name: "SIR CORBETT",
    description: "Lace-Up Derby Shoes",
    price: "825",
    orginal_price: "Rs. 2,499",
    discount: "(67% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/eBYJ/606886d97cdb8c1f14775dc4/sir_corbett_brown_lace-up_derby_shoes.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/eBYJ/606886d97cdb8c1f14775dc4/sir_corbett_brown_lace-up_derby_shoes.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/eBYJ/606886d97cdb8c1f14775dc4/sir_corbett_brown_lace-up_derby_shoes.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/eBYJ/606886d97cdb8c1f14775dc4/sir_corbett_brown_lace-up_derby_shoes.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/eBYJ/606886d97cdb8c1f14775dc4/sir_corbett_brown_lace-up_derby_shoes.jpg"
  },
  {
    company_name: "Flatheads",
    description: "Low-Top Lace-Up Shoes",
    price: "3418",
    orginal_price: "Rs. 8,995",
    discount: "(62% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20201203/sHCb/5fc86563f997dd8c83b5684f/flatheads_black_low-top_lace-up_shoes.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20201203/sHCb/5fc86563f997dd8c83b5684f/flatheads_black_low-top_lace-up_shoes.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20201203/sHCb/5fc86563f997dd8c83b5684f/flatheads_black_low-top_lace-up_shoes.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20201203/sHCb/5fc86563f997dd8c83b5684f/flatheads_black_low-top_lace-up_shoes.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20201203/sHCb/5fc86563f997dd8c83b5684f/flatheads_black_low-top_lace-up_shoes.jpg"
  },
  {
    company_name: "Campus",
    description: "Milan Textured Low-Top Sports Shoes",
    price: "1274",
    orginal_price: "Rs. 1,699",
    discount: "(25% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/h09/h5f/15775121309726/campus_blue_milan_textured_low-top_sports_shoes.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/h09/h5f/15775121309726/campus_blue_milan_textured_low-top_sports_shoes.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/h09/h5f/15775121309726/campus_blue_milan_textured_low-top_sports_shoes.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/h09/h5f/15775121309726/campus_blue_milan_textured_low-top_sports_shoes.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/h09/h5f/15775121309726/campus_blue_milan_textured_low-top_sports_shoes.jpg"
  },
  {
    company_name: "CROCS",
    description: "Bayaband Clogs with Cutouts",
    price: "2656",
    orginal_price: "Rs. 3,495",
    discount: "(24% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20200723/WBLK/5f19b1437cdb8c2207847c7a/crocs_grey_bayaband_clogs_with_cutouts.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20200723/WBLK/5f19b1437cdb8c2207847c7a/crocs_grey_bayaband_clogs_with_cutouts.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20200723/WBLK/5f19b1437cdb8c2207847c7a/crocs_grey_bayaband_clogs_with_cutouts.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20200723/WBLK/5f19b1437cdb8c2207847c7a/crocs_grey_bayaband_clogs_with_cutouts.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20200723/WBLK/5f19b1437cdb8c2207847c7a/crocs_grey_bayaband_clogs_with_cutouts.jpg"
  },
  {
    company_name: "Leatherkraft",
    description: "Sports Shoes with Lace Fastening",
    price: "562",
    orginal_price: "Rs. 1,249",
    discount: "(55% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/3uU3/6068b08af997dd7b6463bcd9/leatherkraft_black_sports_shoes_with_lace_fastening.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/3uU3/6068b08af997dd7b6463bcd9/leatherkraft_black_sports_shoes_with_lace_fastening.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/3uU3/6068b08af997dd7b6463bcd9/leatherkraft_black_sports_shoes_with_lace_fastening.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/3uU3/6068b08af997dd7b6463bcd9/leatherkraft_black_sports_shoes_with_lace_fastening.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/3uU3/6068b08af997dd7b6463bcd9/leatherkraft_black_sports_shoes_with_lace_fastening.jpg"
  },
  {
    company_name: "SIR CORBETT",
    description: "Sandals with Cutouts",
    price: "787",
    orginal_price: "Rs. 2,249",
    discount: "(65% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/hc8/hf4/16321040515102/sir_corbett_tan_sandals_with_cutouts.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/hc8/hf4/16321040515102/sir_corbett_tan_sandals_with_cutouts.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/hc8/hf4/16321040515102/sir_corbett_tan_sandals_with_cutouts.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/hc8/hf4/16321040515102/sir_corbett_tan_sandals_with_cutouts.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/hc8/hf4/16321040515102/sir_corbett_tan_sandals_with_cutouts.jpg"
  },
  {
    company_name: "Campus",
    description: "Textured Lace-Up Sports Shoes",
    price: "1349",
    orginal_price: "Rs. 1,499",
    discount: "(10% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/hc7/h7f/15172105535518/campus_white_textured_lace-up_sports_shoes.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/hc7/h7f/15172105535518/campus_white_textured_lace-up_sports_shoes.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/hc7/h7f/15172105535518/campus_white_textured_lace-up_sports_shoes.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/hc7/h7f/15172105535518/campus_white_textured_lace-up_sports_shoes.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/hc7/h7f/15172105535518/campus_white_textured_lace-up_sports_shoes.jpg"
  },
  {
    company_name: "CROCS",
    description: "Bayaband Thong-Strap Flip-Flops",
    price: "2156",
    orginal_price: "Rs. 2,995",
    discount: "(28% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20200723/xFNp/5f19b0947cdb8c2207847139/crocs_black_bayaband_thong-strap_flip-flops.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20200723/xFNp/5f19b0947cdb8c2207847139/crocs_black_bayaband_thong-strap_flip-flops.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20200723/xFNp/5f19b0947cdb8c2207847139/crocs_black_bayaband_thong-strap_flip-flops.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20200723/xFNp/5f19b0947cdb8c2207847139/crocs_black_bayaband_thong-strap_flip-flops.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20200723/xFNp/5f19b0947cdb8c2207847139/crocs_black_bayaband_thong-strap_flip-flops.jpg"
  },
  {
    company_name: "CROCS",
    description: "Bayaband Sliders with Signature Branding",
    price: "2276",
    orginal_price: "Rs. 2,995",
    discount: "(24% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20200723/S3wk/5f19b05a7cdb8c2207846d62/crocs_grey_bayaband_sliders_with_signature_branding.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20200723/S3wk/5f19b05a7cdb8c2207846d62/crocs_grey_bayaband_sliders_with_signature_branding.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20200723/S3wk/5f19b05a7cdb8c2207846d62/crocs_grey_bayaband_sliders_with_signature_branding.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20200723/S3wk/5f19b05a7cdb8c2207846d62/crocs_grey_bayaband_sliders_with_signature_branding.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20200723/S3wk/5f19b05a7cdb8c2207846d62/crocs_grey_bayaband_sliders_with_signature_branding.jpg"
  },
  {
    company_name: "Skechers",
    description: "Bounder-Mirkle Textured Lace-Up Shoes",
    price: "3849",
    orginal_price: "Rs. 5,499",
    discount: "(30% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/hf9/h79/15397148393502/skechers_black_bounder-mirkle_textured_lace-up_shoes.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/hf9/h79/15397148393502/skechers_black_bounder-mirkle_textured_lace-up_shoes.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/hf9/h79/15397148393502/skechers_black_bounder-mirkle_textured_lace-up_shoes.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/hf9/h79/15397148393502/skechers_black_bounder-mirkle_textured_lace-up_shoes.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/hf9/h79/15397148393502/skechers_black_bounder-mirkle_textured_lace-up_shoes.jpg"
  },
  {
    company_name: "U.S. Polo Assn.",
    description: "Lebron 2.0 Lace-Up Sneakers",
    price: "2399",
    orginal_price: "Rs. 3,999",
    discount: "(40% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210507/AXJr/60943a51aeb269a9e3b58a37/u.s._polo_assn._white_lebron_2.0_lace-up_sneakers.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210507/AXJr/60943a51aeb269a9e3b58a37/u.s._polo_assn._white_lebron_2.0_lace-up_sneakers.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210507/AXJr/60943a51aeb269a9e3b58a37/u.s._polo_assn._white_lebron_2.0_lace-up_sneakers.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210507/AXJr/60943a51aeb269a9e3b58a37/u.s._polo_assn._white_lebron_2.0_lace-up_sneakers.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210507/AXJr/60943a51aeb269a9e3b58a37/u.s._polo_assn._white_lebron_2.0_lace-up_sneakers.jpg"
  },
  {
    company_name: "CROCS",
    description: "Lite Ride Camo Print Clogs with Slingback",
    price: "4995",
    orginal_price: "",
    discount: "",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210309/ya28/6046be48aeb26969817c6155/crocs_grey_lite_ride_camo_print_clogs_with_slingback.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210309/ya28/6046be48aeb26969817c6155/crocs_grey_lite_ride_camo_print_clogs_with_slingback.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210309/ya28/6046be48aeb26969817c6155/crocs_grey_lite_ride_camo_print_clogs_with_slingback.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210309/ya28/6046be48aeb26969817c6155/crocs_grey_lite_ride_camo_print_clogs_with_slingback.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210309/ya28/6046be48aeb26969817c6155/crocs_grey_lite_ride_camo_print_clogs_with_slingback.jpg"
  },
  {
    company_name: "ADIDAS",
    description: "Clear factor M Lace-Up Running Shoes",
    price: "2499",
    orginal_price: "",
    discount: "",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210503/nMC1/60901496f997dd7b64cae051/adidas_black_clear_factor_m_lace-up_running_shoes.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210503/nMC1/60901496f997dd7b64cae051/adidas_black_clear_factor_m_lace-up_running_shoes.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210503/nMC1/60901496f997dd7b64cae051/adidas_black_clear_factor_m_lace-up_running_shoes.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210503/nMC1/60901496f997dd7b64cae051/adidas_black_clear_factor_m_lace-up_running_shoes.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210503/nMC1/60901496f997dd7b64cae051/adidas_black_clear_factor_m_lace-up_running_shoes.jpg"
  },
  {
    company_name: "EL PASO",
    description: "Textured T-strap Flip-Flops",
    price: "648",
    orginal_price: "Rs. 3,240",
    discount: "(80% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/SCK6/6068677baeb269a9e3318d83/el_paso_black_textured_t-strap_flip-flops.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/SCK6/6068677baeb269a9e3318d83/el_paso_black_textured_t-strap_flip-flops.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/SCK6/6068677baeb269a9e3318d83/el_paso_black_textured_t-strap_flip-flops.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/SCK6/6068677baeb269a9e3318d83/el_paso_black_textured_t-strap_flip-flops.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/SCK6/6068677baeb269a9e3318d83/el_paso_black_textured_t-strap_flip-flops.jpg"
  },
  {
    company_name: "ARKAX",
    description: "Mid-Top Lace-Up Casual Shoes with Velcro Fastening",
    price: "1120",
    orginal_price: "Rs. 2,799",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/hce/h65/13043986661406/arkax_grey_mid-top_lace-up_casual_shoes_with_velcro_fastening.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/hce/h65/13043986661406/arkax_grey_mid-top_lace-up_casual_shoes_with_velcro_fastening.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/hce/h65/13043986661406/arkax_grey_mid-top_lace-up_casual_shoes_with_velcro_fastening.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/hce/h65/13043986661406/arkax_grey_mid-top_lace-up_casual_shoes_with_velcro_fastening.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/hce/h65/13043986661406/arkax_grey_mid-top_lace-up_casual_shoes_with_velcro_fastening.jpg"
  },
  {
    company_name: "PERFORMAX",
    description: "Low-Top Lace-Up Sports Shoes",
    price: "2399",
    orginal_price: "Rs. 2,999",
    discount: "(20% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210507/Encj/6095574bf997ddb312966116/performax_grey_low-top_lace-up_sports_shoes.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210507/Encj/6095574bf997ddb312966116/performax_grey_low-top_lace-up_sports_shoes.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210507/Encj/6095574bf997ddb312966116/performax_grey_low-top_lace-up_sports_shoes.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210507/Encj/6095574bf997ddb312966116/performax_grey_low-top_lace-up_sports_shoes.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210507/Encj/6095574bf997ddb312966116/performax_grey_low-top_lace-up_sports_shoes.jpg"
  },
  {
    company_name: "STELVIO",
    description: "Panelled Formal Slip-Ons with Tassel Accent",
    price: "989",
    orginal_price: "Rs. 2,198",
    discount: "(55% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/hdd/h11/12098187100190/stelvio_black_panelled_formal_slip-ons_with_tassel_accent.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/hdd/h11/12098187100190/stelvio_black_panelled_formal_slip-ons_with_tassel_accent.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/hdd/h11/12098187100190/stelvio_black_panelled_formal_slip-ons_with_tassel_accent.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/hdd/h11/12098187100190/stelvio_black_panelled_formal_slip-ons_with_tassel_accent.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/hdd/h11/12098187100190/stelvio_black_panelled_formal_slip-ons_with_tassel_accent.jpg"
  },
  {
    company_name: "Campus",
    description: "Explore Mid-Top Lace-Up Casual Shoes",
    price: "1709",
    orginal_price: "Rs. 1,899",
    discount: "(10% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/h1b/h37/13018740654110/campus_black_explore_mid-top_lace-up_casual_shoes.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/h1b/h37/13018740654110/campus_black_explore_mid-top_lace-up_casual_shoes.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/h1b/h37/13018740654110/campus_black_explore_mid-top_lace-up_casual_shoes.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/h1b/h37/13018740654110/campus_black_explore_mid-top_lace-up_casual_shoes.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/h1b/h37/13018740654110/campus_black_explore_mid-top_lace-up_casual_shoes.jpg"
  },
  {
    company_name: "NIKE",
    description: "Todos Lace-Up Sports Shoes",
    price: "2477",
    orginal_price: "Rs. 3,995",
    discount: "(38% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/hf8/h1e/13863424229406/nike_black_todos_lace-up_sports_shoes.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/hf8/h1e/13863424229406/nike_black_todos_lace-up_sports_shoes.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/hf8/h1e/13863424229406/nike_black_todos_lace-up_sports_shoes.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/hf8/h1e/13863424229406/nike_black_todos_lace-up_sports_shoes.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/hf8/h1e/13863424229406/nike_black_todos_lace-up_sports_shoes.jpg"
  },
  {
    company_name: "WOODLAND",
    description: "Textured Lace-Up Casual Shoes",
    price: "2797",
    orginal_price: "Rs. 3,995",
    discount: "(30% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/h6a/h38/13291637997598/woodland_blue_textured_lace-up_casual_shoes.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/h6a/h38/13291637997598/woodland_blue_textured_lace-up_casual_shoes.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/h6a/h38/13291637997598/woodland_blue_textured_lace-up_casual_shoes.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/h6a/h38/13291637997598/woodland_blue_textured_lace-up_casual_shoes.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/h6a/h38/13291637997598/woodland_blue_textured_lace-up_casual_shoes.jpg"
  },
  {
    company_name: "AARGENT",
    description: "Velcro Fastening Strappy Sandals",
    price: "350",
    orginal_price: "Rs. 999",
    discount: "(65% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/TdZ0/60694e9faeb269a9e3419a55/aargent_blue_velcro_fastening_strappy_sandals_.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/TdZ0/60694e9faeb269a9e3419a55/aargent_blue_velcro_fastening_strappy_sandals_.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/TdZ0/60694e9faeb269a9e3419a55/aargent_blue_velcro_fastening_strappy_sandals_.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/TdZ0/60694e9faeb269a9e3419a55/aargent_blue_velcro_fastening_strappy_sandals_.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/TdZ0/60694e9faeb269a9e3419a55/aargent_blue_velcro_fastening_strappy_sandals_.jpg"
  },
  {
    company_name: "Campus",
    description: "Textured Low-Top Lace-Up Sports Shoes",
    price: "1223",
    orginal_price: "Rs. 1,699",
    discount: "(28% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/hfe/h62/14962666045470/campus_navy_blue_textured_low-top_lace-up_sports_shoes.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/hfe/h62/14962666045470/campus_navy_blue_textured_low-top_lace-up_sports_shoes.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/hfe/h62/14962666045470/campus_navy_blue_textured_low-top_lace-up_sports_shoes.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/hfe/h62/14962666045470/campus_navy_blue_textured_low-top_lace-up_sports_shoes.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/hfe/h62/14962666045470/campus_navy_blue_textured_low-top_lace-up_sports_shoes.jpg"
  },
  {
    company_name: "AARGENT",
    description: "Open-Toe Strappy Sandals",
    price: "350",
    orginal_price: "Rs. 999",
    discount: "(65% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/C3D1/606960e57cdb8c1f1485ac82/aargent_purple_open-toe_strappy_sandals_.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/C3D1/606960e57cdb8c1f1485ac82/aargent_purple_open-toe_strappy_sandals_.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/C3D1/606960e57cdb8c1f1485ac82/aargent_purple_open-toe_strappy_sandals_.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/C3D1/606960e57cdb8c1f1485ac82/aargent_purple_open-toe_strappy_sandals_.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/C3D1/606960e57cdb8c1f1485ac82/aargent_purple_open-toe_strappy_sandals_.jpg"
  },
  {
    company_name: "Campus",
    description: "Legend Lace-Up Sports Shoes",
    price: "979",
    orginal_price: "Rs. 1,399",
    discount: "(30% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/h9f/he0/13018714767390/campus_blue_legend_lace-up_sports_shoes.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/h9f/he0/13018714767390/campus_blue_legend_lace-up_sports_shoes.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/h9f/he0/13018714767390/campus_blue_legend_lace-up_sports_shoes.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/h9f/he0/13018714767390/campus_blue_legend_lace-up_sports_shoes.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/h9f/he0/13018714767390/campus_blue_legend_lace-up_sports_shoes.jpg"
  },
  {
    company_name: "RED TAPE",
    description: "Flip-Flops with Contrast Panels",
    price: "824",
    orginal_price: "Rs. 1,499",
    discount: "(45% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20200725/PEgI/5f1b2c34f997ddfa53224dd8/red_tape_navy_blue_flip-flops_with_contrast_panels.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20200725/PEgI/5f1b2c34f997ddfa53224dd8/red_tape_navy_blue_flip-flops_with_contrast_panels.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20200725/PEgI/5f1b2c34f997ddfa53224dd8/red_tape_navy_blue_flip-flops_with_contrast_panels.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20200725/PEgI/5f1b2c34f997ddfa53224dd8/red_tape_navy_blue_flip-flops_with_contrast_panels.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20200725/PEgI/5f1b2c34f997ddfa53224dd8/red_tape_navy_blue_flip-flops_with_contrast_panels.jpg"
  },
  {
    company_name: "CROCS",
    description: "Bayaband Thong-Strap Flip-Flops",
    price: "2037",
    orginal_price: "Rs. 2,995",
    discount: "(32% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20200723/sZFE/5f19b28e7cdb8c22078491de/crocs_white_bayaband_thong-strap_flip-flops.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20200723/sZFE/5f19b28e7cdb8c22078491de/crocs_white_bayaband_thong-strap_flip-flops.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20200723/sZFE/5f19b28e7cdb8c22078491de/crocs_white_bayaband_thong-strap_flip-flops.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20200723/sZFE/5f19b28e7cdb8c22078491de/crocs_white_bayaband_thong-strap_flip-flops.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20200723/sZFE/5f19b28e7cdb8c22078491de/crocs_white_bayaband_thong-strap_flip-flops.jpg"
  },
  {
    company_name: "Skechers",
    description: "Go Run Pulse - Specter Running Shoes",
    price: "6499",
    orginal_price: "",
    discount: "",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210427/NMFH/60882bd2f997dd7b64c40b45/skechers_navy_blue_go_run_pulse_-_specter_running_shoes.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210427/NMFH/60882bd2f997dd7b64c40b45/skechers_navy_blue_go_run_pulse_-_specter_running_shoes.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210427/NMFH/60882bd2f997dd7b64c40b45/skechers_navy_blue_go_run_pulse_-_specter_running_shoes.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210427/NMFH/60882bd2f997dd7b64c40b45/skechers_navy_blue_go_run_pulse_-_specter_running_shoes.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210427/NMFH/60882bd2f997dd7b64c40b45/skechers_navy_blue_go_run_pulse_-_specter_running_shoes.jpg"
  },
  {
    company_name: "ASICS",
    description: "Gel Contend 4B+ Running Shoes",
    price: "3499",
    orginal_price: "",
    discount: "",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20200905/95Ad/5f528b287cdb8c7662941ad8/asics_black_gel_contend_4b+_running_shoes.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20200905/95Ad/5f528b287cdb8c7662941ad8/asics_black_gel_contend_4b+_running_shoes.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20200905/95Ad/5f528b287cdb8c7662941ad8/asics_black_gel_contend_4b+_running_shoes.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20200905/95Ad/5f528b287cdb8c7662941ad8/asics_black_gel_contend_4b+_running_shoes.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20200905/95Ad/5f528b287cdb8c7662941ad8/asics_black_gel_contend_4b+_running_shoes.jpg"
  },
  {
    company_name: "Mactree",
    description: "Formal Lace-Up Shoes with Round Toe",
    price: "682",
    orginal_price: "Rs. 2,274",
    discount: "(70% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/erkx/606879757cdb8c1f14766ada/mactree_brown_formal_lace-up_shoes_with_round_toe.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/erkx/606879757cdb8c1f14766ada/mactree_brown_formal_lace-up_shoes_with_round_toe.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/erkx/606879757cdb8c1f14766ada/mactree_brown_formal_lace-up_shoes_with_round_toe.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/erkx/606879757cdb8c1f14766ada/mactree_brown_formal_lace-up_shoes_with_round_toe.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/erkx/606879757cdb8c1f14766ada/mactree_brown_formal_lace-up_shoes_with_round_toe.jpg"
  },
  {
    company_name: "STELVIO",
    description: "Low-Top Moccasins with Stacked Heels",
    price: "860",
    orginal_price: "Rs. 1,999",
    discount: "(57% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/h39/hed/11168892125214/stelvio_dark_brown_low-top_moccasins_with_stacked_heels.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/h39/hed/11168892125214/stelvio_dark_brown_low-top_moccasins_with_stacked_heels.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/h39/hed/11168892125214/stelvio_dark_brown_low-top_moccasins_with_stacked_heels.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/h39/hed/11168892125214/stelvio_dark_brown_low-top_moccasins_with_stacked_heels.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/h39/hed/11168892125214/stelvio_dark_brown_low-top_moccasins_with_stacked_heels.jpg"
  },
  {
    company_name: "Campus",
    description: "Ignite Textured Low-Top Lace-Up Sports Shoes",
    price: "674",
    orginal_price: "Rs. 899",
    discount: "(25% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/h03/hcc/13816951930910/campus_grey_ignite_textured_low-top_lace-up_sports_shoes.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/h03/hcc/13816951930910/campus_grey_ignite_textured_low-top_lace-up_sports_shoes.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/h03/hcc/13816951930910/campus_grey_ignite_textured_low-top_lace-up_sports_shoes.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/h03/hcc/13816951930910/campus_grey_ignite_textured_low-top_lace-up_sports_shoes.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/h03/hcc/13816951930910/campus_grey_ignite_textured_low-top_lace-up_sports_shoes.jpg"
  },
  {
    company_name: "Campus",
    description: "Slip-On Sports Shoes",
    price: "1899",
    orginal_price: "Rs. 1,999",
    discount: "(5% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20201224/BZXl/5fe4c958aeb2694fd3fdee2a/campus_navy_slip-on_sports_shoes_.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20201224/BZXl/5fe4c958aeb2694fd3fdee2a/campus_navy_slip-on_sports_shoes_.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20201224/BZXl/5fe4c958aeb2694fd3fdee2a/campus_navy_slip-on_sports_shoes_.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20201224/BZXl/5fe4c958aeb2694fd3fdee2a/campus_navy_slip-on_sports_shoes_.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20201224/BZXl/5fe4c958aeb2694fd3fdee2a/campus_navy_slip-on_sports_shoes_.jpg"
  },
  {
    company_name: "Reebok",
    description: "Brand Print Fulgere Sliders",
    price: "1999",
    orginal_price: "",
    discount: "",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210423/kIfN/6082e8a6aeb269a9e39c89f1/reebok_navy_blue_brand_print_fulgere_sliders.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210423/kIfN/6082e8a6aeb269a9e39c89f1/reebok_navy_blue_brand_print_fulgere_sliders.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210423/kIfN/6082e8a6aeb269a9e39c89f1/reebok_navy_blue_brand_print_fulgere_sliders.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210423/kIfN/6082e8a6aeb269a9e39c89f1/reebok_navy_blue_brand_print_fulgere_sliders.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210423/kIfN/6082e8a6aeb269a9e39c89f1/reebok_navy_blue_brand_print_fulgere_sliders.jpg"
  },
  {
    company_name: "NIKE",
    description: "Canyon Sports Sandals with Velcro Fastening",
    price: "4495",
    orginal_price: "",
    discount: "",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210507/dKiN/60943e12f997ddb3129439ff/nike_black_canyon_sports_sandals_with_velcro_fastening.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210507/dKiN/60943e12f997ddb3129439ff/nike_black_canyon_sports_sandals_with_velcro_fastening.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210507/dKiN/60943e12f997ddb3129439ff/nike_black_canyon_sports_sandals_with_velcro_fastening.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210507/dKiN/60943e12f997ddb3129439ff/nike_black_canyon_sports_sandals_with_velcro_fastening.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210507/dKiN/60943e12f997ddb3129439ff/nike_black_canyon_sports_sandals_with_velcro_fastening.jpg"
  },
  {
    company_name: "Leatherkraft",
    description: "Self-Design Flat Heel Casual Shoes",
    price: "540",
    orginal_price: "Rs. 1,199",
    discount: "(55% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210616/D39a/60c9aa4af997ddb312cc61a7/leatherkraft_olive_self-design_flat_heel_casual_shoes_.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210616/D39a/60c9aa4af997ddb312cc61a7/leatherkraft_olive_self-design_flat_heel_casual_shoes_.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210616/D39a/60c9aa4af997ddb312cc61a7/leatherkraft_olive_self-design_flat_heel_casual_shoes_.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210616/D39a/60c9aa4af997ddb312cc61a7/leatherkraft_olive_self-design_flat_heel_casual_shoes_.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210616/D39a/60c9aa4af997ddb312cc61a7/leatherkraft_olive_self-design_flat_heel_casual_shoes_.jpg"
  },
  {
    company_name: "LEVIS",
    description: "Textured Lace-Up Sneakers",
    price: "1679",
    orginal_price: "Rs. 2,799",
    discount: "(40% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/h13/h2b/13798124945438/levis_white_textured_lace-up_sneakers.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/h13/h2b/13798124945438/levis_white_textured_lace-up_sneakers.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/h13/h2b/13798124945438/levis_white_textured_lace-up_sneakers.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/h13/h2b/13798124945438/levis_white_textured_lace-up_sneakers.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/h13/h2b/13798124945438/levis_white_textured_lace-up_sneakers.jpg"
  },
  {
    company_name: "NIKE",
    description: "Air Zoom Pegasus 38 Running Shoes",
    price: "9995",
    orginal_price: "",
    discount: "",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210507/5VNJ/60943f06f997ddb312943e1d/nike_black_air_zoom_pegasus_38_running_shoes.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210507/5VNJ/60943f06f997ddb312943e1d/nike_black_air_zoom_pegasus_38_running_shoes.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210507/5VNJ/60943f06f997ddb312943e1d/nike_black_air_zoom_pegasus_38_running_shoes.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210507/5VNJ/60943f06f997ddb312943e1d/nike_black_air_zoom_pegasus_38_running_shoes.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210507/5VNJ/60943f06f997ddb312943e1d/nike_black_air_zoom_pegasus_38_running_shoes.jpg"
  },
  {
    company_name: "CROCS",
    description: "Bayaband Thong-Style Flip-Flops",
    price: "2546",
    orginal_price: "Rs. 2,995",
    discount: "(15% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210206/YbWZ/601d94237cdb8c1f14380967/crocs_charcoal_grey_bayaband_thong-style_flip-flops.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210206/YbWZ/601d94237cdb8c1f14380967/crocs_charcoal_grey_bayaband_thong-style_flip-flops.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210206/YbWZ/601d94237cdb8c1f14380967/crocs_charcoal_grey_bayaband_thong-style_flip-flops.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210206/YbWZ/601d94237cdb8c1f14380967/crocs_charcoal_grey_bayaband_thong-style_flip-flops.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210206/YbWZ/601d94237cdb8c1f14380967/crocs_charcoal_grey_bayaband_thong-style_flip-flops.jpg"
  },
  {
    company_name: "Mactree",
    description: "Slip-On Sandals with Textured Detail",
    price: "682",
    orginal_price: "Rs. 2,274",
    discount: "(70% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/srLu/60689607f997dd7b64617c96/mactree_brown_slip-on_sandals_with_textured_detail.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/srLu/60689607f997dd7b64617c96/mactree_brown_slip-on_sandals_with_textured_detail.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/srLu/60689607f997dd7b64617c96/mactree_brown_slip-on_sandals_with_textured_detail.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/srLu/60689607f997dd7b64617c96/mactree_brown_slip-on_sandals_with_textured_detail.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/srLu/60689607f997dd7b64617c96/mactree_brown_slip-on_sandals_with_textured_detail.jpg"
  },
  {
    company_name: "RED TAPE",
    description: "Flip-Flops with Contrast Panels",
    price: "750",
    orginal_price: "Rs. 1,499",
    discount: "(50% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20200725/C1um/5f1b2ebef997ddfa532260c7/red_tape_white_flip-flops_with_contrast_panels.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20200725/C1um/5f1b2ebef997ddfa532260c7/red_tape_white_flip-flops_with_contrast_panels.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20200725/C1um/5f1b2ebef997ddfa532260c7/red_tape_white_flip-flops_with_contrast_panels.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20200725/C1um/5f1b2ebef997ddfa532260c7/red_tape_white_flip-flops_with_contrast_panels.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20200725/C1um/5f1b2ebef997ddfa532260c7/red_tape_white_flip-flops_with_contrast_panels.jpg"
  },
  {
    company_name: "LEVIS",
    description: "Textured Lace-Up Sneakers",
    price: "1400",
    orginal_price: "Rs. 2,799",
    discount: "(50% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/h28/h4b/13801972367390/levis_tan_brown_textured_lace-up_sneakers.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/h28/h4b/13801972367390/levis_tan_brown_textured_lace-up_sneakers.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/h28/h4b/13801972367390/levis_tan_brown_textured_lace-up_sneakers.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/h28/h4b/13801972367390/levis_tan_brown_textured_lace-up_sneakers.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/h28/h4b/13801972367390/levis_tan_brown_textured_lace-up_sneakers.jpg"
  },
  {
    company_name: "GO21",
    description: "Mid-Top Lace-Up Casual Shoes",
    price: "1000",
    orginal_price: "Rs. 2,499",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/h4f/h72/13271410147358/go21_white_mid-top_lace-up_casual_shoes.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/h4f/h72/13271410147358/go21_white_mid-top_lace-up_casual_shoes.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/h4f/h72/13271410147358/go21_white_mid-top_lace-up_casual_shoes.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/h4f/h72/13271410147358/go21_white_mid-top_lace-up_casual_shoes.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/h4f/h72/13271410147358/go21_white_mid-top_lace-up_casual_shoes.jpg"
  }
]
const dress = [
  {
    company_name: "GUNIAA",
    description: "Abstract Print Fit and Flare Dress",
    price: "1320",
    orginal_price: "Rs. 2,999",
    discount: "(56% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20201024/E4kZ/5f933d7faeb269d563ee93c2/guniaa_green_abstract_print_fit_and_flare_dress.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20201024/E4kZ/5f933d7faeb269d563ee93c2/guniaa_green_abstract_print_fit_and_flare_dress.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20201024/E4kZ/5f933d7faeb269d563ee93c2/guniaa_green_abstract_print_fit_and_flare_dress.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20201024/E4kZ/5f933d7faeb269d563ee93c2/guniaa_green_abstract_print_fit_and_flare_dress.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20201024/E4kZ/5f933d7faeb269d563ee93c2/guniaa_green_abstract_print_fit_and_flare_dress.jpg"
  },
  {
    company_name: "Rare",
    description: "Floral Print Fit & Flare Dress",
    price: "735",
    orginal_price: "Rs. 2,099",
    discount: "(65% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/bsM4/606867797cdb8c1f147522ca/rare_navy_blue_floral_print_fit_&_flare_dress.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/bsM4/606867797cdb8c1f147522ca/rare_navy_blue_floral_print_fit_&_flare_dress.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/bsM4/606867797cdb8c1f147522ca/rare_navy_blue_floral_print_fit_&_flare_dress.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/bsM4/606867797cdb8c1f147522ca/rare_navy_blue_floral_print_fit_&_flare_dress.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/bsM4/606867797cdb8c1f147522ca/rare_navy_blue_floral_print_fit_&_flare_dress.jpg"
  },
  {
    company_name: "Teamspirit",
    description: "Printed Hooded Dress with Side Pockets",
    price: "490",
    orginal_price: "Rs. 999",
    discount: "(51% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210112/gwZl/5ffca9e77cdb8c1f1425e831/teamspirit_pink_printed_hooded_dress_with_side_pockets.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210112/gwZl/5ffca9e77cdb8c1f1425e831/teamspirit_pink_printed_hooded_dress_with_side_pockets.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210112/gwZl/5ffca9e77cdb8c1f1425e831/teamspirit_pink_printed_hooded_dress_with_side_pockets.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210112/gwZl/5ffca9e77cdb8c1f1425e831/teamspirit_pink_printed_hooded_dress_with_side_pockets.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210112/gwZl/5ffca9e77cdb8c1f1425e831/teamspirit_pink_printed_hooded_dress_with_side_pockets.jpg"
  },
  {
    company_name: "RIO",
    description: "Striped Fit & Flare Dress with Lettuce Hems",
    price: "479",
    orginal_price: "Rs. 799",
    discount: "(40% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210316/ewNu/604fbcaaf997dd5c40118bc6/rio_pink_striped_fit_&_flare_dress_with_lettuce_hems.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210316/ewNu/604fbcaaf997dd5c40118bc6/rio_pink_striped_fit_&_flare_dress_with_lettuce_hems.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210316/ewNu/604fbcaaf997dd5c40118bc6/rio_pink_striped_fit_&_flare_dress_with_lettuce_hems.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210316/ewNu/604fbcaaf997dd5c40118bc6/rio_pink_striped_fit_&_flare_dress_with_lettuce_hems.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210316/ewNu/604fbcaaf997dd5c40118bc6/rio_pink_striped_fit_&_flare_dress_with_lettuce_hems.jpg"
  },
  {
    company_name: "Kassually",
    description: "Waist Cut-Out Floral Print A-line Dress",
    price: "1080",
    orginal_price: "Rs. 2,399",
    discount: "(55% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/One2/6068a75eaeb269a9e33640d9/kassually_black_waist_cut-out_floral_print_a-line_dress.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/One2/6068a75eaeb269a9e33640d9/kassually_black_waist_cut-out_floral_print_a-line_dress.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/One2/6068a75eaeb269a9e33640d9/kassually_black_waist_cut-out_floral_print_a-line_dress.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/One2/6068a75eaeb269a9e33640d9/kassually_black_waist_cut-out_floral_print_a-line_dress.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/One2/6068a75eaeb269a9e33640d9/kassually_black_waist_cut-out_floral_print_a-line_dress.jpg"
  },
  {
    company_name: "Rare",
    description: "Panelled A-line Dress with Waist Tie-up",
    price: "900",
    orginal_price: "Rs. 1,799",
    discount: "(50% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210406/U58D/606c557ef997dd7b64a52725/rare_black_panelled_a-line_dress_with_waist_tie-up.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210406/U58D/606c557ef997dd7b64a52725/rare_black_panelled_a-line_dress_with_waist_tie-up.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210406/U58D/606c557ef997dd7b64a52725/rare_black_panelled_a-line_dress_with_waist_tie-up.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210406/U58D/606c557ef997dd7b64a52725/rare_black_panelled_a-line_dress_with_waist_tie-up.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210406/U58D/606c557ef997dd7b64a52725/rare_black_panelled_a-line_dress_with_waist_tie-up.jpg"
  },
  {
    company_name: "Saadhvi",
    description: "Geometric Print Empire Dress",
    price: "399",
    orginal_price: "Rs. 2,099",
    discount: "(81% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210405/Oz4m/606b728df997dd7b64950f11/saadhvi_blue_geometric_print_empire_dress.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210405/Oz4m/606b728df997dd7b64950f11/saadhvi_blue_geometric_print_empire_dress.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210405/Oz4m/606b728df997dd7b64950f11/saadhvi_blue_geometric_print_empire_dress.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210405/Oz4m/606b728df997dd7b64950f11/saadhvi_blue_geometric_print_empire_dress.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210405/Oz4m/606b728df997dd7b64950f11/saadhvi_blue_geometric_print_empire_dress.jpg"
  },
  {
    company_name: "RIO",
    description: "Striped Sheath Dress with Lettuce Hems",
    price: "479",
    orginal_price: "Rs. 799",
    discount: "(40% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210426/tzIF/6086d740f997dd7b64c2d62d/rio_yellow_striped_sheath_dress_with_lettuce_hems.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210426/tzIF/6086d740f997dd7b64c2d62d/rio_yellow_striped_sheath_dress_with_lettuce_hems.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210426/tzIF/6086d740f997dd7b64c2d62d/rio_yellow_striped_sheath_dress_with_lettuce_hems.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210426/tzIF/6086d740f997dd7b64c2d62d/rio_yellow_striped_sheath_dress_with_lettuce_hems.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210426/tzIF/6086d740f997dd7b64c2d62d/rio_yellow_striped_sheath_dress_with_lettuce_hems.jpg"
  },
  {
    company_name: "RIO",
    description: "Striped Dungaree Dress",
    price: "490",
    orginal_price: "Rs. 999",
    discount: "(51% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20201214/gMyQ/5fd75b09f997dd8c83c91d69/rio_black_striped_dungaree_dress.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20201214/gMyQ/5fd75b09f997dd8c83c91d69/rio_black_striped_dungaree_dress.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20201214/gMyQ/5fd75b09f997dd8c83c91d69/rio_black_striped_dungaree_dress.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20201214/gMyQ/5fd75b09f997dd8c83c91d69/rio_black_striped_dungaree_dress.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20201214/gMyQ/5fd75b09f997dd8c83c91d69/rio_black_striped_dungaree_dress.jpg"
  },
  {
    company_name: "FUSION",
    description: "Printed Sleeveless Fit & Flare Dress",
    price: "649",
    orginal_price: "Rs. 999",
    discount: "(35% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210225/dqfv/6037487af997dd5c40fb4e95/fusion_pink_printed_sleeveless_fit_&_flare_dress.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210225/dqfv/6037487af997dd5c40fb4e95/fusion_pink_printed_sleeveless_fit_&_flare_dress.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210225/dqfv/6037487af997dd5c40fb4e95/fusion_pink_printed_sleeveless_fit_&_flare_dress.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210225/dqfv/6037487af997dd5c40fb4e95/fusion_pink_printed_sleeveless_fit_&_flare_dress.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210225/dqfv/6037487af997dd5c40fb4e95/fusion_pink_printed_sleeveless_fit_&_flare_dress.jpg"
  },
  {
    company_name: "NEGEN",
    description: "Floral Print Fit and Flare Dress",
    price: "480",
    orginal_price: "Rs. 999",
    discount: "(52% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/mRxi/6068c40ef997dd7b6465411b/negen_black_floral_print_fit_and_flare_dress.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/mRxi/6068c40ef997dd7b6465411b/negen_black_floral_print_fit_and_flare_dress.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/mRxi/6068c40ef997dd7b6465411b/negen_black_floral_print_fit_and_flare_dress.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/mRxi/6068c40ef997dd7b6465411b/negen_black_floral_print_fit_and_flare_dress.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/mRxi/6068c40ef997dd7b6465411b/negen_black_floral_print_fit_and_flare_dress.jpg"
  },
  {
    company_name: "SUPERDRY",
    description: "Vintage Logo Shift Dress",
    price: "2079",
    orginal_price: "Rs. 3,999",
    discount: "(48% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20201113/hV1S/5fae86c2f997dd8c839ada4b/superdry_navy_blue_vintage_logo_shift_dress.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20201113/hV1S/5fae86c2f997dd8c839ada4b/superdry_navy_blue_vintage_logo_shift_dress.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20201113/hV1S/5fae86c2f997dd8c839ada4b/superdry_navy_blue_vintage_logo_shift_dress.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20201113/hV1S/5fae86c2f997dd8c839ada4b/superdry_navy_blue_vintage_logo_shift_dress.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20201113/hV1S/5fae86c2f997dd8c839ada4b/superdry_navy_blue_vintage_logo_shift_dress.jpg"
  },
  {
    company_name: "Kassually",
    description: "Off-Shoulder Fit & Flare Dress",
    price: "765",
    orginal_price: "Rs. 1,699",
    discount: "(55% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210404/aTjU/606b0ac5f997dd7b648e85c1/kassually_pink_off-shoulder_fit_&_flare_dress.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210404/aTjU/606b0ac5f997dd7b648e85c1/kassually_pink_off-shoulder_fit_&_flare_dress.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210404/aTjU/606b0ac5f997dd7b648e85c1/kassually_pink_off-shoulder_fit_&_flare_dress.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210404/aTjU/606b0ac5f997dd7b648e85c1/kassually_pink_off-shoulder_fit_&_flare_dress.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210404/aTjU/606b0ac5f997dd7b648e85c1/kassually_pink_off-shoulder_fit_&_flare_dress.jpg"
  },
  {
    company_name: "Karmic vision",
    description: "Off Shoulder Fit & Flare Dress",
    price: "850",
    orginal_price: "Rs. 2,199",
    discount: "(61% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210412/mGEw/60744bceaeb269a9e38c25bf/karmic_vision_purple_off_shoulder_fit_&_flare_dress.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210412/mGEw/60744bceaeb269a9e38c25bf/karmic_vision_purple_off_shoulder_fit_&_flare_dress.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210412/mGEw/60744bceaeb269a9e38c25bf/karmic_vision_purple_off_shoulder_fit_&_flare_dress.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210412/mGEw/60744bceaeb269a9e38c25bf/karmic_vision_purple_off_shoulder_fit_&_flare_dress.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210412/mGEw/60744bceaeb269a9e38c25bf/karmic_vision_purple_off_shoulder_fit_&_flare_dress.jpg"
  },
  {
    company_name: "MALHAAR",
    description: "Floral Print Dress with Button Accent",
    price: "1776",
    orginal_price: "Rs. 4,799",
    discount: "(63% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210419/VSWw/607d13e2aeb269a9e393c696/malhaar_peach_floral_print_dress_with_button_accent.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210419/VSWw/607d13e2aeb269a9e393c696/malhaar_peach_floral_print_dress_with_button_accent.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210419/VSWw/607d13e2aeb269a9e393c696/malhaar_peach_floral_print_dress_with_button_accent.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210419/VSWw/607d13e2aeb269a9e393c696/malhaar_peach_floral_print_dress_with_button_accent.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210419/VSWw/607d13e2aeb269a9e393c696/malhaar_peach_floral_print_dress_with_button_accent.jpg"
  },
  {
    company_name: "RIO",
    description: "Floral Print A-line Dress",
    price: "489",
    orginal_price: "Rs. 699",
    discount: "(30% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210316/5ZFo/604fac367cdb8c1f146329ef/rio_pink_floral_print_a-line_dress.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210316/5ZFo/604fac367cdb8c1f146329ef/rio_pink_floral_print_a-line_dress.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210316/5ZFo/604fac367cdb8c1f146329ef/rio_pink_floral_print_a-line_dress.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210316/5ZFo/604fac367cdb8c1f146329ef/rio_pink_floral_print_a-line_dress.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210316/5ZFo/604fac367cdb8c1f146329ef/rio_pink_floral_print_a-line_dress.jpg"
  },
  {
    company_name: "RIO",
    description: "Striped Dungaree Dress with Slip Pockets",
    price: "490",
    orginal_price: "Rs. 999",
    discount: "(51% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20201230/8LPe/5fec963daeb2694fd304f943/rio_blue_striped_dungaree_dress_with_slip_pockets.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20201230/8LPe/5fec963daeb2694fd304f943/rio_blue_striped_dungaree_dress_with_slip_pockets.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20201230/8LPe/5fec963daeb2694fd304f943/rio_blue_striped_dungaree_dress_with_slip_pockets.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20201230/8LPe/5fec963daeb2694fd304f943/rio_blue_striped_dungaree_dress_with_slip_pockets.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20201230/8LPe/5fec963daeb2694fd304f943/rio_blue_striped_dungaree_dress_with_slip_pockets.jpg"
  },
  {
    company_name: "Quiero",
    description: "Floral Print Gown Dress with Back Slit",
    price: "893",
    orginal_price: "Rs. 1,786",
    discount: "(50% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/6Rkq/606882bfaeb269a9e3338e4a/quiero_navy_blue_floral_print_gown_dress_with_back_slit.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/6Rkq/606882bfaeb269a9e3338e4a/quiero_navy_blue_floral_print_gown_dress_with_back_slit.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/6Rkq/606882bfaeb269a9e3338e4a/quiero_navy_blue_floral_print_gown_dress_with_back_slit.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/6Rkq/606882bfaeb269a9e3338e4a/quiero_navy_blue_floral_print_gown_dress_with_back_slit.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/6Rkq/606882bfaeb269a9e3338e4a/quiero_navy_blue_floral_print_gown_dress_with_back_slit.jpg"
  },
  {
    company_name: "AKS",
    description: "Maxi Dress with Applique Detail",
    price: "1374",
    orginal_price: "Rs. 2,499",
    discount: "(45% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/p1Hs/60687781f997dd7b645ef393/aks_navy_maxi_dress_with_applique_detail.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/p1Hs/60687781f997dd7b645ef393/aks_navy_maxi_dress_with_applique_detail.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/p1Hs/60687781f997dd7b645ef393/aks_navy_maxi_dress_with_applique_detail.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/p1Hs/60687781f997dd7b645ef393/aks_navy_maxi_dress_with_applique_detail.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/p1Hs/60687781f997dd7b645ef393/aks_navy_maxi_dress_with_applique_detail.jpg"
  },
  {
    company_name: "Pepe Jeans",
    description: "Checked Full Sleeve Dress",
    price: "1400",
    orginal_price: "Rs. 2,799",
    discount: "(50% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20200805/UuOE/5f29c1f97cdb8ca2cf8d0ac5/pepe_jeans_green_checked_full_sleeve_dress.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20200805/UuOE/5f29c1f97cdb8ca2cf8d0ac5/pepe_jeans_green_checked_full_sleeve_dress.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20200805/UuOE/5f29c1f97cdb8ca2cf8d0ac5/pepe_jeans_green_checked_full_sleeve_dress.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20200805/UuOE/5f29c1f97cdb8ca2cf8d0ac5/pepe_jeans_green_checked_full_sleeve_dress.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20200805/UuOE/5f29c1f97cdb8ca2cf8d0ac5/pepe_jeans_green_checked_full_sleeve_dress.jpg"
  },
  {
    company_name: "RIO",
    description: "Cotton Pinafore Dress",
    price: "441",
    orginal_price: "Rs. 899",
    discount: "(51% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20201221/HUkB/5fe0430df997dd8c83d9cec1/rio_black_cotton_pinafore_dress.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20201221/HUkB/5fe0430df997dd8c83d9cec1/rio_black_cotton_pinafore_dress.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20201221/HUkB/5fe0430df997dd8c83d9cec1/rio_black_cotton_pinafore_dress.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20201221/HUkB/5fe0430df997dd8c83d9cec1/rio_black_cotton_pinafore_dress.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20201221/HUkB/5fe0430df997dd8c83d9cec1/rio_black_cotton_pinafore_dress.jpg"
  },
  {
    company_name: "Kiana House Of Fashion",
    description: "Floral Print A-line Dress with Embellished",
    price: "987",
    orginal_price: "Rs. 2,100",
    discount: "(53% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210611/yCfV/60c35b07aeb269a9e3e4c43a/kiana_house_of_fashion_blue_floral_print_a-line_dress_with_embellished.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210611/yCfV/60c35b07aeb269a9e3e4c43a/kiana_house_of_fashion_blue_floral_print_a-line_dress_with_embellished.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210611/yCfV/60c35b07aeb269a9e3e4c43a/kiana_house_of_fashion_blue_floral_print_a-line_dress_with_embellished.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210611/yCfV/60c35b07aeb269a9e3e4c43a/kiana_house_of_fashion_blue_floral_print_a-line_dress_with_embellished.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210611/yCfV/60c35b07aeb269a9e3e4c43a/kiana_house_of_fashion_blue_floral_print_a-line_dress_with_embellished.jpg"
  },
  {
    company_name: "Project Eve",
    description: "Embellished A-line Midi Dress",
    price: "3500",
    orginal_price: "Rs. 6,999",
    discount: "(50% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210309/hbrD/60479b84aeb26969817e8a3b/project_eve_pink_embellished_a-line_midi_dress.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210309/hbrD/60479b84aeb26969817e8a3b/project_eve_pink_embellished_a-line_midi_dress.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210309/hbrD/60479b84aeb26969817e8a3b/project_eve_pink_embellished_a-line_midi_dress.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210309/hbrD/60479b84aeb26969817e8a3b/project_eve_pink_embellished_a-line_midi_dress.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210309/hbrD/60479b84aeb26969817e8a3b/project_eve_pink_embellished_a-line_midi_dress.jpg"
  },
  {
    company_name: "TOMMY HILFIGER",
    description: "Shirt Dress with Tie-Up",
    price: "2519",
    orginal_price: "Rs. 3,599",
    discount: "(30% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210420/ZVqv/607efaa5aeb269a9e3976e7d/tommy_hilfiger_white_shirt_dress_with_tie-up.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210420/ZVqv/607efaa5aeb269a9e3976e7d/tommy_hilfiger_white_shirt_dress_with_tie-up.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210420/ZVqv/607efaa5aeb269a9e3976e7d/tommy_hilfiger_white_shirt_dress_with_tie-up.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210420/ZVqv/607efaa5aeb269a9e3976e7d/tommy_hilfiger_white_shirt_dress_with_tie-up.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210420/ZVqv/607efaa5aeb269a9e3976e7d/tommy_hilfiger_white_shirt_dress_with_tie-up.jpg"
  },
  {
    company_name: "SAJKE",
    description: "Bell Sleeves Lace Empire Dress",
    price: "928",
    orginal_price: "Rs. 3,199",
    discount: "(71% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210408/SHAu/606ec6e2aeb269a9e3875db7/sajke_pink_bell_sleeves_lace_empire_dress.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210408/SHAu/606ec6e2aeb269a9e3875db7/sajke_pink_bell_sleeves_lace_empire_dress.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210408/SHAu/606ec6e2aeb269a9e3875db7/sajke_pink_bell_sleeves_lace_empire_dress.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210408/SHAu/606ec6e2aeb269a9e3875db7/sajke_pink_bell_sleeves_lace_empire_dress.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210408/SHAu/606ec6e2aeb269a9e3875db7/sajke_pink_bell_sleeves_lace_empire_dress.jpg"
  },
  {
    company_name: "Alsace Lorraine Paris",
    description: "Cuff Sleeves Dress with Waist Belt",
    price: "875",
    orginal_price: "Rs. 2,499",
    discount: "(65% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210413/4ffI/6074bec0aeb269a9e38e6196/alsace_lorraine_paris_copper_cuff_sleeves_dress_with_waist_belt.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210413/4ffI/6074bec0aeb269a9e38e6196/alsace_lorraine_paris_copper_cuff_sleeves_dress_with_waist_belt.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210413/4ffI/6074bec0aeb269a9e38e6196/alsace_lorraine_paris_copper_cuff_sleeves_dress_with_waist_belt.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210413/4ffI/6074bec0aeb269a9e38e6196/alsace_lorraine_paris_copper_cuff_sleeves_dress_with_waist_belt.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210413/4ffI/6074bec0aeb269a9e38e6196/alsace_lorraine_paris_copper_cuff_sleeves_dress_with_waist_belt.jpg"
  },
  {
    company_name: "RIO",
    description: "Panelled Strappy Bodycon Dress",
    price: "559",
    orginal_price: "Rs. 799",
    discount: "(30% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210325/l17z/605ca8f67cdb8c1f146ca88b/rio_black_panelled_strappy_bodycon_dress.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210325/l17z/605ca8f67cdb8c1f146ca88b/rio_black_panelled_strappy_bodycon_dress.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210325/l17z/605ca8f67cdb8c1f146ca88b/rio_black_panelled_strappy_bodycon_dress.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210325/l17z/605ca8f67cdb8c1f146ca88b/rio_black_panelled_strappy_bodycon_dress.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210325/l17z/605ca8f67cdb8c1f146ca88b/rio_black_panelled_strappy_bodycon_dress.jpg"
  },
  {
    company_name: "Kazo",
    description: "Solid Bodycon Dress",
    price: "1645",
    orginal_price: "Rs. 2,990",
    discount: "(45% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/o00Q/6068cf3f7cdb8c1f147c5174/kazo_black_solid_bodycon_dress.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/o00Q/6068cf3f7cdb8c1f147c5174/kazo_black_solid_bodycon_dress.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/o00Q/6068cf3f7cdb8c1f147c5174/kazo_black_solid_bodycon_dress.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/o00Q/6068cf3f7cdb8c1f147c5174/kazo_black_solid_bodycon_dress.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/o00Q/6068cf3f7cdb8c1f147c5174/kazo_black_solid_bodycon_dress.jpg"
  },
  {
    company_name: "AKS",
    description: "Printed Gown Dress with Inverted Pleats",
    price: "765",
    orginal_price: "Rs. 1,699",
    discount: "(55% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/YxFJ/60687d1a7cdb8c1f1476ac95/aks_navy_blue_printed_gown_dress_with_inverted_pleats.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/YxFJ/60687d1a7cdb8c1f1476ac95/aks_navy_blue_printed_gown_dress_with_inverted_pleats.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/YxFJ/60687d1a7cdb8c1f1476ac95/aks_navy_blue_printed_gown_dress_with_inverted_pleats.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/YxFJ/60687d1a7cdb8c1f1476ac95/aks_navy_blue_printed_gown_dress_with_inverted_pleats.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/YxFJ/60687d1a7cdb8c1f1476ac95/aks_navy_blue_printed_gown_dress_with_inverted_pleats.jpg"
  },
  {
    company_name: "Sera",
    description: "Floral Fit and Flare Dress",
    price: "739",
    orginal_price: "Rs. 1,394",
    discount: "(47% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/1bsy/6068f4f87cdb8c1f147f1f4c/sera_navy_blue_floral_fit_and_flare_dress.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/1bsy/6068f4f87cdb8c1f147f1f4c/sera_navy_blue_floral_fit_and_flare_dress.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/1bsy/6068f4f87cdb8c1f147f1f4c/sera_navy_blue_floral_fit_and_flare_dress.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/1bsy/6068f4f87cdb8c1f147f1f4c/sera_navy_blue_floral_fit_and_flare_dress.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/1bsy/6068f4f87cdb8c1f147f1f4c/sera_navy_blue_floral_fit_and_flare_dress.jpg"
  },
  {
    company_name: "Teamspirit",
    description: "Striped Hooded Dress with Insert Pockets",
    price: "490",
    orginal_price: "Rs. 999",
    discount: "(51% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210112/244n/5ffcb00f7cdb8c1f1425f9f7/teamspirit_navy_blue_striped_hooded_dress_with_insert_pockets.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210112/244n/5ffcb00f7cdb8c1f1425f9f7/teamspirit_navy_blue_striped_hooded_dress_with_insert_pockets.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210112/244n/5ffcb00f7cdb8c1f1425f9f7/teamspirit_navy_blue_striped_hooded_dress_with_insert_pockets.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210112/244n/5ffcb00f7cdb8c1f1425f9f7/teamspirit_navy_blue_striped_hooded_dress_with_insert_pockets.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210112/244n/5ffcb00f7cdb8c1f1425f9f7/teamspirit_navy_blue_striped_hooded_dress_with_insert_pockets.jpg"
  },
  {
    company_name: "Kassually",
    description: "Floral Print Fit & Flare Dress",
    price: "1242",
    orginal_price: "Rs. 2,699",
    discount: "(54% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/KUQq/6068b0db7cdb8c1f147a47ff/kassually_aqua_blue_floral_print_fit_&_flare_dress.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/KUQq/6068b0db7cdb8c1f147a47ff/kassually_aqua_blue_floral_print_fit_&_flare_dress.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/KUQq/6068b0db7cdb8c1f147a47ff/kassually_aqua_blue_floral_print_fit_&_flare_dress.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/KUQq/6068b0db7cdb8c1f147a47ff/kassually_aqua_blue_floral_print_fit_&_flare_dress.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/KUQq/6068b0db7cdb8c1f147a47ff/kassually_aqua_blue_floral_print_fit_&_flare_dress.jpg"
  },
  {
    company_name: "Swishchick",
    description: "Fit & Flare Dress with Short Sleeves",
    price: "1240",
    orginal_price: "Rs. 3,099",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210404/HXnY/606acca87cdb8c1f149def23/swishchick_green_fit_&_flare_dress_with_short_sleeves.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210404/HXnY/606acca87cdb8c1f149def23/swishchick_green_fit_&_flare_dress_with_short_sleeves.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210404/HXnY/606acca87cdb8c1f149def23/swishchick_green_fit_&_flare_dress_with_short_sleeves.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210404/HXnY/606acca87cdb8c1f149def23/swishchick_green_fit_&_flare_dress_with_short_sleeves.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210404/HXnY/606acca87cdb8c1f149def23/swishchick_green_fit_&_flare_dress_with_short_sleeves.jpg"
  },
  {
    company_name: "Sera",
    description: "Animal Print A-line Dress",
    price: "866",
    orginal_price: "Rs. 1,698",
    discount: "(49% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210404/C8DN/606a97fe7cdb8c1f149b1a46/sera_brown_animal_print_a-line_dress.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210404/C8DN/606a97fe7cdb8c1f149b1a46/sera_brown_animal_print_a-line_dress.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210404/C8DN/606a97fe7cdb8c1f149b1a46/sera_brown_animal_print_a-line_dress.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210404/C8DN/606a97fe7cdb8c1f149b1a46/sera_brown_animal_print_a-line_dress.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210404/C8DN/606a97fe7cdb8c1f149b1a46/sera_brown_animal_print_a-line_dress.jpg"
  },
  {
    company_name: "Mish",
    description: "Striped Asymmetrical Fit & Flare Dress",
    price: "1889",
    orginal_price: "Rs. 2,099",
    discount: "(10% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/NQ9b/60687c1aaeb269a9e3331785/mish_white_striped_asymmetrical_fit_&_flare_dress.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/NQ9b/60687c1aaeb269a9e3331785/mish_white_striped_asymmetrical_fit_&_flare_dress.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/NQ9b/60687c1aaeb269a9e3331785/mish_white_striped_asymmetrical_fit_&_flare_dress.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/NQ9b/60687c1aaeb269a9e3331785/mish_white_striped_asymmetrical_fit_&_flare_dress.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/NQ9b/60687c1aaeb269a9e3331785/mish_white_striped_asymmetrical_fit_&_flare_dress.jpg"
  },
  {
    company_name: "Myshka",
    description: "Floral Print Dress",
    price: "1240",
    orginal_price: "Rs. 3,999",
    discount: "(69% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210403/vUYG/6069345eaeb269a9e33ffbc7/myshka_pink_floral_print_dress.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210403/vUYG/6069345eaeb269a9e33ffbc7/myshka_pink_floral_print_dress.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210403/vUYG/6069345eaeb269a9e33ffbc7/myshka_pink_floral_print_dress.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210403/vUYG/6069345eaeb269a9e33ffbc7/myshka_pink_floral_print_dress.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210403/vUYG/6069345eaeb269a9e33ffbc7/myshka_pink_floral_print_dress.jpg"
  },
  {
    company_name: "MEERANSHI",
    description: "Geometric Print Maxi Dress",
    price: "688",
    orginal_price: "Rs. 1,599",
    discount: "(57% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210320/vGuU/6055b9937cdb8c1f146914ac/meeranshi_green_geometric_print_maxi_dress.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210320/vGuU/6055b9937cdb8c1f146914ac/meeranshi_green_geometric_print_maxi_dress.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210320/vGuU/6055b9937cdb8c1f146914ac/meeranshi_green_geometric_print_maxi_dress.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210320/vGuU/6055b9937cdb8c1f146914ac/meeranshi_green_geometric_print_maxi_dress.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210320/vGuU/6055b9937cdb8c1f146914ac/meeranshi_green_geometric_print_maxi_dress.jpg"
  },
  {
    company_name: "ONLY",
    description: "Round-Neck A-line Dress",
    price: "1400",
    orginal_price: "Rs. 3,499",
    discount: "(60% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/hec/h68/15683351019550/only_navy_round-neck_a-line_dress.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/hec/h68/15683351019550/only_navy_round-neck_a-line_dress.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/hec/h68/15683351019550/only_navy_round-neck_a-line_dress.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/hec/h68/15683351019550/only_navy_round-neck_a-line_dress.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/hec/h68/15683351019550/only_navy_round-neck_a-line_dress.jpg"
  },
  {
    company_name: "Kassually",
    description: "Animal Print Shirt Dress",
    price: "866",
    orginal_price: "Rs. 1,699",
    discount: "(49% off)",
    quantity: 1,
    poster: "https://assets.ajio.com/medias/sys_master/root/20210404/L2Gx/606a7990f997dd7b648595ef/kassually_brown_&_black_animal_print_shirt_dress.jpg",
    poster2: "https://assets.ajio.com/medias/sys_master/root/20210404/L2Gx/606a7990f997dd7b648595ef/kassually_brown_&_black_animal_print_shirt_dress.jpg",
    poster3: "https://assets.ajio.com/medias/sys_master/root/20210404/L2Gx/606a7990f997dd7b648595ef/kassually_brown_&_black_animal_print_shirt_dress.jpg",
    poster4: "https://assets.ajio.com/medias/sys_master/root/20210404/L2Gx/606a7990f997dd7b648595ef/kassually_brown_&_black_animal_print_shirt_dress.jpg",
    poster5: "https://assets.ajio.com/medias/sys_master/root/20210404/L2Gx/606a7990f997dd7b648595ef/kassually_brown_&_black_animal_print_shirt_dress.jpg"
  }
]
function serching(){
  
      let keyword = document.getElementById('search')
      keyword.addEventListener('keyup',function(event){
          if(event.keyCode==13){
              search()
          }
      })
  
      let searchBtn = document.getElementById('searchBtn')
      searchBtn.addEventListener('click',search)
      function search(){
          localStorage.setItem('product_details',null)
          if(keyword.value=='men'||keyword.value=='Men'||keyword.value=='boy'){
              localStorage.setItem('product_details', JSON.stringify(men_items))
              localStorage.setItem('title',"Men's Products")
          }else if(keyword.value=='women'||keyword.value=='Women'||keyword.value=='girl'){
              localStorage.setItem('product_details', JSON.stringify(women_items))
              localStorage.setItem('title',"Women's Products")
          }else if(keyword.value=='saree'||keyword.value=='sarees'){
              localStorage.setItem('product_details',JSON.stringify(saree))
              localStorage.setItem('title',"Sarees")
          }else if(keyword.value=='jeans'||keyword.value=='jean'){
              localStorage.setItem('product_details',JSON.stringify(jeans))
              localStorage.setItem('title',"Jeans")
          }else if(keyword.value=='shirts'||keyword.value=='shirt'){
              localStorage.setItem('product_details',JSON.stringify(shirts))
              localStorage.setItem('title',"Shirts")
          }else if(keyword.value=='kurtis'||keyword.value=='kurti'){
              localStorage.setItem('product_details',JSON.stringify(kurtis))
              localStorage.setItem('title',"Kurtis")
          }else if(keyword.value=='kurta'||keyword.value=='kurtas'){
              localStorage.setItem('product_details',JSON.stringify(kurtas))
              localStorage.setItem('title',"Kurtas")
          }else if(keyword.value=='shoes'||keyword.value=='shoe'||keyword.value=='sandals'||keyword.value=='Shoes'){
              localStorage.setItem('product_details',JSON.stringify(shoes))
              localStorage.setItem('title',"Shoes")
          }else if(keyword.value=='dress'||keyword.value=='dresses'||keyword.value=='gown'||keyword.value=='gowns'||keyword.value=='girl dress'){
              localStorage.setItem('product_details',JSON.stringify(dress))
              localStorage.setItem('title',"Women's dresses")
          }
          window.location.href="search.html"
      }
  }
  serching()
  //------------------Searching features End------------------

  // function for showing product after clicking on any category from the menu --Starts
  function setProducts(product,title){
    localStorage.setItem('product_details',null)
    if(product=='shoes'){
      localStorage.setItem('product_details', JSON.stringify(shoes))
    }
    else if(product=='men'){
      localStorage.setItem('product_details', JSON.stringify(men_items))
    }
    else if(product=='women'){
      localStorage.setItem('product_details', JSON.stringify(women_items))
    }
    else if(product=='shirts'){
      localStorage.setItem('product_details', JSON.stringify(shirts))
    }
    else if(product=='kurtas'){
      localStorage.setItem('product_details', JSON.stringify(kurtas))
    }
    else if(product=='jeans'){
      localStorage.setItem('product_details', JSON.stringify(jeans))
    }
    else if(product=='women'){
      localStorage.setItem('product_details', JSON.stringify(women_items))
    }
    else if(product=='saree'){
      localStorage.setItem('product_details', JSON.stringify(saree))
    }
    else if(product=='kurtis'){
      localStorage.setItem('product_details', JSON.stringify(kurtis))
    }
    else if(product=='dress'){
      localStorage.setItem('product_details', JSON.stringify(dress))
    }
    localStorage.setItem('title',title)
    window.location.href="search.html"
  }
  //function for showing product after clicking on any category from the menu --Ends