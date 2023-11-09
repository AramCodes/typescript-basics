let age: number = 100
let firstName: string = 'Angela'
let busy: boolean = true

export const screen = document.querySelector('.screen') // must export since changing makeup
const firstInput = document.querySelector('#first-input') as HTMLInputElement // type casting

const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement
const userNameDisplay = document.querySelector('#user') as HTMLElement
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement

const reviews: {                  //an array of objects containing review information and types of data
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string;
}[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

// Solution
function showReviewTotal (value : number, reviewer: string, isLoyaltyUser: boolean) {
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer 
    + " " + `${ isLoyaltyUser ? '⭐' : ''}`
}

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

const you = {
    userName: 'Bobby',
    isReturning: true,
}

function populateUser(isReturning : boolean, userName : string ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

populateUser(you.isReturning, you.userName)

//Object Type

//EG;
// const you: {
//     userName : string;
//     isReturning: boolean
// } = {
//    userName: 'Bobby',
//    isReturning: true,
// }

const me: {
    firstName: string;
    lastName: string;
    isReturning: boolean;
    age: number;
    stayedAt: (string | number)[];
} = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow', 23]
}

//Tuple sets number of  elements and types od those elements
// [number, string] two elements

//Enum = Enumerations is a way of giving more friendly names to sets of  values like in C# and Java
// enum Permissions {
//     ADMIN,
//     READ_ONLY
// }
// enum LoyaltyUser {
//     GOLD_USER = 'GOLD_USER',
//     SILVER_USER = 'SILVER_USER',
//     BRONZE_USER = 'BRONZE_USER',
// }

// Literals are references to specific strings and numbers in type positions
//type Price = 45 | 30 | 25 price can not be notthing but those three data points

// Function and Void type
// function add( firstValue: number, secondValue: number ) : number {
//     return firstValue + secondValue
// }


// Interfaces just like java saves a bit of  code; can be used as a type
// interface Review {
//     name: string;
//     stars: number;
//     loyaltyUser: LoyaltyUser;
//     date: string;
// }

//Classes
// class Car {
//     make: string
//     year: number
//     color: string
//     constructor(make, year, color) {
//         this.make = make
//         this.year = year
//         this.color = color
//     }
// }
// class MainProperty {
//     src: string
//     title: string
//     reviews: Review[]
//     constructor(src, title, reviews) {
//         this.src = src
//         this.title = title
//         this.reviews = reviews
//     }
// }