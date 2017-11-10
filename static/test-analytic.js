// (function(){
// 	var O=window,
// 		M=document;
// 	var qa = function(a) {// return true if string * not undefine
//         return void 0 != a && -1 < (a.constructor + "").indexOf("String")},
//         sa=function(a) {//remove whitespace at begin and end string
//         return a ? a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : ""
//     	};
//     var ee = function() {
//         this.keys = [];
//         this.values = {};
//         this.m = {}
//     };
//     ee.prototype.set = function(a, b, c) {
//         this.keys.push(a);
//         c ? this.m[":" + a] = b : this.values[":" + a] = b
//     }
//     ;
//     ee.prototype.get = function(a) {
//         return this.m.hasOwnProperty(":" + a) ? this.m[":" + a] : this.values[":" + a]
//     }
//     ;
//     ee.prototype.map = function(a) {
//         for (var b = 0; b < this.keys.length; b++) {
//             var c = this.keys[b]
//               , d = this.get(c);
//             d && a(c, d)
//         }
//     }
//     var $fsaCore=function(a){
//         this.f=[];
//         this.f_imp=[];
//         this.inf={};
//         this.data =new ee;
//     }
//     $fsaCore.prototype.set=function(a){
//         this.f.push(a);

//     }
//     // /// first intialize
//     $fsaCore.prototype.check=function(a,func){
//         return this.f.includes(a);
//     }
//     var fsaCore = new $fsaCore;

//     var rnd_32int=function (){
//         return Math.round(2147483647 * Math.random())
//     };
//     function ga_hash(a) {
//         // copy of google analytic hash
//         var b = 1, c;
//         if (a)
//             for (b = 0,
//             c = a.length - 1; 0 <= c; c--) {
//                 var d = a.charCodeAt(c);
//                 b = (b << 6 & 268435455) + d + (d << 14);
//                 d = b & 266338304;
//                 b = 0 != d ? b ^ d >> 21 : b
//             }
//         return b
//     }
//     var ra = function() {
//         for (var a = O.navigator.userAgent + (M.cookie ? M.cookie : "") + (M.referrer ? M.referrer : ""), b = a.length, c = O.history.length; 0 < c; )
//             a += c-- ^ b++;
//         return [rnd_32int() ^ ga_hash(a) & 2147483647, Math.round((new Date).getTime() / 1E3)].join(".")
//     };
//     function getCookie(cname) {
//         var name = cname + "=";
//         var decodedCookie = decodeURIComponent(document.cookie);
//         var ca = decodedCookie.split(';');
//         for(var i = 0; i <ca.length; i++) {
//             var c = ca[i];
//             while (c.charAt(0) == ' ') {
//                 c = c.substring(1);
//             }
//             if (c.indexOf(name) == 0) {
//                 return c.substring(name.length, c.length);
//             }
//         }
//         return "";
//     }
//     function setCookie(a){
//         if (typeof a == "object" && a.name && a.value)
//             document.cookie=a.name+"="+a.value+(a.domain?";domain="+a.domain:"")+(a.path?";path="+a.path+";":";path=\;")+(a.expires?"expires="+a.expires:"");

//     };

//     function findRootDomain(){
//         splitArr=M.location.hostname.split(".");
//         Arrlen=splitArr.length;
//         // check by tmp variable as _fsckroot
//         rootDomain=splitArr.slice(-2).join(".");
//         if(Arrlen==2)
//             return rootDomain
        
//         for (c=-2;c>=1-Arrlen;c--)
//         {   
//             rootDomain=splitArr.slice(c).join(".");
//             if(!/;\s_fsckroot=|^_fsckroot=/.test(M.cookie)){
//                 setCookie({
//                     name:"_fsckroot",
//                     value:123,
//                     expires:(new Date((new Date).getTime() + 1)).toGMTString(),
//                     domain:rootDomain,
//                 })    
                
//             }
//             else{
//                 setCookie({
//                     name:"_fsckroot",
//                     value:123,
//                     expires:(new Date((new Date).getTime() - 1000)).toGMTString(),
//                 })
//                 break;
//             }

//         }
            

//     return rootDomain;
  
//     };
//     function createFsa_Fsid(){
//     	// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
//     	m_path=M.location.pathname;
       
//     	currnet_date = new Date();
//         expiration_date_fsa=currnet_date;
//     	expiration_date_fsa.setFullYear(expiration_date_fsa.getFullYear()+2);
//         m_domain=findRootDomain();
//     	if((!/_fsa=/.test(document.cookie))&&(!this.data.get('_fsa'))){
//             cid2y=ra();
//             setCookie({
//                 name:"_fsa",
//                 value:"FSA1."+m_domain.split(".").length+"."+cid2y,
//                 expires:(new Date((new Date).getTime() + 63072000000)).toGMTString(),
//                 domain:m_domain
//             })
//             // document.cookie="_fsa=FSA1."+m_domain_arr.length+"."+tmp_ra+"; expires="+(new Date((new Date).getTime() + 63072000000)).toGMTString()+";path=/;"+"domain="+m_domain_arr.join(".");    
            
//         };
//         if((!/_fsid=/.test(document.cookie))&&(!this.data.get('_fsid'))){
//             cid1d=ra();
//             setCookie({
//                 name:"_fsid",
//                 value:"FSA1."+m_domain.split(".").length+"."+cid1d,
//                 expires:(new Date((new Date).getTime() + 86400000)).toGMTString(),
//                 domain:m_domain
//             })
//             if(/_fsi/.test(document.cookie))
//                 this.data.set('_fsid',cid1d);
            
//         };
//         if (getCookie('_fsa')){
//             this.data.set('_fsa',getCookie('_fsa').split(".").slice(-2).join("."))
//             console.log(this.data.get("_fsa"));
            
//         };
//         if (getCookie('_fsid')){
//             this.data.set('_fsid',getCookie('_fsid').split(".").slice(-2).join("."))
            
//         };
            
         	
//     };
//     function createImage(){
//     	var img = new Image,
//     	url = encodeURIComponent(M.location.pathname),
//       	title = encodeURIComponent(M.title),
//       	ref = encodeURIComponent(M.referrer);
//       	img.src = 'http://127.0.0.1:8000/a.gif?url=' + url + '&t=' + title + '&ref=' + ref +'&tid='+fsaCore.inf['tid'];
//     };
//     // create function
//     // just simple with tracking id & 
//     fsaCore.set('create');
//     fsaCore.f_imp['create']=function(a){
//     	if (arguments.length<2){
//     		return;
//     	}
//     	fsaCore.inf['tid']=arguments[1]
//     	if(void 0 !=arguments[2] && arguments[2]=='auto'){
//     		createFsa_Fsid.apply(fsaCore,arguments);
//             return
//     	}
    	
//     }
    
//     fsaCore.set('send');
//     fsaCore.f_imp['send']=function(a){
//     	// use basic with pageview
//     	createImage();
    	
//     }
//     ////
// 	var gb = qa(window.FsoftAnalyticsObject) && sa(window.FsoftAnalyticsObject) || "fsa";
// 	O[gb]=function(a){
//         if (fsaCore.check(a)){
//             fsaCore.f_imp[a].apply(fsaCore.f_imp[a],arguments);
//         };
// 	};

    
// })(window);




// // (function(i, s, o, g, r, a, m) {
// //     i['FsoftAnalyticsObject'] = r;
// //     i[r] = i[r] || function() {
// //         (i[r].q = i[r].q || []).push(arguments)
// //     }
// //     ,
// //     i[r].l = 1 * new Date();
// //     a = s.createElement(o),
// //     m = s.getElementsByTagName(o)[0];
// //     a.async = 1;
// //     a.src = g;
// //     m.parentNode.insertBefore(a,m)
    
// // }
// // )(window, document, 'script', 'http://127.0.0.1:8000/static/test-analytic.js', 'fsa');

// // (function(i, s, o, g, r, a, m) {
// //     i['FsoftAnalyticsObject'] = r;
// //     i[r] = i[r] || function() {
// //         (i[r].q = i[r].q || []).push(arguments)
// //     }
// //     ,
// //     i[r].l = 1 * new Date();
// //     a = s.createElement(o),
// //     m = s.getElementsByTagName(o)[0];
// //     a.async = 1;
// //     a.src = g;
// //     m.parentNode.insertBefore(a,m)
    
// // }
// // )(window, document, 'script', 'https://phuonganalytic.herokuapp.com/static/test-analytic.js', 'fsa');

// // var isMobile = {
// //     Android: function() {
// //         return navigator.userAgent.match(/Android/i);
// //     },
// //     BlackBerry: function() {
// //         return navigator.userAgent.match(/BlackBerry/i);
// //     },
// //     iOS: function() {
// //         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
// //     },
// //     Opera: function() {
// //         return navigator.userAgent.match(/Opera Mini/i);
// //     },
// //     Windows: function() {
// //         return navigator.userAgent.match(/IEMobile/i);
// //     },
// //     any: function() {
// //         return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
// //     }
// // };
// // function(){
// //     if (navigator.userAgent.match(/Tablet|iPad/i))
// //     {
// //     // do tablet stuff
// //         return "tablet"
// //     } else if(navigator.userAgent.match(/Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i) )
// //     {
// //     // do mobile stuff
// //         return "mobile"
// //     } else {
// //         return ""
// //     // do desktop stuff
// //     }    
// // }


// // ga('send','pageview')
// // ga('sent','event')


if (window.trk) {
    trk.getSessionId = function() {

        //var sessionId;

        var sessionId = getCookie('PHPSESSID');

        if(sessionId == null){
            sessionId = getCookie('ASP.NET_SessionId');
        }

        if(sessionId == null){
            sessionId = getCookie('ASPSESSIONID');
        }

        if(sessionId == null){
            sessionId = getCookie('CGISESSID');
        }

        if(sessionId == null){
            sessionId = getCookie('sessionid');
        }

        if(sessionId == null){
            var value = "; " + document.cookie;
            var parts = value.split(";");
            for(i =0; i < parts.length; i++){
                var str = parts[i];
                if(str.indexOf("session") != -1){
                    sessionId = parts[i].split('=')[1];
                    break;
                }
            }
        }

        return sessionId;

    }
    trk.getCookie = function() {
        return document.cookie;
    }
    trk.getBrowserLanguage = function() {
        return navigator.language;
    }
    trk.getPageTitle = function() {
        return document.title;
    }
    trk.getCurrentUrl = function() {
        return window.location.href;
    }
    trk.getExtraData = function() {
        return {
            sessionId: trk.getSessionId(),
            cookies: trk.getCookie(),
            browserLanguage: trk.getBrowserLanguage(),
            pageTitle: trk.getPageTitle(),
            currentUrl: trk.getCurrentUrl()
        };
    }
    trk.callMethod = function(action, eventName, options) {
        console.log(action);
        if (action == 'init') {
            window.trk.id = eventName;
        }else if(action == 'domain'){
            window.trk.domainName = eventName;
        } else if (action == 'track') {
            var url = 'https://' + trk.domainName + '/api/updateconv?cid=' + trk.id + '&' + trk.params;
            var extraData = trk.getExtraData();
            if(!window.jQuery){
              (function() {
              // Load the script
              var script = document.createElement("SCRIPT");
            script.src = 'https://' + trk.domainName + '/files/ajaxJquery.js';
            script.type = 'text/javascript';
            script.onload = function() {
                var $ = window.jQuery;
              $.ajax({
                  url: url,
                  data: extraData,
                  success: function( data ){
                      console.log(data);
              }});
            };
            document.getElementsByTagName("head")[0].appendChild(script);
              })();
            }else{
              $.ajax({
                  url: url,
                  data: extraData,
                  success: function( data ){
                      console.log(data);
              }});
            }
        }else{
            if(window.trk.params == null){
              window.trk.params = 'param_name[]=' + action + '&' + 'param_value[]=' + eventName + '&';
            }else{
              window.trk.params += 'param_name[]=' + action + '&' + 'param_value[]=' + eventName + '&';
            }
        }

    }

    for (var index = 0; index < trk.queue.length; index+=1) {
        var event = trk.queue[index];
        trk.callMethod.apply(trk, event);
    }
}

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}


console.log('loaded');
