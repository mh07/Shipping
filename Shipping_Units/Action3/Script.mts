
AIUtil.SetContext Window("regexpwndtitle:=Micro Focus MyFlight Sample Application")

AIUtil("button", "SEARCH ORDER").Click
AIUtil("radio_button", "", micFromBottom, 1).SetState "On"
'AIUtil("text_box", "", micFromBottom, 1).SetText Parameter("ApprovedOrderNumber")
AIUtil("text_box", "", micWithAnchorBelow, AIUtil("button", "SEARCH")).SetText Parameter("ApprovedOrderNumber")
AIUtil("button", "SEARCH").Click
AIUtil("text_box", "Passenger Name").Highlight
'comment
