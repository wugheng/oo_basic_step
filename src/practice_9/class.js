
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
            console.log("It is not one of us.");
            return this.leader;
        }
    }
    appendMember(student){
        student.klass=this;
            return student.klass;
        }

}

module.exports=Class;