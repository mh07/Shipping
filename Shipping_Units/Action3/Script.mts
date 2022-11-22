
AIUtil.SetContext Window("regexpwndtitle:=Micro Focus MyFlight Sample Application", "regexpwndclass:=HwndWrapper\[FlightsGUI\.exe;;4ce2e23e-d18d-4414-a8c0-d019d6f26407\]", "is owned window:=False", "is child window:=False")
AIUtil.FindTextBlock("SEARCH ORDER").Click
AIUtil.FindTextBlock("Order number").Click
Dim mySendKey
Set mySendKey = CreateObject("WScript.shell")
'Send Enter key
mySendKey.SendKeys(Parameter("ApprovedOrderNumber")) 
AIUtil("button", "SEARCH").Click
