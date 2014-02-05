
frmPlacesEditor.innerHTML=[  NSB.MultiInput("placesEditor", 4, "smallfield", "Province,Place Name,Latitude,Longitude", "Province,Place Name,Latitude,Longitude", "text,text,text,text", "", " style=  ", false),
  NSB.ComboBox("cboProvince", "", "1,2", "", ""),
  NSB.HeaderBar_jqm14('placesEditorT', 'Places', 'Back', 'arrow-l', 'Save', 'check', ' style="" class=" "'),
  "<button id='cmdAddPlace' class='ui-btn ui-mini  ui-btn-inline ui-icon-plus ui-btn-icon-left  ' style='margin:0px; padding-left:0px; padding-right:0px; overflow:visible;  font-family:; font-style:; font-weight:; ;  '>Add</button>",
  ].join('');
