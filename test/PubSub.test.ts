import { expect } from "chai";
import { beforeEach, describe, test } from "vitest";
import { MinimalSubscriber } from "../src/Subscribers/MinimalSubscriber";
import { MinimalPublisher } from "../src/Publishers/MinimalPublisher";

test("A Subscriber can be attached to a Publisher", () => {
    const sub = new MinimalSubscriber();
    const pub = new MinimalPublisher();

    pub.attach(sub);

    expect(pub.subscribers).to.include(sub);
});

describe("A Publisher ", () => {
    let sub: MinimalSubscriber;
    let pub: MinimalPublisher;

    beforeEach(() => {
        sub = new MinimalSubscriber();
        pub = new MinimalPublisher();

        pub.attach(sub);
    });

    test("can list subscriber names", () => {
        expect(pub.list()).to.include("Minimal Subscriber");
    });
});
