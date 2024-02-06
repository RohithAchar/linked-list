import LinkedList from './linkedList';
let list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.prepend(40);

console.log(list.toString());