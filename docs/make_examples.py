import os


def create_rst(source, write_path, name):
    with open(write_path, "w") as file:
        n = len(name)
        header = "=" * n + "\n" + name + "\n" + "=" * n + "\n\n"
        text = header + f".. literalinclude:: {source}{name}.py"
        file.write(text)


if __name__ == "__main__":
    SOURCE_DIR = "../examples/vuer_basics"
    WRITE_DIR = os.getcwd()
    ext = ".rst"

    example_list = []

    # go through every example in the folder
    for filename in sorted(os.listdir(SOURCE_DIR)):
        if filename.endswith(".py"):
            filename_no_extension = os.path.splitext(os.path.basename(filename))[
                0
            ]  # file path without extension
            example_list.append(filename_no_extension)
            create_rst(
                SOURCE_DIR,
                os.path.join(WRITE_DIR, filename_no_extension + ext),
                filename_no_extension,
            )
            print(f"Created {filename_no_extension}{ext}")

    # update examples.md
    with open("examples.md", "w") as file:
        toc = f"Examples\n========\n\n.. toctree::\n   :maxdepth: {len(example_list)}\n"
        for file_name in example_list:
            toc += f"\n   {file_name}"

        file.write(toc)
        print(f"Updated examples.md")
