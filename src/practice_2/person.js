
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        let people="My name is "+this.name.toString()+". I am "+this.age.toString()+" years old.";
        return people;
    }
}

module.exports=Person;