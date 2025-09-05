import { expect } from "chai";
import { beforeEach, describe, test } from "vitest";
import { MinimalSubscriber } from "../src/Subscribers/MinimalSubscriber";
import { MinimalPublisher } from "../src/Publishers/MinimalPublisher";

test("A Subscriber can be attached to a Publisher", () => {
    const sub = new MinimalSubscriber("Minimal Subscriber");
    const pub = new MinimalPublisher();

    pub.attach(sub);

    expect(pub.subscribers).to.include(sub);
});

describe("A Publisher ", () => {
    let sub: MinimalSubscriber;
    let pub: MinimalPublisher;

    beforeEach(() => {
        sub = new MinimalSubscriber("Minimal Subscriber");
        pub = new MinimalPublisher();

        pub.attach(sub);
    });

    test("can list subscriber names", () => {
        expect(pub.list()).to.include("Minimal Subscriber");
    });

    test("can attach multiple subscribers", () => {
        const sub2 = new MinimalSubscriber("Minimal Subscriber 2");
        pub.attach(sub2);

        expect(pub.list()).to.include("Minimal Subscriber 2");
    });

    test("can only attach Subscribers with unique names", () => {
        const sub2 = new MinimalSubscriber("Minimal Subscriber");
        pub.attach(sub2);

        expect(pub.list().length).to.equal(1);
    });

    test("can detach a subscriber", () => {
        pub.detach(sub);

        expect(pub.list().length).to.equal(0);
    });
});
