# Unit Testing

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `30min`

***

## Objetivos de Aprendizaje

- Understand how to write effective unit tests
- Understand prinicples behind Test Driven Development

***

## Introduction

By now you’ve noticed that at the end of every code challenge you’ve had to run tests against your code to verify that it works as expected. These are called unit tests. Each test programmatically ensures that your program works as intended by comparing actual outputs with expected values for static inputs.

For example, consider a function that adds to numbers: `sum(a,b)`.

To test `sum(a,b)`, we can select any two numbers and assert that the ouptut equals their expected sum:

```javascript
Assert.deepEqual(sum(2,3), 5);
```

If the result is false, meaning `sum(2,3)` equals something other than 5, we'll know we have some debugging to do!

## Validating Credentials

To explore unit tests further, let's analyize the `areValidCredentials` challenge:

>Escribe una función llamada `areValidCredentials`.
>
>Dando un nombre y una contraseña, `areValidCredentials`, devuelve `true` si el nombre es superior a 3 caracteres, Y, la contraseña tiene al menos 8 caracteres de longitud. De lo contrario, devuelve `false`.

Let's look at the unit tests associated with this challenge:

```javascript
describe("areValidCredentials()", function () {
  it("debería regresar true cuando las credenciales son válidas", function () {
	var output = areValidCredentials('Kemal', 'testtesttest');
	Assert.deepEqual(output, true);
  });

  it("debería regresar false cuando el nombre es demasiado corto", function () {
	var output = areValidCredentials('K', 'mylongpassword');
	Assert.deepEqual(output, false);
  });
  
  it("debería regresar false cuando la contraseña es demasiado corta", function () {
	var output = areValidCredentials('Kemal', 'aah');
	Assert.deepEqual(output, false);
  });
});
```

Each function here begins with the word “it”, which in English means “eso”. The “it” of each test refers to `areValidCredentials()` as declared in the wrapping `describe` function:

`describe("areValidCredentials()", function(){...})`.

You can see that each unit test is a function that reads like a sentence. For instance, this function...

`it("debería regresar false cuando la contraseña es demasiado corta", function()) {....}`

... declares this assertion statement...

> `areValidCredentials` debe regresar false cuando la contraseña es demasiado corta.

The content of the unit test should verify the statement by providing a input with a short password and verifying the function fails.

Each unit test should test exactly and only what it's declaring statement says it tests. When we isolate and test components of our code in distinct **units**, we know exactly where to look in the code when our tests start failing.

## Testing A New Requirement

Let’s imagine a new requirement has been added to `areValidCredentials`. **Passwords must now also contain at least one number.** Before considering implementation, let’s update the unit tests to reflect this new requirement.

Since we're adding a new behavior to the code and each behavior should be tested independently, we'll need to add a new unit test for the new requirement. Our new test should isolate and verify only the number requirement, so the name and password should meet the previous character length requirements.

	it("debería regresar false cuando la contraseña no tiene número", function () {
		var output = areValidCredentials('Kemal', 'contraseña');
		Assert.deepEqual( output, false);
	});

Now let’s consider our existing tests. Will they pass? Do they still isolate and verify the behaviors they claim to test?

Our original success case, `debería regresar true para credentials válidos`, would now fail, since it doesn't meet the new requirement. We’ll need to add a number to the password.

Our existing failure cases (nombre too short, password too short) will continue to fail- but do they still test the isolated behavior they intend to test? Without knowing how our new requirement will be implemented, we can’t be sure. To ensure they isolate and verify the intended behaviors, we need to add numbers to the passwords of both of these tests as well.

Here’s are our updated unit tests:

	describe("areValidCredentials()", function () {
		it("debería regresar true para credentials válidos", function () {
			var output = areValidCredentials('Kemal', 'testtesttest1');
			Assert.deepEqual(output, true);
		});

		it("debería regresar false cuando el nombre es tan corto", function () {
			var output = areValidCredentials('K', 'mylongpassword1');
			Assert.deepEqual(output, false);
		});

		it("debería regresar false cuando la contraseña es tan corta", function () {
			var output = areValidCredentials('Kemal', 'aah1');
			Assert.deepEqual(output, false);
		});

		it("debería regresar false cuando la contraseña no tiene numero", function () {
			var output = areValidCredentials('Kemal', 'contraseña');
			Assert.deepEqual(output, false);
		});
	});

## Test Driven Development

With our unit tests updated, we can implement the new requirement to `areValidCredentials` with full confidence in our solution works when all our unit tests pass. What we’ve just done (writing tests to verify requirements before implementation) is called **Test Driven Development**. You've already been doing Test Driven Development through your code challenges.

Imagine if we had implemented the new requirement before revising our tests. Would we have remembered to update the character length unit tests? Maybe or maybe not. The more complicated our code and unit tests become, the more things we'll have to remember and the more things we'll inevitably forget. Test Driven Development is a strategy to ensure our tests stay up-to-date and thorough.