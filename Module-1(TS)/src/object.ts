const users: {
    name: string,
    age: number,
    isMarried: boolean,
    wife: string
} = {
    name: "Montu Mia",
    age: 52,
    isMarried: true,
    wife: "Bibi"
}

const users2: {
    name: string,
    age: number,
    isMarried: boolean,
    wife?: string //optional chaining
} = {
    name: "Montu Mia",
    age: 52,
    isMarried: false,
}

const users3: {
    company:"Programming Hero", //fixed value declare || also use readonly 
    name: string,
    age: number,
    isMarried: boolean,
    wife?: string //optional chaining
} = {
    company:"Programming Hero",
    name: "Montu Mia",
    age: 52,
    isMarried: false,
}