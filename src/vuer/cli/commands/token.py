"""Token command - issue access links for a vuer server with auth=True."""

from dataclasses import dataclass
import sys


@dataclass
class Token:
    """Issue an access token (or a link) for a vuer server that runs with auth=True.

    The token is signed with the server secret: VUER_AUTH_SECRET, else the
    owner-only file ~/.local/share/vuer/auth-secret (run this command as the
    user that runs the server). By default a token opens one session.

    EXAMPLES
        vuer token
        vuer token --role controller
        vuer token --uses 5 --url "https://vuer.ai?ws=ws://192.168.1.5:8012"
        vuer token --reusable --ttl 3600
    """

    role: str = "viewer"  # viewer (sees the scene) or controller (full access)
    ttl: int = 600  # Lifetime in seconds
    uses: int = 1  # Number of people (sessions) that can use the token (1-50)
    reusable: bool = False  # Any number of sessions can use the token until it expires
    url: str = None  # Client URL; print "<url>#token=<token>" instead of the bare token
    secret_file: str = None  # Secret file (default: VUER_AUTH_SECRET or ~/.local/share/vuer/auth-secret)

    def __call__(self) -> int:
        """Execute the token command."""
        from vuer.auth import issue_token, load_secret

        try:
            uses = token_uses(self.uses, self.reusable)
            secret = load_secret(self.secret_file)
            token = issue_token(secret, role=self.role, ttl=self.ttl, uses=uses)
        except (OSError, ValueError) as e:
            print(f"Could not issue a token: {e}", file=sys.stderr)
            return 1
        print(f"{self.url}#token={token}" if self.url else token)
        return 0


def token_uses(uses: int = 1, reusable: bool = False):
    """Check the --uses/--reusable pair. Return ``uses`` for ``issue_token``."""
    from vuer.auth import MAX_USES

    if reusable and uses != 1:
        raise ValueError("Use --uses N or --reusable, not both")
    if reusable:
        return None
    if not 1 <= uses <= MAX_USES:
        raise ValueError(f"--uses must be between 1 and {MAX_USES}")
    return uses
