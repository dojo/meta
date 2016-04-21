# Widget System

This document provides information about the Dojo 2 proposed widgeting system.

For widgets to operate within the widgeting system, they are expected to expose several API features, which are used to manage the widgets.

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

## Virtual DOM

Dojo 2 widgets are designed around a concept of a virtual DOM.  The virtual DOM library Dojo 2 is using is [MaquetteJS](http://maquettejs.org/).  There are two important APIs that MaquetteJS provides that are needed by the widgeting system:

* *HyperScript* a functional based approach to describing a virtual DOM
* *Projector* the interface between the displayed DOM and the virtual DOM

### HyperScript

HyperScript is accessed directly via the MaquetteJS export of `h`, a function for creating virtual DOM nodes (VNodes).

### Projector

In order to fit better into the Dojo 2 widgeting system, there is an abstraction layer which exposes an API that conforms to what is described above in regards to a *parent* and provides a VNode evented interface described below.  In addition, it provides several other properties and methods.

### References

The projector interface provides when attached a renference to the `document` it is attached to.  In some cases, widgets need to deal with even listeners on the `document` and this facilitates this.  To obtain this reference, a widget would traverse its `parent` chain until it is `undefined` and check to see if the `document` is defined.

A reference is available to the Maquette projector the current projector is an abstraction of.  This is available on the property `projector`.

The root DOM node that the projector will be, or is, attached to is available in the `root` property.  By default, this is the current document `body` element.

### Attaching

To get a projector to start displaying its virtual DOM, you must attach it to the DOM.  The method `attach()` is provided to do this.  It takes an optional boolean argument of `append` and returns a handle that can be used to detach the projector.  The argument `append` determines if the projector *merges* itself with the `root` or *appends* itself with the `root`.  Merging means that instead of creating a new node as a child of the root, the projector will apply its classes, styles, and listeners to that root node and any children of the projector will render their DOM as children of the root node.  If appending, the projector will create a new node based on the value of `tagName` and attach it as the `lastChild` of the root.  The argument defaults to `false`, therefore merging is the default behaviour on attachment.

### Rendering

The projector has a `render()` method which is what is passed to the Maquette projector when the projector is attached to the DOM.  When invoked, it will call the `render()` method on all of its children and return the resulting VNode with any classes, styles or listeners that have been set.

Unlike widgets, calling `invalidate()` on the projector does not set a *dirty* flag.  It instead calls the Maquette projector's `scheduleRender()` function which will then asynchronously call the projector's `render()` function.

#### Interface

The interface for projector is:

```typescript
interface Projector extends VNodeEvented, ParentMixin<RenderableChild> {
	/**
	 * An array of classes that should be applied to the root of the projector
	 */
	classes?: string[];

	/**
	 * A reference to the document that the projector is attached to
	 */
	readonly document: Document;

	/**
	 * The native maquette Projector that is being managed
	 */
	readonly projector: MaquetteProjector;

	/**
	 * The root of the projector
	 */
	readonly root: Element;

	/**
	 * The current state of the projector
	 */
	readonly state: ProjectorState;

	/**
	 * A hash of inline styles that should be applied to the root of the projector
	 */
	styles?: { [style: string]: string; };

	/**
	 * When appending, what tag name should be used
	 */
	tagName?: string;

	/**
	 * Attach the projector to the DOM and return a handle to detach it.
	 * @param append If true, it will append to the root instead of the default of merging
	 */
	attach(append?: boolean): Handle;

	/**
	 * Get the projector's VNode attributes
	 */
	getNodeAttributes(overrides?: VNodeProperties): VNodeProperties;

	/**
	 * Returns a VNode which represents the DOM for the projector
	 */
	render(): VNode;

	/**
	 * If unattached, set the root element for the projector.
	 * @param root The Element that should serve as the root for the projector
	 */
	setRoot(root: Element): void;
}
```

## Eventing

While not required, it is part of the design philosophy that widgets are evented in that they provide an interface for applying listeners to events and emitting events.

The interface is available via the `Evented` mixin:

```typescript

interface Evented {
	/**
	 * Emit an event.
	 *
	 * The event is determined by the `event.type`, if there are no listeners for an event type,
	 * `emit` is essentially a noop.
	 * @param event The `EventObject` to be delivered to listeners based on `event.type`
	 */
	emit<E extends EventObject>(event: E): void;

	/**
	 * Attach a `listener` to a particular event `type`.
	 *
	 * @param type The event to attach the listener to
	 * @param listener Either a function which takes an emitted `event` object, or something that is `Actionable`
	 * @returns A handle which can be used to remove the listener
	 */
	on(type: string, listener: EventedListener<EventObject>): Handle;
}
```

### VNode Evented

Many widgets need the ability to listen for DOM events.  With a virtual DOM, those listeners need to be provided during the rendering process of the VNode.  In order to facilitate this, widgets use a `VNodeEvented` mixin which add a map of listeners to a widget interface and modifies the `Evented` behaviour to attach any added listeners via `on()` to this map.  The map is then provided during the `render()` as part of the returned VNode.

It is important to note, due to efficiency reasons, Maquette will not notice additional listeners during subsequent renders of the widget. Therefore, if a particular event listener is required at somepoint during the lifecycle of the widget, it should be added to the map with the value of `undefined` during construction.

### Interface

The interface looks like this:

```typescript
interface VNodeListeners {
	[on: string]: (ev?: EventObject) => boolean | void;
	ontouchcancel?(ev?: TouchEvent): boolean | void;
	ontouchend?(ev?: TouchEvent): boolean | void;
	ontouchmove?(ev?: TouchEvent): boolean | void;
	ontouchstart?(ev?: TouchEvent): boolean | void;
	onblur?(ev?: FocusEvent): boolean | void;
	onchange?(ev?: Event): boolean | void;
	onclick?(ev?: MouseEvent): boolean | void;
	ondblclick?(ev?: MouseEvent): boolean | void;
	onfocus?(ev?: FocusEvent): boolean | void;
	oninput?(ev?: Event): boolean | void;
	onkeydown?(ev?: KeyboardEvent): boolean | void;
	onkeypress?(ev?: KeyboardEvent): boolean | void;
	onkeyup?(ev?: KeyboardEvent): boolean | void;
	onload?(ev?: Event): boolean | void;
	onmousedown?(ev?: MouseEvent): boolean | void;
	onmouseenter?(ev?: MouseEvent): boolean | void;
	onmouseleave?(ev?: MouseEvent): boolean | void;
	onmousemove?(ev?: MouseEvent): boolean | void;
	onmouseout?(ev?: MouseEvent): boolean | void;
	onmouseover?(ev?: MouseEvent): boolean | void;
	onmouseup?(ev?: MouseEvent): boolean | void;
	onmousewheel?(ev?: MouseWheelEvent): boolean | void;
	onscroll?(ev?: UIEvent): boolean | void;
	onsubmit?(ev?: Event): boolean | void;
}

interface VNodeEvented extends Evented {
	listeners: VNodeListeners;
}
```

### Actionable

In addition to being able to register a listener that is a function which receives an event object, `Evented` can also take a listener that is `Actionable` which means that it is an object which provides a `do()` method.  The `do()` method takes a single argument which is an object which contains a property named `event`:

```typescript
interface Actionable<E extends EventObject> {
	/**
	 * The *do* method of an Action, which can take a `options` property of an `event`
	 * @param options Options passed which includes an `event` object
	 */
	do(options?: ActionableOptions<E>): any;
}
```

## Statefulness

While not required by the widgeting system, the design philosophy considers it good practice to have all state read only through a read only property called `state` and provide a method to set the state called `setState()`.  The `setState()` method takes a partial state object.  This means that any properties not provided in the partial state object are not updated on the state.

In Dojo 2 there is a `Stateful` mixin which provides this functionality.

### Observing and Updating State

Another part of functionality provided in `Stateful` is the ability for a stateful to observe and update its state via an interface which provides an `observe()` method and a `patch()` method.

The method `observe()` takes an ID as an argument and returns an [ES Observable](https://github.com/zenparsing/es-observable) interface.  The `Stateful` mixin will then expects the observable to emit a state object every time there is a change to state represented by the supplied ID.

To start observing state, `Stateful` provides a method called `observeState()` which takes an ID argument a reference to an object which exposes the observable state interface.  The method returns a handle which stops the state from being observed.

The method `patch()` takes a partial object and map of pragma which includes the ID of the object being *patched*.

When observing its state, if `setState()` is called on the `Stateful` it will not mutate its state, but instead called `patch()` on the object it is subscribed to observe its state from.

### Interface

The `Stateful` interface is:

```typescript
interface State {
	[prop: string]: any;
}

interface Stateful<S extends State> {
	/**
	 * A read only view of the state
	 */
	readonly state: S;

	/**
	 * Set the state on the instance.
	 *
	 * Set state can take a partial value, therefore if a key is omitted from the value, it will not be changed.
	 * To *clear* a value, set a key to `undefined`
	 *
	 * @param value The state (potentially partial) to be set
	 */
	setState(value: S): void;

	/**
	 * Observe (and update) the state from an Observable
	 * @param id The ID to be observed on the Observable
	 * @param observable An object which provides a `observe` and `patch` methods which allow `Stateful` to be able to
	 *                   manage its state.
	 */
	observeState(id: string, observable: ObservableState<S>): Handle;
}
```

The observable state interface is:

```typescript
interface ObservableState<S extends State> {
	/**
	 * A method that allows the return of an `Observable` interface for a particular `id`
	 * @param id The ID to observe
	 */
	observe(id: string): Observable<S>;

	/**
	 * A method that allows the `Stateful` to provide a change to its state, instead of
	 * changing its state directly.
	 * @param partial The partial state to be *patched*
	 * @param options A map of options, which includes the `id` being observed
	 */
	patch(partial: any, options?: { id?: string }): Promise<S>;
}
```

## Dojo 2 Applications

The ability to observe state and the ability to register actions as listeners to events are two key functional features required for Dojo 2 Widgets to fit into the [application architecture](https://docs.google.com/document/d/1Kgc99f8yTtZGopKr6OWGMjsJTV5hHNlr0ztWQS_cRnA/edit#) for Dojo 2.

The high level architecture is a one way flow of information.  In that *stores* provide state to *widgets*, *widgets* call *actions* and *actions* mutate data in *stores*.  The `ObservableState` interface are the part of the Dojo 2 store API that are needed to manage the state.  The ability to take event listeners which provide a `do()` method is the way for widgets to call actions.

Current plans are that the application factory will then instantiate applications and help manage their lifecycle.  The other major functional area of the application factory are interfaces to allow the parts of the application to be addressable, potentially when those parts of the application are not fully loaded.
