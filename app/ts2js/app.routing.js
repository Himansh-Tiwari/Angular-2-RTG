"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./Component/home.component");
var hsn_component_1 = require("./Component/hsn.component");
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'hsn', component: hsn_component_1.HsnComponent },
    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' } // redirect to home page on load
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map