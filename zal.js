var colorArray2 = document.body.getElementsByClassName("cinema-hall");
    for (var i = 0; i < colorArray2.length; i++) {
        var innerHtml = "";
        for (var j = 0; j < 100; j++) {
            innerHtml += `<div class="element"></div>`;
        }
        colorArray2[i].innerHTML = innerHtml;
    }