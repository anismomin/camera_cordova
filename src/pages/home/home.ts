import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
		
  
	constructor(
		public navCtrl: NavController, 
		private mediaCapture: MediaCapture
	) 
	{
	
	}

	  
		

	imageCapture() {
		var options : CaptureImageOptions = {
			limit: 3
		};

		this.mediaCapture.captureImage(options)
		.then((mediaFiles: MediaFile[]) => {
			console.log(mediaFiles)
			var i, path, len;
			for (i = 0, len = mediaFiles.length; i < len; i += 1) {
				path = mediaFiles[i].fullPath;
				console.log(mediaFiles);
			}
		} ,
		(err: CaptureError) => {
			console.error(err)
			alert('Error code: ' + err.code);
		});
	}

	videoCapture() {
		var options = {
			limit: 1,
			duration: 10
		};

		this.mediaCapture.captureVideo(options)
		.then(
		(mediaFiles: MediaFile[]) => {
			console.log(mediaFiles)
			var i, path, len;
			for (i = 0, len = mediaFiles.length; i < len; i += 1) {
				path = mediaFiles[i].fullPath;
				console.log(mediaFiles);
			}
		} ,
		(err: CaptureError) => {
			console.error(err)
			alert('Error code: ' + err.code);
		});
	}
}
