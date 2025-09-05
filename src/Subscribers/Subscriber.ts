export interface Subscriber {
    name: string;

    receive: (message: string) => void;
}
