'use strict';
/*
//alert("Hello!");
let isChecked = true,
    isClose = false;

console.log(isChecked && isClose);
console.log(isChecked || isClose);
console.log(isChecked || !isClose);
if (2*4 == 8) {
    console.log("УРА!");
}

function showFirstMessage(text) {
    alert(text);
}

let soldier = {
    armor : 110,
    health: 400,
    beauty: 900
};
soldier.colors = {
    cap: 'red',
    boots: 'black'
};
let john = {
    armor: 50
};
john.__proto__ = soldier;
soldier.beauty = 500;
//delete soldier.health;

for (let key in john) {
    console.log('Property  ' + key + ' Value  ' +  soldier[key]);
}
console.log(Object.keys(soldier).length);

//showFirstMessage("Hello");
let arr = [1, 2, 3, 'four', 5, 6];
/arr.push('6');
//arr[99] = 99;
//for (let i=0; i < arr.length; i++)
//{
//    console.log(arr[i]);
//}
arr.forEach(function (item, i, mass) {
    console.log(i + ': ' + item + ' (massive: ' + mass + ') ');
});
console.log(arr);

let ans = prompt("Input massive", ""), ar = [];
ar = ans.split(',');
console.log(ar);

let arr = ['one', 'two', 'three'],
    i = arr.join(': ');
console.log(arr);
console.log(i);
let arr = [1, 15, 5],
    j = arr.sort();//sort by alphabet strict
    //i = arr.sort(compareNum);//sort by number
function compareNum(a, b) {
    return a - b;
    }
console.log(arr);
console.log(j);
//console.log(i);*/

let nam = document.getElementById('name'),
    sel = document.getElementsByTagName('select'),
    dat = document.getElementsByClassName('daynumber'),
    dn = document.querySelectorAll('.dayname'),
    pl = document.querySelector('.signcontrol'),
    link = document.querySelector('a'),
    wrap = document.querySelector('.wrapper'),
    plus = document.querySelectorAll('.addtable'),
    min = document.querySelectorAll('.deletetable');
//rad = document.getElementsByName('color');
//console.log(nam);
//console.log(sel);
//console.log(lay);
nam.style.backgroundColor = '#D81E5D';
sel[1].style.borderRadius = '20%';
/*
for (let i = 0; i < dat.length; i++) {
    dat[i].style.color = 'green';
}
*/
dn.forEach(function (item, i, dns) {
    item.style.color = 'green';
});
var div = document.getElementById('month'),
monthIndex = 0,
divClone = [12] ;

/*
function AddMonth()
{
    console.log(monthIndex);
    if (monthIndex < 11) {
        divClone[++monthIndex] = div.cloneNode(true);
        wrap.appendChild(divClone[monthIndex]);        
    }
}
function RemoveMonth() {
    console.log(monthIndex);
    if (monthIndex > 0)
    {
        wrap.removeChild(divClone[monthIndex])
        monthIndex--;
        }
}
*/
plus.forEach(function (item) {
    item.addEventListener('click', function () {
        console.log(monthIndex);
        if (monthIndex < 11) {
            divClone[++monthIndex] = div.cloneNode(true);
            wrap.appendChild(divClone[monthIndex]); 
            plus = document.querySelectorAll('.addtable');
            console.log(plus     );
        } 
    });
}
)  
min.forEach(function (item) {
    item.addEventListener('click', function () {
        console.log(monthIndex);
    if (monthIndex > 0)
    {
        wrap.removeChild(divClone[monthIndex])
        monthIndex--;
        min = document.querySelectorAll('.deletetable');
        }
    });
}
)   
link.addEventListener( 'click', function (event)
{
    event.preventDefault();
    console.log('event: ' + event.type + ' on element' + event.target);

});
//div.classList.add('single-calendar');
//let tbl = document.createElement('table'); 
//tbl.classList.add('calendar');
//wrap.appendChild(div_clone);
//div.appendChild(tbl); 

