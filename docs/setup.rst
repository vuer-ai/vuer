==========
Setup
==========

Setting up the conda environment:

.. code-block:: python

   conda create -n vuer python=3.8
   conda activate vuer

Install vuer:

.. code-block:: python

  pip install vuer==0.0.7rc2

  pip install numpy
  pip install trimesh
  pip install websockets
  pip install aiohttp-cors
  pip install pillow

To run the examples, download the dataset

.. code-block:: python
  
  cd assets/static_3d
  make

and run the examples in ``vuer/examples/vuer`` 	
