import { Subscriber } from "../Subscribers/Subscriber.ts";

export interface Publisher<T> {
    subscribers: Array<Subscriber<T>>;

    attach: (subscriber: Subscriber<T>) => void;

    detach: (subscriber: Subscriber<T>) => void;

    publish: (message: T) => void;

    list: () => string[];
}
