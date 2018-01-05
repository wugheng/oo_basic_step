import Person from "./person.js";
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        let people=super.introduce()+" I am a Student. I am at Class "+this.klass.toString()+".";
        return people;
    }
}

module.exports=Student;
