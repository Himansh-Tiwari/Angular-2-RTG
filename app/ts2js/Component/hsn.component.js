"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var apiHsn_1 = require("../Service/apiHsn");
var HsnComponent = (function () {
    function HsnComponent() {
        var _this = this;
        debugger;
        var app = new apiHsn_1.hsnService();
        app.GetAll().then(function (response) {
            _this.data = response;
            console.log(_this.data);
        });
    }
    ;
    return HsnComponent;
}());
HsnComponent = __decorate([
    core_1.Component({
        selector: 'app-about',
        template: "\n    <h1>{{welcome}}</h1>\n     <table>\n      <tr>\n            <th>Id</th>\n            <th>Code</th>\n            <th>Header1</th>\n            <th>Header2</th>\n            <th>Header3</th>\n            <th>Header4</th>\n      </tr>\n      <tr *ngFor=\"let item of data\">\n           <td> {{item.Id}}</td>\n           <td>{{item.Code}}</td>\n           <td>{{item.Header1}}</td>\n           <td>{{item.Header2}}</td>\n           <td>{{item.Header3}}</td>\n           <td>{{item.Header4}}</td>\n           <td>{{item.Phone}}</td>\n           <td>{{item.getHeader()}}</td>\n      </tr>\n    </table>\n    "
    }),
    __metadata("design:paramtypes", [])
], HsnComponent);
exports.HsnComponent = HsnComponent;
;
//# sourceMappingURL=hsn.component.js.map