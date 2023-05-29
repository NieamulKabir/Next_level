// type GenericArray= Array<number>;
type GenericArray<T> = Array<T>;     // Generic type -T dynamic variable



const rollNumbers10: GenericArray<number> = [44, 12, 4]; //number[]
const rollNumbers11: GenericArray<string> = ['44', '12', '11'];// string[]

type NameRollType = { name: string, roll: number };

const userNameAndRollNumbers: GenericArray<NameRollType> = [
    {
        name: "kabir",
        roll: 1924,
    },
    {
        name: "Nieamul",
        roll: 19
    }
]; //object[]

type GenericTupel<T, Y> = [T, Y];

const relation: GenericTupel<string, string> = ['Kabir', 'kasfia'];


type RelationWIthSalaryType = { name: string, salary: number };
const relationWithSalary: GenericTupel<RelationWIthSalaryType, string> = [
    {
        name: "Nieamul",
        salary: 10000
    },
    "Kasfia"
]
