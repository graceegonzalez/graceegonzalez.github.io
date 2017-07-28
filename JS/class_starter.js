class Person {
  constructor(first_name, last_name, address) {
    this.first_name=first_name;
    this.last_name=last_name;
    this.address=address;
  }
  getFullName(){
    document.getElementById("myName").innerHTML = this.first_name + this.last_name;
    }
  getAddress(){
    document.getElementById("myAddress").innerHTML = this.address;
    }
}

var Tom_Cruise = new Person ("Tom", "Cruise", "123 Living Lane, Someplace CA")
  Tom_Cruise.getFullName();
  Tom_Cruise.getAddress();
