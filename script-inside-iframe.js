function handleMessage(event) {
	// domain esimerkiksi http://www.otto.fi
	if (event.origin === 'Tähän viestin lähettäjän domainin osoite' && event.data === 'window.size.please') {
	 event.source.postMessage('window size: ' + document.body.scrollHeight + 'x' + document.body.scrollWidth, event.origin);
	}
}

window.addEventListener('message', handleMessage, false);