# Introduction #

We want to build a new system to make the grading of programming homework happen in a webapp, as opposed to printing out student programs and grading them with a pen, or grading in a more ad-hoc way.

The benefits of this will be:
  * Students will get feedback more quickly: as soon as an assignment is graded, the student will be sent a permalink, where they can view their code, the autograder output, instructor feedback, and the grade.
  * neither instructors nor students will have to keep track of physical sheets of paper
  * grading will be faster and easier: we will construct a clever interface to make grading quicker and easier, and common comments (eg, "Good!", "this would be better with tail recursion", "use a cond", and the like) can be saved and reused by the system.
  * grading each week will no longer be an ecological disaster.

# Use cases #

## for students ##
  * Students will use the **Upload Screen** to turn in their assignments. (UploadScreen)
  * students will be able to view and download their previous submissions, along with grades and annotations left by instructors. (StudentViewScreen, StudentBrowseScreen)

## for instructors ##
  * Instructors view student uploads, grade them, and leave comments (GradingScreen).
    * Each part of the file is collated with the corresponding autograder output.
    * The instructor can mark a problem with a numerical grade and leave comments.
    * Also the instructor can annotate particular lines in the source, similar to [rietveld/mondrian](http://code.google.com/p/rietveld/wiki/CodeReviewHelp#Entering_In-line_Comments) (Mondrian is the in-house Google review tool) or the [Google Code review tool](http://code.google.com/p/support/wiki/CodeReviews).
  * Instructors will be able to specify how a particular assignment should be graded.
    * At first, we'll support the c211 Scheme autograder
    * other autograders may be added later (ie, JUnit-based ones, or custom autograders)

## possible features ##
  * Be able to parse autograder data, to know the assignment name, problem names and numbers, in order to lessen the amount of set-up required by instructor
  * Comments could be optionally categorized or tagged [i.e.: style, recursion, lists, run-mouse-program, etc]. Select tags from a list box or search to only view those comments with that tag

# old design doc #
[From Fall 2010](http://wiki.iucs-guido.googlecode.com/hg/docs/guido-prototype-designdoc.pdf). For reference. Feel free to copy stuff from that file onto the wiki -- the wiki now being the definitive documentation -- or rethink it, redesign it, or possibly just ignore it.