"""Version command - show version info."""

from dataclasses import dataclass
import importlib.metadata


@dataclass
class Version:
    """Show vuer version and installed plugins.

    EXAMPLES
        vuer version
        vuer version --verbose
    """

    verbose: bool = False  # Show detailed plugin information

    def __call__(self) -> int:
        """Execute the version command."""
        try:
            version = importlib.metadata.version("vuer")
        except importlib.metadata.PackageNotFoundError:
            version = "unknown"

        print(f"vuer {version}")

        if self.verbose:
            print("\nInstalled plugins:")
            try:
                eps = importlib.metadata.entry_points(group="vuer.cli")
                plugins = {}
                for ep in eps:
                    # Group by package
                    pkg = ep.value.split(":")[0].split(".")[0]
                    if pkg not in plugins:
                        plugins[pkg] = []
                    plugins[pkg].append(ep.name)

                for pkg, cmds in sorted(plugins.items()):
                    print(f"  {pkg}: {', '.join(sorted(cmds))}")
            except Exception as e:
                print(f"  (error listing plugins: {e})")

        return 0
