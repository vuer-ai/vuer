
# Introducing CMX

> REPL with Python Scripts via live documents.

## See CMX In Action

- [ ] insert a screencast gif here


this works just like a standard jupyter notebook. Only code you include in 
a `with doc:` block would be shown. The row context arranges the result
side ways (via html) but it shows as a list on GitHub due to css 
restrictions.


```python
with doc.row() as r:
    for i in range(10):
        r.print(i, end=' ')
```


## Installation

You can install this package from PyPI under the `cmx` package name.

``` python
pip install mdx
```
## Developing Plugins

You can develop plug-ins under the `cmx-<>` prefix

## Discussion

Can we have a `travel-back-in-time` debugger that saves the stack
at each frame?

## To-dos

- [ ] scope inspection component

### Tomorrow

### Done

- [x] simple text output
- [x] layout row
- [x] saving matplotlib figures
- [x] video component
    ``` python
    doc.video(frames, f"videos/cats.gif")
    ```
- [x] image component
- [x] table component
- [x] yaml component

