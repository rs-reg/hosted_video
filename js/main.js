var hosted_video = function(){
	this.canvas = document.querySelector('#player');
	this.context = this.canvas.getContext('2d');
	this.video_element = document.querySelector('#vid');
	this.counter = 1;
	this.renderimage();
	this.events();
}

hosted_video.prototype.renderimage = function(){
	var _this = this;
	// if(/Mobi/.test(navigator.userAgent)){ //this code is use to check for mobile devices, if mobile, then render images, else play video.
		this.interval = setInterval(function(){ 
			base = new Image();
			base.src = 'https://rmarepo.richmediaads.com/140/images/autoplay/0j82wfm9529/image_'+ _this.counter +'.jpg';
			base.onload = function(){
				_this.context.drawImage(base, 0, 0);
			}
			_this.counter == 150 ? _this.counter = 1 : '';
			_this.counter++;
		}, 100)
	// }else{
	// 	this.rendervideo();
	// }
}

hosted_video.prototype.rendervideo = function(){
	var _this = this;
	clearInterval(_this.interval);
	// this.canvas.className = 'player hidden';
	document.querySelector('#btnplay').className = 'hidden';
	// this.source = document.createElement('source');
	// this.source.setAttribute('src', 'https://rmarepo.richmediaads.com/140/videos/GALAXY_S4_Official.mp4');
	// this.video_element.appendChild(this.source);
	this.video_element.className = '';
	this.context.drawImage(_this.video_element, 0, 0);

	if(this.video_element.paused || this.video_element.ended){
		this.video_element.play();
	}else{
		this.video_element.pause();
	}
}

hosted_video.prototype.events = function(){
	var _this = this;
	document.querySelector('#player').addEventListener('click', function(){
		_this.rendervideo();
	});

	_this.video_element.addEventListener('click', function(){
		_this.rendervideo();
	});

	document.querySelector('#btnplay').addEventListener('click', function(){
		_this.rendervideo();
	});
}

h = new hosted_video();




