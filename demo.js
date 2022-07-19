var BulleSort = /** @class */ (function () {
    function BulleSort(list) {
        this._list = list;
    }
    // get list(): number[] {
    //     return this._list;
    // }
    BulleSort.prototype.bulleSort = function () {
        for (var i = 0; i < this._list.length; i++) {
            for (var j = 0; j < this._list.length - i - 1; j++) {
                if (this._list[j] > this._list[j + 1]) {
                    this.sort(j);
                }
            }
        }
        console.log(this._list);
    };
    BulleSort.prototype.sort = function (j) {
        var temp = this._list[j];
        this._list[j] = this._list[j + 1];
        this._list[j + 1] = temp;
    };
    return BulleSort;
}());
var list = new BulleSort([234, 43, 55, 63, 5, 6, 235, 547]);
list.bulleSort();
