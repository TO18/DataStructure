// entity: data-structure| scenario: read-only ...| expected: true| result: array
// abstract data type (ADT) for array
// computers works with different types of data: how we store, organize, and group these data matters
// there's also need to know syntax for communicating with computer

// array is an iteration-based implementation
// array data stored together in same sequence in memory
// array needs to copy all elements to new larger block of memory when current block limit is exceeded
// circular array for maximum capacity loop, curr-pos = i, next-pos = (i + 1) % max-array-size

// need to focus on not just implementation of data structure but also time and space complexities

// linked list consists of nodes, operates from head: first node address (its identity), last node has data 0, and allocates memory dynamically
// nodes are objects containing storage data and memory address of next node
// recursive or iterative approach can be used to traverse linked list

// starting bit is variable memory address. mem hierarchy: code(text), static/global, stack (local var,func), heap (dynamic)
// variables are allocated memory block for storage

// doubly linked list consists of nodes with value, next and prev properties
// doubly linked list helpful for delete ops

// queue ADT: First In First Out (FIFO) - insert last entry and delete first entry - operations: enqueue(), dequeue(), front(), isEmpty(), isFull() - all have O(1) runtime
// queue used for shared resource where only one request can be processed at a time

// stack Abstract Data Type: Last In First Out (LIFO) - insert and delete from last entry - operations: push(), pop(), top(), isEmpty() - all operations have O(1) runtime
// stack used for undo, functions, convert infix to and from prefix or postfix notations, (prefix - postfix) operations, balanced parenthesis, reversal of structures (string, array, linked-list)
// split string to char array and stack pop for reverse of elements and join char array to string
// best to implement stack using linked-list (shouldn't use array)
// stack best for reversal of linked-list

// linear data structures: array, linked-list, stack, queue. Collection where data is arranged in sequential manner.
// linear data structures have logical start and logical end, elements can have next and previous element

// trees used for displaying hierarchical data eg file-system
//            for organizing data, quick search, insertion, deletion eg binary-search-tree
//            for trie eg dictionary
//            for network routing algorithm
// trees has root, children, parent, sibling, leaf. Leaf has no child, sibling have same parent, ancestors can walk to node
// inheritance uses hierarchical structure
// tree is a recursive data structure - reducing in self-similar manner
// node used and contains its data and address of children

// binary tree is tree implementation each node has at most 2 children
// binary tree needs to keep height to a minimum - balanced binary tree is difference between height of left and right subtree for every node is not more than k (mostly 1)
// iterative approach with array where node stored in array and children are 2i + 1 and 2i + 2 respectively

// sorted balanced binary search tree insert, remove, search (O(log n) => n/2^h (height) = 1 => 2^h = n => h = log2n -> recursion) operations
// value of all nodes value in left is <= to value in node of parent which is <= to right node value
// recursion needs base case which is leaf cases - children of leaf are null
// base case usually comes before recursive case

// binary tree traversal is process of reading/ processing data at each node in tree exactly once in some order
// tree is special type of graph. traversals: breadth-first and depth-first
// breadth-first traversal: from left to right each level of the binary tree, each child node in queue
// depth-first traversal: pre-order (root left right), inorder (left root right), post-order (left right root)

// graph is a non-linear data structure
// graph is used to model and represent variety of systems
// in linked-list and tree all nodes/ vertices are reachable from root - for n nodes, we have n-1 edges
// regular linked-list is directed as you can't return to parent node
// for non-linear data structures the array of values we're given is the set of keys (unique identifiers) as order doesn't matter
// graph = {V, E} where V = {key (can also be object), ...} and E = {{origin, destination}, ...}
// for graph - elements of Vertices/ Nodes set need to have key property, and elements of Edges set needs to have 'origin' and 'destination' properties

// if you want to save on space for strings or large int keys, create hash function to convert to small int and another for vice versa
// hash table to implement graph model's edges properties
// adjacency matrix and list with graph
// once a problem/ event is modeled, a lot of inherent problems can easily be solved
// arithmetic based solution for structures eg array, is dangerous

// hash table is a bounded finite data structure, non-linear, and implements an associative array ADT, a structure that can map keys to values
// search (O(1)), insert (O(1)), delete (O(1)), space (O(n)) - can be (O(n^2)) when new memory chunk with insert
// hash table uses a hash function to compute index where key is stored in associative array - index is calculated % size of array (m)
// sort or operate based on element frequency - tree-map

// resources
// www.mycodeschools.com
// https://www.youtube.com/watch?v=92S4zgXN17o&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P
// https://www.youtube.com/watch?v=wWgIAphfn2U&list=PLqM7alHXFySGwXaessYMemAnITqlZdZVE