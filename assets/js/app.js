var maVoiture = document.querySelector('#voiture');
var positionInitiale = +maVoiture.style.left;
let positionInitiale2 = +maVoiture.style.top;

function faireBouger(direction) {
    /*console.log("direction = ", direction);
    console.log("position initial = ", positionInitiale);*/
    positionInitiale = +positionInitiale + direction;
    myPosition = positionInitiale;

    //positionInitiale2 = positionInitiale2 + direction;
    //myPosition = positionInitiale;
    //console.log(myPosition);
    document.querySelector('#voiture').style.left = positionInitiale + 'px';
    var v = getPosition('arriver');
    var mav = getPosition('voiture');
 
    if(mav[0] == (v[0]) && mav[1] == (v[1]) ){
        alert("Felicitation");
    }
}

function faireTourner(directionRotation) {
    var positionRotationActuel = maVoiture.style.transform;
    console.log(positionRotationActuel);
    //var elem = positionRotationActuel.split('deg');

    /*positionRotationActuel = positionRotationActuel + directionRotation;*/
    //console.log(elem);

    document.querySelector('#voiture').style.transform = "rotate("+directionRotation+"deg)";
}

function faireHaut(dir) {
    //incrementation de la position top
    positionInitiale2 = +positionInitiale2 + dir;
    document.querySelector('#voiture').style.top = positionInitiale2 + 'px';
}

function getPosition(element)
{
	var left = 0;
	var top = 0;
    var e = document.getElementById(element);
    var valeur = Array;

	while (e.offsetParent != undefined && e.offsetParent != null)
	{
		left += e.offsetLeft + (e.clientLeft != null ? e.clientLeft : 0);
		top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
		e = e.offsetParent;
    }
    valeur = new Array(left,top)
	return valeur;
} 