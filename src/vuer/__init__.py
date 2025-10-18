# Conditional import for the pyScript.
try:
    from vuer.server import Vuer, VuerSession
except ImportError:
    print("""
    By default, vuer does not include the aiohttp and aiohttp-cors packages
    to enable installation in PyScript environments. For most usecase, you
    should install with the [all] option to include all dependencies.
    
        pip install 'vuer[all]'
    
    Use `'` if using zsh since `[` is a special character.
    
    Also, we require numpy>=1.21 for numpy.typing.NDArray.
    """)
