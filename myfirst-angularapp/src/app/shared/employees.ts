export class Employee{
    id:number;
    name:string;
    dept:string;
    desig:string;
    supervisor:string;
    role:string;

    
    constructor(id:number, name:string, dept:string,desig:string, supervisor:string,role:string) { 
        this.id=id;
        this.name=name;
        this.dept=dept;
        this.desig=desig;
        this.supervisor=supervisor;
        this.role= role;
    }

}