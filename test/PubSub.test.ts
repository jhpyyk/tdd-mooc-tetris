import { expect } from "chai";
import { describe, test } from "vitest";
import { MinimalSubscriber } from "../src/Subscribers/MinimalSubscriber";
import { MinimalPublisher } from "../src/Publishers/MinimalPublisher";

test("A Subscriber can be attached to a Publisher", () => {
    const sub = new MinimalSubscriber();
    const pub = new MinimalPublisher();

    pub.attach(sub);

    expect(pub.subscribers.length).to.include(sub);
});
