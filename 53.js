
frmFaresEditor.innerHTML=[  NSB.MultiInput("faresEditor", 2, "smallfield", "Province,Place", "Province*,Place*", "text,text", "", " style=  ", false),
  NSB.ComboBox("cboOProvince", "", "1,2", "", ""),
  NSB.ComboBox("cboOPlace", "", "1,2", "", ""),
  NSB.HeaderBar_jqm14('faresEditorH', 'Fares', 'Back', 'arrow-l', 'Save', 'check', ' style="" class=" "'),
  "<label id='lblOrigin' class='graytitle' style='text-align:left;  font-size:16px; font-family:helvetica; font-style:normal; font-weight:bold; color:black; background-color:transparent; border-style:;border-color:transparent;border-width:1px; ' >Origin</label>",
  NSB.MultiInput("faresEditor1", 2, "smallfield", "Province,Place", "Province*,Place*", "text,text", "", " style=  ", false),
  "<label id='lblDestination' class='graytitle' style='text-align:left;  font-size:16px; font-family:helvetica; font-style:normal; font-weight:bold; color:black; background-color:transparent; border-style:;border-color:transparent;border-width:1px; ' >Destination</label>",
  NSB.ComboBox("cboDProvince", "", "1,2", "", ""),
  NSB.ComboBox("cboDPlace", "", "1,2", "", ""),
  "<label id='lblDestinationCopy' class='graytitle' style='text-align:left;  font-size:16px; font-family:helvetica; font-style:normal; font-weight:bold; color:black; background-color:transparent; border-style:;border-color:transparent;border-width:1px; ' >Fare</label>",
  NSB.MultiInput("faresEditor2", 3, "smallfield", "Rate per KM,Kilometers,Fare", "Rate per KM,Kilometers,Fare*", "number,number,number", "", " style=  ", false),
  ].join('');
