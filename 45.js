
frmTaxisEditor.innerHTML=[  NSB.MultiInput("taxisEditor", 9, "smallfield", "Province,Place,Company Name,Website,Email,Contact Person,Mobile No,Telephone No,Fax No", "Province*,Place*,Company Name*,Website,Email*,Contact Person*,Mobile No*,Telephone No*,Fax No", "text,text,text,text,text,text,text,text,text", "", " style=  ", false),
  NSB.ComboBox("cboTaxiProvince", "", "1,2", "", ""),
  NSB.ComboBox("cboTaxiPlaceName", "", "1,2", "", ""),
  NSB.HeaderBar_jqm14('taxisEditorT', 'Register Taxi', 'Back', 'arrow-l', 'Services', 'arrow-r', ' style="" class=" "'),
  ].join('');
