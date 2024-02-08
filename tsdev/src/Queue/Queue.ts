import { AbstractQueue } from "./AbstractQueue";
import { QueueError, QueueErrorType } from "./Queue.interface";

export class Queue<T> extends AbstractQueue<T>{
    private elements: T[] = [];
    private capactiy:number = 0

    enqueue(item: T): void {
        if(this.capactiy > this.elements.length){
            this.elements.push(item)
        } else {
            throw new QueueError(QueueErrorType.QueueMaxSizeReached,'Some Error Message');
        }
    }
    dequeue(): T | undefined {
        if (this.elements.length != 0){
            return this.elements.shift();
        } else {
            throw new QueueError(QueueErrorType.QueueMaxSizeReached,'Empty list, cant remove element in list')
        }
    }
    peek(): T | undefined {
        if (this.elements.length != 0){
            return this.elements[0];
        } else {
            return undefined;
        }
    }
    length(): number {
        return this.elements.length;
    }
    setCapacity(capacity: number): void {
        if(capacity < 0){
            throw new QueueError(QueueErrorType.QueueMaxSizeReached,'Capacity cant be negative')
        } else {
            this.capactiy = capacity;
        }
    }
    getCapacity(): number {
        return this.capactiy;
    }
}