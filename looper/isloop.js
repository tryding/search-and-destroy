'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
    let holder = []
    let head = linkedlist.head
    while (head.next) {
        holder.push(head)
        head = head.next
        if (holder.includes(head.next)) {
            return true
        }
    }
    return false
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop