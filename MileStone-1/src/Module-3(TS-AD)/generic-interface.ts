interface CrushInterface<T,U=undefined> {
    name: string;
    husband: T;
    wife?:U
};

const crush10: CrushInterface<boolean,string> = {
    name: "Kasfia",
    husband: true,
    wife:"Na"
};

const crush11: CrushInterface<string> = {
    name: "Kasfia",
    husband: 'Nieamul'
};

interface HusbandInterface {
    name: string,
    salary: number
}
const crush12: CrushInterface<HusbandInterface> = {
    name: "Kashfia",
    husband: {
        name: "Nieamul",
        salary: 100
    }
}