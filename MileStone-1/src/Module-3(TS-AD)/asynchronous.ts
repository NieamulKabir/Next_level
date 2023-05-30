
interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
const getToDo=async (): Promise<ITodo> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
};

const getToDoData=async(): Promise<void> => {
    const result30 = await getToDo();
    console.log(result30);   
};
getToDoData();


const makePromise = ():Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = "Data is fetched";
        if (data) {
            resolve(data);
        } else {
            reject('Failed to fetch data')
        }
    })
};

const getPromiseData=async():Promise<string>=>{
    const data= await makePromise();
    return data; 
}