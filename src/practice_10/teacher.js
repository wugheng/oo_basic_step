import Person from "./person.js";
class Teacher extends Person{
    constructor(id,name,age,klass=null){
        super(id,name,age);
        if(klass!==null){
            this.klasses=[];
            for(let i=0;i<klass.length;i++){
                this.klasses.push(klass[i]);
            }
        }
    }
    introduce(){
        if( !this.hasOwnProperty("klasses")) {
            return super.introduce()+" I am a Teacher. I teach No Class.";
        }
        else{
            let string=super.introduce() + " I am a Teacher. I teach Class " ;
            for(let i=0;i<this.klasses.length;i++){
                if(i<=this.klasses.length-2){
                    string+=this.klasses[i].number.toString()+', ';
                }
                else string+=this.klasses[i].number.toString()+'.';
            }
            return string;
        }
    }

}
module.exports=Teacher;
