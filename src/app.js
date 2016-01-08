import angular from 'angular';
import Angular2To1 from 'angular2to1';
import ngRoute from 'angular-router-browserify';
import AngularAnimate from 'angular-animate';
import AngularSanitize from 'angular-sanitize';
import AngularBootstrap from 'angular-ui-bootstrap';

import LocalStorageModule from 'angular-local-storage';
import AppCore from './core';

import YoutubeVideos from './components/youtube-videos';
import Loader from './components/loader';
import SearchPanel from './components/search-panel';
import YoutubePlayer from './components/youtube-player';
import NowPlaying from './components/now-playing';
import UserProfile from './components/user-profile';
import Drawer from './components/drawer';
import PlaylistEditor from './components/playlist-editor';

ngRoute(angular);

	angular.module('echoes', [
		// framework wide components
		'ngRoute',
		AngularAnimate,
		AngularSanitize,
		AngularBootstrap,

		// services
		'LocalStorageModule',
		AppCore.name,

    	// ui-components
    	YoutubeVideos.name,
    	Loader.name,
    	SearchPanel.name,
    	NowPlaying.name,
    	YoutubePlayer.name,
    	UserProfile.name,
    	Drawer.name,
    	PlaylistEditor.name
		// 'youtube.playlists',
		// 'youtube.player',
		// 'media.info',
		// 'drawer',
		// 'presets',
		// 'infinite-scroll',
		// 'navigator',
		// 'playlist.editor',
		// 'playlist.saver',
		// 'angular-sortable-view',
		// '720kb.socialshare',
		// 'google.api.loader',
		// 'google-signin',
		// 'user-profile'
	])
	.config(config);

	/* @ngInject */
	function config ($routeProvider, localStorageServiceProvider, GapiApiSetterProvider) {
		GapiApiSetterProvider.config({
			scope: 'youtube',
			api: {
				client: 'youtube',
				version: 'v3'
			},
			clientId: '971861197531'
		});

		localStorageServiceProvider.setPrefix('EchoesPlayer');

		$routeProvider

			// .when('/video/:id', {
			// 	templateUrl: 'app/youtube-video/youtube.video.tpl.html',
			// 	controller: 'YoutubeVideoCtrl',
			// 	controllerAs: 'vm',
			// })

			.otherwise({
				redirectTo: '/'
			});
	}
