// let product = {
//     plainBurger : {
//         name: 'Гамбургер простой ',
//         price: 10000,
//         kcall: 400,
//         amount: 0,
//         get SUMM() {
//             return this.price * this.amount
//         },
//         get KCALL(){
//             return this.kcall * this.amount
//         }
//     },
//     freshBurger : {
//         name: 'Гамбургер Fresh ',
//         price: 20500,
//         kcall: 900,
//         amount: 0,
//         get SUMM() {
//             return this.price * this.amount
//         },
//         get KCALL(){
//             return this.kcall * this.amount
//         }
//     },
//     freshCombo : {
//         name: 'Fresh Combo ',
//         price: 31900,
//         kcall: 1300,
//         amount: 0,
//         get SUMM() {
//             return this.price * this.amount
//         },
//         get KCALL(){
//             return this.kcall * this.amount
//         }
//     }
// }

// // Доп продукция

// let extraProduct = {
//     doubleMayonnaise: {
//         name:'Двойной майонез',
//         price:1000,
//         kccal:40,
//     },
//     lettuce: {
//         name:'Салатный лист',
//         price:3000,
//         kccal:40,
//     },
//     cheese: {
//         name:'Сыр',
//         price:5000,
//         kccal:130,  
//     }
// }

// let btnPlusOrMinus = document.querySelectorAll('.main__product-btn')
//     checkExtraProduct = document.querySelectorAll('.main__product-checkbox'),
//     addCart = document.querySelector('.addCart'),
//     receipt = document.querySelector('.receipt'),
//     receiptWindow = document.querySelector('.receipt__window'),
//     receiptOut = document.querySelector('.receipt__window-out'),
//     receiptBtn = document.querySelector('.receipt__window-btn'),
//     timer = document.querySelector('.header__timer-extra');
    
// btnPlusOrMinus.forEach(item => {
//     item.addEventListener('click', function() {
//         PlusOrMinus(this)
//     })
// })



// // Метод Element.closest() возвращает ближайший родительский элемент (или сам элемент), который соответствует заданному CSS-селектору или null, если таковых элементов 
// // вообще нет.
// function PlusOrMinus(element) {
//     let parentId = element.closest('.main__product').getAttribute('id');
//     let output = element.closest('.main__product').querySelector('.main__product-num');
//     let sum = element.closest('.main__product').querySelector('.main__product-price span');
//     let kcall = element.closest('.main__product').querySelector('.main__product-kcall span');
    
// // getAttribute() - значение указанного атрибута
// // dataset.symbol - подключается к символу 

//     if(element.dataset.symbol == '+'){
//         product[parentId].amount++
//     }else if(element.getAttribute('data-symbol') == '-' && product[parentId].amount > 0 ){
//         product[parentId].amount--
//     }
//     // (element.getAttribute('data-symbol') == '+' ) ?  product[parentId].amount++ : product[parentId].amount--;
    
//     output.innerHTML = product[parentId].amount;
//     sum.innerHTML = product[parentId].SUMM;
//     kcall.innerHTML = product[parentId].KCALL;
// }
// // левел


// checkExtraProduct.forEach(product => {
//     product.addEventListener('click', function () {
//         addExtraProduct(this);
//     })
// })

// function addExtraProduct(el) {
//     let parent = el.closest('.main__product');
//     let parentId = parent.getAttribute('id');
    
//     product[parentId][el.dataset.extra] = el.checked
    
//     let price = parent.querySelector('.main__product-price span');
//     let kcall = parent.querySelector('.main__product-kcall span');
//     let elData = el.dataset.extra;
    
//     if(product[parentId][elData] == true) {
//         product[parentId].price +=  extraProduct[elData].price;
//         product[parentId].kcall +=  extraProduct[elData].kcall;
//     }else {
//         product[parentId].price -=  extraProduct[elData].price;
//         product[parentId].kcall -=  extraProduct[elData].kcall;
//     }
//     console.log(product);
    
//     price.innerHTML = product[parentId].SUMM;
//     kcall.innerHTML = product[parentId].KCALL;
// }

// let korzina = [],
//     totalName = '',
//     totalPrice = 0,
//     totalKcall = 0;
    
// addCart.addEventListener('click', function() {
//     for(let key in product) {
//        let productoObj = product[key];
//        if(productoObj.amount > 0) {
//            korzina.push(productoObj);
//             for(let newKey in productoObj) {
//                 if(productoObj[newKey] === true) {
//                     // '\n' - Экранирование - наше след значение начинает с новой строки
//                     productoObj.name += '\n' +  extraProduct[newKey].name
//                 }
//             }
//        }
//        productoObj.price = productoObj.SUMM;
//        productoObj.kcall = productoObj.KCALL;
//     }
    
//     for(let i = 0; i < korzina.length;i++){
//         let item = korzina[i];
//         totalName += '\n' + item.name + '\n';
//         totalPrice += item.price;
//         totalKcall += item.kcall;
//     }
    
//     receipt.style.display = 'flex';
//     setTimeout(() => receipt.style.opacity = '1', 100);
//     setTimeout(() => receiptWindow.style.top = '0',200);
    
//     receiptOut.innerHTML =  `Ваш заказ: \n ${totalName} \nКаллорийность ${totalKcall} \nСумма ${totalPrice}сумм`;
    
// })


// receiptBtn.addEventListener('click', () => {
//     location.reload();
// })

/* Основная продукция */
let product = {
    plainBurger: {
        name: 'Гамбургер простой',
        price: 10000,
        kcall: 400,
        img: 'images/product2.jpg',
        descr: 'Встречайте простой ГАМБУРГЕР. Он не сочный и не сытный за то дешевый',
        amount: 0,
        get SUMM() {
            return this.price * this.amount
        },
        get KCALL() {
            return this.kcall * this.amount
        }
    },
    freshBurger: {
        name: 'Гамбургер Fresh',
        price: 20500,
        kcall: 900,
        amount: 0,
        img: 'images/product1.jpg',
        descr: 'Встречайте Фрешмена FAS FOOD`а. Он набрал в себя всё самое старое.',
        get SUMM() {
            return this.price * this.amount
        },
        get KCALL() {
            return this.kcall * this.amount
        }
    },
    freshCombo: {
        name: 'Fresh Combo',
        price: 31900,
        kcall: 1300,
        amount: 0,
        img: 'images/product3.jpg',
        descr: 'FRESH и Картошка фри. Тот же самый FRESH и Фри объяденились.',
        get SUMM() {
            return this.price * this.amount
        },
        get KCALL() {
            return this.kcall * this.amount
        }
    },
    bestBurger: {
        name: 'Самый лучший бургер',
        price: 100000,
        kcall: 3300,
        amount: 0,
        img: 'https://avatars.mds.yandex.net/i?id=37b778c25a78b39b38d29a2b356f3ddc-5678070-images-thumbs&n=13&exp=1',
        descr: 'Просто the best Jovob!',
        get SUMM() {
            return this.price * this.amount
        },
        get KCALL() {
            return this.kcall * this.amount
        }
    }
}

/* Доп продукция */

let extraProduct = {
    doubleMayonnaise: {
        name: 'Двойной майонез',
        price: 1000,
        kcall: 100
    },
    lettuce: {
        name: 'Салатный лист',
        price: 3000,
        kcall: 40
    },
    cheese: {
        name: 'Сыр',
        price: 5000,
        kcall: 130
    },
    ketchup: {
        name: 'Кетчуп бест',
        price: 5000,
        kcall: 300
    }
}



let data = '';

function createProducts() {
    let main = document.querySelector('.main');
    for(let key in product) {
        let { name, price, img, descr } = product[key]
        data += `<section class="main__product" id="${key}">
        <div class="main__product-preview">
            <div class="main__product-info">
                <img src="${img}" alt="" class="main__product-img">
                <h2 class="main__product-title">${name}
                    <span class="main__product-many">${price} сум</span>
                </h2>
            </div>
            <p class="main__product-descr">
                ${descr}
            </p>
        </div>
        <div class="main__product-extra">
            <div class="main__product-number">
                <a class="main__product-btn fa-reg minus" data-symbol="-"></a>
                <output class="main__product-num">0</output>
                <a class="main__product-btn fa-reg plus" data-symbol="+"></a>
            </div>
            <div class="main__product-price"><span>0</span> сум</div> 
        </div>
        <div class="main__product-extraProduct">`;
        for(let newKey in extraProduct) {
            data += `<label class="main__product-label">
                <input type="checkbox" class="main__product-checkbox" data-extra="${newKey}">
                <span class="main__product-check"></span>
                ${extraProduct[newKey].name}
            </label>`;
        }
        data += `</div>
                    <div class="main__product-kcall"><span>0</span> калорий</div> 
                </section>`;
    }
    main.innerHTML = data;
    logic();
    
}
setTimeout(() => createProducts(),1500);



function logic(){
    

let btnPlusOrMinus = document.querySelectorAll('.main__product-btn'),
    checkExtraProduct = document.querySelectorAll('.main__product-checkbox'),
    addCart = document.querySelector('.addCart'),
    receipt = document.querySelector('.receipt'),
    receiptWindow = document.querySelector('.receipt__window'),
    receiptOut = document.querySelector('.receipt__window-out'),
    receiptBtn = document.querySelector('.receipt__window-btn');

btnPlusOrMinus.forEach(item => {
    let interval = 0;
    item.addEventListener('mousedown', () => {
        interval = setInterval(() => plusOrMinus(item), 100)
    })
    item.addEventListener('mouseup', () => {
        clearInterval(interval)
    })

})

function plusOrMinus(element) {
    // closest() - метод который подключаеться к ближайщему заданому родителю
    // getAttribute() - берет значение у указанного атрибута
    let parentId = element.closest('.main__product').getAttribute('id');
    let output = element.closest('.main__product').querySelector('.main__product-num');
    let sum = element.closest('.main__product').querySelector('.main__product-price span');
    let kcall = element.closest('.main__product').querySelector('.main__product-kcall span');

    if (element.dataset.symbol == '+') {
        product[parentId].amount++
    } else if (element.getAttribute('data-symbol') == '-' && product[parentId].amount > 0) {
        product[parentId].amount--
    }

    output.innerHTML = product[parentId].amount;
    sum.innerHTML = product[parentId].SUMM;
    kcall.innerHTML = product[parentId].KCALL
}


checkExtraProduct.forEach(product => {
    product.addEventListener('click', function () {
        addExtraProduct(this);
    })
})

function addExtraProduct(el) {
    let parent = el.closest('.main__product');
    let parentId = parent.getAttribute('id');
    
    product[parentId][el.dataset.extra] = el.checked
    
    let price = parent.querySelector('.main__product-price span');
    let kcall = parent.querySelector('.main__product-kcall span');
    let elData = el.dataset.extra;
    
    if(product[parentId][elData] == true) {
        product[parentId].price +=  extraProduct[elData].price;
        product[parentId].kcall +=  extraProduct[elData].kcall;
    }else {
        product[parentId].price -=  extraProduct[elData].price;
        product[parentId].kcall -=  extraProduct[elData].kcall;
    }
    console.log(product);
    
    price.innerHTML = product[parentId].SUMM;
    kcall.innerHTML = product[parentId].KCALL;
}

let korzina = [],
    totalName = '',
    totalPrice = 0,
    totalKcall = 0;
    
addCart.addEventListener('click', function() {
    for(let key in product) {
       let productoObj = product[key];
       if(productoObj.amount > 0) {
           korzina.push(productoObj);
            for(let newKey in productoObj) {
                if(productoObj[newKey] === true) {
                    // '\n' - Экранирование - наше след значение начинает с новой строки
                    productoObj.name += '\n' +  extraProduct[newKey].name
                }
            }
       }
       productoObj.price = productoObj.SUMM;
       productoObj.kcall = productoObj.KCALL;
    }
    
    for(let i = 0; i < korzina.length;i++){
        let item = korzina[i];
        totalName += '\n' + item.name + '\n';
        totalPrice += item.price;
        totalKcall += item.kcall;
    }
    
    receipt.style.display = 'flex';
    setTimeout(() => receipt.style.opacity = '1', 100);
    setTimeout(() => receiptWindow.style.top = '0',200);
    
    receiptOut.innerHTML =  `Ваш заказ: \n ${totalName} \nКаллорийность ${totalKcall} \nСумма ${totalPrice}сумм`;
    
    
    let output = document.querySelectorAll('.main__product-num'),
        price = document.querySelectorAll('.main__product-price span'),
        kcall = document.querySelectorAll('.main__product-kcall span');
        
    for(let i = 0; i < output.length;i++) {
        output[i].innerHTML = 0;
        price[i].innerHTML = 0;
        kcall[i].innerHTML = 0;
    }
})

receiptBtn.addEventListener('click', () => {
    location.reload();
})

}

    const timer = document.querySelector('.header__timer-extra');
let Offx = 0;
function level() {
    if(Offx < 100){
        Offx++
        timer.innerHTML = Offx; 
        var timeOut = setTimeout(() => level(),80);
        (Offx > 50) ? timer.style.color = 'rgb(136, 255, 0)' : 'white';
        (Offx > 75) ? timer.style.color = 'rgb(45, 192, 0)' : 'white';
        (Offx == 100) ? timer.style.color = 'rgb(0, 180, 96)' : 'white'
    }if(Offx > 50){
        clearTimeout(timeOut);
        timeOut = setTimeout(() => level(),Offx * 2);
    }
}

setTimeout(() => level(),1500);