import { Subscriber } from "./Subscriber";

export class MinimalSubscriber implements Subscriber<string> {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    receive = (message: string) => {};
}
