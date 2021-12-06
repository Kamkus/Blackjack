let krupier = document.getElementsByClassName("krupier_main")[0];
let gracz= document.getElementsByClassName("gracz_main")[0];
let krupier_main;
let gracz_main;
let lista;
let first_card;
let clicked;
let petla;
let first_value;
let figury = [['two', 2], ['three', 3], ['four', 4],['five', 5], ['six', 6],['seven', 7], ['eight', 8],['nine', 9], ['ten', 10],['jopek', 10], ["dama", 10], ['krol', 10],['as', 11]];
let kolor = ['-hearts', '-spades', '-clubs', '-diamonds']
let valueK = 0;
let valueG = 0;

function CreateK()
{
let div;
let flip_inner;
let face;
let back;
let losuj;
text = new Array(2);
for(i =0; i<2; i++)
{
losuj = losowanie();
div = document.createElement('div');
div.classList.add('flip-card');
krupier.appendChild(div);
flip_inner = document.createElement('div');
flip_inner.classList.add('flip-card-inner');
flip_inner.classList.add(losuj[0]);
div.appendChild(flip_inner);
face = document.createElement('div');
face.className = 'flip-card-front';
flip_inner.appendChild(face);
back = document.createElement('div');
back.classList.add('flip-card-back');
flip_inner.appendChild(back);
text.unshift(div);
valueK = valueK + losuj[1];
if(i==0)
{
    first_value = losuj[1];
}
}
text[1].getElementsByClassName('flip-card-inner')[0].style.transform = 'rotateY(180deg)'
console.log("Krupier: " + valueK);
document.getElementsByClassName('valuek')[0].append(valueK - first_value);
return text[1];
}

function CreateG()
{
let div;
let flip_inner;
let face;
let back;
let losuj;
for(i=0; i<2; i++)
{
losuj = losowanie();
console.log("xD" + losuj[0])
div = document.createElement('div');
div.classList.add('flip-card');
gracz.appendChild(div);
flip_inner = document.createElement('div');
flip_inner.classList.add('flip-card-inner');
flip_inner.classList.add(losuj[0]);
div.appendChild(flip_inner);
face = document.createElement('div');
face.className = 'flip-card-front';
face.classList.add(losowanie())
flip_inner.appendChild(face);
back = document.createElement('div');
back.classList.add('flip-card-back');
flip_inner.appendChild(back);
valueG = valueG + losuj[1];

}
console.log("Gracz: " + valueG);
document.getElementsByClassName('valueg')[0].append(valueG);
}


function Reset()
{
    let button = document.getElementsByClassName("buttons")[0];
    let parent = document.getElementsByClassName("krupier_main")[0];
    let parent1 = document.getElementsByClassName("gracz_main")[0];
    console.log(parent)
    while(parent.firstChild)
    {
        parent.removeChild(parent.firstChild);
    }
    while(parent1.firstChild)
    {
        parent1.removeChild(parent1.firstChild);
    }
    let krupier1 = document.createElement('div');
    krupier1.classList.add("valuek");
    krupier1.innerHTML = "Wynik Krupiera: ";
    let krupier_text = document.createElement('div');
    krupier_text.classList.add("krupier_text");
    krupier_text.innerHTML = "Krupier";
    let krupier2 = document.createElement('div');
    krupier2.classList.add("Krupier");
    let gracz1 = document.createElement('div');
    gracz1.classList.add("valueg");
    gracz1.innerHTML = "Wynik Gracza: ";
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
    valueK = 0;
    valueG = 0;
    load();
}

function losowanie()
{
    let min0 = Math.ceil(0);
    let max0 = Math.floor(12);
    let losowa = Math.floor(Math.random() * (max0 - min0 + 1)) + min0;
    let min1 = Math.ceil(0);
    let max1 = Math.floor(3);
    let losowa1 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
    console.log(figury[losowa][0]);
    let ostateczna = [figury[losowa][0]+kolor[losowa1], figury[losowa][1]];
    return ostateczna;    
}

function add(value)
{
    let karta;
    let faceback;
    let pokaz = true;
    let koniec = false;
    let Losuj = losowanie();
    if(value == "krupier")
    {
        if(valueK<17 && valueK<valueG)
        {
            
         karta = document.createElement('div');
        karta.classList.add("flip-card");
        krupier.appendChild(karta);
        valueK = valueK + Losuj[1];
        }else{pokaz = false; clearInterval(petla); koniec = true;}
        document.getElementsByClassName('valuek')[0].innerHTML = "Wynik Krupiera: " + valueK;
    }
    else if(value == "gracz")
    {
        karta = document.createElement('div');
        karta.classList.add("flip-card");
        gracz.appendChild(karta);
        valueG = valueG + Losuj[1];
        console.log(valueG);
        document.getElementsByClassName('valueg')[0].innerHTML = "Wynik gracza: " + valueG;
        if(valueG > 21)
        {
            alert("PRZEJEBALES");
            first_card.getElementsByClassName('flip-card-inner')[0].style.transform = "rotateY(360deg)";
            document.getElementsByClassName("valuek")[0].innerHTML = "Wynik Krupiera: " + valueK;
            Reset();
            return
        }
        if(valueG == 21)
        {
            first_card.getElementsByClassName('flip-card-inner')[0].style.transform = "rotateY(360deg)";
            document.getElementsByClassName("valuek")[0].innerHTML = "Wynik Krupiera: " + valueK;
            alert("WYGRALES");
            Reset();
            return
        }
    }
    if(pokaz)
    {
        let inner = document.createElement('div');
        inner.className = "flip-card-inner";
        inner.classList.add(Losuj[0]);
        karta.appendChild(inner);
        faceback = document.createElement('div');
        faceback.classList.add("flip-card-front");
        inner.appendChild(faceback);
        faceback = document.createElement('div');
        faceback.classList.add("flip-card-back");
        inner.appendChild(faceback);
    }
    if(koniec)
    {
        if((valueK<valueG && valueG<21) || valueK>21)
        {
            alert("Wygrales111");
            Reset();
            return
        }
        if((valueK>valueG && valueK<21) || valueK == 21)
        {
            alert("Przejebales11");
            Reset();
            return
        }
    }
    return
}



function Rotate(card)
{
    let button = document.getElementsByClassName("buttons")[0];
    card.style.cursor = 'pointer';
    document.getElementsByClassName("stand")[0].onclick = function()
    {
    card.getElementsByClassName('flip-card-inner')[0].style.transform = "rotateY(360deg)";
    document.getElementsByClassName('valuek')[0].innerHTML = "Wynik Krupiera: " + valueK;
    console.log("rotatuje" );
    console.log(card);
    petla = setInterval(() => {
        add("krupier");
    }, 1000);
        button.style.visibility = "hidden";
    }
    document.getElementsByClassName("hit")[0].onclick = function()
    {
    console.log("rotatuje" );
    console.log(card);
    add("gracz");
    }
}

function load()
{
    first_card = CreateK();
    CreateG();
    if(valueG == 21)
    {
        alert("Wygrales BlackJack");
        Reset();
    }
    else if(valueK == 21)
    {
        first_card.getElementsByClassName('flip-card-inner')[0].style.transform = "rotateY(360deg)";
        alert("Krupier BlackJack");
        Reset();
    }
    else
    {
    Rotate(first_card);
    }
}

window.onload = load();
