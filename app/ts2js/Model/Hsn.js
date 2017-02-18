"use strict";
var Hsn = (function () {
    function Hsn() {
        this.Phone = 75035;
    }
    Hsn.prototype.getHeader = function () {
        return this.Header1 + " " + this.Header2 + " " + this.Header3 + " " + this.Header4;
    };
    Hsn.prototype.getDatee = function () {
        return this.CreatedAt;
    };
    return Hsn;
}());
exports.Hsn = Hsn;
//# sourceMappingURL=Hsn.js.map