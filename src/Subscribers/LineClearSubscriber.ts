import { Subscriber } from "./Subscriber";

export class LineClearSubscriber implements Subscriber<number> {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    receive = (linesCleared: number) => {};
}
