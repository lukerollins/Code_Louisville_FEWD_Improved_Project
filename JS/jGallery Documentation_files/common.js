(function(b,f){var h=typeof b.onreadystatechange==="function"?b.onreadystatechange:function(){};var d=function(){};var c=false;var g=function(){if(!c&&(b.readyState==="interactive"||b.readyState==="complete")){c=true;e()}};var a=function(j){var i=d;d=function(){i();j()}};var e=function(){d()};f.onDOMContentLoaded=function(i){if(typeof i==="function"){c?i():a(i)}};g();b.onreadystatechange=function(){h();g()}})(document,window);var jGalleryPage=(function(){var a=function(){$("span[data-img]").each(function(){var c=$(this);var b=$('<img src="'+c.data("img")+'">');c.removeAttr("data-img");if(c.is("[data-alt]")){b.attr("alt",c.data("alt"));c.removeAttr("data-alt")}$.each(c.get(0).attributes,function(e,d){b.attr(d.name,d.value)});c.after(b);c.remove()})};require(["jquery"],function(){var b=$("#menu");var c=b.find(".menu-toggle a");c.on("click",function(){b.toggleClass("expanded")})});return{prepareImages:a}})();(function(a,b){var c=a.getElementsByTagName("html")[0];var d=c.hasAttribute("data-dev");b.config({paths:{jquery:"/js/lib/jquery-2.0.3.min",jgallery:"/jgallery/dist/js/jgallery",highlightjs:"/js/lib/highlightjs.min",tinycolor:"/jgallery/dist/js/tinycolor-0.9.16.min",jscolor:"/js/lib/jscolor-1.4.1.min",touchswipe:"/jgallery/dist/js/touchswipe.min",},urlArgs:"v="+(d?(new Date()).getTime():c.getAttribute("data-v")+"a")});b(["/js/modules/"+c.getAttribute("data-module")+".js"])})(document,require);