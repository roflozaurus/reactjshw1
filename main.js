function loop(times=0, callback = null){
    if (callback === null){
        return false;
    }

    for (let i = 0; i < times; i++) {
        callback();
    }
return true;
}

loop(10,() => console.log('i most not tell lie'));

function calculateArea(height, width){
    const area = height * width;
    let name;
    if (height == width){
        name = 'квадрат'
    }else{ name = 'прямоугольник'}
    return {
        area: area,
        name: name,
        input: [height,width]}
}


class Human{
    constructor(name='ivan',age=24,dateOfBirth='11.20.2019'){
        this.name = String(name),
        this.age = Number(age),
        this.dateOfBirth = String(dateOfBirth)
    }
    displayInfo(){
        return `${this.name} ${this.age} ${this.dateOfBirth}`;
    }
}

class Employee extends Human{
    constructor(name,age,dateOfBirth,salary, department){
        super(name,age,dateOfBirth,);
        this.salary = Number(salary),
        this.department = String(department)
    }
    displayInfo(){
        return `${super.displayInfo()} ${this.salary} ${this.department}`;
    }
}


class Developer extends Employee{
    constructor(name,age,dateOfBirth,salary, department){
        super(name,age,dateOfBirth,salary, department);
        this.manager = null;

    }

    addManager(manager){
        this.manager = manager;
        if(!manager.developers.includes(this)){
            manager.addDeveloper(this);
        }
    }

    changeManager(manager){
        this.manager.remDeveloper(this);
        this.manager = manager;
        manager.developers.push(this);
    }

}


class Manager extends Employee{
    constructor(name,age,dateOfBirth,salary, department){
        super(name,age,dateOfBirth,salary, department);
        this.developers = [];
    }
    addDeveloper(developer){
        this.developers.push(developer);
        if(developer.manager){
            developer.changeManager(this);
        }else{
            developer.addManager(this);
        }
    }

    remDeveloper(developer){
        if (this.developers.includes(developer)){
            this.developers.splice(this.developers.indexOf(developer), 1);
            developer.manager = null;
        }
    }
}

`4*. Написать цикл, который создаёт массив промисов, внутри каждого промиса происходит обращение к ресурсу (https://jsonplaceholder.typicode.com/users/number), где вместо number подставляется число от 1 до 10, в итоге должно получиться 10 промисов. Следует дождаться выполнения загрузки всеми промисами и далее вывести массив загруженных данных.` 

const massivPromisov = [];

for(let number = 1; number <= 10; number++){
    const myPromise = new Promise(function(resolve, reject){
        const request = new XMLHttpRequest();
        request.open('GET',`https://jsonplaceholder.typicode.com/users/${number}`);
        request.onload = () => {
            resolve(request.response);
        }
        request.send();
    })
    massivPromisov.push(myPromise);
}


Promise.all(massivPromisov).then( result => {
    console.log(result);
}, result => {
    console.log('ничо ни вышла')
})
