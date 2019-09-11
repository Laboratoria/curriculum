# Code Review

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `15min`

***

## Objetivos de Aprendizaje

- Understand why code reviews are important
- Understand what to expect when receieving code reviews

***

While programming may not always seem collaborative, creating great code
requires a lot of communication. Discussion and negotiation are critical when
teams decide what changes to commit into a code base. While these back and
forths introduce a lot of additional work and overhead into the development
process, they greatly enhance code quality.

Code reviews are one of the primary ways developers collaborate. Typically one
programmer works independently on some code changes then asks one or more
teammates to do a code review on their work before submitting. The author and
reviewers should agree on all the changes before the code is submitted. In this
lesson, we'll explore the content of what a reviewer looks for when conducting a
code review.

These concepts are things you will likely see when you recieve code reviews here
at Laboratoria and in your future jobs. It's important to remember when
recieving (and giving!) code reviews that the goal is not to criticize the
author. The goal is to produce the best code possible. Also remember that code
reviews are a great opportunity to learn. Critiques you recieve can often be
applied to your programming habits beyond just the specific code change.

Let's now look at some specific things code reviewers evaluate.

## Mistakes and Improvements

The last thing anyone wants is to submit broken code. Your reviewers will likely
start by ensuring that your code does what you say it does. They may ask for a
demo or run your code themselves to see if they can find any flaws. Sometimes we
may miss subtle edge cases that our code reviewers will find.

Additionally your reviewer will be analyzing the design of your code. They want
to see that not only did it work, but it works in the most efficient and
thoughtful way possible. Consider the following code that prints even numbers
between 0 and 20:

```javascript
for (var i = 0; i <= 20; i++) {
  if ((i % 2) === 0) {
    console.log(i);
  }
}
```

While this code is correct, a reviewer might make the following suggestion:

```javascript
for (i = 0; i <= 20; i = i + 2) {
  console.log(i);
}
```

Notice how the reviewer's suggestion is more efficient since it makes fewer
calculations. The initial code wasn't wrong, the suggestion just offers an
improved alternative.

For frontend work, code reviews may also serve as a UI review. Reviewers may
suggest improvements to your UI design. Keep in mind that code reviews are a
conversation. It's okay to have a discussion if you have doubts or concerns
about your reviewer's suggestions. But do remember to keep an open mind when
recieving critiques.

## Readability

Since code is a collaborative process, it's important that we are all able to
understand each other's work. Code reviewers will also be evaluating how easy
your code is to understand. Some things they'll be on the look out for:

- **Style** - Does your code conform to the agreed upon style guide?
- **Naming** - Are the names of your variables and methods clear and informative?
- **Comments** - Did you add comments where appropriate to explain your code?
- **Documentation** - Have you updated any relevant documentation for this code base?

Consider the following example:

```javascript
var classrooms = getClassrooms();
for (var i = 0; i < classrooms.length; i++) {
  classrooms[i].push({
    'name': 'Laura',
    'grade': 99
  });
}
```

A reviewer may find this unclear and suggest adding a comment, so you may make a
modification like so:

```javascript
var classrooms = getClassrooms();
// Iterate over all classrooms
for (var i = 0; i < classrooms.length; i++) {
  // Add a sample student profile to each classroom
  classrooms[i].push({
    'name': 'Laura',
    'grade': 99
  });
}
```

But some readability suggestions may come in the form of code changes. Perhaps a
reviewer makes a suggestion to change the code like so:

```javascript
var classrooms = getClassroomsOfStudents();
var sampleStudentProfile = {
  'name': 'Laura',
  'grade': 99
};
for (students in classrooms) {
  students.push(sampleStudentProfile);
}
```

Small code changes like these may not affect the code behavior or efficiency,
but do make it easier for future programmers to quickly understand what the code
is doing.

Remember that there is no "right" answer when it comes to code reviews. Reviews
are a conversation with many potential solutions. While there is a lot of
science to creating good code, there is an art to it as well.

## Test Coverage

Code reviewers will also be looking at your tests. Here are some things they'll
consider when reviewing testing:

- **Unit test quality** - Does each test isolate and verify a specific component
  of the code? Does each test actually verify what it claims to test? Have you
  updated all tests that may have been affected by your changes?
- **Readability** - Are the names of your tests clear and accurate? Is the
  purpose of each test easy to understand?
- **High test coverage** - Have you written tests for as much of the code base
  as possible?
- **Passing** - Do your tests pass? Code with failing tests should not be
  committed.

## TODOs

Sometimes your code reviewer may notice an issue in the code that doesn't need
to be addressed immediately but should not be forgotten. In this case, reviewers
may suggest adding a "to-do". TODOs are comments left in the code that highlight
things that should eventually be done so that they aren't forgotten. These may
be tasks specifically for you to do, specifically for your reviewer to do, or
generally for someone on the team to do.

Suppose Laura's code uses a library called `mathLibrary` that was recently
updated. She might leave herself TODO as a reminder to eventually migrate her
code to using the updated library.

```javascript
// TODO(laura): Update mathLibrary to newest version
var calculation = mathLibrary.calculate(a, b, c);
```

Usually TODOs are reserved for when there are deadlines or the scope of the
suggested change is too large for the code change being reviewed.

## Closing

Code reviews may be intimidating at first but they become easier with time. Keep
in mind that every code review is an opportunity for you to grow as a programmer
and produce the best code possible.
