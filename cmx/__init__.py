import os

from functional_notations import F

from cmx.backends.markdown import CommonMark
from . import data

doc = CommonMark(root=os.getcwd(), prefix=".")
md = doc
# todo: implement this
csv = F @ doc.csv
# todo: implement this
