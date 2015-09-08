# Introduction #

Here we'll describe all the tables in the database, including their fields and keys, and which screens make use of them.

# Learning Sqlite3 #
Below is a good tutorial for Sqlite3, but its for Python2. It still does a good job explaining everything. The only real difference I caught was to use parenthesis for the print procedure.

http://docs.python.org/library/sqlite3.html

# Worries #
Think about datetime stamps for solutions: do we need them? How much history do we want to keep? Any? How to invalidate/replace/update comments when a new Submission gets uploaded for a particular student/assignment?

# Tables #

## Student ##
  * username: primary key
  * email address (defaults to indiana)
  * lecture section
  * lab section
  * notes (text field) ?

## Problem ##
A problem is an item in an assignment. It's like "Problem 2 of Assignment 3", in the abstract. A student will turn in a Submission, which is parsed into Solutions.
  * problemid
  * name
  * Assignment (foreign key)
  * problemtext (maybe?)
  * notes (text): these get displayed when you start grading a problem.

## Assignment ##
A set of tasks that a student is supposed to do: this is an abstract collection of Problems.
  * assignmentid ("a3")
  * notes

## Solution ##
We need a word for what the student turned in for a particular problem.
  * text
  * autograder
  * grade
  * Assignment
  * Student
  * Problem

## Submission ##
We might not actually need to store a student's whole a4.ss.
  * text
  * autograder
  * grade
  * hasdraft (boolean) (TODO(alexr): set via commandline flag)
  * Assignment (foreign key)
  * Student (foreign key)

## Comment ##
  * commentid (key)
  * Problem (foreign key)
  * text

## CommentTag ##
(don't need tags immediately; let's do this slightly later.)
  * tagid (primary key)
  * commentid (foreign key)
  * tag