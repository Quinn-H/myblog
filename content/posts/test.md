---
title: test.
date: 2017-01-22
layout: Post
disqus_identifier: 20170122
---

This is the first post!

Code is highlighted by default.

```js
const StatelessComponent = (props) => {
  return (
    <div>
      I‘m a stateless component that accepts children
      { props.children }
    </div>
  )
}

// ...

  return (
    <StatelessComponent>
      Example of child
    </StatelessComponent>
  )
```
