from cmx import doc

doc @ """
# This is A Title

"""

with doc:
    doc.print("This prints out!")

with doc.skip:
    doc.print("This is not executed!")
