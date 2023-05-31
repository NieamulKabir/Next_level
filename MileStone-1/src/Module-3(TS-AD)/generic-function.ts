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
    const newData = { ...myInfo, crush };
    return newData;
}

const result6 = addMeInMyCrushMine(myInfo)
console.log(result6);

function getArrayItem<T, K extends keyof T>(arr: T[], index: number, key: K): T[K] {

    const item = arr[index];

    return item[key];

}


const users100 = [{ name: 'John', age: 30 }, { name: 'Mary', age: 25 },];

console.log(getArrayItem(users100, 0, 'name'))


// type Data = { num11: number }
// type B = {
//   [key in keyof Data]: string;

// }

// const numbers:B = {

//   num11: 20

// }

interface Person {

    firstName: string;
  
    lastName: string;
  
  }
  

  function fullName<T extends Person>(person: T): string {
  
    return `${person.firstName} ${person.lastName}`;
  
  }
  
  