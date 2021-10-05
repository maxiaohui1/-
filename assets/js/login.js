$(function(){
	$(".login-box a").on("click",function(){
		$(this).parents(".login-box").hide().siblings().show();
	});
	$(".reg-box a").on("click",function(){
		$(this).parents(".reg-box").hide().siblings().show();
	});
	var form = layui.form;
	form.verify({
		pass: [
		    /^[\S]{6,12}$/
		    ,'密码必须6到12位，且不能出现空格'
		  ], 
		repass:function(value){
			var repass = $(".reg-box [name=password]").val();
			if(repass !== value){
				return "两次密码不一致";
			}
		}  
	})

})

$("#form-reg").on("submit",function(e){
		e.preventDefault();
		var layer = layui.layer;
		var username = $("#form-reg [name=username]").val();
		var password = $("#form-reg [name=password]").val();
		$.post('/api/reguser',
				{username:username,password:password},
				function(res){
					if(res.status !== 0){
						layer.msg(res.message, {icon: 6});
					}else{
						layer.msg(res.message, {icon: 6},function(){
						 $(".reg-box a").click();
						});
					}	
				})			
})
$("#form-login").submit(function(e){
	e.preventDefault();
	$.ajax({
		url: '/api/login',
		method: "POST",
		data: $(this).serialize(),
		success: function(res){
			if(res.status !== 0){
				layer.msg(res.message, {icon: 6});
			}else{
				localStorage.setItem("token",res.token);
				layer.msg(res.message, {icon: 6},function(){
					location.href = "/四阶段/大事件/index.html";
				});
			}
			
		}
	});
})

