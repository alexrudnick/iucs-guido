# Introduction #
In the first pass at implementing Guido, we didn't get around to building out the StudentViewScreen and the ExportScreen, and for whatever reason fixated too much on the AdministrationScreen. So we need to think about these harder...

# Screens #
Each of these probably deserves its own wiki page.

  * LoginScreen
  * GradingScreen: where the action happens. Here, graders can see individual problems submitted by students, leave comments and assign grades
  * StudentViewScreen: so the students can see their turned-in assignments, with feedback
  * AdministrationScreen: this might need some rethinking
  * SummaryScreen: where the assigned grades are summarized, sliced and chunked by different criteria
  * ExportScreen: still needs to be designed. How are we going to get the information out of Guido, and probably into a bunch of CSV files?
  * UploadScript: command line tool for running an autograder and getting the student code into Guido.