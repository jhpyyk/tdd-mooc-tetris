import * as chaiModule from "chai";
import spies from "chai-spies";
const chai = chaiModule.use(spies);
import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { LineClearSubscriber } from "../src/Subscribers/LineClearSubscriber";
import { LineClearPublisher } from "../src/Publishers/LineClearPublisher";

test("A Subscriber can be attached to a Publisher", () => {
    const sub = new LineClearSubscriber("LineClear");
    const pub = new LineClearPublisher();

    pub.attach(sub);

    expect(pub.subscribers).to.include(sub);
});

describe("A Publisher ", () => {
    let sub: LineClearSubscriber;
    let pub: LineClearPublisher;

    beforeEach(() => {
        sub = new LineClearSubscriber("LineClear");
        pub = new LineClearPublisher();

        pub.attach(sub);
    });

    test("can list subscriber names", () => {
        expect(pub.list()).to.include("LineClear");
    });

    test("can attach multiple subscribers", () => {
        const sub2 = new LineClearSubscriber("LineClear2");
        pub.attach(sub2);

        expect(pub.list()).to.include("LineClear2");
    });

    test("can only attach Subscribers with unique names", () => {
        const sub2 = new LineClearSubscriber("LineClear");
        pub.attach(sub2);

        expect(pub.list().length).to.equal(1);
    });

    test("can detach a subscriber", () => {
        pub.detach(sub);

        expect(pub.list().length).to.equal(0);
    });

    //     test("can not detach a non-attached subscriber", () => {
    //         expect(pub.list().length).to.equal(1);
    //         const sub2 = new MinimalSubscriber("MS2");
    //         pub.detach(sub2);

    //         expect(pub.list().length).to.equal(1);
    //     });

    //     test("can publish a message", () => {
    //         const message = "message";
    //         const receiveSpy = chai.spy.on(sub, "receive");
    //         pub.publish(message);

    //         expect(receiveSpy).to.have.been.called.with(message);
    //     });
});
