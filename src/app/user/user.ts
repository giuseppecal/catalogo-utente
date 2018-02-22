import { Name } from "./name";
import { Picture } from "./picture";
import { Location } from "./location";

export class User {
    gender: string;
    name: Name;
    location: Location;
    picture: Picture;
    email: string;
    nat: string;
}