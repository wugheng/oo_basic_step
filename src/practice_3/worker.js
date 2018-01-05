import Person from "./person.js";
class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }
    introduce(){
        let people="I am a Worker. I have a job.";
        return people;
    }
}

module.exports=Worker;
