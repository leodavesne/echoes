/* @ngInject */
export default function GoogleClientApi ($q, GapiApiSetter) {
	var defered = $q.defer();
	var service = {
		load: load,
        getClientApi: getClientApi
	};
    var ClientApis = {};

	return service;

    // optional: client, version
	function load (client, version) {
		// gapi.client.setApiKey(DeveloperApiKey);
        //  load the gapi api
        client = GapiApiSetter.api.client;
        version = GapiApiSetter.api.version;
        if (ClientApis[client] && ClientApis[client].isLoading) {
            return defered.promise;
        } else {
            addApi(client);
        }
        if (gapi.client[client]) {
            defered.resolve();
        } else if (!ClientApis[client].isLoading){
            ClientApis[client].isLoading = true;
            gapi.client.load(client, version, handleResponse);
        }
		return defered.promise;
	}

	function handleResponse (res) {
        if (gapi && gapi.client) {
            console.log('client load success:', res);
    		defered.resolve(gapi.client);
            return gapi.client;
        }
        console.log('gapi not loaded yet...', result);
    }

    function addApi(api) {
        ClientApis[api] = {
            isLoading: false,
            hasBeenLoaded: false
        }
    }
    function getClientApi () {
        return defered.promise;
    }
}