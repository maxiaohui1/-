$(function(){
	getUserInfo();
})

function renderAvatar(res){
	var name = res.data.nickname || res.data.username;
	$("#huanying").html("欢迎&nbsp;&nbsp;"+name);
	if(res.data.user_pic){
		$(".layui-nav-img").attr("src",res.data.user_pic);
		$(".text-avatar").hide();
	}else{
		$(".layui-nav-img").hide();
	}
}
function getUserInfo(){
	$.ajax({
		url: '/my/userinfo',
		method: 'GET',
		// headers: {
		// 	Authorization : localStorage.getItem("token")
		// },
		success: function(res){
			if(res.status == 0){
				//第一种控制
				// layui.layer.msg(res.message,function(){
				// 	window.location.href = "/四阶段/大事件/login.html";
				// });
				renderAvatar(res);
			}	
		},
		// 第二种控制
		// complete: function(com){
		// 	// console.log(com);
		// 	if(com.responseJSON.status === 1){
		// 		localStorage.removeItem("token");
		// 		window.location.href = "/四阶段/大事件/login.html";
		// 	}
		// }
	});
}
$(".logout").on("click",function(){
	var layer = layui.layer;
	layer.confirm('确定退出码?', {icon: 3, title:'退出操作'}, function(index){
	  localStorage.removeItem("token");
	  window.location.href = "/四阶段/大事件/login.html";
	  layer.close(index);
	});
})