const point = document.getElementById('two');
const pointTxt = document.getElementById('twoTxt');

point.addEventListener('mouseover', function nav(){
    if(MouseEvent.apply){
        pointTxt.classList.add('show')
    }
    setTimeout(function(){
        pointTxt.classList.remove('show')
    }, 1000);
});

nav();

console.log("Hello");
