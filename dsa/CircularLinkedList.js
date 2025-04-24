class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}

let first = new Node(2);
let second = new Node(3);
let third = new Node(4);

first.next = second;
second.next = third;
third.next = first;

function insertInEmptyList(last, data)
{
    if (last !== null)
        return last;

        //create a new node
        let newNode = new Node(data);

        //point new node to itself
        newNode.next = newNode;

        //update last to point to the new node
        last = newNode;
        return last;         
}

function printList(last){
    if(last === null)
        return;
    
    //start from head node
    let head = last.next;
    while(true){
        console.log(head.data);
        head = head.next;
        if(head === last.next)
            break;
    }
}

    //Main function
    let last = null;

    //insert a node into empty list
    last = insertInEmptyList(last, 1);

    //print the list
    console.log("List after insertion");
    printList(last);

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//function to insert a node at the beginning of the circular linked list

function insertAtBeginning(last, value)
{
    const newNode = new Node(value);

    //If the list is empty, make the new node point to itself and set it as last
    if(last === null){
        newNode.next = newNode;
        return newNode;
    }

    //Insert the new node at the beginning
    newNode.next = last.next;
    last.next = newNode;

    return last;
}

//Function to print the circular linked list
function printList2(last)
{
    if(last === null)
        return;
    let headd = last.next;
    while(true){
        console.log(headd.data + " ");
        headd = headd.next;
        if (headd === last.next)
            break;
    }
    console.log();
}

// Create circular Linked List: 2, 3, 4
const firsst = new Node(2);
firsst.next = new Node(3);
debugger;
firsst.next.next = new Node(4);//check how is it traversing ?????
let lasst = first.next.next; // Using let to allow reassignment
lasst.next = firsst;

console.log("Original list: ");
printList(lasst);

//Insert 5 at the beginning
lasst = insertAtBeginning(lasst, 5);

console.log("List after inserting 5 at the beginning: ");
printList2(lasst);