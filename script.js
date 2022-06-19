window.onload = function(){
    let c = document.getElementById("celsius");
    let f = document.getElementById("fahr");
    
    c.oninput = function(){
        f.value = (c.value * 1.8) + 32;
    };
    f.oninput = function(){
        c.value = (f.value - 32) * 1.8;
    };
};
    
