var jskanji=function(){function W(a){function f(a){return a.replace(/[A-Za-z0-9!-\/:-@\[-`{-~]/g,function(a){return String.fromCharCode(a.charCodeAt(0)+65248)})}function w(a){-1==z.indexOf(a)&&z.push(a)}var z=[a],e="",m="",e=e=m=m="",e=a.toLowerCase();w(e);m=f(e);w(m);m=e.toUpperCase();m!==e&&(w(m),m=f(m),w(m));1<a.length&&(e=e.substring(0,1).toUpperCase()+e.substring(1),w(e),e=f(e),w(e));return z}var a=null,D=null,H=new function(){var B=this,f=null,w=[],z=!1,e=[],m=0,I=0,t=[],M=0,u=-1,N=!1,O=null,
y={},J={},P=null,C=-1,H="";this.init=function(c,d){f=c;a=d;O=new symbolsUtility;P=document.createEvent("CustomEvent");P.initCustomEvent("custom_event",!0,!1,"detail");window.addEventListener("custom_event",function(){a.getKeyMode()!=KEY_MODE.TRANSFORM&&E()});y.completed=!1;R()};this.uninit=function(){B.empty()};this.click=function(c,d){IME_LAYOUTS.EN_FULL===a.getImeLayout()&&f.resetUpperCase();G(c,d);x()};this.select=function(c){IME_LAYOUTS.EN_FULL===a.getImeLayout()&&f.resetUpperCase();var d=c.word,
b=c.data,g=c.index,h=c.convlen;debug("select ["+d+"] ["+b+"] ["+g+"] ["+h+"]");if(statusManager.getCandidateUpdating())debug("Updating candidate panel");else{a.setCandidateUpdating(!0);!d&&b?s(b):s(d);a.getKeyMode()==KEY_MODE.NORMAL?0>=h?a.clearText():(a.setCursor(TEXT_LAYER1,h),a.commitText(TEXT_LAYER1)):a.getKeyMode()==KEY_MODE.SELECT?(a.commitText(TEXT_LAYER1),a.setKeyMode(KEY_MODE.NORMAL)):a.getKeyMode()==KEY_MODE.TRANSFORM?(a.commitText(TEXT_LAYER1),0<a.getText(TEXT_LAYER1).length&&l()):(a.commitText(TEXT_LAYER1),
a.setKeyMode(KEY_MODE.NORMAL));0===a.getText(TEXT_LAYER1).length&&a.setKeyMode(KEY_MODE.NORMAL);debug("::: learnDic_add index["+g+"] indexof["+typeof g+"]");h=CONV_LEARNING.ON;settingManager.getSetting(SETTING.CONVERT_LEARN)||(h=CONV_LEARNING.OFF);if(c.tab&&-1!=IME_SYMBOL_TAB_ORDER.indexOf(c.tab))X(d,c.tab),convWrapper.learn(h,"0",CONV_NO_CONV_LEARNING,d,d);else if("string"===typeof g){0<=g?(debug("::: learnDic_add index["+g+"]"),convWrapper.learn(h,processId,g,"","",function(){0===a.getText(TEXT_LAYER1).length?
A(CONV_MODE_CONNECTION_ANALYZE,"",""):G(0);x()})):(d||(d=b),convWrapper.learn(h,"0",CONV_NO_CONV_LEARNING,b,d,function(){0===a.getText(TEXT_LAYER1).length?A(CONV_MODE_CONNECTION_ANALYZE,"",""):G(0);x()}));return}m=0;G(0);x()}};var X=function(a,d){var b=new Date,b={timeStamp:b.getFullYear()+""+("00"+(b.getMonth()+1)).slice(-2)+("00"+b.getDate()).slice(-2)+("00"+b.getHours()).slice(-2)+("00"+b.getMinutes()).slice(-2)+("00"+b.getSeconds()).slice(-2)+("000"+b.getMilliseconds()).slice(-3),tabName:d,data:a};
setDBData("history",b,function(){selectDBData("history",d?{index:"tabName",data:[d]}:null,function(a){a.sort(function(a,c){return a.timeStamp<c.timeStamp?1:-1});a=a.slice(MAX_CATEGORY_HISTORY);for(var c=0,b=a.length;c<b;c++)deleteDBData("history",a[c].data)})})};this.empty=function(){debug("empty buffer.");a.clearText();a.setKeyMode(KEY_MODE.NORMAL);m=0;e=[];t=[];l();z=!1};this.activate=function(c){a.setInputType(c.type);debug("Activate. Input type: "+a.getInputType());a.clearText();B.addSelectionChangeEvent()};
this.deactivate=function(){r()};this.chkInputFlick=function(c){return MAP_INPUT_FLICK_KEY[c]&&!a.isQwerty()?!0:!1};this.delLearnDic=function(c,d){convWrapper.deleteWord(c,d,function(){0===a.getText(TEXT_LAYER1).length?A(CONV_MODE_CONNECTION_ANALYZE,"",""):(G(0),x())})};this.getNumCategoryHistory=function(a,d){if(-1!=a.indexOf("history")){var b=a.slice(0,a.indexOf("_history"));getDBRecordCount("history",b?{index:"tabName",data:[b]}:null,function(a){d(a)})}else d&&d()};this.getCategoryHistory=function(a,
d){-1!=a.indexOf("history")?B.getNumCategoryHistory(a,function(b){var g=a.slice(0,a.indexOf("_history"));f.resetCategoryHistory(g,[],!1,function(){f.categoryJumpTabs(a)});b&&0<b?selectDBData("history",g?{index:"tabName",data:[g]}:null,function(a){var c=[];a.sort(function(a,c){return a.timeStamp<c.timeStamp?1:-1});for(var b=0,e=0,l=a.length;e<l;e++){var q=a[e];if(q.tabName==g&&(b++,c.push([q.data,q.data,q.tabName]),b>MAX_CATEGORY_HISTORY))break}f.resetCategoryHistory(g,c,!0,d)}):f.resetCategoryHistory(g,
[],!0,d)}):d&&d()};var R=function(){if(!y.completed){y=[];J=[];for(var a=Object.keys(IME_SYMBOL_TAB_ORDER).length,d=0,b=IME_SYMBOL_TAB_ORDER.length;d<b;d++)O.loadUnicode6Emoji(IME_SYMBOL_TAB_ORDER[d],function(b,d){if(d){y[b]=[];J[b]={};var e=d.category,f=[],v=[],l;for(l in e){var q=e[l];f[l]=q.data;q=q.item;"history"==l?v[l]=y[b].history:(v[l]=[],q.forEach(function(a){b===IME_SYMBOL_TAB_NAMES.EMOJI&&(a=O.convertUnicode6(a));v[l].push([a,a,b])}))}y[b]=v;f.categoryOrder=d.categoryList;J[b]=f;0===--a&&
(y.completed=!0)}})}},Y=function(a,d){selectDBData("history",a?{index:"tabName",data:[a]}:null,function(a){a.sort(function(a,c){return a.timeStamp<c.timeStamp?1:-1});R();for(var c=0,h=IME_SYMBOL_TAB_ORDER.length;c<h;c++)y[IME_SYMBOL_TAB_ORDER[c]].history=[];c=0;for(h=a.length;c<h;c++){var e=a[c];y[e.tabName].history.push([e.data,e.data,e.tabName])}d&&d(y,J)})};this.candidateSymbolList=function(c,d){e=[];var b="",b=a.getKeyMode()===KEY_MODE.TRANSFORM?a.getText(TEXT_LAYER2):a.getText(TEXT_LAYER1);0!=
b.length&&(s(b),a.clearText(),n(),f.setComposition(a.getText(TEXT_LAYER1)));d&&Y(c,d)};var G=function(a,d){w.push({code:a,flickKey:!!d})},x=function(){debug("start queue working");if(z)debug("queue is working. wait");else if(z=!0,w.length){var a=w.shift(),d=a.code,a=a.flickKey;debug("queue pops key "+String.fromCharCode(d));S(d)||Z(d,a);z=!1;x()}else debug("queue is empty"),z=!1,dispatchEvent(P)},Z=function(c,d){var b=String.fromCharCode(c),g=a.getText(TEXT_LAYER1);debug(":::::handleNormalKey "+b);
debug(":::::inputStr "+g);var e=!1;g.length>=CONST_MAX_INPUT_LEN&&(e=!0);m=c;a.getKeyMode()!==KEY_MODE.TRANSFORM&&a.getKeyMode()!==KEY_MODE.H2K||r();if(a.getImeType()==IME_TYPE.NUM)return s(b),1;if(a.getImeLayout()!==IME_LAYOUTS.EN_FULL||!a.isInputModePhonetic()&&!a.isInputTypePassword()&&settingManager.getSetting(SETTING.CONVERT_ANALYZE))if(a.getImeLayout()!==IME_LAYOUTS.EN||settingManager.getSetting(SETTING.INPUT_TOGGLE)||!a.isInputModePhonetic()&&!a.isInputTypePassword()&&settingManager.getSetting(SETTING.CONVERT_ANALYZE))if(a.getImeLayout()!==
IME_LAYOUTS.JP||settingManager.getSetting(SETTING.INPUT_TOGGLE)||!a.isInputModePhonetic()&&!a.isInputTypePassword()){var g=a.getTextCursor(TEXT_LAYER0),g=g.substring(g.length-1),k="";a:{var l=C,k=IME_HIRAGANA_CYCLE_TABLE[l],v=IME_HIRAGANA_CYCLE_TABLE[IMEKeyMap[b]];IME_LAYOUTS.EN==a.getImeLayout()&&(k=IME_HALF_ALPHABET_CYCLE_TABLE[l],v=IME_HALF_ALPHABET_CYCLE_TABLE[IMEKeyEnMap[b]]);if(k&&v&&k==v&&(-1==l?0:a.getLayoutType()==LAYOUT_TYPE.TEN_KEY&&settingManager.getSetting(SETTING.INPUT_TOGGLE)&&(null!=
D||settingManager.getSetting(SETTING.CURSOR_AUTO_MOVE)==SETTING_CURSOR_AUTO_MOVE_TIME.OFF)))for(l=k.length,v=0;v<l;v++)if(k[v]===g){k=[!0,k[(v+1)%l]];break a}k=[!1,b]}if(k[0])a.replaceCursorForward(k[1]);else{if(e)return;a.isInputModePhonetic()||a.isInputTypePassword()||a.getImeType()==IME_TYPE.EN&&!settingManager.getSetting(SETTING.CONVERT_ANALYZE)?a.getImeLayout()===IME_LAYOUTS.ROMA?(a.insertText(k[1]),a.convertText("hira")&&(g=a.getText(TEXT_LAYER1),g.substring(g.length-1).match(/^[a-z]+$/)?(a.setCursor(TEXT_LAYER1,
g.length-1),s(a.getTextCursor(TEXT_LAYER1)),a.commitText(TEXT_LAYER1)):r())):(r(),a.insertText(k[1])):(a.insertText(k[1]),a.getImeLayout()===IME_LAYOUTS.ROMA&&a.convertText("hira"))}}else{if(e)return;r();a.insertText(b)}else{if(e)return;r();a.insertText(b)}else{if(e)return;r();f.sendKey(c)}a.getKeyMode()!==KEY_MODE.NORMAL&&a.getKeyMode()!==KEY_MODE.SELECT||T();p();C=-1;d&&(String.fromCharCode(c)in IMEKeyMap&&a.getImeLayout()===IME_LAYOUTS.JP?C=IMEKeyMap[String.fromCharCode(c)]:String.fromCharCode(c)in
IMEKeyEnMap&&a.getImeLayout()===IME_LAYOUTS.EN&&(C=IMEKeyEnMap[String.fromCharCode(c)]));return 1},S=function(c){m=c;var d=!0;switch(c){case IME_SPECIAL_KEY.SPACE:debug("space");r();a.getImeType()===IME_TYPE.JP||a.getImeLayout()===IME_LAYOUTS.NUM_EM||a.getImeLayout()===IME_LAYOUTS.NUM_FULL_EM?f.sendKey(12288):f.sendKey(c);e=[];break;case 0:p();break;case IME_SPECIAL_KEY.BACK:var b=a.getTextCursor(TEXT_LAYER0);0===b.length&&(e=[]);if(0>C)break;d=b.substring(b.length-1);b="";a:{var g=C,b=-1,h=IME_HIRAGANA_CYCLE_TABLE[g];
IME_LAYOUTS.EN==a.getImeLayout()&&(h=IME_HALF_ALPHABET_CYCLE_TABLE[g]);b=h.length;for(g=0;g<b;g++)if(h[g]===d){b=[!0,h[(g+b-1)%b]];break a}b=[!1,""]}b[0]&&(a.replaceCursorForward(b[1]),f.setComposition(a.getText(TEXT_LAYER1)),T());p();d=!1;break;case IME_SPECIAL_KEY.PREVIOUS:case IME_SPECIAL_KEY.NEXT:a:{b=c==IME_SPECIAL_KEY.PREVIOUS;n();(a.isInputModePhonetic()||a.isInputTypePassword()||a.getImeType()==IME_TYPE.EN&&!settingManager.getSetting(SETTING.CONVERT_ANALYZE))&&r();h=a.getText(TEXT_LAYER1);
g=a.getTextCursor(TEXT_LAYER1);if(b)if(1===g.length&&(a.getKeyMode()===KEY_MODE.TRANSFORM||a.getKeyMode()===KEY_MODE.H2K))break a;else{if(a.getKeyMode()===KEY_MODE.NORMAL&&0<h.length){a.setKeyMode(KEY_MODE.SELECT);l();p();break a}}else if(a.getKeyMode()!==KEY_MODE.NORMAL&&g.length===h.length&&0<h.length){a.setKeyMode(KEY_MODE.NORMAL);l();p();break a}else l();0===h.length?(b?f.moveCursorPrev():f.moveCursorNext(),e=[]):(b?a.cursorPrev():a.cursorNext(),a.getKeyMode()===KEY_MODE.SELECT||a.getKeyMode()===
KEY_MODE.TRANSFORM?p():a.getKeyMode()===KEY_MODE.H2K&&U())}break;case IME_SPECIAL_KEY.TRANSFORM:a.getKeyMode()!==KEY_MODE.TRANSFORM?(a.setKeyMode(KEY_MODE.TRANSFORM),debug("handleTransform"),b=a.getText(TEXT_LAYER1),0===b.length?(debug("empty input buf, return"),p()):(h=a.getDividePos(),h==b.length&&(h=0),A(CONV_MODE_MULTI_CONV,h,b))):N&&(++u==e.length&&(u=0),e.selected=u,f.setHighlightCandidate(u),Q(),l());break;case IME_SPECIAL_KEY.H2K:b=a.getText(TEXT_LAYER1);if(0===b.length)break;a.getKeyMode()===
KEY_MODE.H2K?(I===KEY_MODE.SELECT||I===KEY_MODE.TRANSFORM||a.getCursor(TEXT_LAYER1)<b.length?a.setKeyMode(KEY_MODE.SELECT):a.setKeyMode(KEY_MODE.NORMAL),l(),p()):U();break;case IME_SPECIAL_KEY.CASE_CHANGE:if(a.getKeyMode()===KEY_MODE.TRANSFORM||a.getKeyMode()===KEY_MODE.H2K)break;b=a.getTextCursor(TEXT_LAYER1);b=b.substring(b.length-1);h=IME_HIRAGANA_CASE_TABLE[b];if(!h)if(a.getImeLayout()===IME_LAYOUTS.EN&&b)b.match(/^[a-z]+$/)?h=b.toUpperCase():b.match(/^[A-Z]+$/)&&(h=b.toLowerCase());else break;
if(!h)break;a.replaceCursorForward(h);n();l();p();break;case IME_SPECIAL_KEY.CAPSLOCK:b=!1;if(a.getImeType()===IME_TYPE.NUM)switch(a.getLayoutType()){case LAYOUT_TYPE.FULL_KEY:a.setLayoutType(LAYOUT_TYPE.FULL_KEY_CAP);b=!0;break;case LAYOUT_TYPE.FULL_KEY_CAP:a.setLayoutType(LAYOUT_TYPE.FULL_KEY);break;case LAYOUT_TYPE.FULL_KEY_EM:a.setLayoutType(LAYOUT_TYPE.FULL_KEY_CAP_EM);b=!0;break;case LAYOUT_TYPE.FULL_KEY_CAP_EM:a.setLayoutType(LAYOUT_TYPE.FULL_KEY_EM)}K(a.getImeLayout());f.setUpperCaseLock(b);
break;case IME_SPECIAL_KEY.H2Z:B.changeKeyboardLayout(IME_SPECIAL_KEY.Z2H);break;case IME_SPECIAL_KEY.Z2H:B.changeKeyboardLayout(IME_SPECIAL_KEY.H2Z);break;case IME_SPECIAL_KEY.BASIC_LAYOUT:r();a.isInputTypePassword()?L(IME_TYPE.EN,SETTING.LAYOUT_EN):L(IME_TYPE.JP,SETTING.LAYOUT_BASIC);K(a.getImeLayout());break;case IME_SPECIAL_KEY.EN_LAYOUT:r();L(IME_TYPE.EN,SETTING.LAYOUT_EN);K(a.getImeLayout());break;case IME_SPECIAL_KEY.NUM_LAYOUT:r();L(IME_TYPE.NUM,SETTING.LAYOUT_NUM);K(a.getImeLayout());break;
case F.DOM_VK_RETURN:$();break;case F.DOM_VK_BACK_SPACE:debug("Backspace key");0===a.getText(TEXT_LAYER1).length?(0==e.length&&(f.sendKey(F.DOM_VK_BACK_SPACE),0<f.textBeforeCursor().length&&(convWrapper.clearParam(),convWrapper.jpConvertEngineModeInit(CONV_DIC_LOAD_FLG.OFF))),e=[],a.setKeyMode(KEY_MODE.NORMAL),n(),l()):(n(),a.getKeyMode()===KEY_MODE.H2K||a.getKeyMode()===KEY_MODE.TRANSFORM?(I=a.getKeyMode(),a.setKeyMode(KEY_MODE.NORMAL),a.cursorMoveEnd()):a.deleteCurrentText(),l(),p());break;case IME_SPECIAL_KEY.MARK:if(a.isInputModePhonetic())break;
r();B.empty();f.showMarkList();break;default:d=!1}return d?(C=-1,1):0>=c?(debug("ignore meaningless key code <= 0"),1):0},K=function(a){B.empty();f.alterKeyboard(a)},U=function(){debug("handleH2K ");a.getKeyMode()!==KEY_MODE.H2K&&(I=a.getKeyMode(),a.setKeyMode(KEY_MODE.H2K));l()},$=function(){var c="",d="",b="";a.getKeyMode()===KEY_MODE.TRANSFORM?(c=a.getText(TEXT_LAYER2),d=a.getTextCursor(TEXT_LAYER2)):(c=a.getText(TEXT_LAYER1),d=a.getTextCursor(TEXT_LAYER1));b=a.getTextCursor(TEXT_LAYER1);0===c.length?
(e=[],f.sendKey(F.DOM_VK_RETURN),p()):a.getKeyMode()===KEY_MODE.TRANSFORM?(s(d),a.commitText(TEXT_LAYER1),n(),f.setComposition(c.substring(d.length)),"selected"in e&&(c=CONV_LEARNING.ON,settingManager.getSetting(SETTING.CONVERT_LEARN)||(c=CONV_LEARNING.OFF),convWrapper.learn(c,processId,""+e.selected,"","",function(){0===a.getText(TEXT_LAYER1).length?A(CONV_MODE_CONNECTION_ANALYZE,"",""):p()}))):0!==b.length&&(s(d),a.commitText(TEXT_LAYER1),n(),f.setComposition(c.substring(d.length)),aa(d,b,function(){0===
a.getText(TEXT_LAYER1).length?A(CONV_MODE_CONNECTION_ANALYZE,"",""):(a.setKeyMode(KEY_MODE.NORMAL),l(),p())}))},p=function(){var c=a.getText(TEXT_LAYER1);0===c.length?(debug("Buffer is empty; send empty candidate list."),a.setKeyMode(KEY_MODE.NORMAL),e=[],l(),x()):a.getKeyMode()===KEY_MODE.SELECT?(debug("... _firstkana : "+a.getTextCursor(TEXT_LAYER1)+" ..."),debug("... _firstkana.length : "+a.getCursor(TEXT_LAYER1)+" ..."),debug("... _currentKeycode1 : "+m+" ..."),A(CONV_MODE_ANALYZE,a.getDividePos(),
a.getTextCursor(TEXT_LAYER1))):a.getKeyMode()===KEY_MODE.TRANSFORM?A(CONV_MODE_MULTI_CONV,a.getDividePos(),c):A(CONV_MODE_ANALYZE,"",c)},s=function(c){n();0===a.getText(TEXT_LAYER0).length?f.setComposition(""):f.setComposition(c);f.endComposition(c)},l=function(){function c(a,c,d){d&&n();d=Array(2);d[0]={length:a.length,selectionType:CLAUSE_ATTR_MAP.SELECTED_CONVERTED_TEXT};d[1]={length:c.length-a.length,selectionType:CLAUSE_ATTR_MAP.CONVERTED_TEXT};f.setComposition(c,a.length,d)}var d=a.getText(TEXT_LAYER1);
debug("sending pending symbols: "+d);0===d.length?(a.setKeyMode(KEY_MODE.NORMAL),f.endComposition()):a.getKeyMode()===KEY_MODE.NORMAL?D||f.setComposition(d):a.getKeyMode()===KEY_MODE.TRANSFORM?c(a.getTextCursor(TEXT_LAYER2),a.getText(TEXT_LAYER2),!0):a.getKeyMode()===KEY_MODE.SELECT?c(a.getTextCursor(TEXT_LAYER1),d):a.getKeyMode()===KEY_MODE.H2K?(c(a.getTextCursor(TEXT_LAYER1),d,!0),ba()):(n(),f.setComposition(d))},aa=function(c,d,b){var e=CONV_LEARNING.ON;settingManager.getSetting(SETTING.CONVERT_LEARN)||
(e=CONV_LEARNING.OFF);convWrapper.learn(e,"0",CONV_NO_CONV_LEARNING,d,c,function(){b&&(b(),0<a.getText(TEXT_LAYER1).length&&!a.isInputModePhonetic()&&!a.isInputTypePassword()?(x(),f.keyConvertInputMode(!0)):f.keyConvertInputMode(!1))})},E=function(a){debug("update candidate list");f.sendCandidates(e,a)},A=function(c,d,b){var g=b,h=a.getText(TEXT_LAYER0);N=!1;if(0==b.length&&c!==CONV_MODE_CONNECTION_ANALYZE||!settingManager.getSetting(SETTING.CONVERT_ANALYZE)&&(c!=CONV_MODE_MULTI_CONV||a.getKeyMode()!=
KEY_MODE.TRANSFORM))l(),e=[],t=[],u=-1,"selected"in e&&delete e.selected,x();else if(!a.isInputModePhonetic()&&!a.isInputTypePassword()){d&&(h=h.substr(0,d));if(a.getKeyMode()!=KEY_MODE.TRANSFORM&&a.getImeLayout()==IME_LAYOUTS.ROMA){var k=b.replace(/([a-z]+)$/i,"");0<k.length&&k!==g&&(g=k,d&&(d=g.length))}debug("kanaStr :"+b+", searchStr :"+g+"\n");k=function(d){if(a.getTextCursor(TEXT_LAYER1)===b||c!==CONV_MODE_ANALYZE)if(a.getText(TEXT_LAYER1)===b||c!==CONV_MODE_MULTI_CONV)if(c==CONV_MODE_ANALYZE||
c==CONV_MODE_CONNECTION_ANALYZE){var g=V(a.getText(TEXT_LAYER0),a.getCursor(TEXT_LAYER0));debug("::: Recv Data[0] : "+d[0]+" :::\n");debug("::: Recv Data.length : "+d.length+" :::\n");processId=d[0];d.splice(0,2);for(var k=[],q={},m=0,r=d.length;m<r;m++){var n=d[m];if(n[0]){var p=[decodeURIComponent(n[1]),decodeURIComponent(n[0]),n[2],n[3],n[4]];p[0]in q||(q[p[0]]=!0,k.push(p))}}debug("::: Convert Data : "+k+" :::\n");debug("::: IMESocket Close :::\n");e=k;0==e.length&&(e=[]);g.forEach(function(a,
c){var b=[a,h,"-1","0"];b[0]in q||(q[b[0]]=!0,e.push(b))});u=-1;"selected"in e&&delete e.selected;Q();l();debug("::: IMESocket Close :: candidateList:["+e+"]:::\n");E(function(){a.setCandidateUpdating(!1);c==CONV_MODE_CONNECTION_ANALYZE&&statusManager.setConnectionLearning(!0);x()})}else{g=[];if(a.getKeyMode()==KEY_MODE.SELECT||a.getKeyMode()==KEY_MODE.NORMAL)g=V(a.getText(TEXT_LAYER0),a.getCursor(TEXT_LAYER0));k=[];processId=d[0];var s=d[2].slice(0);M=decodeURIComponent(d[1]);debug("::: segment cnt : "+
M+":::\n");var w=s[0];s.splice(0,1);q={};m=0;for(r=s.length;m<r;m++)n=s[m],p=[decodeURIComponent(n[0]),decodeURIComponent(w),n[1]],null!=n[2]&&p.push(n[2]),p[0]in q||(q[p[0]]=!0,k[m]=p);e=k;0==e.length&&(e=[]);g.forEach(function(a,b){var c=[a,h,"-1","0"];c[0]in q||(q[c[0]]=!0,e.push(c))});t=[];t.push(e);u=0;e.selected=0;debug("::: convert_datalst : "+s+":::\n");for(m=0;m<M;m++)g=d[m+2],0<m&&(p=[decodeURIComponent(g[1][0]),decodeURIComponent(g[0]),g[1][1]],t.push(p));Q();l();E(function(){a.setCandidateUpdating(!1);
N=!0;f.setHighlightCandidate(u);x()})}};c==CONV_MODE_ANALYZE?convWrapper.analyze(g,d,k):c==CONV_MODE_MULTI_CONV?convWrapper.conversionMultiple(g,d,k):c==CONV_MODE_CONNECTION_ANALYZE&&convWrapper.analyze("","",k)}},ba=function(){convWrapper.tracEngKana(a.getTextCursor(TEXT_LAYER1),function(c){if(0<a.getTextCursor(TEXT_LAYER1).length){var d=c[1];processId=c[0];c.splice(0,2);for(var b=Array(c.length),g=0,h=c.length;g<h;g++){var f=c[g],f=[decodeURIComponent(f[0]),decodeURIComponent(d),f[1]];b[g]=f}e=
b;0<e.length&&(b=a.getText(TEXT_LAYER1),c=a.getTextCursor(TEXT_LAYER1),d=b.substr(c.length),b=b.substr(c.length),a.replaceTextTransform([[c,c],[d,b]]))}x()})},V=function(c,d){var b="";switch(a.getImeLayout()){case IME_LAYOUTS.ROMA:case IME_LAYOUTS.EN:case IME_LAYOUTS.EN_FULL:b=c,d&&(b=c.substr(0,d))}var e=[];""!==b&&(e=W(b));return e};this.isLayoutSwitchKey=function(a){var d=!1;switch(a){case IME_SPECIAL_KEY.BASIC_LAYOUT:case IME_SPECIAL_KEY.EN_LAYOUT:case IME_SPECIAL_KEY.NUM_LAYOUT:d=!0}return d};
this.isRepeatKey=function(a){var d=!1;switch(a){case F.DOM_VK_BACK_SPACE:case IME_SPECIAL_KEY.TRANSFORM:case IME_SPECIAL_KEY.NEXT:case IME_SPECIAL_KEY.PREVIOUS:d=!0}return d};this.changeKeyboardLayout=function(c){var d=!1,b=null,e=null,f=null,k=!1;switch(c){case IME_SPECIAL_KEY.BASIC_LAYOUT:b=IME_SPECIAL_KEY.NUM_LAYOUT;e=IME_TYPE.NUM;f=SETTING.LAYOUT_NUM;break;case IME_SPECIAL_KEY.EN_LAYOUT:b=IME_SPECIAL_KEY.BASIC_LAYOUT;e=IME_TYPE.JP;f=SETTING.LAYOUT_BASIC;break;case IME_SPECIAL_KEY.NUM_LAYOUT:b=
IME_SPECIAL_KEY.EN_LAYOUT;e=IME_TYPE.EN;f=SETTING.LAYOUT_EN;break;case IME_SPECIAL_KEY.H2Z:case IME_SPECIAL_KEY.Z2H:a.getImeType()===IME_TYPE.NUM&&(b=IME_SPECIAL_KEY.NUM_LAYOUT,e=IME_TYPE.NUM,f=SETTING.LAYOUT_NUM,k=!0)}if(null!=b&&null!=e&&null!=f){a.setImeType(e);d=c=null;-1!==KeyboardEventHandler.getOrientation().indexOf("portrait")?(c=f.PORTRAIT,d=settingManager.getSetting(f.PORTRAIT)):(c=f.LANDSCAPE,d=settingManager.getSetting(f.LANDSCAPE));switch(d){case LAYOUT_TYPE.TEN_KEY:a.setLayoutType(k?
LAYOUT_TYPE.TEN_KEY_EM:LAYOUT_TYPE.FULL_KEY);break;case LAYOUT_TYPE.FULL_KEY:a.setLayoutType(k?LAYOUT_TYPE.FULL_KEY_EM:LAYOUT_TYPE.TEN_KEY);break;case LAYOUT_TYPE.FULL_KEY_CAP:a.setLayoutType(k?LAYOUT_TYPE.FULL_KEY_CAP_EM:LAYOUT_TYPE.TEN_KEY);break;case LAYOUT_TYPE.TEN_KEY_EM:a.setLayoutType(k?LAYOUT_TYPE.TEN_KEY:LAYOUT_TYPE.FULL_KEY_EM);break;case LAYOUT_TYPE.FULL_KEY_EM:a.setLayoutType(k?LAYOUT_TYPE.FULL_KEY:LAYOUT_TYPE.TEN_KEY_EM);break;case LAYOUT_TYPE.FULL_KEY_CAP_EM:a.setLayoutType(k?LAYOUT_TYPE.FULL_KEY_CAP:
LAYOUT_TYPE.TEN_KEY_EM);break;default:a.setLayoutType(LAYOUT_TYPE.TEN_KEY)}settingManager.setSetting(c,a.getLayoutType());S(b);d=!0}return d};var L=function(c,d){var b="";a.setImeType(c);b=-1!==KeyboardEventHandler.getOrientation().indexOf("portrait")?settingManager.getSetting(d.PORTRAIT):settingManager.getSetting(d.LANDSCAPE);a.setLayoutType(b)},T=function(){var c=a.getText(TEXT_LAYER1),d=a.getCursor(TEXT_LAYER1);if(0<settingManager.getSetting(SETTING.CURSOR_AUTO_MOVE)&&a.getLayoutType()===LAYOUT_TYPE.TEN_KEY){var b=
null;c.length==d?a.getKeyMode()==KEY_MODE.SELECT?(b=Array(1),b[0]={length:c.length,selectionType:CLAUSE_ATTR_MAP.SELECTED_RAW_TEXT}):(b=Array(2),b[0]={length:c.length-1,selectionType:CLAUSE_ATTR_MAP.RAW_INPUT},b[1]={length:1,selectionType:CLAUSE_ATTR_MAP.SELECTED_RAW_TEXT}):(b=Array(2),b[0]={length:d,selectionType:CLAUSE_ATTR_MAP.SELECTED_RAW_TEXT},b[1]={length:c.length-d,selectionType:CLAUSE_ATTR_MAP.RAW_INPUT});n();f.setComposition(c,d,b);D=window.setTimeout(function(){c=a.getText(TEXT_LAYER1);
d=a.getCursor(TEXT_LAYER1);c.length==d&&a.getKeyMode()!=KEY_MODE.SELECT&&(b=null);n();f.setComposition(c,d,b)},settingManager.getSetting(SETTING.CURSOR_AUTO_MOVE))}else n(),f.setComposition(c,d)},n=function(){D&&(window.clearTimeout(D),D=null)},r=function(){var c=a.getText(TEXT_LAYER2),d=a.getTextCursor(TEXT_LAYER2),b=a.getTextCursor(TEXT_LAYER1);0<c.length?s(c):0<d.length?s(d):0<b.length?s(b):s(a.getText(TEXT_LAYER0));a.clearText();a.setKeyMode(KEY_MODE.NORMAL);e=[];t=[];u=-1},Q=function(){if(a.getKeyMode()==
KEY_MODE.TRANSFORM){if(0<t.length&&0<=u&&u<t[0].length){for(var c=[[t[0][u][0],t[0][u][1]]],d=1,b=t.length;d<b;d++)c.push([t[d][0],t[d][1]]);a.replaceTextTransform(c)}}else b=a.getText(TEXT_LAYER1),c=a.getTextCursor(TEXT_LAYER1),d=b.substr(c.length),b=b.substr(c.length),a.replaceTextTransform([[c,c],[d,b]])};this.clearInputBuf=function(){r();B.empty();E()};this.addSelectionChangeEvent=function(){KeyboardEventHandler.registEvent("selectionchange",function(c){var d=c.target;0===(d.textBeforeCursor+
d.textAfterCursor).length&&(a.clearText(),e=[],E(),a.setKeyMode(KEY_MODE.NORMAL),t=[],u=-1,l());ca(c.target)})};var ca=function(c){c=c.textBeforeCursor+c.textAfterCursor;0===a.getText(TEXT_LAYER0).length&&0<c.length&&H===c&&statusManager.getConnectionLearning()&&(convWrapper.clearParam(),convWrapper.jpConvertEngineModeInit(CONV_DIC_LOAD_FLG.OFF,function(){statusManager.setConnectionLearning(!1);e=[];E()}));H=c}};"function"===typeof define&&define.amd&&define("jskanji",[],function(){return H});"undefined"!==
typeof InputMethods&&(InputMethods.jskanji=H);if(!F)var F={DOM_VK_BACK_SPACE:8,DOM_VK_RETURN:13,DOM_VK_SPACE:32,DOM_VK_LEFT:37,DOM_VK_RIGHT:39}}();
