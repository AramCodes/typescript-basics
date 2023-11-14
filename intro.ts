const firstName:string = "aram"

console.log(firstName)

const userID:number = 338629

console.log(userID);

const isHired:boolean = false

console.log(isHired);

const superHeros: string[] = []
superHeros.push("batman", "superman", "spiderman")

const fileForms = function (form: object, isCompleted:boolean) :{}[] {

    let allFilledForms:{}[] = []

    if(isCompleted) { 
    allFilledForms.push(form)}

    return allFilledForms
}

function fail(msg: string):never {
    throw new Error(msg)
}

const user:{
    readonly _id: number | string;
    name:string;
    age:number;
    email:string;
    isActive:boolean;
} = {
    _id: 57413,
    name: "Aram", 
    age: 18, email: 
    "aham@gmail.com",
    isActive: true
}

console.log(user)

// Aliases
type Mohigan = {
    name:string,
    isBiggerThanSeven: boolean;
    email:string;
    maidensSlain: number;
    notMinuteMan: boolean;
}

function createMohigan(mohigan: Mohigan) : Mohigan{

    return mohigan
}

createMohigan( {name: "Aram", isBiggerThanSeven:true, email: "valcourtaram@gmal.com", 
maidensSlain: 9005, notMinuteMan: true} ) 

export {}

// Union Type
let score: number | string = 0
score = 44
score = "44"

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
seatAllotment = "middle"
seatAllotment = "window"

// Tuples
const tuple: [string, number, boolean, object] = [ "Batman", 89 , true, {kills:0, civiliansSaved: "over 1 million"} ]

function useInfo(tuple):void {
    tuple.array.forEach(element => {
        console.log(element)
    });
}

useInfo(tuple)

// Enumeration or Enums
enum SeatChoice {
    AISLE,
    MIDDLE,
    WINDOW
}

const avSeat = SeatChoice.AISLE