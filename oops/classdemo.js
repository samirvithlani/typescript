var Student = /** @class */ (function () {
    function Student() {
        //classleve variable.. //instance variable
        this.userName = "John";
        this.age = 20;
        this.students = [{
                name: "John",
                age: 20
            },
            {
                name: "Jay",
                age: 30
            }
        ];
    }
    Student.prototype.getAllStudentsData = function () {
        for (var i = 0; i < this.students.length; i++) {
            console.log(this.students[i].name);
            console.log(this.students[i].age);
        }
    };
    Student.prototype.display = function () {
        console.log(this.userName);
        console.log(this.age);
        this.getAllStudentsData();
    };
    Student.prototype.calling = function () {
        this.display();
    };
    return Student;
}());
//object creation
var s1 = new Student();
s1.calling();
