function pageReload(){var n=document.querySelector("#noInternet .popBo .popBtn svg");null!=n&&n.classList.add("r"),setTimeout(function(){window.location.reload()},500)};window.addEventListener("offline",function(){document.querySelector("#noInternet").classList.remove("hidden"),document.querySelector("#toastNotif").innerHTML="<span>لا يوجد اتصال بالإنترنت!</span>"}),window.addEventListener("online",function(){document.querySelector("#noInternet").classList.add("hidden"),document.querySelector("#toastNotif").innerHTML="<span>تمت استعادة الاتصال بالإنترنت!</span>"});
