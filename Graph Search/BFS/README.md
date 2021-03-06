# BFS
Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the tree root (or some arbitrary node of a graph, sometimes referred to as a 'search key') and explores the neighbor nodes first, before moving to the next level neighbors.

## Applications
* Copying garbage collection, Cheney's algorithm
* Finding the shortest path between two nodes u and v, with path length measured by number of edges (an advantage over depth-first search)
* Testing a graph for bipartiteness
* (Reverse) Cuthill–McKee mesh numbering
* Ford–Fulkerson method for computing the maximum flow in a flow network
* Serialization/Deserialization of a binary tree vs serialization in sorted order, allows the tree to be re-constructed in an efficient manner.
* Construction of the failure function of the Aho-Corasick pattern matcher.

## Complexity
* **Time**: worst ![](https://latex.codecogs.com/svg.latex?O(|V|+|E|))
* **Space**: worst ![](https://latex.codecogs.com/svg.latex?O(|V|))

## References
* [Wikipedia](https://en.wikipedia.org/wiki/Breadth-first_search)