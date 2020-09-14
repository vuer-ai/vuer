def is_empty(line):
    return len(line.strip()) == 0


def get_indent(text):
    for line in text.split("\n"):
        if line:
            return len(line) - len(line.lstrip())
    return 0


def dedent(text):
    lines = text.split('\n')
    for l in lines:
        if l:
            break
    indent = get_indent(l)
    return '\n'.join([l[indent:] for l in lines])


def get_block(filename, line_number):
    import linecache
    current_line_number = 0
    lines, indent = [], None
    with open(filename, 'r') as f:
        while True:
            line = f.readline()
            if line is "":  # this is the end of lines
                break
            current_line_number += 1
            if current_line_number < line_number:
                continue
            current_indent = get_indent(line)
            if line == "\n":
                lines.append(line)
            else:
                if indent is None:
                    indent = current_indent
                elif current_indent < indent:
                    break
                    # print(lines, sep="\n")
                    # print(current_indent, indent)
                lines.append(line)

    return lines


def is_subclass(obj, cls):
    try:
        return issubclass(obj, cls)
    except TypeError:
        return False


import re


def to_snake(name):
    name = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', name)
    return re.sub('([a-z0-9])([A-Z])', r'\1_\2', name).lower()
