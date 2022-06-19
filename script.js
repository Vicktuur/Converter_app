window.onload = function(){
    let c = document.getElementById("celsius");
    let f = document.getElementById("fahr");
    let k = document.getElementById("kelvin");
    let r = document.getElementById("rankine");


    c.oninput = function(){
        f.value = (c.value * 1.8) + 32;
        k.value = (c.value + 273.15);
        r.value = (c.value * 1.8) + 491.67;
    };
    f.oninput = function(){
        c.value = (f.value - 32) * 1.8;
        k.value = (f.value - 32) * 5/9 + 273.15;
        r.value = (f.value + 459.67);
    };
    k.onpoint = function(){
        c.value = (k.value - 273.15);
        f.value = (k.value - 273.15) * 1.8 +32;
        r.value = (k.value * 1.8);
    }
    r.onpoint = function(){
        c.value  = (r.value - 491.67) * 5/9; 
        f.value  = (r.value - 459.67); 
        k.value  = (r.value * 5/9);
    }
};
    