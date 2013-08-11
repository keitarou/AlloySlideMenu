###
ボタンの追加
###
menuBtn = Titanium.UI.createButton
	image:'/images/menu.png',
	width:32,
	height:32,
$.mainWindow.leftNavButton = menuBtn


###
ビューの開閉
###
menuOpen = false
menuBtn.addEventListener 'click', (e)->
	if menuOpen
		moveTo = "0"
		menuOpen = false
	else
		moveTo = $.menu.width
		menuOpen = true

	$.main.animate
		left:moveTo
		curve : Ti.UI.ANIMATION_CURVE_EASE_OUT
		duration:400


###
ひだりのビューのテーブルに行追加
###
for i in[1..5]
	row = Ti.UI.createTableViewRow
		height:44
		backgroundColor:'transparent'
		backgroundImage:'/images/row_bg.png'

	title = Ti.UI.createLabel
		color:'white'
		left:8
		width:Ti.UI.FILL
		height:Ti.UI.FILL
		text:"Menu#{i}"
		font:{
			fontFamily:'Arial-BoldMT',
			fontWeight:'bold',
			fontSize:17
		}
	row.add title
	$.menuTable.appendRow row


$.index.open();