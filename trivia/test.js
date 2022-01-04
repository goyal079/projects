let a = [1, 2, 3, 4];
let b = a.sort(() => (Math.random() > 0.5 ? 1 : -1));
console.log(b);
let miscelleanous = "https://opentdb.com/api.php?amount=1";
let category = "https://opentdb.com/api_category.php";
let specific =
  "https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple";
