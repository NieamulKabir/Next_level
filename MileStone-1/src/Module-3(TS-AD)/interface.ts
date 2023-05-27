type User = {
    name: string;
    age: number;
};


interface IUser {
    name: string;
    age: number;
};

interface IExtendedUser extends IUser {
    role: string;
}

const userWithTypeAlis: User = {
    name: "Type alis",
    age: 1000
};

const userWithInterface: IUser = {
    name: "Interface",
    age: 200,
};

const userr: IExtendedUser = {
    name: 'Extend User',
    age: 3000,
    role: 'extend role'
}