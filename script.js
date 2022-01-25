


/** Задание 5
class Electro {
    constructor(name, power){
        this.name = name
        this.power = power
        this.isOn = false
    }
    getOn(){
        console.log('Мощность прибора' + this.name +'будет равна'+ this.power)
    }
    on(){
        console.log(`Включить ${this.name}`);
        this.isOn = true
    }
    off(){
        console.log(`Выключить ${this.name}`)
    }
    getWeightPC(){
        console.log('Вес компьютера' + this.weightPC)
    }
    getWeightTV(){
        console.log('Вес телевизора' + this.weightTV)
    }
    getPowerPC(){
        console.log('Мощность компьютера' + this.power)
    }
    getPowerTV(){
        console.log('Мощность телевизора' + this.power)
    }
}
class PC extends Electro {
    constructor(name, power, weightPC){
        super(name, power);
        this.weightPC = weightPC;
    }
}
class TV extends Electro {
    constructor(name, power, weightTV){
        super(name, power);
        this.weightTV = weightTV
    }
}
const MB = new Electro ('MacBook', 100);
const Mac = new PC ('Air', ' 180ВТ', ' 1kg');
const TVV = new Electro('Samsung', 100)
const teleV = new TV ('Oled', ' 300Вт', ' 5kg');
MB.on()
MB.off()
TVV.on()
TVV.off()
Mac.getPowerPC()
Mac.getWeightPC()
teleV.getPowerTV()
teleV.getWeightTV()
*/







/** Задание 4
let a = prompt('Samsung / MacBook?')
let parent = {
    TV: 'Samsung',
    PC: 'MacBook',
    ON: false
}
const TV = {
    TVModel: 'Oled',
    TVPower: '300Вт',
    TVWeight: '5kg'
    getPower: function power(a) {
        if(a == 'Samsung'){
            let b = prompt('Включить Samsung?')
            if(b == 'Да'){
                console.log(this.ON = true)
            }
        }
    }   
}
let PC = {
    PCModel: 'Air',
    PCPower: '180Вт',
    PCWeight: '1kg'
    getPower: function power(a) {
        if(a == 'MacBook'){
            let b = prompt('Включить MacBook?')
            if(b == 'Да'){
                console.log(this.ON = true)
            }
        }
    } 
}
Object.setPrototypeOf(PC, parent)
Object.setPrototypeOf(TV, parent)
console.log(PC)
TV.getPower(a)
PC.getPower(a)
 */


/**Задание 3
function obj() {
    const ob = Object.create(null)
    console.log(ob)
}
obj()
 */

/** Задание 2
const str = 'str';
const obj = {
    htr: 'a',
    btr: 'b'
}
obj.str = 'str';
console.log(obj)
function ex(str,obj){
let key = [];
for(key in obj){
}
if(key == str){
    console.log(true)
}else{console.log(false)}
}
ex(str,obj)
 */


/** Задание 1
const person = {
    city: 'Moscow',
    Name: 'Denis'
}
const student = Object.create(person);
student.ownCity = 'St Petersburg'
function a (student){
    for(let key in student){
        if(student.hasOwnProperty(key)){
            console.log(key)
        }
    }
}
a(student)
 */ 

