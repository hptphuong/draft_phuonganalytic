(function(){
	var O=window,
		M=document;
	var qa = function(a) {// return true if string * not undefine
        return void 0 != a && -1 < (a.constructor + "").indexOf("String")},
        sa=function(a) {//remove whitespace at begin and end string
        return a ? a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : ""
    	};
    var ee = function() {
        this.keys = [];
        this.values = {};
        this.m = {}
    };
    ee.prototype.set = function(a, b, c) {
        this.keys.push(a);
        c ? this.m[":" + a] = b : this.values[":" + a] = b
    }
    ;
    ee.prototype.get = function(a) {
        return this.m.hasOwnProperty(":" + a) ? this.m[":" + a] : this.values[":" + a]
    }
    ;
    ee.prototype.map = function(a) {
        for (var b = 0; b < this.keys.length; b++) {
            var c = this.keys[b]
              , d = this.get(c);
            d && a(c, d)
        }
    }
    var $core=function(a){
        this.f=[];
        this.f_imp=[];
        this.inf={};
        this.data =new ee;
    }
    $core.prototype.set=function(a){
        this.f.push(a);
        console.log("insertd:"+a);
        console.log(this.f);
    }
    // /// first intialize
    $core.prototype.check=function(a,func){
        return this.f.includes(a);
    }
    core = new $core;

    var rnd_32int=function (){
        return Math.round(2147483647 * Math.random())
    };
    function ga_hash(a) {
        // copy of google analytic hash
        var b = 1, c;
        if (a)
            for (b = 0,
            c = a.length - 1; 0 <= c; c--) {
                var d = a.charCodeAt(c);
                b = (b << 6 & 268435455) + d + (d << 14);
                d = b & 266338304;
                b = 0 != d ? b ^ d >> 21 : b
            }
        return b
    }
    var ra = function() {
        for (var a = O.navigator.userAgent + (M.cookie ? M.cookie : "") + (M.referrer ? M.referrer : ""), b = a.length, c = O.history.length; 0 < c; )
            a += c-- ^ b++;
        return [rnd_32int() ^ ga_hash(a) & 2147483647, Math.round((new Date).getTime() / 1E3)].join(".")
    };
    // getdomain=function(){
    //     b=M.location.hostname.split(".");
    //     var a=[];

    //     if (b.lenght==4)

    
    // };
    function setCookie(){
    	// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
    	m_path=M.location.pathname;
       
    	currnet_date = new Date();
        expiration_date_fsa=currnet_date;
    	expiration_date_fsa.setFullYear(expiration_date_fsa.getFullYear()+2);
        m_domain_arr=/www/.test(M.location.hostname.split(".")[0])?M.location.hostname.split(".").slice(1):M.location.hostname.split(".");
    	if((!/_fsa/.test(document.cookie))&&(!this.data.get('_fsa'))){
            tmp_ra=ra();
            document.cookie="_fsa=FSA1."+m_domain_arr.length+"."+tmp_ra+"; expires="+(new Date((new Date).getTime() + 63072000000)).toGMTString()+";path=/;"+"domain="+m_domain_arr.join(".");    
            this.data.set('_fsa',tmp_ra);
        }
        if(!/_fsid/.test(document.cookie)){
            document.cookie="_fsid=FSA1."+m_domain_arr.length+"."+ra()+"; expires="+(new Date((new Date).getTime() + 86400000)).toGMTString()+";path=/;"+"domain="+m_domain_arr.join(".");    
        }
        // if(!/_fsid/.test(document.cookie)){86400000
        //     document.cookie="_fsid=1."+m_domain.match(/\./g).length+"."+Math.floor(Date.now() / 1000)+"; expires="+expiration_date.toUTCString()+";path=/;"+"domain="+m_domain;    
        // }
    	
    };
    function createImage(){
    	var img = new Image,
    	url = encodeURIComponent(M.location.pathname),
      	title = encodeURIComponent(M.title),
      	ref = encodeURIComponent(M.referrer);
      	img.src = 'http://127.0.0.1:8000/a.gif?url=' + url + '&t=' + title + '&ref=' + ref +'&tid='+core.inf['tid'];
    };
    // create function
    // just simple with tracking id & 
    core.set('create');
    core.f_imp['create']=function(a){
    	if (arguments.length<2){
    		return;
    	}
    	core.inf['tid']=arguments[1]
    	if(void 0 !=arguments[2] && arguments[2]=='auto'){
    		setCookie.apply(core,arguments);
            return
    	}
    	
    }
    
    core.set('send');
    core.f_imp['send']=function(a){
    	// use basic with pageview
    	createImage();
    	
    }
    ////
	var gb = qa(window.FsoftAnalyticsObject) && sa(window.FsoftAnalyticsObject) || "fsa";
	O[gb]=function(a){
        if (core.check(a)){
            core.f_imp[a].apply(core.f_imp[a],arguments);
        };
	};

    
})(window);




// (function(i, s, o, g, r, a, m) {
//     i['FsoftAnalyticsObject'] = r;
//     i[r] = i[r] || function() {
//         (i[r].q = i[r].q || []).push(arguments)
//     }
//     ,
//     i[r].l = 1 * new Date();
//     a = s.createElement(o),
//     m = s.getElementsByTagName(o)[0];
//     a.async = 1;
//     a.src = g;
//     m.parentNode.insertBefore(a,m)
    
// }
// )(window, document, 'script', 'http://127.0.0.1:8000/static/test-analytic.js', 'fsa');

// (function(i, s, o, g, r, a, m) {
//     i['FsoftAnalyticsObject'] = r;
//     i[r] = i[r] || function() {
//         (i[r].q = i[r].q || []).push(arguments)
//     }
//     ,
//     i[r].l = 1 * new Date();
//     a = s.createElement(o),
//     m = s.getElementsByTagName(o)[0];
//     a.async = 1;
//     a.src = g;
//     m.parentNode.insertBefore(a,m)
    
// }
// )(window, document, 'script', 'https://phuonganalytic.herokuapp.com/static/test-analytic.js', 'fsa');

// var isMobile = {
//     Android: function() {
//         return navigator.userAgent.match(/Android/i);
//     },
//     BlackBerry: function() {
//         return navigator.userAgent.match(/BlackBerry/i);
//     },
//     iOS: function() {
//         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//     },
//     Opera: function() {
//         return navigator.userAgent.match(/Opera Mini/i);
//     },
//     Windows: function() {
//         return navigator.userAgent.match(/IEMobile/i);
//     },
//     any: function() {
//         return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
//     }
// };
// function(){
//     if (navigator.userAgent.match(/Tablet|iPad/i))
//     {
//     // do tablet stuff
//         return "tablet"
//     } else if(navigator.userAgent.match(/Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i) )
//     {
//     // do mobile stuff
//         return "mobile"
//     } else {
//         return ""
//     // do desktop stuff
//     }    
// }


// ga('send','pageview')
// ga('sent','event')