var massgEmpty="قائمة المقالات المفضلة لديك فارغة",articleLabel="تصفح محتوى خدمة مدونة الغد",link_articleLabel="https://blogoftomorrow-service.blogspot.com/search";!function($){"use strict";var OptionManager=(objToReturn={},defaultOptions={bookmarkIcon:"bookmarkIcon",bookmarkBadge:"show-bookmark",articleQuantity:"article-quantity",affixBookmarkIcon:!0,showBookmarkModal:!0,clickOnAddToBookmark:function(t){},clickOnbookmarkIcon:function(t,e){}},objToReturn.getOptions=function(t){var e=$.extend({},defaultOptions);return"object"==typeof t&&$.extend(e,t),e},objToReturn),objToReturn,defaultOptions,articleManager=function(){var t={};localStorage.konten=localStorage.konten||"";function c(t){localStorage.konten=JSON.stringify(t)}function l(){try{return JSON.parse(localStorage.konten)}catch(t){return[]}}function s(t,e){var a,o;if((t=(a=t,o=-1,n=l(),$.each(n,function(t,e){e.id!=a||(o=t)}),o))<0)return!1;var n=l();return n[t].quantity=void 0===e?n[t].quantity:e,c(n),!0}return t.getAllkonten=l,t.updatePoduct=s,t.setarticle=function(t,e,a,o,n,r){return void 0===t?(console.error("id required"),!1):void 0===e?(console.error("title required"),!1):void 0===a?(console.error("link required"),!1):void 0===r?(console.error("borkimage required"),!1):(o=void 0===o?"":o,void(s(t)||(i=t,t=e,e=a,a=o,o=n,n=r,(r=l()).push({id:i,title:t,link:e,summary:a,quantity:o,borkimage:n}),c(r))));var i},t.cleararticle=function(){c([])},t.removearticle=function(a){var t=l(),t=$.grep(t,function(t,e){return t.id!=a});c(t)},t.getTotalQuantity=function(){var a=0,t=l();return $.each(t,function(t,e){a+=e.quantity}),a},t}(),loadBookmarkEvent=function(t){var e=OptionManager.getOptions(t),a=$("."+e.bookmarkIcon),o=$("."+e.bookmarkBadge),t=e.articleQuantity;o.text(articleManager.getTotalQuantity()),$("#cart-modal").length||$("body").append('<div class="pop-area" id="cart-modal"><div class="pop-html"><div class="head-pop"><a class="close-btn buka-tutup">X</a></div><div class="body-content"><span class="table-responsive" id="cart-table"></span></div></div></div>');function n(){var t=$("#cart-table");t.empty();var e=articleManager.getAllkonten();$.each(e,function(){t.append('<table class="table"><tbody><tr title="'+this.summary+'" data-id="'+this.id+'"><td class="item-left img-left"><img width="60px" height="60px" src="'+this.borkimage+'"/></td><td class="item-left"><a href="'+this.link+'">'+this.title+'</a></td><td class="item-left" title="Remove favorit" class="text-center" style="width: 30px;"><a class="btn-remove"><svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(3.500000, 2.000000)"><path d="M15.3891429,7.55409524 C15.3891429,15.5731429 16.5434286,19.1979048 8.77961905,19.1979048 C1.01485714,19.1979048 2.19295238,15.5731429 2.19295238,7.55409524"></path><line x1="16.8651429" y1="4.47980952" x2="0.714666667" y2="4.47980952"></line><path d="M12.2148571,4.47980952 C12.2148571,4.47980952 12.7434286,0.714095238 8.78914286,0.714095238 C4.83580952,0.714095238 5.36438095,4.47980952 5.36438095,4.47980952"></path></g></svg></a></td></tr></tbody></table>')}),t.append(e.length?"":'<div role="alert" id="cart-empty-message"><div class="text-center"><svg width="80" height="80" viewBox="0 0 24 24"><path d="M19,2L14,6.5V17.5L19,13V2M6.5,5C4.55,5 2.45,5.4 1,6.5V21.16C1,21.41 1.25,21.66 1.5,21.66C1.6,21.66 1.65,21.59 1.75,21.59C3.1,20.94 5.05,20.5 6.5,20.5C8.45,20.5 10.55,20.9 12,22C13.35,21.15 15.8,20.5 17.5,20.5C19.15,20.5 20.85,20.81 22.25,21.56C22.35,21.61 22.4,21.59 22.5,21.59C22.75,21.59 23,21.34 23,21.09V6.5C22.4,6.05 21.75,5.75 21,5.5V7.5L21,13V19C19.9,18.65 18.7,18.5 17.5,18.5C15.8,18.5 13.35,19.15 12,20V13L12,8.5V6.5C10.55,5.4 8.45,5 6.5,5V5Z" fill="#f89000"/></svg><center>'+massgEmpty+'</center><a class="btn btn-outline-info m-2" href="'+link_articleLabel+'">'+articleLabel+"</a></div></div>")}var r;e.affixBookmarkIcon&&(r=+a.offset().top+ +a.css("height").match(/\d+/),$(window).scroll(function(){$(window).scrollTop()>=r?a.addClass("bookmarkIcon-affix"):a.removeClass("bookmarkIcon-affix")})),a.click(function(){e.showBookmarkModal?n():e.clickOnbookmarkIcon(a,articleManager.getAllkonten())}),$(document).on("keypress","."+t,function(t){38!=t.keyCode&&40!=t.keyCode&&t.preventDefault()}),$(document).on({click:function(){var t=$(this).closest("tr"),e=t.data("id");t.hide(500,function(){articleManager.removearticle(e),n(),o.text(articleManager.getTotalQuantity())})}},".btn-remove")};$(document).on({click:function(){return $(".pop-area").toggleClass("open"),!1}},".buka-tutup"),$(function(){var goTohartomyBookmark=function(t){};eval(function(t,e,a,o,n){if(o=function(t){return(t<58?"":o(parseInt(t/58)))+(35<(t%=58)?String.fromCharCode(t+29):t.toString(36))},!"".replace(/^/,String)){for(;e--;)n[o(e)]=a[e]||o(e);a=[function(t){return n[t]}],o=function(){return"\\w+"},e=1}for(;e--;)a[e]&&(t=t.replace(new RegExp("\\b"+o(e)+"\\b","g"),a[e]));return t}('q h=["\\B\\e\\M","\\g\\r\\k\\E\\i\\v\\l\\l\\w\\m\\n\\e\\e\\f\\j\\g\\i\\f","\\x\\y\\f\\g\\C\\k\\y\\k\\y\\F","\\N\\z\\g\\i\\k\\e\\j\\G\\C\\x\\e\\e\\f\\j\\g\\i\\f\\C\\x\\k\\m","\\H\\z\\A\\r\\k","\\F\\y\\H\\z","\\s\\t\\s","\\s\\t\\O","\\s\\t\\P","\\z\\g\\i\\k\\e\\j\\G\\n\\e\\e\\f\\j\\g\\i\\f","\\s\\t\\Q"];q D=[h[0],h[1],h[2],h[3]];(o(b,c){q d=o(a){R(--a){b[h[5]](b[h[4]]())}};d(++c)}(D,S));q u=o(a,b){a=a-I;q c=D[a];T c};$(u(h[U]))[h[9]]({\'\\x\\e\\e\\f\\j\\g\\i\\f\\J\\p\\e\\m\':u(h[6]),\'\\g\\r\\r\\A\\t\\n\\e\\e\\f\\j\\g\\i\\f\\J\\p\\e\\m\':!I,\'\\p\\B\\A\\p\\f\\w\\m\\v\\l\\l\\K\\e\\n\\e\\e\\f\\j\\g\\i\\f\':o(a){L(a)},\'\\g\\r\\k\\E\\i\\v\\l\\l\\w\\m\\n\\e\\e\\f\\j\\g\\i\\f\':o(a){V[u(h[8])](u(h[7]),a)},\'\\p\\B\\A\\p\\f\\w\\m\\v\\l\\l\\K\\e\\n\\e\\e\\f\\j\\g\\i\\f\':o(a){L(a)}})',58,"||||||||||||||x6F|x6B|x61|_0x6a0a|x72|x6D|x74|x64|x6E|x42|function|x63|var|x66|x30|x78|_0x3889|x41|x4F|x62|x75|x68|x69|x6C|x2D|_0x4117|x65|x70|x79|x73|0x0|x49|x54|goTohartomyBookmark|x67|x2E|x33|x32|x31|while|0xd6|return|10|console".split("|"),0,{}))});var MyBookmark=function(t,e){var i=$(t),c=OptionManager.getOptions(e),l=$("."+c.bookmarkBadge);i.click(function(){c.clickOnAddToBookmark(i);var t=i.data("id"),e=i.data("title"),a=i.data("link"),o=i.data("summary"),n=i.data("quantity"),r=i.data("borkimage");articleManager.setarticle(t,e,a,o,n,r),l.text(articleManager.getTotalQuantity())})};$.fn.hartomyBookmark=function(t){return loadBookmarkEvent(t),$.each(this,function(){new MyBookmark(this,t)})}}(jQuery);
