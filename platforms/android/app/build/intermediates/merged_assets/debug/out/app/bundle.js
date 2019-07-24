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
	"./tests/example.ts": "./tests/example.ts"
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
/* harmony import */ var _angular_core_testing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/testing.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_item_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/item/item.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_item_items_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/item/items.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@angular/platform-browser/fesm5/platform-browser.js");






describe('item-detail-component', function () {
    var component;
    var fixture;
    beforeEach(Object(_angular_core_testing__WEBPACK_IMPORTED_MODULE_0__["async"])(function () {
        _angular_core_testing__WEBPACK_IMPORTED_MODULE_0__["TestBed"].configureTestingModule({
            providers: [_app_item_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]],
            declarations: [_app_item_items_component__WEBPACK_IMPORTED_MODULE_4__["ItemsComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["NO_ERRORS_SCHEMA"]]
        }).compileComponents()
            .then(function () {
            fixture = _angular_core_testing__WEBPACK_IMPORTED_MODULE_0__["TestBed"].createComponent(_app_item_items_component__WEBPACK_IMPORTED_MODULE_4__["ItemsComponent"]);
            component = fixture.componentInstance;
        });
    }));
    it("should contain items", function () {
        fixture.detectChanges();
        var list = fixture.debugElement.query(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["By"].css('.list-group'));
        expect(list).toBeDefined();
    });
});


/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vXFxiX1tcXHctXSpcXC4pc2NzcykkIiwid2VicGFjazovLy8uIHN5bmMgdGVzdHNcXC8uKlxcLih0c3xqcykiLCJ3ZWJwYWNrOi8vLy4vYXBwL2l0ZW0vaXRlbS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9pdGVtL2l0ZW1zLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9pdGVtL2l0ZW1zLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIiwid2VicGFjazovLy8uL3Rlc3RzL2V4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSw0Q0FBNEMsV0FBVztBQUN2RDtBQUNBO0FBQ0EseUU7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEOzs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBMkM7QUFPM0M7SUFIQTtRQUlZLFVBQUssR0FBRyxJQUFJLEtBQUssQ0FDckIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUNqRCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQzFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDakQsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUM3QyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQ25ELEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDM0MsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUNqRCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQzFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsRUFDMUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUMzQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQy9DLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDakQsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUNo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VSxDQUFDLG1FQUFLLENBQUM7UUFDZiw2REFBTyxDQUFDLHNCQUFzQixDQUFDO1lBQzdCLFNBQVMsRUFBRSxDQUFDLGtFQUFXLEVBQUUsOERBQWMsQ0FBQztZQUN4QyxZQUFZLEVBQUUsQ0FBQyx3RUFBYyxDQUFDO1lBQzlCLE9BQU8sRUFBRSxDQUFFLDhEQUFnQixDQUFFO1NBQzlCLENBQUMsQ0FBQyxpQkFBaUIsRUFBRTthQUNyQixJQUFJLENBQUM7WUFDSixPQUFPLEdBQUcsNkRBQU8sQ0FBQyxlQUFlLENBQUMsd0VBQWMsQ0FBQztZQUNqRCxTQUFTLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ3hDLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFSixFQUFFLENBQUMsc0JBQXNCLEVBQUU7UUFDekIsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hCLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLDREQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFFL0QsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdCLENBQUMsQ0FBQyxDQUFDO0FBRUwsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuLi8kJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgcmVjdXJzaXZlXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC1yb290LnhtbFwiOiBcIi4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtdW5pdC10ZXN0LXJ1bm5lci9hcHAvYXBwLXJvb3QueG1sXCIsXG5cdFwiLi9hcHAuY3NzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC11bml0LXRlc3QtcnVubmVyL2FwcC9hcHAuY3NzXCIsXG5cdFwiLi9hcHAuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LXVuaXQtdGVzdC1ydW5uZXIvYXBwL2FwcC5qc1wiLFxuXHRcIi4vYnVuZGxlLWFwcC1yb290LnhtbFwiOiBcIi4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtdW5pdC10ZXN0LXJ1bm5lci9hcHAvYnVuZGxlLWFwcC1yb290LnhtbFwiLFxuXHRcIi4vYnVuZGxlLWFwcC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtdW5pdC10ZXN0LXJ1bm5lci9hcHAvYnVuZGxlLWFwcC5qc1wiLFxuXHRcIi4vYnVuZGxlLW1haW4tcGFnZS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtdW5pdC10ZXN0LXJ1bm5lci9hcHAvYnVuZGxlLW1haW4tcGFnZS5qc1wiLFxuXHRcIi4vYnVuZGxlLW1haW4tcGFnZS54bWxcIjogXCIuLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LXVuaXQtdGVzdC1ydW5uZXIvYXBwL2J1bmRsZS1tYWluLXBhZ2UueG1sXCIsXG5cdFwiLi9tYWluLXBhZ2UuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LXVuaXQtdGVzdC1ydW5uZXIvYXBwL21haW4tcGFnZS5qc1wiLFxuXHRcIi4vbWFpbi1wYWdlLnhtbFwiOiBcIi4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtdW5pdC10ZXN0LXJ1bm5lci9hcHAvbWFpbi1wYWdlLnhtbFwiLFxuXHRcIi4vbWFpbi12aWV3LW1vZGVsLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC11bml0LXRlc3QtcnVubmVyL2FwcC9tYWluLXZpZXctbW9kZWwuanNcIixcblx0XCIuL3J1bi1kZXRhaWxzLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC11bml0LXRlc3QtcnVubmVyL2FwcC9ydW4tZGV0YWlscy5qc1wiLFxuXHRcIi4vcnVuLWRldGFpbHMueG1sXCI6IFwiLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC11bml0LXRlc3QtcnVubmVyL2FwcC9ydW4tZGV0YWlscy54bWxcIixcblx0XCIuL3NlcnZpY2VzL2thcm1hLWZpbGVzLXNlcnZpY2UuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LXVuaXQtdGVzdC1ydW5uZXIvYXBwL3NlcnZpY2VzL2thcm1hLWZpbGVzLXNlcnZpY2UuanNcIixcblx0XCIuL3NlcnZpY2VzL2thcm1hLWhvc3QtcmVzb2x2ZXIuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LXVuaXQtdGVzdC1ydW5uZXIvYXBwL3NlcnZpY2VzL2thcm1hLWhvc3QtcmVzb2x2ZXIuanNcIixcblx0XCIuL3NlcnZpY2VzL3Rlc3QtZXhlY3V0aW9uLXNlcnZpY2UuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LXVuaXQtdGVzdC1ydW5uZXIvYXBwL3NlcnZpY2VzL3Rlc3QtZXhlY3V0aW9uLXNlcnZpY2UuanNcIixcblx0XCIuL3N0b3AtcHJvY2Vzcy5hbmRyb2lkLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC11bml0LXRlc3QtcnVubmVyL2FwcC9zdG9wLXByb2Nlc3MuYW5kcm9pZC5qc1wiLFxuXHRcIi4vc3RvcC1wcm9jZXNzLmlvcy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtdW5pdC10ZXN0LXJ1bm5lci9hcHAvc3RvcC1wcm9jZXNzLmlvcy5qc1wiLFxuXHRcIi4vdGVzdC1ydW4tcGFnZS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtdW5pdC10ZXN0LXJ1bm5lci9hcHAvdGVzdC1ydW4tcGFnZS5qc1wiLFxuXHRcIi4vdGVzdC1ydW4tcGFnZS54bWxcIjogXCIuLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LXVuaXQtdGVzdC1ydW5uZXIvYXBwL3Rlc3QtcnVuLXBhZ2UueG1sXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC11bml0LXRlc3QtcnVubmVyL2FwcCBzeW5jIHJlY3Vyc2l2ZSAoPzwhXFxcXGJBcHBfUmVzb3VyY2VzXFxcXGIuKilcXFxcLih4bWx8Y3NzfGpzfCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL3Rlc3RzL2V4YW1wbGUudHNcIjogXCIuL3Rlc3RzL2V4YW1wbGUudHNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSB0ZXN0c1xcXFwvLipcXFxcLih0c3xqcylcIjsiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1TZXJ2aWNlIHtcbiAgICBwcml2YXRlIGl0ZW1zID0gbmV3IEFycmF5PEl0ZW0+KFxuICAgICAgICB7IGlkOiAxLCBuYW1lOiBcIlRlciBTdGVnZW5cIiwgcm9sZTogXCJHb2Fsa2VlcGVyXCIgfSxcbiAgICAgICAgeyBpZDogMywgbmFtZTogXCJQaXF1w6lcIiwgcm9sZTogXCJEZWZlbmRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDQsIG5hbWU6IFwiSS4gUmFraXRpY1wiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxuICAgICAgICB7IGlkOiA1LCBuYW1lOiBcIlNlcmdpb1wiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxuICAgICAgICB7IGlkOiA2LCBuYW1lOiBcIkRlbmlzIFN1w6FyZXpcIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcbiAgICAgICAgeyBpZDogNywgbmFtZTogXCJBcmRhXCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDgsIG5hbWU6IFwiQS4gSW5pZXN0YVwiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxuICAgICAgICB7IGlkOiA5LCBuYW1lOiBcIlN1w6FyZXpcIiwgcm9sZTogXCJGb3J3YXJkXCIgfSxcbiAgICAgICAgeyBpZDogMTAsIG5hbWU6IFwiTWVzc2lcIiwgcm9sZTogXCJGb3J3YXJkXCIgfSxcbiAgICAgICAgeyBpZDogMTEsIG5hbWU6IFwiTmV5bWFyXCIsIHJvbGU6IFwiRm9yd2FyZFwiIH0sXG4gICAgICAgIHsgaWQ6IDEyLCBuYW1lOiBcIlJhZmluaGFcIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcbiAgICAgICAgeyBpZDogMTMsIG5hbWU6IFwiQ2lsbGVzc2VuXCIsIHJvbGU6IFwiR29hbGtlZXBlclwiIH0sXG4gICAgICAgIHsgaWQ6IDE0LCBuYW1lOiBcIk1hc2NoZXJhbm9cIiwgcm9sZTogXCJEZWZlbmRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDE3LCBuYW1lOiBcIlBhY28gQWxjw6FjZXJcIiwgcm9sZTogXCJGb3J3YXJkXCIgfSxcbiAgICAgICAgeyBpZDogMTgsIG5hbWU6IFwiSm9yZGkgQWxiYVwiLCByb2xlOiBcIkRlZmVuZGVyXCIgfSxcbiAgICAgICAgeyBpZDogMTksIG5hbWU6IFwiRGlnbmVcIiwgcm9sZTogXCJEZWZlbmRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDIwLCBuYW1lOiBcIlNlcmdpIFJvYmVydG9cIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcbiAgICAgICAgeyBpZDogMjEsIG5hbWU6IFwiQW5kcsOpIEdvbWVzXCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDIyLCBuYW1lOiBcIkFsZWl4IFZpZGFsXCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDIzLCBuYW1lOiBcIlVtdGl0aVwiLCByb2xlOiBcIkRlZmVuZGVyXCIgfSxcbiAgICAgICAgeyBpZDogMjQsIG5hbWU6IFwiTWF0aGlldVwiLCByb2xlOiBcIkRlZmVuZGVyXCIgfSxcbiAgICAgICAgeyBpZDogMjUsIG5hbWU6IFwiTWFzaXBcIiwgcm9sZTogXCJHb2Fsa2VlcGVyXCIgfVxuICAgICk7XG5cbiAgICBnZXRJdGVtcygpOiBBcnJheTxJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xuICAgIH1cblxuICAgIGdldEl0ZW0oaWQ6IG51bWJlcik6IEl0ZW0ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGlkKVswXTtcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLVxcblRoZSB0ZW1wbGF0ZSBkZWZpbmVzIHRoZSB2aWV3IG9mIHRoZSBjb21wb25lbnQgLSB3aGF0IGlzIGFjdHVhbGx5IHJlbmRlcmVkLlxcbkluIE5hdGl2ZVNjcmlwdCBhcHBsaWNhdGlvbnMgdGhlIHRlbXBsYXRlIGlzIGRlZmluZWQgd2l0aCBYTUwgdXNpbmcgTmF0aXZlU2NyaXB0IFVJIGVsZW1lbnRzLlxcbkl0IGlzIGRpZmZlcmVudCBmcm9tIEhUTUwuIFNvIGluc3RlYWQgb2YgPGlucHV0PiwgPHNwYW4+LCA8ZGl2PiBldGMuIC0gd2UgaGF2ZSA8VGV4dEZpZWxkPiwgPExhYmVsPiBhbmQgbGF5b3V0cy5cXG5UaGUgaW1wb3J0YW50IHRoaW5nIGlzIHRoYXQgYWx0aG91Z2ggdGhlIGVsZW1lbnRzIGFyZSBkaWZmZXJlbnQgLSBhbGwgb2YgdGhlIEFuZ3VsYXLigJlzIHRlbXBsYXRlIHN5bnRheCB3b3JrcyBleGFjdGx5IHRoZSBzYW1lLlxcblNvIHlvdSBjYW4gc3RpbGwgdXNlIHRlbXBsYXRlIGV4cHJlc3Npb25zLCBiaW5kaW5ncywgdGVtcGxhdGVzIGFzIHdlbGwgYXMgYWxsIHRoZSBidWlsdC1pbiBkaXJlY3RpdmVzLlxcbi0tPlxcblxcbjwhLS1cXG5UaGUgQWN0aW9uQmFyIGlzIHRoZSBOYXRpdmVTY3JpcHQgY29tbW9uIGFic3RyYWN0aW9uIG92ZXIgdGhlIEFuZHJvaWQgQWN0aW9uQmFyIGFuZCBpT1MgTmF2aWdhdGlvbkJhci5cXG5odHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL2FjdGlvbi1iYXJcXG4tLT5cXG48QWN0aW9uQmFyIHRpdGxlPVxcXCJNeSBBcHBcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj5cXG48L0FjdGlvbkJhcj5cXG5cXG48IS0tXFxuVGhlIEdyaWRMYXlvdXQgYXJyYW5nZXMgaXRzIGNoaWxkIGVsZW1lbnRzIGluIGEgdGFibGUgc3RydWN0dXJlIG9mIHJvd3MgYW5kIGNvbHVtbnMuXFxuQSBjZWxsIGNhbiBjb250YWluIG11bHRpcGxlIGNoaWxkIGVsZW1lbnRzLCB0aGV5IGNhbiBzcGFuIG92ZXIgbXVsdGlwbGUgcm93cyBhbmQgY29sdW1ucywgXFxuYW5kIGV2ZW4gb3ZlcmxhcCBlYWNoIG90aGVyLiBUaGUgR3JpZExheW91dCBoYXMgb25lIGNvbHVtbiBhbmQgb25lIHJvdyBieSBkZWZhdWx0LlxcbllvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCBOYXRpdmVTY3JpcHQgbGF5b3V0cyBhdCBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS9sYXlvdXQtY29udGFpbmVycy5cXG5cXG5UaGVzZSBjb21wb25lbnRzIG1ha2UgdXNlIG9mIHNldmVyYWwgQ1NTIGNsYXNzIG5hbWVzIHRoYXQgYXJlIHBhcnQgb2YgdGhlIE5hdGl2ZVNjcmlwdFxcbmNvcmUgdGhlbWUsIHN1Y2ggYXMgcC0yMCwgYnRuLCBoMiwgYW5kIGxpc3QtZ3JvdXAuIFlvdSBjYW4gdmlldyBhIGZ1bGwgbGlzdCBvZiB0aGVcXG5jbGFzcyBuYW1lcyBhdmFpbGFibGUgZm9yIHN0eWxpbmcgeW91ciBhcHAgYXQgaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvdGhlbWUuXFxuLS0+XFxuPEdyaWRMYXlvdXQgY2xhc3M9XFxcInBhZ2VcXFwiPlxcbiAgICA8TGlzdFZpZXcgW2l0ZW1zXT1cXFwiaXRlbXNcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIj5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIFtuc1JvdXRlckxpbmtdPVxcXCJbJy9pdGVtJywgaXRlbS5pZF1cXFwiIFt0ZXh0XT1cXFwiaXRlbS5uYW1lXFxcIlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgPC9MaXN0Vmlldz5cXG48L0dyaWRMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2l0ZW0uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtczogQXJyYXk8SXRlbT47XG5cbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvXG4gICAgLy8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBJdGVtU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy5cbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLFxuICAgIC8vIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbXMoKTtcbiAgICB9XG59XG4iLCJcbiAgICAgICAgbGV0IGFwcGxpY2F0aW9uQ2hlY2tQbGF0Zm9ybSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgICAgICBpZiAoYXBwbGljYXRpb25DaGVja1BsYXRmb3JtLmFuZHJvaWQgJiYgIWdsb2JhbFtcIl9fc25hcHNob3RcIl0pIHtcbiAgICAgICAgICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpO1xucmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvYWN0aXZpdHlcIik7XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiKTtcbiAgICAgICAgY29uc3QgcnVubmVyQ29udGV4dCA9IHJlcXVpcmUuY29udGV4dChcIi4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtdW5pdC10ZXN0LXJ1bm5lci9hcHBcIiwgdHJ1ZSwgLyg/PCFcXGJBcHBfUmVzb3VyY2VzXFxiLiopXFwuKHhtbHxjc3N8anN8KD88IVxcLmRcXC4pdHN8KD88IVxcYl9bXFx3LV0qXFwuKXNjc3MpJC8pO1xuICAgICAgICBnbG9iYWwucmVnaXN0ZXJXZWJwYWNrTW9kdWxlcyhydW5uZXJDb250ZXh0KTtcbiAgICAgICAgZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC11bml0LXRlc3QtcnVubmVyL2FwcC9hcHAuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LXVuaXQtdGVzdC1ydW5uZXIvYXBwL2FwcC5jc3NcIikpO1xuICAgICAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKS5zZXRDc3NGaWxlTmFtZShcIi4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtdW5pdC10ZXN0LXJ1bm5lci9hcHAvYXBwLmNzc1wiKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoXCJ+L1wiLCB0cnVlLCAvdGVzdHNcXC8uKlxcLih0c3xqcykvKTtcbiAgICAgICAgICAgIGdsb2JhbC5yZWdpc3RlcldlYnBhY2tNb2R1bGVzKGNvbnRleHQpO1xuICAgICAgICBcbiAgICAgICAgcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtdW5pdC10ZXN0LXJ1bm5lci9hcHAvYnVuZGxlLWFwcC5qc1wiKTtcbiAgICBcbiAgICAiLCJpbXBvcnQgeyBhc3luYywgQ29tcG9uZW50Rml4dHVyZSwgVGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4uL2FwcC9pdGVtL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tICd+L2FwcC9pdGVtL2l0ZW1zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCeSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5kZXNjcmliZSgnaXRlbS1kZXRhaWwtY29tcG9uZW50JywgKCkgPT4ge1xuICBsZXQgY29tcG9uZW50OiBJdGVtc0NvbXBvbmVudDtcbiAgbGV0IGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8SXRlbXNDb21wb25lbnQ+O1xuXG4gIGJlZm9yZUVhY2goYXN5bmMoKCkgPT4ge1xuICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICBwcm92aWRlcnM6IFtJdGVtU2VydmljZSwgQWN0aXZhdGVkUm91dGVdLFxuICAgICAgZGVjbGFyYXRpb25zOiBbSXRlbXNDb21wb25lbnRdLFxuICAgICAgc2NoZW1hczogWyBOT19FUlJPUlNfU0NIRU1BIF1cbiAgICB9KS5jb21waWxlQ29tcG9uZW50cygpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KEl0ZW1zQ29tcG9uZW50KVxuICAgICAgY29tcG9uZW50ID0gZml4dHVyZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICB9KVxuICB9KSk7XG5cbiAgaXQoYHNob3VsZCBjb250YWluIGl0ZW1zYCwgKCkgPT4ge1xuICAgIGZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIGNvbnN0IGxpc3QgPSBmaXh0dXJlLmRlYnVnRWxlbWVudC5xdWVyeShCeS5jc3MoJy5saXN0LWdyb3VwJykpO1xuXG4gICAgZXhwZWN0KGxpc3QpLnRvQmVEZWZpbmVkKCk7XG4gIH0pO1xuXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=