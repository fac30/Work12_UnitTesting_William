function test(name, testFunction) {
  console.group(name);
  testFunction();
  console.groupEnd(name);
}

function equal(actual, expected, message) {
  if (actual === expected) {
    const defaultMessage = `Expected ${expected} and received ${actual}`;
    console.info("Pass: " + (message || defaultMessage));
  } else {
    const defaultMessage = `Expected ${expected} but received ${actual} instead`;
    console.error("Fail: " + (message || defaultMessage));
  }
}

function notEqual(actual, expected, message) {
  if (actual !== expected) {
    const defaultMessage = `${expected} is different to ${actual}`;
    console.info("Pass: " + (message || defaultMessage));
  } else {
    const defaultMessage = `${expected} is the same as ${actual}`;
    console.error("Fail: " + (message || defaultMessage));
  }
}

test("makeUrl returns the exact url if arg is empty string", () => {
  equal(makeUrl(""), "https://pokeapi.co/api/v2/");
});

test("makeUrl returns failure if arg is not equal to expected", () => {
  equal(makeUrl("pikachu"), "https://pokeapi.co/api/v2/squirtle");
});

test("searchParamsToObject name key should return oliver.", () => {
  equal(
    searchParamsToObject("name=oliver&email=hello@oliverjam.es").name,
    "oliver"
  );
});

test("searchParamsToObject email key should return hello@oliverjam.es.", () => {
  equal(
    searchParamsToObject("name=oliver&email=hello@oliverjam.es").email,
    "hello@oliverjam.es"
  );
});

test("isLeapYear pass if the year is 400", () => {
  const result = isLeapYear(400);
  const expected = "400 is a leap year.";
  equal(result, expected);
});

test("isLeapYear pass if the year is 4", () => {
  const result = isLeapYear(4);
  const expected = "4 is a leap year.";
  equal(result, expected);
});

test("isLeapYear pass if the year is 100", () => {
  const result = isLeapYear(100);
  const expected = "100 is not a leap year.";
  equal(result, expected);
});

test("isLeapYear pass if the year can be parsed into a valid integer", () => {
  const result = isLeapYear("4");
  const expected = "4 is a leap year.";
  equal(result, expected);
});

test("isLeapYear fail if the year cannot be parsed into a valid integer", () => {
  const result = isLeapYear("cat");
  const expected = "not a valid integer";
  equal(result, expected);
});

test("isLeapYear fail if the year parsed is less than zero", () => {
  const result = isLeapYear("-1");
  const expected = "not a valid integer";
  equal(result, expected);
});
