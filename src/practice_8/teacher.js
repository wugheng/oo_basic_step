import Person from "./person.js";
class Teacher extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass=klass;
    }
    introduce(){
        if(this.klass===undefined) {
            return super.introduce()+" I am a Teacher. I teach No Class.";
        }
        else return super.introduce() + " I am a Teacher. I teach Class " + this.klass.number.toString() + '.';
    }
    introduceWith(Jerry){
        if(Jerry.klass===this.klass){
            return super.introduce() + " I am a Teacher. I teach "+Jerry.name+'.';
        }
        else return super.introduce() + " I am a Teacher. I don't teach "+Jerry.name+'.';
    }
}
module.exports=Teacher;
