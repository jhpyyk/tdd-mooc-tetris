import { Subscriber } from "../Subscribers/Subscriber";

export interface Publisher<T> {
    subscribers: Array<Subscriber>;

    attach: (subscriber: Subscriber) => void;

    detach: (subscriber: Subscriber) => void;

    publish: (message: T) => void;

    list: () => string[];
}
