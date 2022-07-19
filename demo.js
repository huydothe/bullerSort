var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var BulleSort = /** @class */ (function () {
    function BulleSort(list) {
        this.list = list;
    }
    BulleSort.prototype.getList = function () {
        return this.list;
    };
    BulleSort.prototype.bulleSort = function () {
        for (var i = 0; i < this.list.length; i++) {
            for (var j = 0; j < this.list.length - i - 1; j++) {
                console.log("List after sort #".concat(i, ".").concat(j, " :"));
                if (this.list[j] > this.list[j + 1]) {
                    this.sort(j);
                }
                console.log(this.list);
            }
        }
    };
    BulleSort.prototype.sort = function (j) {
        var temp = this.list[j];
        this.list[j] = this.list[j + 1];
        this.list[j + 1] = temp;
    };
    return BulleSort;
}());
var list = new BulleSort([234, 43, 55, 63, 5, 6, 235, 547]);
var originList = __spreadArray([], list.getList(), true);
console.log("Begin sort processing....");
console.log("Origin list : [".concat(originList, "]"));
// list.bulleSort()
