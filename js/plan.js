$(function(){var n=null;$(".login-btn").on("click",function(){$(".mask-login").show()}),$(".register-btn").on("click",function(){window.location.href="register.html"}),$(".type .first").on("click",function(){window.location.href="plan3.html"}),$(".type .center").on("click",function(){window.location.href="plan2.html"}),$(".type .last").on("click",function(){window.location.href="plan1.html"}),$(".indus-plan").on("mouseover",function(){clearTimeout(n),$(".bg").show()}),$(".indus-plan").on("mouseout",function(){clearTimeout(n),n=setTimeout(function(){$(".bg").hide()},1e3)}),$(".type").on("mouseover",function(){clearTimeout(n),$(".bg").show()}),$(".type").on("mouseout",function(){$(".bg").hide()}),$(".aboutus").on("click",function(){window.location.href="about.html"}),$(".forget").on("click",function(){window.location.href="findPassword.html"}),$(".btn-void").on("click",function(){window.location.href="home.html"}),$(".free").on("click",function(){$(".mask-login").show()}),$(".login-del").on("click",function(){$(".mask-login").hide()}),$(".animate-word img").animate({opacity:1},2e3),$(".animate-bg").css({transform:"scale(1.1,1.1)"})});