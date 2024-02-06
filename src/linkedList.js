import Node from './node';
export default class LinkedList{
    constructor(){
        this.headNode = null;
    }
    append(value){
        if(this.headNode === null) {
            this.headNode = new Node(value);
            return;
        }
        let currentNode = this.headNode;
        while(currentNode.next !== null){
            currentNode = currentNode.next;
        }
        currentNode.next = new Node(value);
    }
    prepend(value){
        if(this.headNode === null){
            this.append(value);
            return;
        } 
        let tempNode = this.headNode;
        this.headNode = new Node(value);
        this.headNode.next = tempNode;
    }
    size(){
        let count = 0;
        let currentNode = this.headNode;
        while(currentNode.next !== null){
            count += 1;
            currentNode = currentNode.next;
        }
        return count;
    }
    head(){
        return this.headNode;
    }
    tail(){
        if(this.headNode === null) return;
        let currentNode = this.headNode;
        while(currentNode.next !== null){
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    at(index){
        if(this.headNode === null) return;
        let currentNode = this.headNode;
        let currentIndex = 0;
        while(currentIndex !== index){
            if(currentNode.next === null) return;
            currentNode = currentNode.next;
            currentIndex += 1;
        }
        return currentNode;
    }
    pop(){
        if(this.headNode === null) return;
        if(this.headNode.next === null){
            let temp = this.headNode;
            this.headNode = null;
            return temp;
        }
        let previousNode = this.headNode;
        let nextNode = previousNode.next;
        while(nextNode.next !== null){
            nextNode = nextNode.next;
            previousNode = previousNode.next;
        }
        previousNode.next = null;
        return nextNode;
    }
    contains(value){
        if(this.headNode === null) return;
        let currentNode = this.headNode;
        while(currentNode){
            if(currentNode.value === value) return true;
            currentNode = currentNode.next;
        }
        return false;
    }
    find(value){
        if(this.headNode === null) return null;
        let currentIndex = 0;
        let currentNode = this.headNode;
        while(currentNode){
            if(currentNode.value === value) return currentIndex;
            currentIndex += 1;
            currentNode = currentNode.next;
        }
        return null;
    }
    toString(){
        if(this.headNode === null) return;
        let string = '';
        let currentNode = this.headNode;
        while(currentNode){
            string += `${ currentNode.value } -> `
            currentNode = currentNode.next;
        }
        return string + 'null'
    }
}