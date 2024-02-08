import {expect, test, describe} from '@jest/globals'
import {Queue} from './Queue'
import { QueueError } from './Queue.interface';
describe("Queue Tests", () => {
    
    test("empty queue and add element and remove same element", () => {
        var queue = new Queue<number>();
        queue.setCapacity(69);
        queue.enqueue(15);
        expect (queue.length()).toBe(1);
        expect (queue.peek()).toBe(15);
        expect (queue.dequeue()).toBe(15);
        expect (queue.length()).toBe(0);
    });

    test("Peek undefined from empty list",() => {
        var queue = new Queue<number>();
        expect (queue.peek()).toBeUndefined();
    })

    test ("Setting valid capacity", () => {
        var queue = new Queue<number>();
        queue.setCapacity(69);
        queue.setCapacity(3);
        expect (queue.getCapacity()).toBe(3);
    })

    test ('Setting invalid capacity', () => {
        var queue = new Queue<number>();
        expect (() => queue.setCapacity(-5)).toThrowError(QueueError)
    })
    
    test ("Return error when capacity < length", () => {
        var queue= new Queue<number>();
        queue.setCapacity(2);
        queue.enqueue(0);
        queue.enqueue(1);
        expect (() => queue.enqueue(2)).toThrowError(QueueError)
    })

    test ('Get undefined capacity', () => {
        var queue = new Queue<number>();
        expect (queue.getCapacity()).toBe(0);
    })

    test ('Add element to list with unset capacity', () => {
        var queue = new Queue<number>();
        expect (() => queue.enqueue(2)).toThrowError(QueueError)
    })

    test ('Dequeue empty list', () => {
        var queue = new Queue<number>();
        expect (() => queue.dequeue()).toThrowError(QueueError)
    })
})