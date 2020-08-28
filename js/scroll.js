// just a function to console.log anything easier
let see = (a) => {console.log(a)};

function smoothScroll(target,duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startingPosition = window.pageYOffset;
    var distance = targetPosition - startingPosition;
    var startTime = null;

    function animation(currentTime) {
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed,startingPosition,distance,duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }
  
    function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    };
    requestAnimationFrame(animation);
}

let aboutBtn = document.querySelector('#aboutBtn');
let productsBtn = document.querySelector('#productsBtn');
let contactBtn = document.querySelector('#contactBtn');



aboutBtn.addEventListener('click',function() {
    smoothScroll('#aboutus',1000);
});
productsBtn.addEventListener('click',function() {
    smoothScroll('#products',1000);
});
contactBtn.addEventListener('click',function() {
    smoothScroll('#contacts',1000);
});
