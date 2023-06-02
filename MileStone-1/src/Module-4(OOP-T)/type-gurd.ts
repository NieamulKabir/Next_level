
// keyof guard
type AlphaNumeric = string | number;

function add(param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    } else {
        return param1.toString() + param2.toString();
    }
}
add("1", '2');
add(1, 2);


//in guard
type NormalUserType = {
    name: string;
};
type AdminUserType = {
    name: string;
    role: "admin";
};

function getUser(user: NormalUserType | AdminUserType) {
    if ("role" in user) {
        return `I am an admin and my role is ${user.role}`
    } else {
        return 'I am normal user';
    }
}

const normalUser1: NormalUserType = {
    name: "Mr. Kalu"
};
const adminUser1: AdminUserType = { name: "Mr. Gallu", role: "admin" };

console.log(getUser(normalUser1));