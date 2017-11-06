# Introduction to Testing

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `30min`

***

## Objetivos de Aprendizaje

- Understand different kinds of testing
- Review case studies to highlight importance of different kinds of testing

***

## Tipos de Testing

When we write code, we want it to work. Unfortunately, we all make mistakes.
This is why we test. Just as there are many reasons why software can fail, there
are many ways for us as developers to ensure that it doesn’t. Let’s explore some
strategies we can employ to test our code.

- **Manual testing** - You’ve been doing manual testing since day 1 at
  Laboratoria. Every time you run the code you write and verify it does what you
  hoped, you are manually testing your software.
- **Usability testing** - Having actual end users manually test your product is
  called usability testing and can expose user behaviors that developers may not
  have considered.
- **Unit testing** - Unit tests are short chunks of code written to verify
  behavior of other code. You have already unit tests at Laboratoria. Every time
  you execute tests in your code challenges, you are running unit tests that
  compare your code’s output to expected values.
- **Regression testing** - While developing, we must always assure that we don’t
  unintentionally modify existing behavior when adding new behaviors. Testing
  that old behaviors continue working is called regression testing and can be
  done through manual tests or unit tests.
- **Integration testing** - Complex software often has many systems that need to
  work together in harmony. Integration testing is the practice of ensuring the
  entire software ecosystem works end-to-end. One example is ensuring that the
  frontend properly displays information as provided by the backend. Integration
  testing can be manual or automated programmatically.
- **Monkey testing** - Monkey testing refers to interacting with your code
  completely randomly to expose potential gaps in areas humans are unlikely to
  consider. This can be manual or automated.
- **Requirements-based testing** - Every software project has specified
  requirements and it’s important to verify that your software actually meets
  the requirements.
- **Cross-browser testing** - You may be surprised to learn that not all
  browsers will render your code in the same way. To ensure that all your users
  get the same great experience it’s a good practice to test across various
  platforms (Chrome, Firefox, Internet Explorer, etc).

Now let’s discuss these testing strategies in the context of some real life
software failures.

## Apollo 8

In 1968, Margaret Hamilton was an engineer working on the Apollo 8 mission. One
day she realized it was possible to accidentally erase all the ship’s navigation
data when her 4-year old daughter was using the flight simulator to do some
**Manual Monkey Testing** (aka random button pressing). Although Hamilton raised
the issue with her supervisors, they found it unnecessary to address the issue
since the astronauts were smarter than a 4 year old and would know not to push
the buttons in that way. As fate would have it, five days into the mission, an
astronaut did just what Hamilton’s daughter had done and accidentally erased all
of the ship's navigation data. Fortunately, the programmers on earth were
eventually able to remedy the error and navigate the astronauts home safely, but
perhaps additional **Usability Testing** exploring how the astronauts would
interact with the software could have saved everyone a lot of stress.

[Optional further reading.](http://sheromargarethamilton.wordpress.com)

![Margaret Hamilton poses with her code](http://www.grafoso.com/dc/wp-content/uploads/2016/07/ella-1.jpg)

## Araine V Rocket

In 1996, the $500 million dollar Ariane V rocket exploded 40 seconds into launch
when a variable meant to hold the rocket's velocity was not capable of storing
the actual value. Some numerical data types can only hold values up to a certain
finite number due to the number of bits allotted to the variable. The software
had been written for the previous rocket the Ariane IV which could not go as
fast as the Ariane V. The launch turned out to be a very expensive failed
**Integration Test** of how the new hardware would work with the old software.
How might different testing strategies have mitigated this disaster?
**Requirements-based testing** could have highlighted the new requirement of the
accommodating higher velocities. **Unit tests** that considered greater
velocities could have identified the bug. **Regression Testing** could have
ensured that the software continued working as intended despite the new velocity
requirement.

[Optional further reading.](http://www.microsiervos.com/archivo/espacio/veinte-anos-explosion-primer-ariane-5-por-fallo-software.html)

![Space rocket explodes](https://www.viva64.com/media/images/content/b/0426_Space_error/image1.png)

## Therac-25

In the 1980s, several cancer patients were given massive overdoses of radiation
due to a bug in the software of the radiation machine Therac-25. The software
presented a vague malfunction number to the user when an error occurred, but it
didn’t prevent the user from administering the radiation. As the software
frequently showed inconsequential malfunction numbers, nurses were accustomed to
dismissing them without reading further.

**Usability Testing** with real health care professionals would likely have
exposed this unexpected user behavior. Further, a review of the incidents
revealed there had been no **integration testing** of the software and hardware
together prior to Therac-25’s assembly in the hospital for use with patients.
Previous versions of the machine had mechanical fail safes to prevent massive
radiation doses whereas the Therac-25 did not.  The review also discovered a bug
that occurred only when the user pressed a very improbable set of keystrokes in
the span of 8 seconds, **automated monkey testing** is one strategy that can
identify these highly improbable scenarios.

[Optional further reading.](https://es.wikipedia.org/wiki/Therac-25)

## Closing

While your bugs will hopefully never have such catastrophic consequences as
these examples, it is still important to do our best to ensure our end users
never find bugs no matter the scale of our project. In future lessons we’ll
explore how to integrate testing principles into our own development processes.
