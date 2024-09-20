// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}

window.makeUrl = makeUrl;

function searchParamsToObject(str) {
  const data = str.split("&");
  const paired_data = data.reduce((acc, curr) => {
    acc.push(curr.split("="));
    return acc;
  }, []);

  return Object.fromEntries(paired_data);
}
window.searchParamsToObject = searchParamsToObject;

function isLeapYear(year) {
  let num = 0;
  if (parseInt(year) && parseInt(year) > 0) {
    num = parseInt(year);
  } else {
    return "not a valid integer";
  }

  if (num % 400 === 0) {
    return `${num} is a leap year.`;
  } else if (num % 4 === 0 && num % 100 !== 0) {
    return `${num} is a leap year.`;
  } else {
    return `${num} is not a leap year.`;
  }
}

window.isLeapYear = isLeapYear;
console.log(isLeapYear(4));
