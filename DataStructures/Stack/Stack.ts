namespace Stack {
    export interface IStack<T> {
        Pop(): T | undefined;
        Peek(): T;
        Push(item: T): void;
        Count(): number;
        Clear(): void;
    }

    export class Stack<T> implements IStack<T> {
        private _size: number;

        private _array: T[];

        constructor() {
            this._size = 0;
        }

        Pop(): T {
            if (this._size == 0) {
                throw new Error("Stack empty!");
            }

            let result: T = this._array.pop(); 
            this._size--;

            return result;
        }

        Peek(): T {
            if (this._size == 0) {
                throw new Error("Stack empty!");
            }

            return this._array[this._size - 1];
        }

        Push(item: T): void {
            this._array.push(item);
            this._size++;
        }

        Count(): number {
            return this._size;
        }

        Clear(): void {
            this._array = [];
            this._size = 0;
        }
    }
}