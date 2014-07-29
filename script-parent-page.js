function receiveSizeData(event)
{  
	// iframen domain esimerkiksi http://www.kaljaa.com
	if (event.origin === 'Tähän iframen domainin osoite!') {
		// event.data pitää sisällään viestin sisällön. 
		// Tässä kohtaa event.datasta voidaan parsia sivun koko ja muuttaa iframen koko oikeaksi
		console.log(event.data);
	}
}

window.addEventListener("message", receiveSizeData, false);

window.onload = function() {

	iframe = document.getElementById('content');
	iframe.contentWindow.postMessage('window.size.please', 'Tähän iframen domainin osoite!');

};