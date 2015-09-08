# Views #
  * layout
    * has: title
    * shows the user a sidebar with multiple options
    * has a content div that displays the content
    * should be used as a layout for other docs that are included within the content div. Can be used in either of these ways:

```
%rebase layout title='something'
content goes here
```
```
return template("content", title="something", content="content goes here")
```

  * header
    * has: title
    * supplies an HTML header
    * should be included at the beginning of each html doc (that doesnt rebase the layout)
  * footer
    * has: nothing
    * should be included at the end of each html doc (that doesnt rebase the layout)
  * gradeoneproblem
    * has: source, existingcomment, linenumbers, past\_comments, prevcomments, autograder, student, assignment, problem, {next,prev}student, default\_grade, grades
    * provides a grading screen for the instructor, displaying student
  * selection views
    * assignment\_selection
    * problem\_selection
    * username\_selection
    * has: title, target, {assignments, problems, usernames}
    * these are used in order to provide the user with the ability to select the appropriate assignment/problem/username
  * gradesubmissionbyproblem
    * has: problems, {prev,next}student, student, assignment, commenttext, grades, default\_grade, existingcomment, past\_comments, prevcomments
    * shows the full submission by problem, that is each problem is shown in a table with the corresponding grade. (should it also show comments?)
    * this needs significant UI improvements and code clean-up
    * should the user be able to change the grade/comment of each problem?
  * gradewholesubmission
    * has: source, existingcomment, linenumbers, past\_comments, prevcomments, autograder, student, assignment, problem, {next,prev}student, default\_grade, grades
    * shows a whole submission, without breaking it up by problem
    * this page could be useful if the user can't parse the submissions by problem.
    * needs a way to associate the comments with a section of the code
code next to a comment submission form