//inheritance : is a process of creating a new class from an existing class
// reusability
//single inheritance a ->b
//multiple inheritance a->b,c
//multilevel inheritance a->b->c
//hierarchical inheritance a->b,c
//hybrid inheritance a->b,c->d
class Person {

        constructor(){

            console.log("person is created");
        }

}
class Employee extends Person
{

        constructor(){
           
            
            super();
            console.log("Employee is created");
        }
}
var emp = new Employee();
///
