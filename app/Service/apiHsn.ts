var hostApi='hosturl';
var apiGet='/url';
var apiGetId='/url';
var apiSave='/url';
var apiDelete='/url';
declare var fetch;

import {serialize,deserialize,plainToClass} from "class-transformer";
import {Hsn} from '../Model/Hsn';

var myInit = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
};

//use separate file for each service for each model as we are desirliazing data and returning it called function

export class hsnService {

    GetAll() {
        return fetch(hostApi+apiGet,myInit)
            .then(function(response){
                return response.json();
            })
            .then(function(response){
                ///plainToClass it is used to deserialie the json object in hsn class object..
                //here hsn is model class...
                return plainToClass(Hsn,response.data);
            })
            .catch(function(err){
                debugger;
                console.log(err);
        })
    }

    GetById(Id) {
        return fetch(hostApi+apiGet+Id,myInit)
            .then(function(response){
                return response.json();
            })
            .then(function(response){
                ///plainToClass it is used to deserialie the json object in hsn class object..
                return plainToClass(Hsn,response.data);
            })
            .catch(function(err){
                debugger;
                console.log(err);
        })
    }

}