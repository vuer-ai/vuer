def is_empty(line):
    return len(line.strip()) == 0

def get_indent(text):
    return len(text) - len(text.lstrip())


def dedent(lines):
    indent = float("inf")
    lines = lines.split('\n')

    for l in lines:
        new_indent = get_indent(l)
        if not is_empty(l) and new_indent < indent:
            indent = new_indent

    return '\n'.join([l[indent:] for l in lines])


def get_block(filename, line_number):
    import linecache
    current_line_number = 0
    indent = 0
    lines = []
    with open(filename, 'r') as f:
        while True:
            line = f.readline()
            current_line_number += 1
            if current_line_number < line_number:
                continue
            new_indent = get_indent(line)
            if line == "\n":
                lines.append(line)
            elif new_indent < indent:
                break
            else:
                indent = new_indent
                lines.append(line)

    return lines
