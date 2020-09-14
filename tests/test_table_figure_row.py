from cmx.backends.components import Article

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
