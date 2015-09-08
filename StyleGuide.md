# Introduction #

If ever in doubt, see [PEP 8](http://www.python.org/dev/peps/pep-0008/).

# Details #
  * Indent Python code with 4 spaces, never with tabs.
  * End lines with a Unix-style newline, not Windows-style CRLF. (see DeveloperSetup)
  * Use expressive variable names, tending towards names that are whole English words.
  * Isolate the code that accesses the database to one file: there should be no stray SQL commands in most of our modules. (nb: the prototype Guido from Fall 2010 was pretty terrible about this.)
  * Every function should have a Python docstring that states explicitly what it does.
  * Keep the computation to an absolute minimum inside of the templates. Templates are just for displaying what's been computed elsewhere.