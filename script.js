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

let product = {
    plainBurger: {
        name: 'Гамбургер простой',
        price: 10000,
        kcall: 400,
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
    }
}

let btnPlusOrMinus = document.querySelectorAll('.main__product-btn'),
    checkExtraProduct = document.querySelectorAll('.main__product-checkbox'),
    addCart = document.querySelector('.addCart'),
    receipt = document.querySelector('.receipt'),
    receiptWindow = document.querySelector('.receipt__window'),
    receiptOut = document.querySelector('.receipt__window-out'),
    receiptBtn = document.querySelector('.receipt__window-btn'),
    timer = document.querySelector('.header__timer-extra'),


    info = document.querySelectorAll('.main__product-info'),
    btnClose = document.querySelector('.view__close'),
    view = document.querySelector('.view');


info.forEach(item => {
    item.addEventListener('dblclick', () => {
    getChild(item);
    view.classList.add('active');
    btnClose.addEventListener('click', () => {view.classList.remove('active');
    })
})
})

function getChild(item){
    let child = item.childNodes;
    let newChild = child[1];
    let newChildSrc = newChild.getAttribute('src');
    
    let dochka = view.childNodes;
    let newDochka = dochka[3];
    newDochka.src = newChildSrc;
}

btnPlusOrMinus.forEach(item => {
    let interval = 0;
    item.addEventListener('click', () => {
        plusOrMinus(item);
    })
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
    
})


receiptBtn.addEventListener('click', () => {
    location.reload();
})


let x = 0;
function level() {
    if(x < 100){
        x++
        timer.innerHTML = x; 
        var timeOut = setTimeout(() => level(),80);
        (x > 50) ? timer.style.color = 'rgb(136, 255, 0)' : 'white';
        (x > 75) ? timer.style.color = 'rgb(45, 192, 0)' : 'white';
        (x == 100) ? timer.style.color = 'rgb(0, 180, 96)' : 'white'
    }if(x > 50){
        clearTimeout(timeOut);
        timeOut = setTimeout(() => level(),x * 2);
    }
}
level();