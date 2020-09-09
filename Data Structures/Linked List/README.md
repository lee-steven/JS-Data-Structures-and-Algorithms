# Linked Lists

Linked lists are exactly what you think they may be — a list! More accurately a linked list is a list of nodes. Each node element generally holds some value (number, string, boolean, etc.) as well as a pointer that "points" to the next node in the list. Unlike an array where you can access any element/index at any time, a linked list (almost always) has to be accessed from the head. Meaning that to find an element, you have to iterate through the list starting from the "head" node until you reach null. <br /><br />
There's different types of linked lists: <br />
- **Singly Linked Lists** are what I pretty much described earlier, a list of nodes with each node pointing to the next node until the last node points to null. <br />
- **Doubly Linked Lists** are similar to Singly Linked Lists but all the nodes contain ANOTHER pointer that points to the previous node. <br />
- **Circular Linked Lists** never end as the "last" node in the list points back to the first node creating the circular linked list. A circular linked list can be either singly or doubly linked.

## Time Complexity
**Search:** O(n) <br />
**Insertion:** O(1) <br />
**Access:** O(n) <br />
**Delete:** O(1) <br />
