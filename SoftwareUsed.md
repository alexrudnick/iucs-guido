We want Guido to be really easy to download, set up, and run, with as few dependencies as possible. This will make it easier to actually deploy in the wild, as well as easier for new developers to get started.

So we're using...

# Bottle #
[Bottle](http://bottle.paws.de/) is a really minimal web framework that works with Python 3. So minimal, in fact, that it fits in one file (bottle.py), has no dependencies outside the Python standard library, and is distributed as a Python 2 library that can be translated automatically by [2to3](http://docs.python.org/py3k/library/2to3.html). (we're using it for routing and templating.)

My (alexr's) theory about Bottle is that it's named that because [WSGI](http://en.wikipedia.org/wiki/Web_Server_Gateway_Interface) is apparently pronounced by some like "whiskey". This would also explain the other web framework, [Flask](http://flask.pocoo.org/).

# SQLite #
Via the [sqlite3 module](http://docs.python.org/py3k/library/sqlite3.html), included in Python.

Comes included with Python, so there's practically no administrative overhead. Not high performance, but we'll deal with scaling when/if we have to.