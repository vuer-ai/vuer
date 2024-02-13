# Conditional import for the pyScript.
try:
    from vuer.server import Vuer, VuerSession
except ImportError as e:
    print("""
    Import error. Run
    
        pip install vuer[all]
    
    to include all dependencies. 
    """)
