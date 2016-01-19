var hosted_video = function(){
	this.canvas = document.querySelector('#player');
	this.context = this.canvas.getContext('2d');
	this.video_element = document.querySelector('#vid');
	this.counter = 1;
	this.events();
	this.imagerender();
}

hosted_video.prototype.imagerender = function(){
	var _this = this;
	this.interval = setInterval(function(){ 
		base = new Image();
		base.src = 'https://rmarepo.richmediaads.com/140/images/autoplay/0j82wfm9529/image_'+ _this.counter +'.jpg';
		base.onload = function(){
			_this.context.drawImage(base, 0, 0);
		}
		_this.counter == 150 ? _this.counter = 1 : '';
		_this.counter++;
	}, 100)
}

hosted_video.prototype.events = function(){
	var _this = this;
	document.querySelector('#player').addEventListener('click', function(){
		clearInterval(_this.interval);
		document.querySelector('#vid').className = '';
		_this.video.play();
	});

	_this.video_element.addEventListener('click', function(){
		_this.context.drawImage(this, 0, 0);
		if(this.paused || this.ended){
			this.play();
		}else{
			this.pause();
		}
	});
}

hosted_video.prototype.video ={
	play : function(){
		var video = document.querySelector('#vid');
		video.play();
	},
	pause: function(){
		this.video_element.pause();
	}
}

h = new hosted_video();

