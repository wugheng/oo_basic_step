import Person from "./person.js";
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        let kclass=this.klass.toString();
        kclass="I am a Student. I am at Class "+kclass+".";
        return kclass;
    }
}

module.exports=Student;