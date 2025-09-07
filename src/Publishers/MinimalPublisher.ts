import { Subscriber } from "../Subscribers/Subscriber.ts";
import { Publisher } from "./Publisher.ts";

export class MinimalPublisher implements Publisher<string> {
    subscribers: Subscriber<string>[] = [];

    attach = (subscriber: Subscriber<string>) => {
        if (this.list().includes(subscriber.name)) {
            console.log("Subscribers must have unique names");
            return;
        }
        this.subscribers = this.subscribers.concat(subscriber);
    };

    detach = (subscriber: Subscriber<string>) => {
        const subIndex = this.subscribers.indexOf(subscriber);
        if (subIndex === -1) {
            console.log("The subscriber is not attached to this publisher");
            return;
        }

        this.subscribers = this.subscribers.toSpliced(subIndex, 1);
    };

    publish = (message: string) => {
        this.subscribers.forEach((sub) => {
            sub.receive(message);
        });
    };

    list = () => {
        return this.subscribers.map((sub: Subscriber<string>) => {
            return sub.name;
        });
    };
}
