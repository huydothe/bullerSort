class BulleSort {
    private list: number[];

    constructor(list: number[]) {
        this.list = list;
    }

    getList(){
        return this.list;
    }

    bulleSort(){
        for(let i=0; i<this.list.length; i++){
            for(let j=0; j<this.list.length-i-1; j++){
                console.log(`List after sort #${i}.${j} :`);
                if(this.list[j]>this.list[j+1]){
                    this.sort(j);
                }
                console.log(this.list)
            }
        }
    }

    private sort(j: number) {
        let temp = this.list[j];
        this.list[j] = this.list[j + 1];
        this.list[j + 1] = temp;
    }
}

let list = new BulleSort([234, 43, 55, 63, 5, 6, 235, 547]);
let originList=[...list.getList()];
console.log(`Begin sort processing....`)
console.log(`Origin list : ${originList}`)
list.bulleSort()