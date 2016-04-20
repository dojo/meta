# Widget System

This document provides information about the Dojo 2 proposed widgeting system.

For widgets to operate within the widgeting system, they are expected to expose several API features, which are used by the widgeting system to manage the widgets.

## Widgets

### Rendering

All widgets *must* provide a method named `render()` that takes no arguments and returns a `VNode`.  This method is intended to allow the widget to calculate its virtual DOM representation and return it to the caller.

### Invalidation

All widgets *must* expose a method named `invalidate()` that takes no arguments and has no return.  This method is intended to signal to the widget that something has changed and that it should recalculate its virtual DOM on the next render.  It is expected that a call to `invalidate()` on a widget will result in the widget calling `invalidate()` on its parent, if assigned.

If a widget needs to *lazy load* some resources or wait for an asynchronous process to complete, on rendering it should return a virtual DOM node that represents that indeterminate state.  Once the asynchronous process is completed, then the `invalidate()` should be called on the widget.  This typically would then result in a rerender and the `render()` function being called on the widget.

### Parent

All widgets *must* provide a reference that is assignable to a `parent`.

### Destroyability

All widgets *must* provide a method to be *destroyed* (e.g. clean up any references that are *owned* by the widget).  The method *must* be named `destroy()`, take no arguments and return a `Thenable` that resolves with `void`.  A return of a `Thenable` allows the widget to implement an asynchronous destruction cycle, though the caller does not contract to recover from a rejection.

### Interface

The minimum interface a widget must have then is:

```typescript
interface Widget {
	/**
	 * A reference to a parent which conforms to the widget parent interface
	 */
	parent: Parent | undefined;

	/**
	 * *Destroy* the widget
	 */
	destroy(): Thenable<void>;

	/**
	 * Invalidate the widget, signaling the widget that it is in a dirty state and should
	 * recalculate its VDom on the next render
	 */
	invalidate(): void;

	/**
	 * A function that returns a VNode that represents the DOM of the widget
	 */
	render(): VNode;
}
```

## Parents

Objects that can *own* widgets are expected to offer up an interface that allows the management of children widgets.

### Children

The parent *should* expose the children as a read only property that is an immutable `List` of the children it owns.

### Adding Children

The parent *must* expose two methods for adding children.

The method `append()` can accept either a single child or an array of children as an argument and return a `Handle` that removes the child/children from the parent.

The method `insert()` can take a single child as an argument, a position, and optionally a reference child and returns a `Handle` that removes the child from the parent.

### Removing Children

Individual children should be removed via their `Handle` which was returned when they were added.  The handle should validate that the child/children are still owned by the parent and set the widget's parent to undefined as well as remove the child from the parents list of children.  If the handle is invoked and for whatever reason the referenced child/children are no longer owned by the parent, the handle should just perform no operation.

A parent *must* also provide a method of `clear()` which takes no arguments and has no return.  This will remove all the children, but not `destroy()` the children.

### Invalidation

Just like widgets, parents *must* also provide an `invalidate()` method that takes no arguments and has no return value.  This is generally the indication that one of the children is invalid and that the children's virtual DOM needs to be re-rendered.

### Parent

A parent should also expose a reference named `parent`.  If logically, the parent cannot have a parent, this property should be `undefined`.

### Destruction

Just like widgets, parents *must* also provide a `destroy()` method that takes no arguments and returns a `Thenable`.  It is expected that it will destroy its children it owns, resolving its own destruction when its children's destruction is resolved.

### Interface

The minimum interface a parent must have then is:

```typescript
type Position = number | 'first' | 'last' | 'before' | 'after';

interface Parent<C extends Widget> {
	/**
	 * An immutable List of children
	 */
	readonly children: List<C>;

	/**
	 * The parent of the parent (or undefined)
	 */
	parent: Parent | undefined;

	/**
	 * Append a child or children to the parent
	 */
	append(child: C): Handle;
	append(children: C[]): Handle;

	/**
	 * Remove all the children from the parent (but don't destroy them)
	 */
	clear(): void;

	/**
	 * Insert the children in a numbered or relative position
	 */
	insert(child: C, position: Position, reference?: C): Handle;

	/**
	 * Invalidate the parent, indicating that the children
	 */
	invalidate(): void;

	/**
	 * Destroy the parent and all the current children
	 */
	destroy(): Thenable<void>;
}
```

### Notes

It is not mandatory for a parent to have a `render()` method, as a parent may manage the children in any different fashion.

## Statefulness

While not required by the widgeting system, the design philosophy considers it good practice to have all state read only through a property called `state` and provide a method to set the state called `setState()`.

**TBC**