# TypeScript and Dojo 2

## TypeScript Roadmap Items

The following table lists TypeScript roadmap items or issues that are of interest to Dojo 2.

|Item|Version|Issue|Reason|
|----|-------|-----|------|
|Implicit index signatures|2.0|[Microsoft/TypeScript#7029](https://github.com/Microsoft/TypeScript/issues/7029)|Several of the Dojo 2 core APIs would benefit from being able to pass object literals without explicitly typing them|
|Function `this` typing|2.0|[Microsoft/TypeScript#3694](https://github.com/Microsoft/TypeScript/issues/3694)|There are several use cases in Dojo where typing `this` within a function will improve code safety|
|`async`/`await` down levelling|2.0|[Microsoft/TypeScript#1664](https://github.com/Microsoft/TypeScript/issues/1664)|This is a significant challenge for supporting non-ES6+ environments with Dojo 2|
|Variadic Kinds|2.0|[Microsoft/TypeScript#5453](https://github.com/Microsoft/TypeScript/issues/5453)|Currently, there are use cases in [dojo/compose](https://github.com/dojo/compose) where aggregating types is necessary|
|Ambient Decorators|2.0|[Microsoft/TypeScript#2900](https://github.com/Microsoft/TypeScript/issues/2900)|For [dojo/compose](https://github.com/dojo/compose) the ability to programatically access typing information is important|
|Conditional Decorators|2.0|[Microsoft/TypeScript#3538](https://github.com/Microsoft/TypeScript/issues/3538)|Essentially allows the equivilent of the Dojo `has()` API built into TypeScript|
|Read Only Properties|2.0|[Microsoft/TypeScript#6532](https://github.com/Microsoft/TypeScript/pull/6532)|Allows specification of interfaces that do not allow property reassignment, which can better refect runtime behaviour|

## TypeScript 1.8

The following items are being delivered in TypeScript 1.8 which are likely to impact Dojo 2:

|Item|Issue|Reason|
|----|-----|------|
|String Literal Types|[Microsoft/TypeScript#5185](https://github.com/Microsoft/TypeScript/issues/5185)|There are many instances where a string literal type will assist in making Dojo 2 more usable|
|F-Bounded Polymorphism|[Microsoft/TypeScript#5949](https://github.com/Microsoft/TypeScript/issues/5949)|The ability for generics to refer to other generics within the same argument list addresses a couple challenges in Dojo 2|
|Augmenting global type interfaces from within modules|[Microsoft/TypeScript#4166](https://github.com/Microsoft/TypeScript/issues/4166)|There are several instances when we are feature detecting within a module but need to alter the global interface as we shim in functionality|
|`this` based type guards|[Microsoft/TypeScript#5906](https://github.com/Microsoft/TypeScript/issues/5906)|Accepting a polymorphic `this` as a type guard solves some use cases in Dojo 2|

## Uncomitted Issues

The following table lists issues that are important to Dojo 2, but the TypeScript team have yet to commit to them in the roadmap:

|Item|Issue|Reason|
|----|-----|------|
|`this` as a Generic Argument|[Microsoft/TypeScript#6223](https://github.com/Microsoft/TypeScript/issues/6223)|Polymorphic `this` is a legitimate way of type guarding on extended/composed classes|
|Programmatically Modifying Types|[Microsoft/TypeScript#4490](https://github.com/Microsoft/TypeScript/issues/4490)|Since Mixins are not on the horizon, the ability to programmatically access them is another way of dealing with the problem.  It maybe the ambient decorators will be sufficient to meet this need|
|Mixins/Traits|[Microsoft/TypeScript#311](https://github.com/Microsoft/TypeScript/issues/311)|Ability to better support mixin type functionality, the TS team is currently declining because they feel it will conflict with the future of ES|
|Better Loader Plugin Support|[Microsoft/TypeScript#6615](https://github.com/Microsoft/TypeScript/issues/6615)|Currently, it is challenging to type loader plugins.  While not on the roadmap specifically, I do believe this will be addressed|
|Supporting "partial" objects|[Microsoft/TypeScript#6613](https://github.com/Microsoft/TypeScript/issues/6613)|Currently, the TypeScript team feels they need type operators before they can address this and they believe an "all optional" typing is a sufficient workaround|
