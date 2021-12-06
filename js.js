let krupier = document.getElementsByClassName("Krupier")[0];
let gracz = document.getElementsByClassName("gracz")[0];
let first_card;
let petla;
let first_value;

let figury = [['two', 2], ['three', 3], ['four', 4], ['five', 5], ['six', 6], ['seven', 7], ['eight', 8], ['nine', 9], ['ten', 10], ['jopek', 10], ["dama", 10], ['krol', 10], ['as', 11]];
let kolor = ['-hearts', '-spades', '-clubs', '-diamonds']
let valueK = 0;
let valueG = 0;
let core = {
    r: function ()  {
        this.score.innerHTML = this.name + ": " + this.obliczscore();
    },
    obliczscore: function () {
        let s = 0;
        for (let card of this.cards) {
            if(card.visible) {
                s+= card.value;
            }
        }
        return s;
    },
    rys: function () {
        this.pole.innerHTML = '';
        //clear
        for (let card of this.cards) {
            div = document.createElement('div');
            div.classList.add('flip-card');
            flip_inner = document.createElement('div');
            flip_inner.classList.add('flip-card-inner');
            flip_inner.classList.add(card.fig);
            div.appendChild(flip_inner);
            face = document.createElement('div');
            face.className = 'flip-card-front';
            flip_inner.appendChild(face);
            back = document.createElement('div');
            back.classList.add('flip-card-back');
            flip_inner.appendChild(back);
            if(!card.visible)
            {
                flip_inner.style.transform = "rotateY(180deg)";
            }
            this.pole.appendChild(div);
        }
        this.r();
    }
}

let oK = {
    pole: krupier, value: valueK, score: document.getElementsByClassName('valuek')[0], name: 'krupier',
    start: function (){
        this.cards = [];
        let c = createCard();
        c.visible = false
        this.cards.push(c)
        this.cards.push(createCard())
        this.rys();
    },

     ...core
};
let oG = {
    pole: gracz, value: valueG, score: document.getElementsByClassName('valueg')[0], name: 'gracz',  state: false, cards: [
        createCard(),
        createCard(),
    ],
    start: function (){
        this.cards = [];
        this.cards.push(createCard());
        this.cards.push(createCard());
        this.rys();
    },
    ...core
};

function createCard() {
    let los = losowanie();
    return {
        value: los.value,
        fig: los.fig,
        visible: 1,
    }
}

/*function CreateK() {
    let div;
    let flip_inner;
    let face;
    let back;
    let losuj;
    text = new Array(2);
    for (i = 0; i < 2; i++) {
        losuj = losowanie();
        div = document.createElement('div');
        div.classList.add('flip-card');
        krupier.appendChild(div);
        flip_inner = document.createElement('div');
        flip_inner.classList.add('flip-card-inner');
        flip_inner.classList.add(losuj.fig);
        div.appendChild(flip_inner);
        face = document.createElement('div');
        face.className = 'flip-card-front';
        flip_inner.appendChild(face);
        back = document.createElement('div');
        back.classList.add('flip-card-back');
        flip_inner.appendChild(back);
        text.unshift(div);
        oK.value += losuj.value;
        if (i == 0) {
            first_value = losuj.value;
        }
    }
    text[1].getElementsByClassName('flip-card-inner')[0].style.transform = 'rotateY(180deg)'
    console.log("Krupier: " + oK.value);
    document.getElementsByClassName('valuek')[0].append(oK.value - first_value);
    return text[1];
}

function CreateG() {
    let div;
    let flip_inner;
    let face;
    let back;
    let losuj;
    for (i = 0; i < 2; i++) {
        losuj = losowanie();
        console.log("xD" + losuj.fig)
        div = document.createElement('div');
        div.classList.add('flip-card');
        gracz.appendChild(div);
        flip_inner = document.createElement('div');
        flip_inner.classList.add('flip-card-inner');
        flip_inner.classList.add(losuj.fig);
        div.appendChild(flip_inner);
        face = document.createElement('div');
        face.className = 'flip-card-front';
        face.classList.add(losuj.fig)
        flip_inner.appendChild(face);
        back = document.createElement('div');
        back.classList.add('flip-card-back');
        flip_inner.appendChild(back);
        oG.value += losuj.value;

    }
    console.log("Gracz: " + oG.value);
    oG.r();
}*/

function Create()
{

}


/*function Reset() {
    let button = document.getElementsByClassName("buttons")[0];
    let parent = document.getElementsByClassName("krupier_main")[0];
    let parent1 = document.getElementsByClassName("gracz_main")[0];
    console.log(parent)
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    while (parent1.firstChild) {
        parent1.removeChild(parent1.firstChild);
    }
    let krupier1 = document.createElement('div');
    krupier1.classList.add("valuek");
    krupier1.innerHTML = "Wynik Krupiera: ";
    oK.score = krupier1
    let krupier_text = document.createElement('div');
    krupier_text.classList.add("krupier_text");
    krupier_text.innerHTML = "Krupier";
    let krupier2 = document.createElement('div');
    krupier2.classList.add("Krupier");
    let gracz1 = document.createElement('div');
    gracz1.classList.add("valueg");
    oG.score = gracz1
    let gracz_text = document.createElement('div');
    gracz_text.classList.add("gracz_text");
    gracz_text.innerHTML = "Gracz";
    let gracz2 = document.createElement('div');
    gracz2.classList.add("gracz");
    krupier.appendChild(krupier1);
    krupier.appendChild(krupier_text);
    krupier.appendChild(krupier2);
    gracz.appendChild(gracz1);
    gracz.appendChild(gracz_text);
    gracz.appendChild(gracz2);
    button.style.visibility = "visible";
    load();
}*/

function losowanie() {
    let min0 = 0;
    let max0 = 12;
    let losowa = Math.floor(Math.random() * (max0 - min0 + 1)) + min0;
    let min1 = 0;
    let max1 = 3;
    let losowa1 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
    console.log(figury[losowa][0]);
    return {
        fig: figury[losowa][0] + kolor[losowa1],
        value: figury[losowa][1]
    };
}


function vCheck() {
    if (!oG.state && oK.value > oG.value && oK.value < 21) {
        setTimeout(function () {
            alert("Wygrales!");
            Reset();
        }, 50)
    }
    else if(!oG.state && oG.value >21 )
    {
        setTimeout(function () {
            alert("Przegrales!");
            Reset();
        }, 50)
    }

}

function Rysuj(karta, losuj) {
    let faceback;
    let inner = document.createElement('div');
    inner.className = "flip-card-inner";
    inner.classList.add(losuj.fig);
    karta.appendChild(inner);
    faceback = document.createElement('div');
    faceback.classList.add("flip-card-front");
    inner.appendChild(faceback);
    faceback = document.createElement('div');
    faceback.classList.add("flip-card-back");
    inner.appendChild(faceback);
}


function createKart(o) {
    let losuj = losowanie()
    let karta = document.createElement('div');
    karta.classList.add("flip-card");
    o.pole.appendChild(karta);
    o.value += losuj.value;
    o.r()
    Rysuj(karta, losuj);
}

function add(value) {

    if (value == "krupier") {
        oG.state = true;
        if (valueK < 17 && (valueG > valueK || valueK == valueG)) {
            debugger;
            createKart(oK);
        } else {
            console.log("sprawdzam");
            first_card.getElementsByClassName('flip-card-inner')[0].style.transform = "rotateY(360deg)";
            o.r()
            clearInterval(petla);
            vCheck();
        }

    } else if (value == "gracz") {
        createKart(oG);
        vCheck();
    }
}


/*function add(value) {
    let karta;
    let faceback;
    let koniec = false;
    let losuj = losowanie();
    if (value == "krupier") {
        if (valueK < 17 && (valueK < valueG || valueK == valueG)) {

            karta = document.createElement('div');
            karta.classList.add("flip-card");
            krupier.appendChild(karta);
            valueK = valueK + losuj.value;
        } else {
            clearInterval(petla);
            koniec = true;
        }
        document.getElementsByClassName('valuek')[0].innerHTML = "Wynik Krupiera: " + valueK;
    } else if (value == "gracz") {
        karta = document.createElement('div');
        karta.classList.add("flip-card");
        gracz.appendChild(karta);
        valueG = valueG + losuj.value;
        console.log(valueG);
        document.getElementsByClassName('valueg')[0].innerHTML = "Wynik gracza: " + valueG;
        console.log(document.getElementsByClassName('valueg')[0]);
    }
    if (koniec) {
        if ((valueK < valueG && valueG < 21) || valueK > 21 || valueG == 21) {
            alert("Wygrales");
            Reset();
            return
        }
        if ((valueK > valueG && valueK < 21) || valueK == 21) {
            alert("Przejebales");
            Reset();
            return
        }
        if (valueK == valueG) {
            alert("Remis");
            Reset();
            return
        }
    }
    let inner = document.createElement('div');
    inner.className = "flip-card-inner";
    inner.classList.add(losuj.fig);
    karta.appendChild(inner);
    faceback = document.createElement('div');
    faceback.classList.add("flip-card-front");
    inner.appendChild(faceback);
    faceback = document.createElement('div');
    faceback.classList.add("flip-card-back");
    inner.appendChild(faceback);
    if (valueG > 21) {
        setTimeout(function () {
            alert("Przegrales!");
        }, 50)
        setTimeout(function () {
            Reset();
        }, 50)
        return
    } else if (valueG == 21) {
        first_card.getElementsByClassName('flip-card-inner')[0].style.transform = "rotateY(360deg)";
        setTimeout(function () {
            alert("Wygrales!");
            Reset();
        }, 50)
        return
    }
    return
}*/


function Rotate() {
    let button = document.getElementsByClassName("buttons")[0];
    document.getElementsByClassName("stand")[0].onclick = function () {

        petla = setInterval(() => {
            oK.cards.push(createCard());
            oK.rys()
        }, 1000);
        button.style.visibility = "hidden";
    }
    document.getElementsByClassName("hit")[0].onclick = function () {
        oG.cards.push(createCard());
        oG.rys()
    }
}

function load() {
 oG.start();
    oK.start();
    Rotate();
    /* oK.value=0;
  oG.value=0;
  oG.state = false;
    first_card = CreateK();
    CreateG();
    if (valueG == 21) {
        setTimeout(function () {
            alert("Wygrales Blackjack!");
            first_card.getElementsByClassName('flip-card-inner')[0].style.transform = "rotateY(360deg)";
        }, 50)
        setTimeout(function () {
            Reset();
        }, 50)
    } else if (valueK == 21) {
        first_card.getElementsByClassName('flip-card-inner')[0].style.transform = "rotateY(360deg)";
        oK.r();
        setTimeout(function () {
            alert("Krupier Blackjack!");
        }, 50)
        setTimeout(function () {
            Reset();
        }, 50)
    } else {
        Rotate(first_card);
    }*/
}

window.onload = load();
