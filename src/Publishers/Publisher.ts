import { Subscriber } from "../Subscribers/Subscriber";

export interface Publisher {
    subscribers: Array<Subscriber>;

    attach: (subscriber: Subscriber) => void;

    detach: (subscriber: Subscriber) => void;

    list: () => string[];
}
