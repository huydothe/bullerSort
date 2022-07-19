class BulleSort {
    private _list: number[];

    constructor(list: number[]) {
        this._list = list;
    }

    bulleSort(){
        for(let i=0; i<this._list.length; i++){
            for(let j=0; j<this._list.length-i-1; j++){
                if(this._list[j]>this._list[j+1]){
                    this.sort(j);
                }
            }
        }
        console.log(this._list)
    }

    private sort(j: number) {
        let temp = this._list[j];
        this._list[j] = this._list[j + 1];
        this._list[j + 1] = temp;
    }
}

let list = new BulleSort([234, 43, 55, 63, 5, 6, 235, 547]);
list.bulleSort()