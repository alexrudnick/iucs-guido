# 1) setting up your own computer #
## Python 3 ##
You want Python 3.1. Python 3.0 will probably work too.

## get a good text editor ##
You can use whatever text editor you want, or a Python IDE!

Notepad++ is OK! Set it up to do Unix newlines! (see StyleGuide)

_Seriously, you're a computer scientist (software engineer, technologist, whatever); invest in learning a good text editor._

_karissa says:_ I am using emacs (on the burrow) when I'm mobile, and eclipse on my desktop. I found this cool list: http://stackoverflow.com/questions/81584/what-ide-to-use-for-python

## Mercurial ##
http://mercurial.selenic.com/

For learning Mercurial, Joel Spolsky's tutorial, [Hg Init](http://hginit.com/), is quite good.

Ubuntu/Debian: `sudo apt-get install mercurial`

Anything else (Mac, Windows, other Linux/Unix): http://mercurial.selenic.com/downloads/

If you're on Windows, TortoiseHg is a pretty good choice!

# 1) (alternatively) setting up on a Linux system in Lindley/INFO #
## installing mercurial ##
You can install it just for yourself:
http://mercurial.selenic.com/wiki/UnixInstall#Per-user_installation

The upshot is: download the mercurial source, unpack it, then go into that directory and type `make install-home`.

## turning on Python 3 ##
```
$ module load python/3.1.3
```

If that doesn't work, type `module avail` to find out which versions are available, then switch out 3.1.3 for the appropriate/installed version of Python 3.

# 2) checking out the code #
http://code.google.com/p/iucs-guido/source/checkout

# 3) getting test data #
Go into the `iucs-guido` directory and unpack the anonymized.tgz data. Then, go into the `guido` directory and run `./initdb.py` to initialize the SQLite database, it will be named `guidodb`. Then, go into the `uploader` directory and run `./uploadthemall` to upload all of the anonymized data into the database.

```
1.  cd iucs-guido
2.  tar -xvf anonymized.tgz                                           
3.  cd guido           
4.  ./initdb.py                                                                          
5.  cd uploader    
6.  ./uploadthemall  
```

# 4) running the development server #
Go into the `iucs-guido` directory (the code you checked out from Mercurial), and the `guido` directory underneath that. Then run `devserver.py`. It should print out a message telling you that it's started the server, and now serving requests.

```
1.  cd iucs-guido
2.  cd guido
3.  ./devserver.py
```

Alternatively, you can run `devserver.py` from your IDE or whatever you crazy kids do these days.

# 4) next: make changes, check in, push! #
The development server should reflect the changes you make, as you make them.

Once you like your changes, then check them in to your local repository and push to everybody else! Make sure to write a good commit message.