class Student{

    //classleve variable.. //instance variable
     userName : string = "John";
     age : number = 20;
     students :any[]=[{
            name:"John",
            age:20},
            {
            name:"Jay",
            age:30
            }
        ]


        getAllStudentsData(){

                for(let i=0;i<this.students.length;i++){
                    console.log(this.students[i].name)
                    console.log(this.students[i].age)
                }

        }


     display(){
            console.log(this.userName)
            console.log(this.age)
            this.getAllStudentsData();
     }
     calling(){
        this.display();
     }

}
//object creation

let s1 = new Student();
s1.calling();