from fnmatch import fnmatch


def omit(d, *patterns):
  """Omit keys from dictionary that match any of the glob patterns.

  :param d: Dictionary to filter
  :param patterns: Glob patterns to match keys against (e.g., "_*", "tag")
  :return: New dictionary with matching keys removed

  Example::

      omit({"foo": 1, "_bar": 2, "tag": 3}, "_*", "tag")
      # Returns: {"foo": 1}
  """
  result = {}
  for k, v in d.items():
    if not any(fnmatch(k, pattern) for pattern in patterns):
      result[k] = v
  return result
