// typescript variable declaration
var getFullName = function (name, lastName) {
    return name + ' ' + lastName;
};
console.log(getFullName('Tritera', 'Erlangga'));
var user = {
    name: 'Troy',
    age: 26,
    getMessage: function () {
        return 'Hello' + name;
    }
};
var user2 = {
    name: 'Jack',
    getMessage: function () {
        return 'Hello' + name;
    }
};
var popularTag = ['dragon', 'coffee'];
var pageName = '1'; // union
var movie = null;
var dragon = 'dragon';
// -end-
// typescript DOM
var someElement = document.querySelector('.foo');
someElement.addEventListener('blur', function (e) {
    var target = e.target;
    console.log(target.value);
});
// -end-
