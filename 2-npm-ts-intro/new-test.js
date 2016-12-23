var b = 'hello';
console.log('B is: ' + b);
var Man = (function () {
    function Man() {
    }
    Man.prototype.speak = function () {
        console.log('In a gruff voice, hello I am ' + this.name);
    };
    return Man;
}());
var abishek = new Man();
abishek.name = 'Abishek';
abishek.speak();
