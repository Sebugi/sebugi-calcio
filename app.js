
var M=[];
var T={
it:{sub:"Quiz sulle partite storiche del calcio italiano",mode:"Come vuoi giocare?",ma:"Leggi la descrizione, indovina la partita",mb:"Vedi la partita, indovina il risultato",comp:"Competizione",team:"Squadra",season:"Stagione",all:"Tutte le competizioni",allt:"Tutte le squadre",allm:"Tutte le stagioni",start:"Inizia",review:"Ripasso",home:"Home",which:"Quale partita è?",howend:"Com'è finita?",forgot:"Sono incerto",unk:"Non lo so",right:"Giusto!",wrong:"Sbagliato.",ans:"La risposta è",next:"Prossima",stats:"Le tue risposte finora",c_ok:"Corrette",c_forgot:"Incerte",c_unk:"Non lo so",c_wrong:"Sbagliate",clear:"Cancella le mie risposte",sure:"Sicuro? Tocca di nuovo per cancellare",none:"Nessuna partita con questi filtri.",empty:"Qui non c'è ancora niente.",pen:"ai rigori",saved:"Le risposte restano solo su questo dispositivo.",disc:"Sebugi Calcio non è affiliata a nessuna lega, federazione o squadra. Solo fatti storici.",contact:"Contatti: sebugi.app@gmail.com",cpt:"Facciamo il punto",cps:"su 5 corrette",cpm:"Ci interessa sapere come ti sembra l'app: partite che vorresti trovare, errori, idee. Scrivici, leggiamo tutto.",cpc:"Continua",cpw:"Scrivici",cpsub:"Sebugi Calcio: la mia opinione",rpt:"Segnala un problema con questa risposta",rpth:"Cosa non va?",rty:["Dato sbagliato","Testo poco chiaro","Altro problema"],rpn:"Scrivi qui (facoltativo)",rpc:"Copia messaggio",rps:"Invia per email",rpd:"Copiato. Incollalo in una mail a sebugi.app@gmail.com",rvgo:"Ripassa queste",rvend:"Ripasso finito",beta:"Versione beta",rpx:"Chiudi",comps:{mondiali:"Mondiali",champions:"Champions League","serie-a":"Serie A"}},
en:{sub:"Quiz on historic Italian football matches",mode:"How do you want to play?",ma:"Read the description, guess the match",mb:"See the match, guess the result",comp:"Competition",team:"Team",season:"Season",all:"All competitions",allt:"All teams",allm:"All seasons",start:"Start",review:"Review",home:"Home",which:"Which match is it?",howend:"How did it end?",forgot:"I'm not sure",unk:"I don't know",right:"Correct!",wrong:"Wrong.",ans:"The answer is",next:"Next",stats:"Your answers so far",c_ok:"Correct",c_forgot:"Unsure",c_unk:"Don't know",c_wrong:"Wrong",clear:"Delete my answers",sure:"Sure? Tap again to delete",none:"No match with these filters.",empty:"Nothing here yet.",pen:"on penalties",saved:"Answers stay on this device only.",disc:"Sebugi Calcio is not affiliated with any league, federation or club. Historical facts only.",contact:"Contact: sebugi.app@gmail.com",cpt:"Quick check-in",cps:"out of 5 correct",cpm:"We'd like to know what you think of the app: matches you'd like to see, mistakes, ideas. Write to us, we read everything.",cpc:"Keep going",cpw:"Write to us",cpsub:"Sebugi Calcio: my feedback",rpt:"Report a problem with this answer",rpth:"What's wrong?",rty:["Wrong fact","Unclear text","Other problem"],rpn:"Write here (optional)",rpc:"Copy message",rps:"Send by email",rpd:"Copied. Paste it into an email to sebugi.app@gmail.com",rvgo:"Review these",rvend:"Review finished",beta:"Beta version",rpx:"Close",comps:{mondiali:"World Cup",champions:"Champions League","serie-a":"Serie A"}},
de:{sub:"Quiz zu historischen Spielen des italienischen Fußballs",mode:"Wie möchtest du spielen?",ma:"Beschreibung lesen, das Spiel erraten",mb:"Spiel sehen, das Ergebnis erraten",comp:"Wettbewerb",team:"Mannschaft",season:"Saison",all:"Alle Wettbewerbe",allt:"Alle Mannschaften",allm:"Alle Saisons",start:"Start",review:"Wiederholen",home:"Start",which:"Welches Spiel ist es?",howend:"Wie ging es aus?",forgot:"Ich bin unsicher",unk:"Weiß ich nicht",right:"Richtig!",wrong:"Falsch.",ans:"Die Antwort ist",next:"Weiter",stats:"Deine bisherigen Antworten",c_ok:"Richtig",c_forgot:"Unsicher",c_unk:"Weiß nicht",c_wrong:"Falsch",clear:"Meine Antworten löschen",sure:"Sicher? Noch einmal tippen zum Löschen",none:"Kein Spiel mit diesen Filtern.",empty:"Hier ist noch nichts.",pen:"im Elfmeterschießen",saved:"Die Antworten bleiben nur auf diesem Gerät.",disc:"Sebugi Calcio ist mit keiner Liga, keinem Verband und keinem Verein verbunden. Nur historische Fakten.",contact:"Kontakt: sebugi.app@gmail.com",cpt:"Zwischenstand",cps:"von 5 richtig",cpm:"Uns interessiert, wie dir die App gefällt: Spiele, die du gern sehen würdest, Fehler, Ideen. Schreib uns, wir lesen alles.",cpc:"Weiter",cpw:"Schreib uns",cpsub:"Sebugi Calcio: meine Meinung",rpt:"Ein Problem mit dieser Antwort melden",rpth:"Was stimmt nicht?",rty:["Falsche Angabe","Unklarer Text","Anderes Problem"],rpn:"Hier schreiben (optional)",rpc:"Nachricht kopieren",rps:"Per E-Mail senden",rpd:"Kopiert. Füge sie in eine E-Mail an sebugi.app@gmail.com ein",rvgo:"Diese wiederholen",rvend:"Wiederholung beendet",beta:"Beta-Version",rpx:"Schließen",comps:{mondiali:"WM",champions:"Champions League","serie-a":"Serie A"}}
};
var BETA=true;
var CATS=["ok","forgot","unk","wrong"],COL={ok:"#2E8B3E",forgot:"#E8A800",unk:"#7A8F80",wrong:"#D8312F"};
var lang="it",st={screen:"home",mode:"a",fc:"",ft:"",fs:"",queue:[],cur:null,answered:false,confirm:false,tab:"ok",n:0,blk:[],cpDone:0,rep:false,note:"",rt:0,rv:false,bm:"a"};
var mem={};
function lsGet(k){try{return localStorage.getItem(k)}catch(e){return mem[k]||null}}
function lsSet(k,v){try{localStorage.setItem(k,v)}catch(e){mem[k]=v}}
function load(){try{return JSON.parse(lsGet("sebugi-calcio-v1")||"{}")}catch(e){return{}}}
function save(o){lsSet("sebugi-calcio-v1",JSON.stringify(o))}
(function(){var q="";try{q=new URLSearchParams(location.search).get("lang")||""}catch(e){}var s=q||lsGet("sebugi-calcio-lang")||"it";if(T[s])lang=s})();
function t(k){return T[lang][k]}
function ti(m){return m.titolo[lang]}
function nm(s){return s[lang]}
function res(m,alt){var r=m.risultato;if(m.rigori)r+=" ("+m.rigori+" "+t("pen")+")";return r}
function pool(){return M.filter(function(m){return(!st.fc||m.competizione===st.fc)&&(!st.ft||nm(m.casa)===st.ft||nm(m.ospite)===st.ft)&&(!st.fs||m.stagione===st.fs)})}
function uniq(a){return a.filter(function(x,i){return a.indexOf(x)===i})}
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),x=a[i];a[i]=a[j];a[j]=x}return a}
function art(c){
var s='stroke="#2E8B3E" stroke-width="7" stroke-linejoin="round" stroke-linecap="round" fill="none"';
if(c==="mondiali")return '<svg class="art" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" '+s+'/><path d="M50 30l16 12-6 19H40l-6-19z" fill="#2E8B3E"/><path d="M50 30V10M66 42l22-6M60 61l12 18M40 61L28 79M34 42L12 36" '+s+'/></svg>';
if(c==="champions")return '<svg class="art" viewBox="0 0 100 100"><path d="M28 14h44v22c0 14-10 24-22 24S28 50 28 36z" '+s+'/><path d="M28 22H14c0 14 6 20 16 22M72 22h14c0 14-6 20-16 22" '+s+'/><path d="M50 60v14M34 88h32M40 74h20v14H40z" '+s+'/></svg>';
return '<svg class="art" viewBox="0 0 100 100"><ellipse cx="50" cy="52" rx="42" ry="28" '+s+'/><ellipse cx="50" cy="52" rx="22" ry="12" '+s+'/><path d="M8 52v16c0 12 19 20 42 20s42-8 42-20V52" '+s+'/></svg>'}
function flagSvg(l){
if(l==="it")return '<svg viewBox="0 0 30 30" width="100%" height="100%"><rect width="10" height="30" fill="#1fa04a"/><rect x="10" width="10" height="30" fill="#fff"/><rect x="20" width="10" height="30" fill="#D8312F"/></svg>';
if(l==="de")return '<svg viewBox="0 0 30 30" width="100%" height="100%"><rect width="30" height="10" fill="#222"/><rect y="10" width="30" height="10" fill="#D8312F"/><rect y="20" width="30" height="10" fill="#F2B705"/></svg>';
return '<svg viewBox="0 0 30 30" width="100%" height="100%"><rect width="30" height="30" fill="#1E3A8A"/><path d="M0 0L30 30M30 0L0 30" stroke="#fff" stroke-width="6"/><path d="M0 0L30 30M30 0L0 30" stroke="#D8312F" stroke-width="2.5"/><path d="M15 0v30M0 15h30" stroke="#fff" stroke-width="9"/><path d="M15 0v30M0 15h30" stroke="#D8312F" stroke-width="5"/></svg>'}
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;")}
function head(){return '<header><h1 onclick="go(\'home\')">Sebugi Calcio'+(BETA?' <span style="font-size:10px;font-weight:700;background:#fff;color:#2E8B3E;border-radius:999px;padding:2px 7px;vertical-align:2px">BETA</span>':'')+'</h1><div class="flags">'+["it","en","de"].map(function(l){return '<button class="flag'+(l===lang?" on":"")+'" aria-label="'+l+'" onclick="setLang(\''+l+'\')">'+flagSvg(l)+'</button>'}).join("")+'</div></header><div class="stripe"></div>'}
function foot(){return '<footer>'+t("disc")+'<br>'+t("saved")+' '+t("contact")+'</footer>'}
function opts(list,cur,all){return '<option value="">'+all+'</option>'+list.map(function(v){return '<option value="'+esc(v[0])+'"'+(v[0]===cur?" selected":"")+'>'+esc(v[1])+'</option>'}).join("")}
function render(){
var h=head(),b="";
if(st.screen==="home")b=vHome();else if(st.screen==="quiz")b=vQuiz();else if(st.screen==="cp")b=vCp();else b=vReview();
document.getElementById("app").innerHTML=h+'<main>'+b+'</main>'+foot();document.documentElement.lang=lang}
function vHome(){
var base=M.filter(function(m){return!st.fc||m.competizione===st.fc});
var comps=uniq(M.map(function(m){return m.competizione})).map(function(c){return[c,t("comps")[c]]});
var teams=uniq([].concat.apply([],base.map(function(m){return[nm(m.casa),nm(m.ospite)]}))).sort().map(function(x){return[x,x]});
var b2=base.filter(function(m){return!st.ft||nm(m.casa)===st.ft||nm(m.ospite)===st.ft});
var seas=uniq(b2.map(function(m){return m.stagione})).sort().map(function(x){return[x,x]});
return '<div class="card"><div class="in"><img src="logo-app.png?v=2" alt="Sebugi" style="height:60px;width:auto;display:block;margin-bottom:8px"><div class="tag">Sebugi Calcio</div><p>'+t("sub")+'</p></div>'+art("serie-a")+'</div>'+
'<label>'+t("comp")+'</label><select onchange="setF(\'fc\',this.value)">'+opts(comps,st.fc,t("all"))+'</select>'+
'<label>'+t("team")+'</label><select onchange="setF(\'ft\',this.value)">'+opts(teams,st.ft,t("allt"))+'</select>'+
'<label>'+t("season")+'</label><select onchange="setF(\'fs\',this.value)">'+opts(seas,st.fs,t("allm"))+'</select>'+
'<label>'+t("mode")+'</label>'+
'<button class="btn pri" onclick="start(\'a\')">'+t("ma")+'</button><button class="btn pri" onclick="start(\'b\')">'+t("mb")+'</button>'+
'<button class="btn c" onclick="go(\'review\')">'+t("review")+'</button>'}
function setF(k,v){st[k]=v;if(k==="fc"){st.ft="";st.fs=""}if(k==="ft")st.fs="";render()}
function setLang(l){lang=l;st.ft="";lsSet("sebugi-calcio-lang",l);render()}
function go(s){st.screen=s;st.confirm=false;render()}
function start(m){st.mode=m;var p=pool();if(!p.length){alert2();return}st.bm=m;st.rv=false;st.queue=shuffle(p).map(function(x){return{m:x,mode:m}});st.n=0;st.blk=[];st.cpDone=0;st.screen="quiz";next()}
function alert2(){document.getElementById("app").querySelector("main").insertAdjacentHTML("afterbegin",'<div class="card"><div class="in">'+t("none")+'</div></div>')}
function next(){if(!st.queue.length){if(st.rv){st.rv=false;st.screen="review";render();return}st.queue=shuffle(pool()).map(function(x){return{m:x,mode:st.bm}})}var it=st.queue.pop();st.cur=it.m;st.mode=it.mode;st.rep=false;st.note="";st.answered=false;st.sel=null;
var m=st.cur;
if(st.mode==="a"){var oth=M.filter(function(x){return x.id!==m.id}),sm=shuffle(oth.filter(function(x){return x.competizione===m.competizione})),ot=shuffle(oth.filter(function(x){return x.competizione!==m.competizione})),o=sm.concat(ot).slice(0,3);st.opts=shuffle(o.concat([m])).map(function(x){return{k:x.id,l:ti(x),ok:x.id===m.id}})}
else{st.opts=scoreOpts(m)}
render()}
function scoreOpts(m){var parts=m.risultato.split("-").map(Number),set={},list=[];
function lab(r,p){return r+(m.rigori?" ("+p+" "+t("pen")+")":"")}
var pens=m.rigori||"";
var correct=lab(m.risultato,pens);set[correct]=1;list.push({k:correct,l:correct,ok:true});
var c=[[1,0],[2,1],[1,1],[2,0],[0,0],[3,1],[2,2],[3,2],[0,1],[1,2],[4,0],[3,0]],pc=["4-3","5-4","3-2","5-3","4-2","6-5"];
shuffle(c).forEach(function(x){if(list.length>=4)return;var r=x[0]+"-"+x[1];if(m.rigori){if(x[0]!==x[1])return;var l2=lab(r,shuffle(pc)[0]);if(!set[l2]){set[l2]=1;list.push({k:l2,l:l2})}}else{if(r===m.risultato||set[r])return;set[r]=1;list.push({k:r,l:r})}});
return shuffle(list)}
function answer(i,kind){if(st.answered)return;st.answered=true;var m=st.cur,cat;
if(kind==="forgot")cat="forgot";else if(kind==="unk")cat="unk";else{st.sel=i;cat=st.opts[i].ok?"ok":"wrong"}
st.cat=cat;st.n++;st.blk.push(cat);var d=load();d[m.id+"|"+st.mode]={c:cat,t:Date.now()};save(d);render()}
function vQuiz(){var m=st.cur,a=st.mode==="a";
var body='<div class="tag">'+t("comps")[m.competizione]+' · '+m.stagione+'</div>';
if(a)body+='<p>'+esc(m.indizio[lang])+'</p>';
else body+='<p><b>'+esc(nm(m.casa))+' – '+esc(nm(m.ospite))+'</b><br>'+esc(m.fase)+' · '+m.data.split("-").reverse().join("/")+'<br>'+esc(m.citta)+'</p>';
var out='<div class="card"><div class="in">'+body+'</div>'+art(m.competizione)+'</div>';
out+='<div class="small" style="margin:0 4px 6px;font-weight:700">'+(a?t("which"):t("howend"))+'</div>';
out+=st.opts.map(function(o,i){var c="btn";if(st.answered){if(o.ok)c+=" ok";else if(st.sel===i)c+=" ko";else c+=" dim"}return '<button class="'+c+'" '+(st.answered?"":'onclick="answer('+i+')"')+'>'+esc(o.l)+'</button>'}).join("");
if(!st.answered)out+='<div class="row"><button class="btn c" onclick="answer(0,\'forgot\')">'+t("forgot")+'</button><button class="btn c" onclick="answer(0,\'unk\')">'+t("unk")+'</button></div>';
else{var good=st.cat==="ok";out+='<div class="card" style="min-height:0"><div class="in"><div class="fb" style="color:'+(good?"#2E8B3E":"#D8312F")+'">'+(good?t("right"):(st.cat==="wrong"?t("wrong"):t(st.cat==="forgot"?"forgot":"unk")))+'</div>'+
'<p>'+(a?esc(ti(m)):t("ans")+': '+esc(nm(m.casa))+' '+esc(res(m))+' '+esc(nm(m.ospite)))+'</p>'+'<p class="small" style="margin-top:6px">'+esc(m.testo[lang])+'</p>'+'</div></div>'+chart()+'<button class="btn pri c" onclick="nx()">'+t("next")+'</button>'+vRep()}
return out}
function repMsg(){var m=st.cur;return "Sebugi Calcio (beta)\nPartita: "+m.id+"\nModo: "+st.mode+"\nLingua: "+lang+"\nTipo: "+t("rty")[st.rt]+"\nNote: "+st.note}
function vRep(){if(!st.rep)return '<button class="tab" style="margin:4px 0 10px" onclick="st.rep=true;render()">'+t("rpt")+'</button>';
return '<div class="card" style="min-height:0"><div class="in"><div class="fb">'+t("rpth")+'</div><select onchange="st.rt=+this.value">'+t("rty").map(function(x,i){return '<option value="'+i+'"'+(i===st.rt?" selected":"")+'>'+x+'</option>'}).join("")+'</select><textarea rows="3" placeholder="'+esc(t("rpn"))+'" oninput="st.note=this.value" style="width:100%;margin:8px 0;padding:10px;border-radius:12px;border:1px solid #BBD6AE;font-family:inherit;font-size:14px">'+esc(st.note)+'</textarea>'+
'<div class="row"><button class="btn c" onclick="cpy()">'+t("rpc")+'</button><a class="btn c" style="text-decoration:none" href="mailto:sebugi.app@gmail.com" onclick="this.href=mailRep()">'+t("rps")+'</a></div><p class="small" id="rpd" style="margin:0"></p><p class="small" style="margin:6px 0 0">sebugi.app@gmail.com</p></div></div>'}
function mailRep(){return "mailto:sebugi.app@gmail.com?subject="+encodeURIComponent("Sebugi Calcio: "+t("rpt"))+"&body="+encodeURIComponent(repMsg())}
function cpy(){var x=repMsg(),el=document.getElementById("rpd");try{navigator.clipboard.writeText(x).then(function(){el.textContent=t("rpd")},function(){el.textContent=x})}catch(e){el.textContent=x}}
function nx(){if(st.n&&st.n%5===0&&st.cpDone!==st.n){st.cpDone=st.n;st.screen="cp";render()}else next()}
function cont(){st.screen="quiz";next()}
function vCp(){var last=st.blk.slice(-5),ok=last.filter(function(c){return c==="ok"}).length;
return '<div class="card"><div class="in"><div class="tag">'+t("cpt")+'</div><p style="font-size:22px;font-weight:700;margin-bottom:6px">'+ok+' '+t("cps")+'</p>'+(BETA?'<p>'+t("cpm")+'</p>':'')+'</div>'+art("champions")+'</div>'+chart()+
'<button class="btn pri c" onclick="cont()">'+t("cpc")+'</button>'+(BETA?'<a class="btn c" style="text-decoration:none" href="mailto:sebugi.app@gmail.com?subject='+encodeURIComponent(t("cpsub"))+'">'+t("cpw")+'</a><p class="small" style="text-align:center;margin:0 0 10px">sebugi.app@gmail.com</p>':'')+'<div class="row"><button class="btn c" onclick="go(\'review\')">'+t("review")+'</button><button class="btn c" onclick="go(\'home\')">'+t("home")+'</button></div>'}
function counts(){var d=load(),n={ok:0,forgot:0,unk:0,wrong:0};Object.keys(d).forEach(function(k){if(n[d[k].c]!==undefined)n[d[k].c]++});return n}
function chart(){var n=counts(),tot=n.ok+n.forgot+n.unk+n.wrong||1;
return '<div class="card" style="min-height:0"><div class="in"><div class="fb">'+t("stats")+'</div>'+CATS.map(function(c){var p=Math.round(n[c]*100/tot);return '<div class="bar"><span class="l">'+t("c_"+c)+'</span><div class="t"><div class="f" style="width:'+p+'%;background:'+COL[c]+'"></div></div><b>'+p+'%</b></div>'}).join("")+'</div></div>'}
function vReview(){var d=load(),n=counts();
var tabs='<div class="tabs">'+CATS.map(function(c){return '<button class="tab'+(st.tab===c?" on":"")+'" onclick="st.tab=\''+c+'\';render()">'+t("c_"+c)+' ('+n[c]+')</button>'}).join("")+'</div>';
var items=Object.keys(d).filter(function(k){return d[k].c===st.tab}).map(function(k){var id=k.split("|")[0],m=M.filter(function(x){return x.id===id})[0];return m?'<div class="li">'+esc(ti(m))+'</div>':""}).join("");
return chart()+tabs+'<div class="card" style="min-height:0"><div class="in">'+(items||'<span class="small">'+t("empty")+'</span>')+'</div></div>'+
(n[st.tab]>0?'<button class="btn pri c" onclick="revStart()">'+t("rvgo")+' ('+n[st.tab]+')</button>':'')+'<button class="btn '+(st.confirm?"ko":"")+' c" onclick="clr()">'+(st.confirm?t("sure"):t("clear"))+'</button><button class="btn pri c" onclick="go(\'home\')">'+t("home")+'</button>'}
function revStart(){var d=load(),it=[];Object.keys(d).forEach(function(k){if(d[k].c!==st.tab)return;var p=k.split("|"),m=M.filter(function(x){return x.id===p[0]})[0];if(m)it.push({m:m,mode:p[1]})});if(!it.length)return;st.queue=shuffle(it);st.rv=true;st.n=0;st.blk=[];st.cpDone=0;st.screen="quiz";next()}
function clr(){if(!st.confirm){st.confirm=true;render();return}save({});st.confirm=false;render()}
fetch("data/partite.json?v=2").then(function(r){return r.json()}).then(function(d){M=d.partite;render()}).catch(function(){document.getElementById("app").innerHTML="<p style='padding:20px'>Sebugi Calcio: impossibile caricare i dati.</p>"});
