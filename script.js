let product = {
    plainBurger : {
        name: 'Гамбургер простой ',
        price: 10000,
        kcall: 400,
        amount: 0,
        get SUMM() {
            return this.price * this.amount
        },
        get KCALL(){
            return this.kcall * this.amount
        }
    },
    freshBurger : {
        name: 'Гамбургер Fresh ',
        price: 20500,
        kcall: 900,
        amount: 0,
        get SUMM() {
            return this.price * this.amount
        },
        get KCALL(){
            return this.kcall * this.amount
        }
    },
    freshCombo : {
        name: 'Fresh Combo ',
        price: 31900,
        kcall: 1300,
        amount: 0,
        get SUMM() {
            return this.price * this.amount
        },
        get KCALL(){
            return this.kcall * this.amount
        }
    }
}

// Доп продукция

let extraProduct = {
    doubleMayonnaise: {
        name:'Двойной майонез',
        price:1000,
        kccal:40,
    },
    lettuce: {
        name:'Салатный лист',
        price:3000,
        kccal:40,
    },
    cheese: {
        name:'Сыр',
        price:5000,
        kccal:130,  
    }
}

let btnPlusOrMinus = document.querySelectorAll('.main__product-btn')
    checkExtraProduct = document.querySelectorAll('.main__product-checkbox'),
    addCart = document.querySelectorAll('.addCart'),
    receipt = document.querySelector('.receipt'),
    receiptWindow = document.querySelector('.receipt__window'),
    receiptOut = document.querySelector('.receipt__window-out'),
    receiptBtn = document.querySelector('.receipt__window-btn'),
    timer = document.querySelector('.header__timer-extra');
    
btnPlusOrMinus.forEach(item => {
    item.addEventListener('click', function() {
        PlusOrMinus(this)
    })
})



// Метод Element.closest() возвращает ближайший родительский элемент (или сам элемент), который соответствует заданному CSS-селектору или null, если таковых элементов 
// вообще нет.
function PlusOrMinus(element) {
    let parentId = element.closest('.main__product').getAttribute('id');
    let output = element.closest('.main__product').querySelector('.main__product-num');
    let sum = element.closest('.main__product').querySelector('.main__product-price span');
    let kcall = element.closest('.main__product').querySelector('.main__product-kcall span');
    
// getAttribute() - значение указанного атрибута
// dataset.symbol - подключается к символу 

    if(element.dataset.symbol == '+'){
        product[parentId].amount++
    }else if(element.getAttribute('data-symbol') == '-' && product[parentId].amount > 0 ){
        product[parentId].amount--
    }
    // (element.getAttribute('data-symbol') == '+' ) ?  product[parentId].amount++ : product[parentId].amount--;
    
    output.innerHTML = product[parentId].amount;
    sum.innerHTML = product[parentId].SUMM;
    kcall.innerHTML = product[parentId].KCALL;
}



// левел
let x = 0;
function level() {
    if(x < 100){
        x++
        timer.innerHTML = x; 
        var timeOut = setTimeout(() => level(),100);
        (x > 50) ? timer.style.color = 'rgb(136, 255, 0)' : 'white';
        (x > 75) ? timer.style.color = 'rgb(45, 192, 0)' : 'white';
        (x == 100) ? timer.style.color = 'rgb(0, 180, 96)' : 'white'
    }if(x > 50){
        clearTimeout(timeOut);
        timeOut = setTimeout(() => level(),x * 2);
    }
    // if(x > 85) {
    //     clearTimeout(timeOut);
    //     timeOut = setTimeout(() => level(), 300);
    // }
}
level();