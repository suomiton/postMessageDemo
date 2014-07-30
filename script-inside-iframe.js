function handleMessage(event) {
	// domain esimerkiksi http://www.otto.fi
	if (event.origin === 'Tähän viestin lähettäjän domainin osoite' && event.data === 'window.size.please') {
		var windowSpecs = {
            width: document.body.scrollWidth,
            height: document.body.scrollHeight
         };

         event.source.postMessage(windowSpecs, event.origin);
	}
}

window.addEventListener('message', handleMessage, false);