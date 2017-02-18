"use strict";
var hostApi = 'hosturl';
var apiGet = '/url';
var apiGetId = '/url';
var apiSave = '/url';
var apiDelete = '/url';
var class_transformer_1 = require("class-transformer");
var Hsn_1 = require("../Model/Hsn");
var myInit = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
};
//use separate file for each service for each model as we are desirliazing data and returning it called function
var hsnService = (function () {
    function hsnService() {
    }
    hsnService.prototype.GetAll = function () {
        return fetch(hostApi + apiGet, myInit)
            .then(function (response) {
            return response.json();
        })
            .then(function (response) {
            ///plainToClass it is used to deserialie the json object in hsn class object..
            //here hsn is model class...
            return class_transformer_1.plainToClass(Hsn_1.Hsn, response.data);
        })
            .catch(function (err) {
            debugger;
            console.log(err);
        });
    };
    hsnService.prototype.GetById = function (Id) {
        return fetch(hostApi + apiGet + Id, myInit)
            .then(function (response) {
            return response.json();
        })
            .then(function (response) {
            ///plainToClass it is used to deserialie the json object in hsn class object..
            return class_transformer_1.plainToClass(Hsn_1.Hsn, response.data);
        })
            .catch(function (err) {
            debugger;
            console.log(err);
        });
    };
    return hsnService;
}());
exports.hsnService = hsnService;
//# sourceMappingURL=apiHsn.js.map