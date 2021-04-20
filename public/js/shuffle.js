module.exports =  class MyArray{
	constructor(arr){
		this.arr = arr
	}
	shuffle(){
		return this.arr.sort(() => Math.random() - 0.5);
	}
}