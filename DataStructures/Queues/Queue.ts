namespace Queue {
    export interface IQueue<T> {
        Dequeue(): T | undefined;
        Enqueue(item: T): void;
        Peek(): T;
        Count(): number;
        Clear(): void;
    }

    export class Queue<T> implements IQueue<T> {
        private _tail: number;
        private _head: number;
        private _size: number;

        private _array: T[];

        constructor() {
            this._tail = 0;
            this._head = 0;
            this._size = 0;
        }

        Dequeue(): T {
            if (this._size == 0) {
                throw new Error("Queue empty!");
            }

            let result: T = this._array.pop();
            this._head = (this._head + 1) % this._array.length;
            this._size--;

            return result;
        }

        Enqueue(item: T): void {
            this._array.push(item);
            this._tail = (this._tail + 1) % this._array.length;
            this._size++;
        }

        Peek(): T {
            if (this._size == 0) {
                throw new Error("Queue empty!");
            }

            return this._array[this._head];
        }

        Count(): number {
            return this._size;
        }

        Clear(): void {
            this._array = [];
            this._tail = 0;
            this._head = 0;
            this._size = 0;
        }
    }
}