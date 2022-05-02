"use strict";
class MyCircularQueue {
    constructor(k) {
        this.queue = Array(k).fill(null);
        this.k = k;
        this.count = 0;
        this.head = 0;
    }
    enQueue(value) {
        if (this.isFull())
            return false;
        this.queue[(this.head + this.count) % this.k] = value;
        this.count++;
        return true;
    }
    deQueue() {
        if (this.isEmpty())
            return false;
        this.count--;
        this.head = (this.head + 1) % this.k;
        return true;
    }
    Front() {
        return this.isEmpty() ? -1 : this.queue[this.head];
    }
    Rear() {
        return this.isEmpty()
            ? -1
            : this.queue[(this.head + this.count - 1) % this.k];
    }
    isEmpty() {
        return this.count === 0;
    }
    isFull() {
        return this.count === this.k;
    }
}
/**
//  * @param {number} k
//  */
// var MyCircularQueue = function (k) {
//   this.queue = Array(k).fill(null);
//   this.k = k;
//   this.count = 0;
//   this.head = 0;
// };
// /**
//  * @param {number} value
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.enQueue = function (value) {
//   if (this.isFull()) return false;
//   this.queue[(this.head + this.count) % this.k] = value;
//   this.count++;
//   return true;
// };
// /**
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.deQueue = function () {
//   if (this.isEmpty()) return false;
//   this.count--;
//   this.head = (this.head + 1) % this.k;
//   return true;
// };
// /**
//  * @return {number}
//  */
// MyCircularQueue.prototype.Front = function () {
//   return this.isEmpty() ? -1 : this.queue[this.head];
// };
// /**
//  * @return {number}
//  */
// MyCircularQueue.prototype.Rear = function () {
//   return this.isEmpty()
//     ? -1
//     : this.queue[(this.head + this.count - 1) % this.k];
// };
// /**
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.isEmpty = function () {
//   return this.count === 0;
// };
// /**
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.isFull = function () {
//   return this.count === this.k;
// };
