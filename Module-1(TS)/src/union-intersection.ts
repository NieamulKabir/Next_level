type NoobDeveloper = {
    name: string;
}

// type JuniorDeveloper={
//     name:string,
//     expertise:string,
//     experience:number
// }

type JuniorDeveloper = NoobDeveloper & {
    expertise: string;
    experience: number;
}
type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number
}
const newDeveloper: JuniorDeveloper = {
    name: 'Moznu Mia',
    expertise: 'JS',
    experience: 1
}

const developer: NextLevelDeveloper = {
    name: 'Next',
    expertise: 'TS',
    experience: 2,
    leadershipExperience: 1
}