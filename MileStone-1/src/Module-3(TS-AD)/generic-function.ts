//Arrow Function

const createArray = (param: string): string[] => {
    return [param]
};

const createArray1 = <T>(param: T): T[] => {
    return [param]
};
const createArray2 = <X, Y>(param1: X, param2: Y): [X, Y] => {
    return [param1, param2]
};


const result1 = createArray1<string>("Bangladesh");
const result2 = createArray1<boolean>(true);
const result3 = createArray1<{ name: string }>({ name: "Bangladesh" });

const result4 = createArray2<boolean, string[]>(true, ["Bangladesh"]);
const result5 = createArray2<boolean, Array<string>>(true, ["Bangladesh"]);



//spread operator


const myInfo = {
    name: "Kabir",
    age: 26,
    salary: 25000
};

const addMeInMyCrushMine = <T>(myInfo: T) => {
    const crush = "kashfia";
    const newData = {...myInfo, crush };
    return newData;
}

const result6 = addMeInMyCrushMine(myInfo)
console.log(result6);