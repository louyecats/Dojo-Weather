function dismiss() {
    cookiepolicy.remove()
}



function celtofar(temp) {
    return Math.round (9 / 5 * temp + 32);
}

function fartocel(temp) {
    return Math.round (5 / 9 * (temp - 32));
}

function swap(element) {
    for(var i=1; i<9; i++) {
        var tempspan = document.querySelector("#degree" + i);
        var degreevalue = tempspan.innerText;
        if(element.value == "celsius") {
            // console.log(fartocel(degreevalue));
            tempspan.innerText = fartocel(degreevalue); 
        } else {
            // console.log(celtofar(degreevalue));
            tempspan.innerText = celtofar(degreevalue);
        }
    }
    // console.log(element.value);
}