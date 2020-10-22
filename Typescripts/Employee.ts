export class Employee{
    constructor(private  firstName: string, private lastName: string) {
        this.firstName=firstName;
        this.lastName=lastName;
    }


    get x(): string {
        return this.firstName;
    }

    set x(firstName: string){
        this.firstName = firstName;
    }

    get y(): string {
        return this.lastName;
    }

    set y(lastName: string) {
        this.lastName = lastName;
    }
}

let employee=new Employee('Madhu','Nandipati');
console.log(employee.x, employee.y);
