// Laitetaan toiminto omaan scopeen ettei se ole suoraan window objektilla. Hyvän tavan mukaisesti.
// Alustetaan scopeen myös iFrame jotta sitä ei tarvitse hakea domista kuin kerran
(function(iFrame) {  
  'use strict';

  var intervalKey = null,  	// Tätä tarvitaan jotta intervallin saa pysäytettyä halutessaan
      interval = 200;		// Kuinka usein intervalli toistuu (ms)

  function receiveSizeData(event)
  {  
    if (event.origin === "iFrame-domain-address") {
    	// debuggausta varten
		console.log('Window data received. New height is: ' + event.data.height);

		// Viesti sisältää seuraavan objectin
		// var windowSpecs = {
  		//     width: document.body.scrollWidth,
  		//     height: document.body.scrollHeight
  		// };

  		// Asetetaan iFramelle uusi korkeus
		iFrame.height = (event.data.height) + 'px';
    }
  }

  window.addEventListener("message", receiveSizeData, false);

  window.onload = function() {
    
    // Kun sivu on latautunut, käynnistetään iframen pollaus
    intervalKey = setInterval(function() {
      iFrame.contentWindow.postMessage('window.size.please', 'iFrame-domain-address');
    }, interval);    

  };
  
})(document.getElementById('content'));