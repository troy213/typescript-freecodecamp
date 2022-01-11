var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
// ======================================================================
// typescript DOM
var someElement = document.querySelector('.foo');
someElement.addEventListener('blur', function (e) {
    var target = e.target;
    console.log(target.value);
});
var UserClass = /** @class */ (function () {
    function UserClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    UserClass.prototype.changeUnchangableName = function () {
        // this.unchangableName = "foo" // error because it's a constant
    };
    UserClass.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    UserClass.maxAge = 50; // make static to only accesible from the class itself
    return UserClass;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(UserClass));
var userClass = new UserClass('John', 'Doe');
console.log(userClass.getFullName());
var admin = new Admin('Jane', 'Doe');
admin.setEditor(admin.getFullName()); // can access parent class function
console.log(admin.getEditor());
// -end-
// ======================================================================
// generic interface and function
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var userGeneric = {
    name: 'Jack',
    data: {
        meta: 'foo'
    },
    meta: 'bar'
};
var userGeneric2 = {
    name: 'John',
    data: ['foo', 'bar', 'baz'],
    meta: 'baz'
};
var result = addId(userGeneric);
console.log('result', result);
// -end-
// ======================================================================
// enum in typescript
var statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2
};
console.log(statuses.inProgress);
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["NotStarted"] = "notStarted";
    StatusEnum["InProgress"] = "inProgress";
    StatusEnum["Done"] = "done";
})(StatusEnum || (StatusEnum = {}));
var notStartedStatus = StatusEnum.NotStarted;
notStartedStatus = StatusEnum.Done;
console.log(StatusEnum.InProgress);
// -end-
