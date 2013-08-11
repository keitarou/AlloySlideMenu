function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.menu = Ti.UI.createView({
        backgroundColor: "gray",
        height: Ti.UI.FILL,
        width: 150,
        left: 0,
        id: "menu"
    });
    $.__views.index.add($.__views.menu);
    $.__views.menuTable = Ti.UI.createTableView({
        backgroundImage: "/images/table_bg.png",
        allowsSelection: false,
        separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
        id: "menuTable"
    });
    $.__views.menu.add($.__views.menuTable);
    $.__views.main = Ti.UI.createView({
        backgroundColor: "white",
        height: Ti.UI.FILL,
        width: 320,
        left: 0,
        id: "main"
    });
    $.__views.index.add($.__views.main);
    $.__views.mainWindow = Ti.UI.createWindow({
        title: "Top",
        id: "mainWindow"
    });
    $.__views.__alloyId1 = Ti.UI.createLabel({
        text: "Hello",
        id: "__alloyId1"
    });
    $.__views.mainWindow.add($.__views.__alloyId1);
    $.__views.nav = Ti.UI.iPhone.createNavigationGroup({
        window: $.__views.mainWindow,
        id: "nav"
    });
    $.__views.main.add($.__views.nav);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var i, menuBtn, menuOpen, row, title, _i;
    menuBtn = Titanium.UI.createButton({
        image: "/images/menu.png",
        width: 32,
        height: 32
    });
    $.mainWindow.leftNavButton = menuBtn;
    menuOpen = false;
    menuBtn.addEventListener("click", function() {
        var moveTo;
        if (menuOpen) {
            moveTo = "0";
            menuOpen = false;
        } else {
            moveTo = $.menu.width;
            menuOpen = true;
        }
        return $.main.animate({
            left: moveTo,
            curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
            duration: 400
        });
    });
    for (i = _i = 1; 5 >= _i; i = ++_i) {
        row = Ti.UI.createTableViewRow({
            height: 44,
            backgroundColor: "transparent",
            backgroundImage: "/images/row_bg.png"
        });
        title = Ti.UI.createLabel({
            color: "white",
            left: 8,
            width: Ti.UI.FILL,
            height: Ti.UI.FILL,
            text: "Menu" + i,
            font: {
                fontFamily: "Arial-BoldMT",
                fontWeight: "bold",
                fontSize: 17
            }
        });
        row.add(title);
        $.menuTable.appendRow(row);
    }
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;