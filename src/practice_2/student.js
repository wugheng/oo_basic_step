class Student{
    constructor(name,age,klass){
        this.name=name;
        this.age=age;
        this.klass=klass;
    }
    introduce(){
        let kclass=this.klass.toString();
        kclass="I am a Student. I am at Class "+kclass+".";
        return kclass;
    }
}
module.exports=Student;
