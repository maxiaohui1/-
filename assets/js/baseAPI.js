$.ajaxPrefilter(function(options){
	options.url = 'http://api-breakingnews-web.itheima.net'+options.url;
	if(options.url.indexOf("/my/") !== -1){
		options.headers = {
			Authorization : localStorage.getItem("token")
		}
	}
	options.complete = function(com){
			// console.log(com);
			if(com.responseJSON.status === 1){
				localStorage.removeItem("token");
				window.location.href = "/四阶段/大事件/login.html";
			}
		}
})
	
