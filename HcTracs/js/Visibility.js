let k=2;
let i=2;


while(k<10) {
    if (localStorage[k] == 'true') {
        //console.log(localStorage[k]);
        if(i==2){document.getElementById('B2').style.pointerEvents = 'yes';}
        if(i==3){document.getElementById('B3').style.pointerEvents = 'yes';}
        if(i==4){document.getElementById('B4').style.pointerEvents = 'yes';}
        if(i==5){document.getElementById('B5').style.pointerEvents = 'yes';}
        if(i==6){document.getElementById('B6').style.pointerEvents = 'yes';}
        if(i==7){document.getElementById('B7').style.pointerEvents = 'yes';}
        if(i==8){document.getElementById('B8').style.pointerEvents = 'yes';}
        if(i==9){document.getElementById('B9').style.pointerEvents = 'yes';}
    }
    else{
        //console.log(localStorage[k]);
        //console.log(i);
        if(i==2){document.getElementById('B2a').style.pointerEvents = 'none';document.getElementById('B2').style.pointerEvents = 'none';document.getElementById('B2').style.opacity = '0.6';}
        if(i==3){document.getElementById('B3a').style.pointerEvents = 'none';document.getElementById('B3').style.pointerEvents = 'none';document.getElementById('B3').style.opacity = '0.6';}
        if(i==4){document.getElementById('B4a').style.pointerEvents = 'none';document.getElementById('B4').style.pointerEvents = 'none';document.getElementById('B4').style.opacity = '0.6';}
        if(i==5){document.getElementById('B5a').style.pointerEvents = 'none';document.getElementById('B5').style.pointerEvents = 'none';document.getElementById('B5').style.opacity = '0.6';}
        if(i==6){document.getElementById('B6a').style.pointerEvents = 'none';document.getElementById('B6').style.pointerEvents = 'none';document.getElementById('B6').style.opacity = '0.6';}
        if(i==7){document.getElementById('B7a').style.pointerEvents = 'none';document.getElementById('B7').style.pointerEvents = 'none';document.getElementById('B7').style.opacity = '0.6';}
        if(i==8){document.getElementById('B8a').style.pointerEvents = 'none';document.getElementById('B8').style.pointerEvents = 'none';document.getElementById('B8').style.opacity = '0.6';}
        if(i==9){document.getElementById('B9a').style.pointerEvents = 'none';document.getElementById('B9').style.pointerEvents = 'none';document.getElementById('B9').style.opacity = '0.6';}
    }
    k++;
    i++;
}
