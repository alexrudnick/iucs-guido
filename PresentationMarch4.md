# a) Elevator Speech #

Guido is a web application that helps instructors grade assignments, with the goal of getting better feedback to students faster and reducing paper usage. Our initial use case for Guido is IU's introductory computer science course, C211.

One major design goal of Guido is that it keeps instructors from having to write the same comment twice: if two different students have the same issue on a problem, the appropriate comment can just be retrieved from the database! This allows instructors to write in more detail.

Additionally, moving feedback from paper to the web allows us to get the feedback to the student more quickly. It also saves a lot of paper!

# b) Goals and Objectives #

  * student work is divided up by problem, and presented next to the relevant autograder output
  * graders may view all of the student responses for a given problem, one at a time, instead of having to grade one assignment on one sheet of paper
  * comment database minimizes typing
  * Minimum setup by reusing existing configuration files from the existing autograder
  * Clean and straightforward web interface

# c) Team Organization #
  * Collaborative effort by all members of the group! Flat structure for a small team.
  * moral and spiritual guidance, along with some structure, direction and experience, provided by Alex.
  * different backgrounds: (put what you're good at here)

# d) Milestones #
  * First couple of weeks we got comfortable with Python, Mercurial, Bottle, and SQL.
  * Establish goals of Guido, and talk about features/design in the next week.
  * SQL database being redesigned from prototype version currently

# e) Progress to Date #
  * practiced with Python, Bottle, Mercurial
  * Have grade screen prototype
  * Designing SQL database

# f) Challenges #
  * student solution parsing
  * UI design issues to consider: how to best present comment selection?