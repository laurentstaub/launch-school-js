# Garbage collection

## Stack and Heap
Most programming languages divide memory into 2 principal regions: the stack and the heap:

Stack: primitive values and references
Heap: everything else

The stack doesn't participate in garbage collection, primitive values don't get involved in garbage collection when they are stored on the stack. When a block is done running, the allocated stack memory gets returned to the system automatically. This is distinct from garbage collection.

Stack values are limited in size, so values like Strings and BigInts get stored on the heap or somewhere else. It looks like they are stored on the stack though.

Heap values are variable in size and we use reference counting here; when a reference count to a value reaches 0, we do garbage collection.

```js
function go() {
  let foo = {};
  let bar = { qux: foo };
  foo.xyz = bar;
}

go();
// Neither `foo`nor `bar` is eligible for GC as both objects still reference each other
```

Modern JS uses a mark and sweep algorithm to avoid this kind of problems but it causes other problems.