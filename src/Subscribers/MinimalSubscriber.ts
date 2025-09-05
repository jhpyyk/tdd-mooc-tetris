import { Subscriber } from "./Subscriber";

export class MinimalSubscriber implements Subscriber {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    receive = (message: string) => {};
}
