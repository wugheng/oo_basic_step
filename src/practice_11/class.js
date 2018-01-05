
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
            if(this.teacher!==undefined){
                console.log("I am "+this.teacher.name+". I know "+student.name+" become Leader of Class "+this.number.toString()+".");
            }
            return this.leader;
        }
        else{
            this.leader=student.name;
            console.log("It is not one of us.");
            return this.leader;
        }
    }
    registerAssignLeaderListener(teacher){
        this.teacher=teacher;
    }
    appendMember(student) {
        if(student.klass!==this){
            student.klass=this;
            if(this.listener!==undefined){
                if(this.listener.isTeaching(student)){
                    console.log("I am "+this.listener.name+". I know "+student.name+" has joined Class "+this.number.toString()+".");
                }
            }
        }

        return student.klass;
    }
    registerJoinListener(teacher){
        this.listener=teacher;
    }

    isIn(student){
        if(student.klass===this){
            return true;
        }
        else{
            return false;
        }
    }

}

module.exports=Class;
