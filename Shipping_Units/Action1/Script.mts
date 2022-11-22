SystemUtil.Run "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe"

AIUtil.SetContext Window("regexpwndtitle:=Micro Focus MyFlight Sample Application", "is child window:=False")
AIUtil("text_box", "Username").Type "john"
AIUtil("text_box", "Password").Type "HP"
AIUtil("button", "OK").Click
