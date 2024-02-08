import { IQueue } from "./Queue.interface";

 /* istanbul ignore next */
export abstract class AbstractQueue<T> implements IQueue<T> {
    
    enqueue(item: T): void {
        throw new Error("Method not implemented.");
    }
    dequeue(): T | undefined {
        throw new Error("Method not implemented.");
    }
    peek(): T | undefined {
        throw new Error("Method not implemented.");
    }
    length(): number {
        throw new Error("Method not implemented.");
    }
    setCapacity(capacity: number): void {
        throw new Error("Method not implemented.");
    }
    getCapacity(): number {
        throw new Error("Method not implemented.");
    }
}