// 1) створити інтерфейс на основі цього объекта:
//     Зверніть увагу там де масиви... в них може бути багато однотипних об'єктів

interface ICores {
    flight: number;
    core: {
        reuse_count: number;
        status: boolean;
    }
}

interface IPayloads {
    payload_type: string;
    payload_mass_kg: number;
    payload_mass_lbs: number;
}

interface ILaunchSite {
    site_name_long: string;
}

interface ILinks {
    article_link: string;
    video_link: string;
}

interface IRocked {
    rocket_name: string;
    first_stage: {
        cores: ICores[];
    },
    second_stage: {
        payloads: IPayloads[];
    }
}

interface IXObj {
    mission_name: string;
    launch_date_local: string;
    launch_site: ILaunchSite;
    links: ILinks;
    rocket: IRocked;
}


////////////////////////////////
// 2) протипізувати функції:
interface IUser {
    name: string;
    age: number;
    gender: string;
}

const user = {
    name: "Max",
    age: 18,
    gender: 'male'
}

function sum(a: number, b: number): number {
    return a + b
}

function showSum(a: number, b: number): void {
    console.log(a + b);
}

function incAge(someUser: IUser, inc: number): IUser {
    someUser.age += inc
    return someUser
}

console.log(sum(1, 2));
showSum(2, 3);
incAge(user, 2);


///The End///