const monday = [
  {
    'name': 'Study hard',
    'Duration': 180
  },
  {
    'name': 'Learn some functin programming',
    'Duration': 120
  }
];

const tuesday = [
  {
    'name': 'Keep studying hard',
    'Duration': 240
  },
  {
    'name': 'Learn some functin programming logic',
    'Duration': 180
  },
  {
    'name': 'Fucking procastinate',
    'Duration': 240
  }
];

const task = [monday, tuesday];
console.log(task);

const result = task.reduce((acc, current) => acc.concat(current))
  .map((task) => task.Duration / 60)
  .filter((duration) => duration >= 2)
  .map((duration) => duration * 25)
  .reduce((acc, current) => [(+acc) + (+current)])
  .map((amount) => '$' + amount.toFixed(2))
  .reduce((formated_amount)  => formated_amount);
console.log(result);

