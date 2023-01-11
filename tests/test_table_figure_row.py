from cmx.backends.components import Article


def test_figure_row():
    doc = Article()
    table = doc.table()
    row = table.figure_row()
    row.figure(src="some_file.png", title="some title", caption="some text")
    row.figure(src="some_file.png", title="some title", caption="some text")
    row.figure(src="some_file.png", title="some title", caption="some text")
    row.figure(src="some_file.png", title="some title", caption="some text")

    row = table.figure_row()
    row.figure(src="some_file.png", title="some title", caption="some text")
    row.figure(src="some_file.png", title="some title", caption="some text")
    row.figure(src="some_file.png", title="some title", caption="some text")
    row.figure(src="some_file.png", title="some title", caption="some text")

    print(table._md)
    assert table._md == """
| **some title** | **some title** | **some title** | **some title** |
|:--------------:|:--------------:|:--------------:|:--------------:|
| ![some_file.png](some_file.png) | ![some_file.png](some_file.png) | ![some_file.png](some_file.png) | ![some_file.png](some_file.png) |
| some text | some text | some text | some text |
| **some title** | **some title** | **some title** | **some title** |
| ![some_file.png](some_file.png) | ![some_file.png](some_file.png) | ![some_file.png](some_file.png) | ![some_file.png](some_file.png) |
| some text | some text | some text | some text |
"""[1:]
