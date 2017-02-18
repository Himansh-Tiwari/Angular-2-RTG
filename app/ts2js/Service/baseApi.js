"use strict";
var hostApi = 'http://core.e2cs.in/api/';
var API = (function () {
    function API() {
    }
    API.prototype.fetchGames = function (url) {
        debugger;
        //let headers = new Headers({ 'Accept': 'application/json' });
        var myInit = { method: 'GET',
            headers: { 'Content-Type': 'application/json', 'x-access-token': 'eyJhbGciOiJIUzI1NiJ9.eyJJZCI6MywiUGFzc3dvcmQiOiIxMjMiLCJQZXJzb25JZCI6MSwiQ29tcGFueUlkIjoxLCJDcmVhdGVkQnkiOjEsIk1vZGlmaWVkQnkiOjEsIkFjdGl2ZSI6MCwiQ3JlYXRlZEF0IjoiMDAwMC0wMC0wMCAwMDowMDowMCIsIk1vZGlmaWVkQXQiOiIwMDAwLTAwLTAwIDAwOjAwOjAwIiwiVXNlck5hbWUiOiJjcmVhdG9yIiwiVXNlckdyb3VwIjoyLCJPd25lciI6Mn0.UBC_2Dj8Hrzke6BQMGyO7oaHzIUfto-W5LCo6S2kReI' }
        };
        return fetch(hostApi + url, myInit)
            .then(function (response) {
            console.log(response);
            return response.json();
        })
            .catch(function (err) {
            debugger;
            console.log(err);
        });
    };
    return API;
}());
exports.API = API;
//# sourceMappingURL=baseApi.js.map