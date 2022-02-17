class List {
    constructor(){
        this.arr = [];
        this.size = this.arr.length;
    };
    
    add(element){
        this.arr.push(element);
        this.size = this.arr.length;
        this.arr.sort((a,b)=> a-b);
    };
    remove(index){
        if(index < 0 || index >= this.size){
            throw new Error('index ouf of array bounds');
        }
        this.arr.splice(index,1);
        this.size = this.arr.length;
    };
    get(index){
        if(index < 0 || index >= this.size){
            throw new Error('index ouf of array bounds');
        }
        return this.arr[index];
    };
}




let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
console.log('size ' + list.size);
list.remove(1);
console.log(list.get(1));
console.log('size ' + list.size);
