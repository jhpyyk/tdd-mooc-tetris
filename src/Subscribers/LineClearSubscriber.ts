import { Subscriber } from "./Subscriber.ts";

type Callback = (linesCleared: number) => void;
export class LineClearSubscriber implements Subscriber<number> {
    name: string;
    callback: Callback;
    constructor(name: string, callback: Callback) {
        this.name = name;
        this.callback = callback;
    }

    receive = (linesCleared: number) => {
        this.callback(linesCleared);
    };
}
