import './media-info.less';
import template from './media-info.html';

export let MediaInfoComponent = {
	templateUrl: template,
	selector: '_ngmodule_',
	// add ng1 directive definition
	directiveSelector: 'mediaInfo',
	controllerAs: '$ctrl',
	scope: {
		video: '=',
		onSeekChange: '&',
		onThumbClick: '&',
		thumbTitle: '@'
	},
	bindToController: true,
	replace: true,
	restrict: 'E',
	controller: class MediaInfoCtrl {
		/* @ngInject */
		constructor () {
			// Object.assign(this, ...arguments);
			// nothing
		}

		seekToSeconds ($event) {
			const text = $event.target.innerText;
			const isTime = $event.target.classList.contains('play-time');

			// isTime && this.YoutubePlayerSettings.seekToSeconds(text);
			if (isTime) {
				this.onSeekChange({ seconds: text });
			}
		}

		hasContent () {
			return this.video.thumb !== '';
		}

		getUrlToVideo () {
			const prefix = '#/video/';
			const videoId = this.video.id;
			return videoId ? `${prefix}${videoId}` : undefined;
		}

	}
};
