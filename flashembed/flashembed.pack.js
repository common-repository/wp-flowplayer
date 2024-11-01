/**
 * flashembed 0.29. Adobe Flash embedding script
 * 
 * http://flowplayer.org/tools/flash-embed.html
 *
 * Copyright (c) 2008 Tero Piirainen (tero@flowplayer.org)
 *
 * Released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * >> Basically you can do anything you want but leave this header as is <<
 *
 * version 0.01 - 03/11/2008 
 * version 0.29 - 06/08/2008
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('9 I(j,g,m){3(q j==\'1b\'){j=13.2f(j)}9 J(b,a){3(a){A(P C a){3(a.17(P)){b[P]=a[P]}}}}4 l={H:\'#\',R:\'1j%\',T:\'1j%\',v:o,W:o,L:o,X:o,1K:1H,1D:\'1y\',2C:\'2y\',2u:\'#2p\',1q:\'1v/x-1l-1a\',1k:\'25://23.20.1Y/1W/1V\'};3(q g==\'1b\'){g={H:g}}J(l,g);4 h=l.W;l.W=o;9 Y(){4 d=E();4 b=l.v;4 a=l.X;3(!j){8}3(!b||K(b)){l.L=l.v=l.X=o;j.F=V();8 j.1M}w 3(l.L){4 c=l.L.1G(l,E(),m);3(c){j.F=c}}w 3(b&&a&&K([6,1C])){J(l,{H:a});m={1B:2E.1x,2B:\'2z\',2w:13.2v};j.F=V()}w{3(j.F.u(/\\s/g,\'\')!==\'\'){}w{j.F="<1t>14 v "+b+" 2l 2k 1o 2j</1t>"+"<1u>"+(d[0]>0?"2e v 1o "+d:"2c 2a 28 1a 27 26")+"</1u>"+"<p>24 22 v 21 <a 1x=\'"+l.1k+"\'>1Z</a></p>"}}j[\'1h\'+h]=o}3(h){3(!j){8}j[\'1h\'+h]=9(){8 Y()}}w{8 Y()}9 K(c){4 a=E();4 b=(a[0]>c[0])||(a[0]==c[0]&&a[1]>=c[1]);8 b}9 11(a){4 b="";A(4 c C a){3(a[c]){b+=[c]+\'=\'+O(a[c])+\'&\'}}8 b.1g(0,b.1f-1)}9 V(){4 b="";3(q m==\'9\'){m=m()}3(z.N&&z.1e&&z.1e.1f){b=\'<1U 1q="1v/x-1l-1a" \';3(l.y){J(l,{M:l.y})}A(4 a C l){3(l[a]!==o){b+=[a]+\'="\'+l[a]+\'"\\n\\t\'}}3(m){b+=\'1d=\\\'\'+11(m)+\'\\\' />\'}}w{b=\'<B 1T="1S:1R-1Q-1P-1O-1N" \';b+=\'R="\'+l.R+\'" T="\'+l.T+\'"\';3(13.1L&&G(z.1J,10)<=6){l.y="1I"+(""+1X.1F()).1g(5)}3(l.y){b+=\' y="\'+l.y+\'"\'}b+=\'>\';b+=\'\\n\\t<1c M="1E" Z="\'+l.H+\'" />\';l.y=l.H=l.R=l.T=o;A(4 k C l){3(l[k]!==o){b+=\'\\n\\t<1c M="\'+k+\'" Z="\'+l[k]+\'" />\'}}3(m){b+=\'\\n\\t<1c M="1d" Z=\\\'\'+11(m)+\'\\\' />\'}b+="</B>"}8 b}9 E(){4 d=[0,0];3(z.N&&q z.N["1i 14"]=="B"){4 f=z.N["1i 14"].2D;3(q f!="12"){f=f.u(/^.*\\s+(\\S+\\s+\\S+$)/,"$1");4 c=G(f.u(/^(.*)\\..*$/,"$1"),10);4 a=/r/.2A(f)?G(f.u(/^.*r(.*)$/,"$1"),10):0;d=[c,a]}}w 3(19.Q){18{4 b=U Q("D.D.7")}16(e){18{b=U Q("D.D.6");d=[6,0];b.2t="1y"}16(2s){3(d[0]==6){8}}18{b=U Q("D.D")}16(2r){}}3(q b=="B"){f=b.2o("$v");3(q f!="12"){f=f.u(/^\\S+\\s+(.*)$/,"$1").2n(",");d=[G(f[0],10),G(f[2],10)]}}}8 d}9 O(b){2m(1p(b)){15\'1b\':8\'"\'+b.u(U 2q(\'(["\\\\\\\\])\',\'g\'),\'\\\\$1\')+\'"\';15\'1s\':8\'[\'+1r(b,9(a){8 O(a)}).1A(\',\')+\']\';15\'B\':4 c=[];A(4 d C b){3(b.17(d)){c.1n(\'"\'+d+\'":\'+O(b[d]))}}8\'{\'+c.1A(\',\')+\'}\'}8 2i(b).u(/\\s/g," ").u(/\\\'/g,"\\"")}9 1p(a){3(a===o||a===12){8 2h}4 b=q a;8(b==\'B\'&&a.1n)?\'1s\':b}3(19.1m){19.1m("2g",9(){2x=9(){};2d=9(){}})}9 1r(c,a){4 b=[];A(4 i C c){3(c.17(i)){b[i]=a(c[i])}}8 b}I.E=E;I.K=K;8 j}3(q 1w==\'9\'){(9($){$.2b.J({I:9(b,a){8 1z.29(9(){I(1z,b,a)})}})})(1w)}',62,165,'|||if|var||||return|function|||||||||||||||null||typeof||||replace|version|else||id|navigator|for|object|in|ShockwaveFlash|getVersion|innerHTML|parseInt|src|flashembed|extend|isSupported|onFail|name|plugins|asString|key|ActiveXObject|width||height|new|getHTML|loadEvent|expressInstall|load|value||concatVars|undefined|document|Flash|case|catch|hasOwnProperty|try|window|flash|string|param|flashvars|mimeTypes|length|substring|on|Shockwave|100|pluginspage|shockwave|attachEvent|push|is|typeOf|type|map|array|h2|h3|application|jQuery|href|always|this|join|MMredirectURL|65|allowscriptaccess|movie|random|call|true|_|appVersion|allowfullscreen|all|firstChild|444553540000|96B8|11cf|AE6D|D27CDB6E|clsid|classid|embed|getflashplayer|go|Math|com|here|adobe|from|latest|www|Download|http|installed|plugin|no|each|have|fn|You|__flash_savedUnloadHandler|Your|getElementById|onbeforeunload|false|String|required|greater|or|switch|split|GetVariable|ffffff|RegExp|eee|ee|AllowScriptAccess|bgcolor|title|MMdoctitle|__flash_unloadHandler|high|PlugIn|test|MMplayerType|quality|description|location'.split('|'),0,{}))