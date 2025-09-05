import { Subscriber } from "../Subscribers/Subscriber";
import { Publisher } from "./Publisher";

export class MinimalPublisher implements Publisher {
    subscribers: Subscriber[] = [];

    attach = (subscriber: Subscriber) => {
        this.subscribers = this.subscribers.concat(subscriber);
    };

    list = () => {
        return this.subscribers.map((sub: Subscriber) => {
            return sub.name;
        });
    };
}
