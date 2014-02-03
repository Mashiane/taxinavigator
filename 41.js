
frmPlacesEditor.innerHTML=[  NSB.MultiInput("placesEditor", 4, "smallfield", "Province,Place Name,Latitude,Longitude", "Province,Place Name,Latitude,Longitude", "text,text,text,text", "", " style=  ", false),
  NSB.HeaderBar_jqm("placesEditorT", "Places", "Back", "arrow-l", "Save", "check", " data-theme=b style='' class=' ' "),
  NSB.ComboBox("cboProvince", "", "1,2", "", ""),
  "<div id='cmdAddPlace' data-role='button' data-inline=true data-theme=b data-icon=plus data-iconpos=left data-mini=true data-corners='false' class=' ' style='margin:0px; overflow:visible; font-size:14px; font-family:helvetica; font-style:normal; font-weight:bold; color:; background-color:; '>Add</div>",
  ].join('');
