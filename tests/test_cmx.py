from cmx import doc

def test_str():
    a = """
    here is a string
    """
    b = """
here is a string
"""
    doc @ a
    assert doc._md == b
    doc.children.clear()


def test_table():
    table = doc.table()

    with table.figure_row() as row:
        row.figure(src="some_file.png", title="some title", caption="some text")
        row.figure(src="some_file.png", title="some title", caption="some text")
        row.figure(src="some_file.png", title="some title", caption="some text")
        row.figure(src="some_file.png", title="some title", caption="some text")

    with table.figure_row() as row:
        row.figure(src="some_file.png", title="some title", caption="some text")
        row.figure(src="some_file.png", title="some title", caption="some text")
        row.figure(src="some_file.png", title="some title", caption="some text")
        row.figure(src="some_file.png", title="some title", caption="some text")

    target = """
**some title** | **some title** | **some title** | **some title**
-------------- | -------------- | -------------- | --------------
<img style="align-self:center;" src="some_file.png" /> | <img style="align-self:center;" src="some_file.png" /> | <img style="align-self:center;" src="some_file.png" /> | <img style="align-self:center;" src="some_file.png" />
some text | some text | some text | some text
**some title** | **some title** | **some title** | **some title**
<img style="align-self:center;" src="some_file.png" /> | <img style="align-self:center;" src="some_file.png" /> | <img style="align-self:center;" src="some_file.png" /> | <img style="align-self:center;" src="some_file.png" />
some text | some text | some text | some text
"""[1:]

    assert doc._md == target
    doc.children.clear()


def test_image():
    import gym
    env = gym.make('FetchReach-v1')
    env.reset()
    img = env.render('rgb_array')
    doc.image(img)
    print(doc._md)
    doc.flush()


def test_image_src():
    import gym
    env = gym.make('FetchReach-v1')
    img = env.render('rgb_array')
    doc.image(img, f"figures/reach.png?ts={doc.now()}")
    print(doc._md)
    doc.flush()

def test_figure_row():
    doc @ """
    ## Test Figure Row
    """
    with doc:
        import gym
        env = gym.make('FetchReach-v1')

    img = env.render('rgb_array')

    with doc, doc.table() as table:
        with table.figure_row() as row:
            row.figure(img, src=f"figures/reach.png?ts={doc.now()}", title="Before Init", caption="this is the details")
            row.figure(img, src=f"figures/reach.png?ts={doc.now()}", title="Before Init", caption="this is the details")
            row.figure(img, src=f"figures/reach.png?ts={doc.now()}", title="Before Init", caption="this is the details")
            row.figure(img, src=f"figures/reach.png?ts={doc.now()}", title="Before Init", caption="this is the details")

