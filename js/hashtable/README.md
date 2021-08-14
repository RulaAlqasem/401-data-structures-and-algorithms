

# challeng 

## Implement a Hashtable Class with the following methods:
 - [x] add
Arguments: key, value
Returns: nothing
This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
- [x] get
Arguments: key
Returns: Value associated with that key in the table
 - [x] contains
Arguments: key
Returns: Boolean, indicating if the key exists in the table already.
- [x] hash
Arguments: key
Returns: Index in the collection for that key


## Approach & Efficiency
I took the approach of utilizing a Linked List for each bucket in my hash table and nodes within that linked list. Big O space is O(n) and big O time is O(1)

