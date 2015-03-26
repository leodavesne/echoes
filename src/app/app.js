(function() {
	'use strict';

	angular.module('mediaDeck', [
		'ngRoute',
		'ngSanitize',
		'htmlTemplates',
		'youtube.directives',
		'ui.controls',
		'ui.bootstrap',
		'echoes.services',
		'echoes.resources',
		'youtube.api',
		'youtube.playlists',
		'youtube.player',
		'media.info',
		'media.search',
		'drawer',
		'presets',
		'ngAnimate',
		'LocalStorageModule',
		'infinite-scroll',
		'navigator'
	])
	.config(config);

	function config ($routeProvider, $locationProvider, localStorageServiceProvider) {

		localStorageServiceProvider.setPrefix('EchoesPlayer');

		$routeProvider
			.when('/', {
				templateUrl: 'app/partials/youtube.videos.tpl.html',
				controller: 'YoutubeVideosCtrl',
				controllerAs: 'vm'
			})

			.when('/video/:id', {
				templateUrl: 'app/partials/youtube.video.tpl.html',
				controller: 'YoutubeVideoCtrl'
			})

			.otherwise({
				redirectTo: '/'
			});
	}

})();