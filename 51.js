(function(){var all=document.getElementsByTagName('*');for(var i=0;i<all.length;i++)if(typeof all[i].id!='undefined'&&typeof window[all[i].id]=='undefined')window[all[i].id]=all[i];})()
browserWarningMessage('Please use Google Chrome, Apple Safari or another supported browser.');if(navigator.userAgent.indexOf('iPad')!==-1){var splashscreen=document.createElement('link');splashscreen.rel='apple-touch-startup-image';splashscreen.href='icon.png';document.getElementsByTagName('head')[0].appendChild(splashscreen);}
window.addEventListener('load',function(){WhatToDo.style.display='block';NSB.List_jqm_init('lstWhatToDo','',true,'100%',false);lstWhatToDo_ref=new iScroll('lstWhatToDo_scroller',{bounce:true,zoom:false});lstWhatToDo.refresh=function(){if(typeof lstWhatToDo_ref!='undefined')setTimeout(NSB.refresh,100,lstWhatToDo_ref)};NSB.addProperties(lstWhatToDo,lstWhatToDo_scroller);(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('lstWhatToDo_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
NSB.addProperties(hBar);NSB.addDisableProperty(hBar);if(typeof(hBar.onclick)=='function'){if(typeof(hBar_left)!='undefined')hBar_left.onclick=function(){hBar.onclick(hBar_left.getAttribute('nsbvalue'))};if(typeof(hBar_right)!='undefined')hBar_right.onclick=function(){hBar.onclick(hBar_right.getAttribute('nsbvalue'))}};WhatToDo.style.display='none';},false);WhatToDo.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};NSB.addProperties(WhatToDo);lstWhatToDo.onclick=function(i){savethefunction_rvar="";if(TypeName(i)=="object"){return savethefunction_rvar;}
switch(True){case((i)==0):break;case((i)==1):ChangeForm(frmProvinces);break;case((i)==2):break;case((i)==3):localStorage.setItem("province","");localStorage.setItem("place","");localStorage.setItem("action","add");localStorage.setItem("id","-1");ChangeForm(frmTaxisEditor);break;case((i)==4):}
return savethefunction_rvar;}
WhatToDo.onshow=function(){savethefunction_rvar="";lstWhatToDo.Top=hBar.Height;lstWhatToDo.Height=WhatToDo.Height-hBar.Height;ListViewClear(lstWhatToDo);ListViewAddTitleDescription(lstWhatToDo,"Compare Prices","Compare prices for transportation from one location to another.");ListViewAddTitleDescription(lstWhatToDo,"Directory","Taxi Operators within cities.");ListViewAddTitleDescription(lstWhatToDo,"Login","Access and change your details.");ListViewAddTitleDescription(lstWhatToDo,"Register","Register with our TaxiNavigator as a Taxi Operator or Client.");ListViewAddTitleDescription(lstWhatToDo,"Contact Us","Send us your views, requests, enhancements etc.");ListViewRefresh(lstWhatToDo);return savethefunction_rvar;}
hBar.onclick=function(choice){savethefunction_rvar="";if(TypeName(choice)=="object"){return savethefunction_rvar;}
switch(True){case((choice)=="Sign Out"):ChangeForm(frmSignIn);break;case((choice)=="About"):ChangeForm(frmAbout);}
return savethefunction_rvar;}
window.addEventListener('load',function(){frmProvincesEdit.style.display='block';NSB.addProperties(provinceEditorT);NSB.addDisableProperty(provinceEditorT);if(typeof(provinceEditorT.onclick)=='function'){if(typeof(provinceEditorT_left)!='undefined')provinceEditorT_left.onclick=function(){provinceEditorT.onclick(provinceEditorT_left.getAttribute('nsbvalue'))};if(typeof(provinceEditorT_right)!='undefined')provinceEditorT_right.onclick=function(){provinceEditorT.onclick(provinceEditorT_right.getAttribute('nsbvalue'))}};NSB.MultiInput_init('provinceEditorI');NSB.addProperties(provinceEditorI);frmProvincesEdit.style.display='none';},false);frmProvincesEdit.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};NSB.addProperties(frmProvincesEdit);frmProvincesEdit.onshow=function(){savethefunction_rvar="";provinceEditorI.Left=0;provinceEditorI.Top=42;provinceEditorI.Width=frmProvincesEdit.Width-20;ReadProvince();return savethefunction_rvar;}
provinceEditorT.onclick=function(choice){savethefunction_rvar="";if(TypeName(choice)=="object"){return savethefunction_rvar;}
switch(True){case((choice)=="Save"):SaveProvince();break;case((choice)=="Back"):ChangeForm(frmProvincesList);}
return savethefunction_rvar;}
function ReadProvince(){savethefunction_rvar="";var svalue,skey;svalue=localStorage.getItem("id");if(IsNull(svalue)==True){provinceEditorI.setValue(1,"");}else{skey="Provinces*"+svalue;svalue=localStorage.getItem(skey);provinceEditorI.setValue(1,svalue);}
return savethefunction_rvar;}
function SaveProvince(){savethefunction_rvar="";var snew;snew=provinceEditorI.getValue(1);snew=Trim(snew);if(Len(snew)==0){NSB.MsgBox("The province name cannot be blank, enter a province name please.");return;}
var sid,saction;sid=localStorage.getItem("id");saction=localStorage.getItem("action");snew=Replace(snew,"'","''");snew=InSingleQuote(snew);var nrecord;nrecord=new Object();nrecord["ID"]=sid;nrecord["Description"]=snew;switch(True){case((saction)=="new"):InsertRecord("Provinces",nrecord);break;default:var nwhere;nwhere=new Object();nwhere["ID"]=sid;UpdateRecord("Provinces",nrecord,nwhere);}}
window.addEventListener('load',function(){frmAbout.style.display='block';NSB.addProperties(hAbout);NSB.addDisableProperty(hAbout);if(typeof(hAbout.onclick)=='function'){if(typeof(hAbout_left)!='undefined')hAbout_left.onclick=function(){hAbout.onclick(hAbout_left.getAttribute('nsbvalue'))};if(typeof(hAbout_right)!='undefined')hAbout_right.onclick=function(){hAbout.onclick(hAbout_right.getAttribute('nsbvalue'))}};NSB.addProperties(Label12);NSB.addProperties(Label13);NSB.addProperties(Line1);frmAbout.style.display='none';},false);frmAbout.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};NSB.addProperties(frmAbout);hAbout.onclick=function(choice){savethefunction_rvar="";if(TypeName(choice)=="object"){return savethefunction_rvar;}
switch(True){case((choice)=="Home"):ChangeForm(WhatToDo);}
return savethefunction_rvar;}