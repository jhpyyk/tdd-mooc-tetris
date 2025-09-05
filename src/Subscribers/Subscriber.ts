export interface Subscriber<T> {
    name: string;

    receive: (message: T) => void;
}
