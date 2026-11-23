# Computer Science | Chapter 09 | Introduction to Python Modules | CNOTES

## Section-by-section key facts

- **What a module is:** A module is a `.py` file that groups reusable definitions; it helps organise programs and share functions.
- **Importing a module:** `import module` loads the module and functions are called with the module prefix, such as `module.function()`. An imported module is loaded once per program.
- **Selective imports:** `from module import name` imports selected names so they can be called without the prefix; use it when the imported names are clear and unambiguous.
- **Standard-library modules:** Modules such as `math`, `random` and `statistics` provide ready-made functions; `help("math")` can inspect available help.
- **Creating a module:** Save function definitions in a `.py` file, then import it. A module docstring describes its purpose and is available through `module.__doc__`.

```mermaid
mindmap
  root((Introduction to Python modules))
    Purpose
      A py file groups reusable definitions
      Modules organise and reuse code
    Standard library
      math provides mathematical functions
      random provides random operations
      statistics provides statistical operations
      help inspects module documentation
    Import forms
      import module
        Call module function with module prefix
        Module loads once per program
      from module import name
        Call selected name directly
        Avoid ambiguous imported names
    User modules
      Save definitions in a py file
      Import and reuse functions
      Docstring describes module purpose
      module doc attribute exposes documentation
```
