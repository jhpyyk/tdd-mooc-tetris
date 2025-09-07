import { Subscriber } from "./Subscriber.ts";

export class MinimalSubscriber implements Subscriber<string> {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    receive = (message: string) => {};
}
