class MyClass{  //pascal case
    //1. p:v
     n1='';
    //2. constructor
    constructor(name){
        //this is an internal class object
       this.n1 = name // associativity of the operator
    }

    //3. method/function
    getMyFullName(){ //camleCase
          console.log('hey');
    }
}
//Class Instantiation
//let classObject = new ClassName();
//ok is an external object
let ok = new MyClass('aashu');
let ok2 = new MyClass('aashish');

//classObject.member
ok.getMyFullName();