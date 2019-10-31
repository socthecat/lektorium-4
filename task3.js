Array.prototype.myForeach = function(someFunc) {
    for (let i = 0; i < arr.length; i++) {
      someFunc(this[i], i);
    }
}

Array.prototype.myMap = function(callback) {
    let arr = [];
    for (let i = 0; i < this.length; i++)  {
      arr.push(callback(this[i]))
    }
    return arr;
}

Array.prototype.mySort = function() {
    for(let i = 0; i < this.length - 1; i++) {
        for(let j = 0; j = this.length - i - 1; j++) {
            if(this[j] > this[j+1]) {
                let temp = this[j];
                this[j] = this[j+1];
                this[j+1] = this[j];
            }
        }
    }
    return this;
};