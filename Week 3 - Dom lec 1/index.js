let ctr = 0;
function callback(){
    let el = document.querySelectorAll("h4")[1];
    el.innerHTML = ctr;
    ctr = ctr + 1;
}

setInterval(callback, 1000);