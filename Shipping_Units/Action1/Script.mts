SystemUtil.Run "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe"

AIUtil.SetContext Window("regexpwndtitle:=Micro Focus MyFlight Sample Application", "regexpwndclass:=HwndWrapper\[FlightsGUI\.exe;;c1ca026f-9d3f-4cd1-b89a-89a48fc14785\]", "is owned window:=False", "is child window:=False")
AIUtil("text_box", "Username").Type "john"
AIUtil("text_box", "Password").Type "HP"
AIUtil("button", "OK").Click
