import { Subscriber } from "../Subscribers/Subscriber";
import { Publisher } from "./Publisher";

export class MinimalPublisher implements Publisher {
    subscribers: Subscriber[] = [];

    attach = (subscriber: Subscriber) => {
        if (this.list().includes(subscriber.name)) {
            console.log("Subscribers must have unique names");
            return;
        }
        this.subscribers = this.subscribers.concat(subscriber);
    };

    detach = (subscriber: Subscriber) => {
        const subIndex = this.subscribers.indexOf(subscriber);
        if (subIndex === -1) {
            console.log("The subscriber is not attached to this publisher");
            return;
        }

        this.subscribers = this.subscribers.toSpliced(subIndex, 1);
    };

    list = () => {
        return this.subscribers.map((sub: Subscriber) => {
            return sub.name;
        });
    };
}
