const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const oneTxt = document.getElementById('oneTxt');
const twoTxt = document.getElementById('twoTxt');
const threeTxt = document.getElementById('threeTxt');
let dots = [one, two, three];
let dotTxts = [ oneTxt, twoTxt, threeTxt];

console.log(dotTxts);
console.log(dots);


/*
point.addEventListener('mouseover', function nav(){
    if('mouseover'){
        pointTxt.classList.add('show')
    }
    setTimeout(function(){
        pointTxt.classList.remove('show')
    }, 1500);
});
*/

function nav(){
        dots.forEach(dot => {
        dot.addEventListener('mouseover', function nav(){
            if('mouseover'){
                oneTxt.classList.add('show')
            }
            setTimeout(function(){
                oneTxt.classList.remove('show')
            }, 1500);
        });      
    });
};

nav();

console.log("Hello");
