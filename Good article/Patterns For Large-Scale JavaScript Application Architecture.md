# 大型 JavaScript 应用结构的模式

@written: Addy Osmani &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; @technical review:Andre´e Hansson

**今天我们将会讨论大型 javascript 应用结构的一个可行的一系列模式。内容是基于我上次同样的主题，有关`LondonJs`的演讲，那次的演讲受到在这之前工作的Nicholas Zakas的鼓励。**

## 我是谁，我为什么要写这篇文章？

我当前是一个JavaScript和UI开发者，现在在AOL帮忙计划和设计前端结构，使得我们的下一代`client-facing`应用，而这些应用一般都是复杂的，并且需要一个可扩展的和高重复利用的体系结构，这是我的一个责任去确保执行这些应用的模式尽可能可以维护和发展。

我自己认为自己是一个模式设计的狂热者（尽管有很多这方面知识比我更好的人）。我之前曾经写过一本非赢利（creative-commons）的书本 ***Essential JavaScript Design Patterns*** ，这本书的有关于这次主题的更多细节。

## 你可以在140个字符内总结这篇文章吗？

如果你的时间很紧急，这里有一个`tweet-sized`的总结：

> Decouple app. architecture w/module,facade & mediator patterns. Mods publish msgs, mediator acts as pub/sub mgr & facade handles security

## 什么是真正的“大型” JavaScript 应用？

在我们开始之前，让我们假设定义当我们提及一个 JavaScript 应用是意义上的“大型”是，指的是什么？我发现这个问题依然困惑着在这个领域里有相当经验的开发者，而且这个问题的答案也是十分主观的。

有这样一个实验，我问了好一些中级的开发者去非正式地定义这个问题。其中一个开发者说：“一个超过100,000 LOC的 JavaScript 应用”，而另一个认为“APP 内部拥有超过1MB的JavaScript代码”，更有人认为，上述的都不正确，因为代码库的大小不总是与应用的复杂性关联——那些100,000 LOC大小的应用可能只是代表一个十分简单的代码。

我个人的定义可能会被普遍接受，或者不接受。但是我相信它接近一个大型应用的实际含义。

> **在我的观点里，一个大型JavaScript应用不是一个简单的应用，它需要大量的开发者努力去维持那些最繁重的数据操作和将它们显示到显示屏的不足。**

这个定义点最后一个部分可能是最有意义的。

## 回顾你当前的体系结构

> 如果在一个重要的大型JavaScript应用上工作，记得专注利用足够的时间去计划底层结构是最有意义的。当然，这比你想象中的要复杂得多。

我不知道怎样去表述这个的重要性——我见过的一些接近大型应用的开发者退一步和我说：“好吧，你是说有这样的一些想法和模式可以在我上个中等级别的项目上实行。当然，它们应该使用在更加大的应用，对吗？”这种说法可能有些严重，但是请不要将它过于想当然——**大型APPS一般需要更多的考虑和关注**。我将会简短地讨论为什么我们花费多一点时间去想清楚你应用的结构对于长时间的运行是十分值得的。

大部分的JavaScript开发者喜欢在他们现在的体系结构中用一些混合的下面一系列代结合体：

* 自定义的`widgets`
* `models`
* `views`
* `controllers`
* `template`
* `libraries/toolkits`
* `an application core`

一些相关的资料：

* [Rebecca Murphey - Structuring JavaScript Applications](http://rmurphey.com/blog/2010/08/27/code-org-take-2-structuring-javascript-applications/)
* [Peter Michaux - MVC Architecture For JavaScript Applications](http://peter.michaux.ca/articles/mvc-architecture-for-javascript-applications)
* [StackOverflow - A discussion on modern MVC frameworks](http://stackoverflow.com/questions/129921/what-is-mvc-model-view-controller)
* [Doug Neiner - Stateful Plugins and the Widget Factory](http://msdn.microsoft.com/en-us/scriptjunkie/ff706600)

你可能分解你应用的功能在一个模块中的`blocks`或者为此支持其他模式。这很好，但是这就存在一系列的问题，如果这就是你所有应用的结构的话。

### 1. 这个结构重复使用的代价是多大？