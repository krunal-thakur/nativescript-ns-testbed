require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../node_modules/nativescript-unit-test-runner/app sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app-root.xml": "../node_modules/nativescript-unit-test-runner/app/app-root.xml",
	"./app.css": "../node_modules/nativescript-unit-test-runner/app/app.css",
	"./app.js": "../node_modules/nativescript-unit-test-runner/app/app.js",
	"./bundle-app-root.xml": "../node_modules/nativescript-unit-test-runner/app/bundle-app-root.xml",
	"./bundle-app.js": "../node_modules/nativescript-unit-test-runner/app/bundle-app.js",
	"./bundle-main-page.js": "../node_modules/nativescript-unit-test-runner/app/bundle-main-page.js",
	"./bundle-main-page.xml": "../node_modules/nativescript-unit-test-runner/app/bundle-main-page.xml",
	"./main-page.js": "../node_modules/nativescript-unit-test-runner/app/main-page.js",
	"./main-page.xml": "../node_modules/nativescript-unit-test-runner/app/main-page.xml",
	"./main-view-model.js": "../node_modules/nativescript-unit-test-runner/app/main-view-model.js",
	"./run-details.js": "../node_modules/nativescript-unit-test-runner/app/run-details.js",
	"./run-details.xml": "../node_modules/nativescript-unit-test-runner/app/run-details.xml",
	"./services/karma-files-service.js": "../node_modules/nativescript-unit-test-runner/app/services/karma-files-service.js",
	"./services/karma-host-resolver.js": "../node_modules/nativescript-unit-test-runner/app/services/karma-host-resolver.js",
	"./services/test-execution-service.js": "../node_modules/nativescript-unit-test-runner/app/services/test-execution-service.js",
	"./stop-process.android.js": "../node_modules/nativescript-unit-test-runner/app/stop-process.android.js",
	"./stop-process.ios.js": "../node_modules/nativescript-unit-test-runner/app/stop-process.ios.js",
	"./test-run-page.js": "../node_modules/nativescript-unit-test-runner/app/test-run-page.js",
	"./test-run-page.xml": "../node_modules/nativescript-unit-test-runner/app/test-run-page.xml"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../node_modules/nativescript-unit-test-runner/app sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./ sync recursive tests\\/.*\\.(ts|js)":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./tests/example.ts": "./tests/example.ts",
	"./tests/test-main.ts": "./tests/test-main.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive tests\\/.*\\.(ts|js)";

/***/ }),

/***/ "./app/item/item.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var ItemService = /** @class */ (function () {
    function ItemService() {
        this.items = new Array({ id: 1, name: "Ter Stegen", role: "Goalkeeper" }, { id: 3, name: "Piqué", role: "Defender" }, { id: 4, name: "I. Rakitic", role: "Midfielder" }, { id: 5, name: "Sergio", role: "Midfielder" }, { id: 6, name: "Denis Suárez", role: "Midfielder" }, { id: 7, name: "Arda", role: "Midfielder" }, { id: 8, name: "A. Iniesta", role: "Midfielder" }, { id: 9, name: "Suárez", role: "Forward" }, { id: 10, name: "Messi", role: "Forward" }, { id: 11, name: "Neymar", role: "Forward" }, { id: 12, name: "Rafinha", role: "Midfielder" }, { id: 13, name: "Cillessen", role: "Goalkeeper" }, { id: 14, name: "Mascherano", role: "Defender" }, { id: 17, name: "Paco Alcácer", role: "Forward" }, { id: 18, name: "Jordi Alba", role: "Defender" }, { id: 19, name: "Digne", role: "Defender" }, { id: 20, name: "Sergi Roberto", role: "Midfielder" }, { id: 21, name: "André Gomes", role: "Midfielder" }, { id: 22, name: "Aleix Vidal", role: "Midfielder" }, { id: 23, name: "Umtiti", role: "Defender" }, { id: 24, name: "Mathieu", role: "Defender" }, { id: 25, name: "Masip", role: "Goalkeeper" });
    }
    ItemService.prototype.getItems = function () {
        return this.items;
    };
    ItemService.prototype.getItem = function (id) {
        return this.items.filter(function (item) { return item.id === id; })[0];
    };
    ItemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        })
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "./app/item/items.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\nThe template defines the view of the component - what is actually rendered.\nIn NativeScript applications the template is defined with XML using NativeScript UI elements.\nIt is different from HTML. So instead of <input>, <span>, <div> etc. - we have <TextField>, <Label> and layouts.\nThe important thing is that although the elements are different - all of the Angular’s template syntax works exactly the same.\nSo you can still use template expressions, bindings, templates as well as all the built-in directives.\n-->\n\n<!--\nThe ActionBar is the NativeScript common abstraction over the Android ActionBar and iOS NavigationBar.\nhttp://docs.nativescript.org/ui/action-bar\n-->\n<ActionBar title=\"My App\" class=\"action-bar\">\n</ActionBar>\n\n<!--\nThe GridLayout arranges its child elements in a table structure of rows and columns.\nA cell can contain multiple child elements, they can span over multiple rows and columns, \nand even overlap each other. The GridLayout has one column and one row by default.\nYou can learn more about NativeScript layouts at https://docs.nativescript.org/ui/layout-containers.\n\nThese components make use of several CSS class names that are part of the NativeScript\ncore theme, such as p-20, btn, h2, and list-group. You can view a full list of the\nclass names available for styling your app at https://docs.nativescript.org/ui/theme.\n-->\n<GridLayout class=\"page\">\n    <ListView [items]=\"items\" class=\"list-group\">\n        <ng-template let-item=\"item\">\n            <Label [nsRouterLink]=\"['/item', item.id]\" [text]=\"item.name\"\n                class=\"list-group-item\"></Label>\n        </ng-template>\n    </ListView>\n</GridLayout>\n"

/***/ }),

/***/ "./app/item/items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/item/item.service.ts");


var ItemsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to
    // inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule,
    // defined in app.module.ts.
    function ItemsComponent(itemService) {
        this.itemService = itemService;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
    };
    ItemsComponent.ctorParameters = function () { return [
        { type: _item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"] }
    ]; };
    ItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-items",
            template: __webpack_require__("./app/item/items.component.html")
        }),
        __metadata("design:paramtypes", [_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"]])
    ], ItemsComponent);
    return ItemsComponent;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
        let applicationCheckPlatform = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/tns-core-modules/ui/frame/frame.js");
__webpack_require__("../node_modules/tns-core-modules/ui/frame/activity.js");
        }

        
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        const runnerContext = __webpack_require__("../node_modules/nativescript-unit-test-runner/app sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
        global.registerWebpackModules(runnerContext);
        global.registerModule("../node_modules/nativescript-unit-test-runner/app/app.css", () => __webpack_require__("../node_modules/nativescript-unit-test-runner/app/app.css"));
        __webpack_require__("../node_modules/tns-core-modules/application/application.js").setCssFileName("../node_modules/nativescript-unit-test-runner/app/app.css");
    
            const context = __webpack_require__("./ sync recursive tests\\/.*\\.(ts|js)");
            global.registerWebpackModules(context);
        
        __webpack_require__("../node_modules/nativescript-unit-test-runner/app/bundle-app.js");
    
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"main.js","android":{"v8Flags":"--expose_gc","markingMode":"none"}};

/***/ }),

/***/ "./tests/example.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_item_item_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/item/item.service.ts");
/* harmony import */ var _app_item_items_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/item/items.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var nativescript_angular_testing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/testing/index.js");
/* harmony import */ var nativescript_angular_testing__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_testing__WEBPACK_IMPORTED_MODULE_3__);




describe('item-detail-component', function () {
    beforeEach(Object(nativescript_angular_testing__WEBPACK_IMPORTED_MODULE_3__["nsTestBedBeforeEach"])([_app_item_items_component__WEBPACK_IMPORTED_MODULE_1__["ItemsComponent"]], [_app_item_item_service__WEBPACK_IMPORTED_MODULE_0__["ItemService"]]));
    afterEach(Object(nativescript_angular_testing__WEBPACK_IMPORTED_MODULE_3__["nsTestBedAfterEach"])());
    it("should contain items", function () {
        return Object(nativescript_angular_testing__WEBPACK_IMPORTED_MODULE_3__["nsTestBedRender"])(_app_item_items_component__WEBPACK_IMPORTED_MODULE_1__["ItemsComponent"]).then(function (fixture) {
            fixture.detectChanges();
            var list = fixture.debugElement.query(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["By"].css('.list-group'));
            expect(list).toBeDefined();
        });
    });
});


/***/ }),

/***/ "./tests/test-main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_angular_zone_js_testing_jasmine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-angular/zone-js/testing.jasmine.js");
/* harmony import */ var nativescript_angular_zone_js_testing_jasmine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_zone_js_testing_jasmine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_testing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/testing/index.js");
/* harmony import */ var nativescript_angular_testing__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_testing__WEBPACK_IMPORTED_MODULE_1__);


Object(nativescript_angular_testing__WEBPACK_IMPORTED_MODULE_1__["nsTestBedInit"])();


/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vXFxiX1tcXHctXSpcXC4pc2NzcykkIiwid2VicGFjazovLy8uIHN5bmMgdGVzdHNcXC8uKlxcLih0c3xqcykiLCJ3ZWJwYWNrOi8vLy4vYXBwL2l0ZW0vaXRlbS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9pdGVtL2l0ZW1zLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9pdGVtL2l0ZW1zLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIiwid2VicGFjazovLy8uL3Rlc3RzL2V4YW1wbGUudHMiLCJ3ZWJwYWNrOi8vLy4vdGVzdHMvdGVzdC1tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLHlFOzs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlLOzs7Ozs7O0FDekNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEOzs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFBMkM7QUFPM0M7SUFIQTtRQUlZLFVBQUssR0FBRyxJQUFJLEtBQUssQ0FDckIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUNqRCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQzFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDakQsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUM3QyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQ25ELEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDM0MsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUNqRCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQzFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsRUFDMUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUMzQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQy9DLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDakQsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUNoRCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQ2pELEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFDaEQsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUMzQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQ3JELEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDbkQsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUNuRCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQzVDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFDN0MsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxDQUNoRCxDQUFDO0lBU04sQ0FBQztJQVBHLDhCQUFRLEdBQVI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxFQUFVO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksSUFBSyxXQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBaENRLFdBQVc7UUFIdkIsZ0VBQVUsQ0FBQztZQUNSLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7T0FDVyxXQUFXLENBaUN2QjtJQUFELGtCQUFDO0NBQUE7QUFqQ3VCOzs7Ozs7OztBQ1B4Qiw0ckQ7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFHTDtBQU83QztJQUdJLDZFQUE2RTtJQUM3RSxpRUFBaUU7SUFDakUsdUZBQXVGO0lBQ3ZGLDRCQUE0QjtJQUM1Qix3QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBSSxDQUFDO0lBRWpELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0MsQ0FBQzs7Z0JBSmdDLHlEQUFXOztJQVBuQyxjQUFjO1FBTDFCLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUVwQixnRUFBcUM7U0FDeEMsQ0FBQzt5Q0FRbUMseURBQVc7T0FQbkMsY0FBYyxDQVkxQjtJQUFELHFCQUFDO0NBQUE7QUFaMEI7Ozs7Ozs7OztBQ1QzQix1Q0FBdUMsbUJBQU8sQ0FBQyw2REFBOEI7QUFDN0U7QUFDQSxZQUFZLG1CQUFPLENBQUMsb0RBQTJCO0FBQy9DLG1CQUFPLENBQUMsdURBQW9DO0FBQzVDOzs7QUFHQSxRQUFRLG1CQUFPLENBQUMseURBQXNDO0FBQ3RELDhCQUE4Qix5S0FBdUo7QUFDckw7QUFDQSxpR0FBaUcsbUJBQU8sQ0FBQywyREFBMkQ7QUFDcEssUUFBUSxtQkFBTyxDQUFDLDZEQUE4Qjs7QUFFOUMsNEJBQTRCLDZEQUFpRDtBQUM3RTs7QUFFQSxRQUFRLG1CQUFPLENBQUMsaUVBQWlFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQmpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1RDtBQUNLO0FBQ2I7QUFDeUQ7QUFFeEcsUUFBUSxDQUFDLHVCQUF1QixFQUFFO0lBQ2hDLFVBQVUsQ0FBQyx3RkFBbUIsQ0FDNUIsQ0FBQyx3RUFBYyxDQUFDLEVBQ2hCLENBQUMsa0VBQVcsQ0FBQyxDQUNkLENBQUMsQ0FBQztJQUNILFNBQVMsQ0FBQyx1RkFBa0IsRUFBRSxDQUFDLENBQUM7SUFFaEMsRUFBRSxDQUFDLHNCQUFzQixFQUFFO1FBQ3pCLE9BQU8sb0ZBQWUsQ0FBQyx3RUFBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBTztZQUNsRCxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEIsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsNERBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUUvRCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7O0FDcEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0Q7QUFDTztBQUM3RCxrRkFBYSxFQUFFLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuLi8kJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgcmVjdXJzaXZlXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC1yb290LnhtbFwiOiBcIi4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtdW5pdC10ZXN0LXJ1bm5lci9hcHAvYXBwLXJvb3QueG1sXCIsXG5cdFwiLi9hcHAuY3NzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC11bml0LXRlc3QtcnVubmVyL2FwcC9hcHAuY3NzXCIsXG5cdFwiLi9hcHAuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LXVuaXQtdGVzdC1ydW5uZXIvYXBwL2FwcC5qc1wiLFxuXHRcIi4vYnVuZGxlLWFwcC1yb290LnhtbFwiOiBcIi4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtdW5pdC10ZXN0LXJ1bm5lci9hcHAvYnVuZGxlLWFwcC1yb290LnhtbFwiLFxuXHRcIi4vYnVuZGxlLWFwcC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtdW5pdC10ZXN0LXJ1bm5lci9hcHAvYnVuZGxlLWFwcC5qc1wiLFxuXHRcIi4vYnVuZGxlLW1haW4tcGFnZS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtdW5pdC10ZXN0LXJ1bm5lci9hcHAvYnVuZGxlLW1haW4tcGFnZS5qc1wiLFxuXHRcIi4vYnVuZGxlLW1haW4tcGFnZS54bWxcIjogXCIuLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LXVuaXQtdGVzdC1ydW5uZXIvYXBwL2J1bmRsZS1tYWluLXBhZ2UueG1sXCIsXG5cdFwiLi9tYWluLXBhZ2UuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LXVuaXQtdGVzdC1ydW5uZXIvYXBwL21haW4tcGFnZS5qc1wiLFxuXHRcIi4vbWFpbi1wYWdlLnhtbFwiOiBcIi4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtdW5pdC10ZXN0LXJ1bm5lci9hcHAvbWFpbi1wYWdlLnhtbFwiLFxuXHRcIi4vbWFpbi12aWV3LW1vZGVsLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC11bml0LXRlc3QtcnVubmVyL2FwcC9tYWluLXZpZXctbW9kZWwuanNcIixcblx0XCIuL3J1bi1kZXRhaWxzLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC11bml0LXRlc3QtcnVubmVyL2FwcC9ydW4tZGV0YWlscy5qc1wiLFxuXHRcIi4vcnVuLWRldGFpbHMueG1sXCI6IFwiLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC11bml0LXRlc3QtcnVubmVyL2FwcC9ydW4tZGV0YWlscy54bWxcIixcblx0XCIuL3NlcnZpY2VzL2thcm1hLWZpbGVzLXNlcnZpY2UuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LXVuaXQtdGVzdC1ydW5uZXIvYXBwL3NlcnZpY2VzL2thcm1hLWZpbGVzLXNlcnZpY2UuanNcIixcblx0XCIuL3NlcnZpY2VzL2thcm1hLWhvc3QtcmVzb2x2ZXIuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LXVuaXQtdGVzdC1ydW5uZXIvYXBwL3NlcnZpY2VzL2thcm1hLWhvc3QtcmVzb2x2ZXIuanNcIixcblx0XCIuL3NlcnZpY2VzL3Rlc3QtZXhlY3V0aW9uLXNlcnZpY2UuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LXVuaXQtdGVzdC1ydW5uZXIvYXBwL3NlcnZpY2VzL3Rlc3QtZXhlY3V0aW9uLXNlcnZpY2UuanNcIixcblx0XCIuL3N0b3AtcHJvY2Vzcy5hbmRyb2lkLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC11bml0LXRlc3QtcnVubmVyL2FwcC9zdG9wLXByb2Nlc3MuYW5kcm9pZC5qc1wiLFxuXHRcIi4vc3RvcC1wcm9jZXNzLmlvcy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtdW5pdC10ZXN0LXJ1bm5lci9hcHAvc3RvcC1wcm9jZXNzLmlvcy5qc1wiLFxuXHRcIi4vdGVzdC1ydW4tcGFnZS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtdW5pdC10ZXN0LXJ1bm5lci9hcHAvdGVzdC1ydW4tcGFnZS5qc1wiLFxuXHRcIi4vdGVzdC1ydW4tcGFnZS54bWxcIjogXCIuLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LXVuaXQtdGVzdC1ydW5uZXIvYXBwL3Rlc3QtcnVuLXBhZ2UueG1sXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC11bml0LXRlc3QtcnVubmVyL2FwcCBzeW5jIHJlY3Vyc2l2ZSAoPzwhXFxcXGJBcHBfUmVzb3VyY2VzXFxcXGIuKilcXFxcLih4bWx8Y3NzfGpzfCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL3Rlc3RzL2V4YW1wbGUudHNcIjogXCIuL3Rlc3RzL2V4YW1wbGUudHNcIixcblx0XCIuL3Rlc3RzL3Rlc3QtbWFpbi50c1wiOiBcIi4vdGVzdHMvdGVzdC1tYWluLnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgdGVzdHNcXFxcLy4qXFxcXC4odHN8anMpXCI7IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBJdGVtU2VydmljZSB7XG4gICAgcHJpdmF0ZSBpdGVtcyA9IG5ldyBBcnJheTxJdGVtPihcbiAgICAgICAgeyBpZDogMSwgbmFtZTogXCJUZXIgU3RlZ2VuXCIsIHJvbGU6IFwiR29hbGtlZXBlclwiIH0sXG4gICAgICAgIHsgaWQ6IDMsIG5hbWU6IFwiUGlxdcOpXCIsIHJvbGU6IFwiRGVmZW5kZXJcIiB9LFxuICAgICAgICB7IGlkOiA0LCBuYW1lOiBcIkkuIFJha2l0aWNcIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcbiAgICAgICAgeyBpZDogNSwgbmFtZTogXCJTZXJnaW9cIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcbiAgICAgICAgeyBpZDogNiwgbmFtZTogXCJEZW5pcyBTdcOhcmV6XCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDcsIG5hbWU6IFwiQXJkYVwiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxuICAgICAgICB7IGlkOiA4LCBuYW1lOiBcIkEuIEluaWVzdGFcIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcbiAgICAgICAgeyBpZDogOSwgbmFtZTogXCJTdcOhcmV6XCIsIHJvbGU6IFwiRm9yd2FyZFwiIH0sXG4gICAgICAgIHsgaWQ6IDEwLCBuYW1lOiBcIk1lc3NpXCIsIHJvbGU6IFwiRm9yd2FyZFwiIH0sXG4gICAgICAgIHsgaWQ6IDExLCBuYW1lOiBcIk5leW1hclwiLCByb2xlOiBcIkZvcndhcmRcIiB9LFxuICAgICAgICB7IGlkOiAxMiwgbmFtZTogXCJSYWZpbmhhXCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDEzLCBuYW1lOiBcIkNpbGxlc3NlblwiLCByb2xlOiBcIkdvYWxrZWVwZXJcIiB9LFxuICAgICAgICB7IGlkOiAxNCwgbmFtZTogXCJNYXNjaGVyYW5vXCIsIHJvbGU6IFwiRGVmZW5kZXJcIiB9LFxuICAgICAgICB7IGlkOiAxNywgbmFtZTogXCJQYWNvIEFsY8OhY2VyXCIsIHJvbGU6IFwiRm9yd2FyZFwiIH0sXG4gICAgICAgIHsgaWQ6IDE4LCBuYW1lOiBcIkpvcmRpIEFsYmFcIiwgcm9sZTogXCJEZWZlbmRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDE5LCBuYW1lOiBcIkRpZ25lXCIsIHJvbGU6IFwiRGVmZW5kZXJcIiB9LFxuICAgICAgICB7IGlkOiAyMCwgbmFtZTogXCJTZXJnaSBSb2JlcnRvXCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDIxLCBuYW1lOiBcIkFuZHLDqSBHb21lc1wiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxuICAgICAgICB7IGlkOiAyMiwgbmFtZTogXCJBbGVpeCBWaWRhbFwiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxuICAgICAgICB7IGlkOiAyMywgbmFtZTogXCJVbXRpdGlcIiwgcm9sZTogXCJEZWZlbmRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDI0LCBuYW1lOiBcIk1hdGhpZXVcIiwgcm9sZTogXCJEZWZlbmRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDI1LCBuYW1lOiBcIk1hc2lwXCIsIHJvbGU6IFwiR29hbGtlZXBlclwiIH1cbiAgICApO1xuXG4gICAgZ2V0SXRlbXMoKTogQXJyYXk8SXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcztcbiAgICB9XG5cbiAgICBnZXRJdGVtKGlkOiBudW1iZXIpOiBJdGVtIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkID09PSBpZClbMF07XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS1cXG5UaGUgdGVtcGxhdGUgZGVmaW5lcyB0aGUgdmlldyBvZiB0aGUgY29tcG9uZW50IC0gd2hhdCBpcyBhY3R1YWxseSByZW5kZXJlZC5cXG5JbiBOYXRpdmVTY3JpcHQgYXBwbGljYXRpb25zIHRoZSB0ZW1wbGF0ZSBpcyBkZWZpbmVkIHdpdGggWE1MIHVzaW5nIE5hdGl2ZVNjcmlwdCBVSSBlbGVtZW50cy5cXG5JdCBpcyBkaWZmZXJlbnQgZnJvbSBIVE1MLiBTbyBpbnN0ZWFkIG9mIDxpbnB1dD4sIDxzcGFuPiwgPGRpdj4gZXRjLiAtIHdlIGhhdmUgPFRleHRGaWVsZD4sIDxMYWJlbD4gYW5kIGxheW91dHMuXFxuVGhlIGltcG9ydGFudCB0aGluZyBpcyB0aGF0IGFsdGhvdWdoIHRoZSBlbGVtZW50cyBhcmUgZGlmZmVyZW50IC0gYWxsIG9mIHRoZSBBbmd1bGFy4oCZcyB0ZW1wbGF0ZSBzeW50YXggd29ya3MgZXhhY3RseSB0aGUgc2FtZS5cXG5TbyB5b3UgY2FuIHN0aWxsIHVzZSB0ZW1wbGF0ZSBleHByZXNzaW9ucywgYmluZGluZ3MsIHRlbXBsYXRlcyBhcyB3ZWxsIGFzIGFsbCB0aGUgYnVpbHQtaW4gZGlyZWN0aXZlcy5cXG4tLT5cXG5cXG48IS0tXFxuVGhlIEFjdGlvbkJhciBpcyB0aGUgTmF0aXZlU2NyaXB0IGNvbW1vbiBhYnN0cmFjdGlvbiBvdmVyIHRoZSBBbmRyb2lkIEFjdGlvbkJhciBhbmQgaU9TIE5hdmlnYXRpb25CYXIuXFxuaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS9hY3Rpb24tYmFyXFxuLS0+XFxuPEFjdGlvbkJhciB0aXRsZT1cXFwiTXkgQXBwXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+XFxuPC9BY3Rpb25CYXI+XFxuXFxuPCEtLVxcblRoZSBHcmlkTGF5b3V0IGFycmFuZ2VzIGl0cyBjaGlsZCBlbGVtZW50cyBpbiBhIHRhYmxlIHN0cnVjdHVyZSBvZiByb3dzIGFuZCBjb2x1bW5zLlxcbkEgY2VsbCBjYW4gY29udGFpbiBtdWx0aXBsZSBjaGlsZCBlbGVtZW50cywgdGhleSBjYW4gc3BhbiBvdmVyIG11bHRpcGxlIHJvd3MgYW5kIGNvbHVtbnMsIFxcbmFuZCBldmVuIG92ZXJsYXAgZWFjaCBvdGhlci4gVGhlIEdyaWRMYXlvdXQgaGFzIG9uZSBjb2x1bW4gYW5kIG9uZSByb3cgYnkgZGVmYXVsdC5cXG5Zb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgTmF0aXZlU2NyaXB0IGxheW91dHMgYXQgaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvbGF5b3V0LWNvbnRhaW5lcnMuXFxuXFxuVGhlc2UgY29tcG9uZW50cyBtYWtlIHVzZSBvZiBzZXZlcmFsIENTUyBjbGFzcyBuYW1lcyB0aGF0IGFyZSBwYXJ0IG9mIHRoZSBOYXRpdmVTY3JpcHRcXG5jb3JlIHRoZW1lLCBzdWNoIGFzIHAtMjAsIGJ0biwgaDIsIGFuZCBsaXN0LWdyb3VwLiBZb3UgY2FuIHZpZXcgYSBmdWxsIGxpc3Qgb2YgdGhlXFxuY2xhc3MgbmFtZXMgYXZhaWxhYmxlIGZvciBzdHlsaW5nIHlvdXIgYXBwIGF0IGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3RoZW1lLlxcbi0tPlxcbjxHcmlkTGF5b3V0IGNsYXNzPVxcXCJwYWdlXFxcIj5cXG4gICAgPExpc3RWaWV3IFtpdGVtc109XFxcIml0ZW1zXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCI+XFxuICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCBbbnNSb3V0ZXJMaW5rXT1cXFwiWycvaXRlbScsIGl0ZW0uaWRdXFxcIiBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+PC9MYWJlbD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgIDwvTGlzdFZpZXc+XFxuPC9HcmlkTGF5b3V0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbXM6IEFycmF5PEl0ZW0+O1xuXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0b1xuICAgIC8vIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgSXRlbVNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSxcbiAgICAvLyBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XG4gICAgfVxufVxuIiwiXG4gICAgICAgIGxldCBhcHBsaWNhdGlvbkNoZWNrUGxhdGZvcm0gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICAgICAgaWYgKGFwcGxpY2F0aW9uQ2hlY2tQbGF0Zm9ybS5hbmRyb2lkICYmICFnbG9iYWxbXCJfX3NuYXBzaG90XCJdKSB7XG4gICAgICAgICAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTtcbnJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2FjdGl2aXR5XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIik7XG4gICAgICAgIGNvbnN0IHJ1bm5lckNvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoXCIuLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LXVuaXQtdGVzdC1ydW5uZXIvYXBwXCIsIHRydWUsIC8oPzwhXFxiQXBwX1Jlc291cmNlc1xcYi4qKVxcLih4bWx8Y3NzfGpzfCg/PCFcXC5kXFwuKXRzfCg/PCFcXGJfW1xcdy1dKlxcLilzY3NzKSQvKTtcbiAgICAgICAgZ2xvYmFsLnJlZ2lzdGVyV2VicGFja01vZHVsZXMocnVubmVyQ29udGV4dCk7XG4gICAgICAgIGdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIi4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtdW5pdC10ZXN0LXJ1bm5lci9hcHAvYXBwLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC11bml0LXRlc3QtcnVubmVyL2FwcC9hcHAuY3NzXCIpKTtcbiAgICAgICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIikuc2V0Q3NzRmlsZU5hbWUoXCIuLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LXVuaXQtdGVzdC1ydW5uZXIvYXBwL2FwcC5jc3NcIik7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KFwifi9cIiwgdHJ1ZSwgL3Rlc3RzXFwvLipcXC4odHN8anMpLyk7XG4gICAgICAgICAgICBnbG9iYWwucmVnaXN0ZXJXZWJwYWNrTW9kdWxlcyhjb250ZXh0KTtcbiAgICAgICAgXG4gICAgICAgIHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LXVuaXQtdGVzdC1ydW5uZXIvYXBwL2J1bmRsZS1hcHAuanNcIik7XG4gICAgXG4gICAgIiwiaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi4vYXBwL2l0ZW0vaXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gJ34vYXBwL2l0ZW0vaXRlbXMuY29tcG9uZW50JztcbmltcG9ydCB7IEJ5IH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBuc1Rlc3RCZWRCZWZvcmVFYWNoLCBuc1Rlc3RCZWRBZnRlckVhY2gsIG5zVGVzdEJlZFJlbmRlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3Rlc3RpbmcnO1xuXG5kZXNjcmliZSgnaXRlbS1kZXRhaWwtY29tcG9uZW50JywgKCkgPT4ge1xuICBiZWZvcmVFYWNoKG5zVGVzdEJlZEJlZm9yZUVhY2goXG4gICAgW0l0ZW1zQ29tcG9uZW50XSxcbiAgICBbSXRlbVNlcnZpY2VdXG4gICkpO1xuICBhZnRlckVhY2gobnNUZXN0QmVkQWZ0ZXJFYWNoKCkpO1xuXG4gIGl0KGBzaG91bGQgY29udGFpbiBpdGVtc2AsICgpID0+IHtcbiAgICByZXR1cm4gbnNUZXN0QmVkUmVuZGVyKEl0ZW1zQ29tcG9uZW50KS50aGVuKChmaXh0dXJlKSA9PiB7XG4gICAgICBmaXh0dXJlLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIGNvbnN0IGxpc3QgPSBmaXh0dXJlLmRlYnVnRWxlbWVudC5xdWVyeShCeS5jc3MoJy5saXN0LWdyb3VwJykpO1xuXG4gICAgICBleHBlY3QobGlzdCkudG9CZURlZmluZWQoKTtcbiAgICB9KTtcbiAgfSlcbn0pO1xuIiwiaW1wb3J0IFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvem9uZS1qcy90ZXN0aW5nLmphc21pbmVcIjtcbmltcG9ydCB7IG5zVGVzdEJlZEluaXQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvdGVzdGluZ1wiO1xubnNUZXN0QmVkSW5pdCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==