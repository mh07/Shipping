
AIUtil.SetContext Window("regexpwndtitle:=Micro Focus MyFlight Sample Application")

AIUtil("button", "SEARCH ORDER").Click
AIUtil("radio_button", "", micFromBottom, 1).SetState "On"
AIUtil("text_box", "", micFromBottom, 1).SetText Parameter("ApprovedOrderNumber")
AIUtil("button", "SEARCH").Click

