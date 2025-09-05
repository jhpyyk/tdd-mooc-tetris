import { Subscriber } from "../Subscribers/Subscriber";
import { Publisher } from "./Publisher";

export class LineClearPublisher implements Publisher<number> {
    subscribers: Subscriber<number>[] = [];

    attach = (subscriber: Subscriber<number>) => {
        if (this.list().includes(subscriber.name)) {
            console.log("Subscribers must have unique names");
            return;
        }
        this.subscribers = this.subscribers.concat(subscriber);
    };

    detach = (subscriber: Subscriber<number>) => {
        const subIndex = this.subscribers.indexOf(subscriber);
        if (subIndex === -1) {
            console.log("The subscriber is not attached to this publisher");
            return;
        }

        this.subscribers = this.subscribers.toSpliced(subIndex, 1);
    };

    publish = (linesCleared: number) => {
        this.subscribers.forEach((sub) => {
            sub.receive(linesCleared);
        });
    };

    list = () => {
        return this.subscribers.map((sub: Subscriber<number>) => {
            return sub.name;
        });
    };
}
