import Student from "./student.js"
class Class{
    constructor(number){
        this.number=number;
    }
    getDisplayName(){
        return "Class "+this.number.toString();
    }
    assignLeader(student){
        if(student.klass===this){
            this.leader=student;
            return this.leader;
        }
        else{
            this.leader=student.name;
            return this.leader;
        }

    }
}

module.exports=Class;
