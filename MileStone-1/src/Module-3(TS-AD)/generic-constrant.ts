type MyInfoType = {
    name: string;
    age: number;
    salary: number;
};

const myInfo1: MyInfoType = {
    name: "Kabir",
    age: 25,
    salary: 20000
};

type MandatoryTypes = { name: string, age: number, salary: number };

const addMeInMyCrushMine10 = <T extends MandatoryTypes>(myInfo1: T) => {
    const crush = "kashfia";
    const newData = { ...myInfo1, crush };
    return newData;
}

const result10 = addMeInMyCrushMine10<MyInfoType>(myInfo1);
console.log(result10);