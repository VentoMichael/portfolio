const mHTML=document.getElementById("messageAcad"),messages=["pure.","rare.","Sphynx."];let currentMessage=0;function typeMessage(){messages[currentMessage]||(currentMessage=0);const e=messages[currentMessage];e.split();let s="",t=0,n=setInterval(()=>{e[t]?(s+=e[t++],mHTML.innerHTML=s):(currentMessage++,setTimeout(()=>{deleteMessage(s)},1e3),clearInterval(n))},110)}function deleteMessage(e){let s=setInterval(()=>{0===e.length?(setTimeout(()=>{typeMessage()},500),clearInterval(s)):((e=e.split("")).pop(),e=e.join(""),mHTML.innerHTML=e)},50)}typeMessage();


$(document).ready(function(){$("a").on("click",function(o){if(""!==this.hash){o.preventDefault();var t=this.hash;$("html, body").animate({scrollTop:$(t).offset().top},800,function(){window.location.hash=t})}})});