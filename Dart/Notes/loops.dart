import 'dart:math';

void main() {
  List<String> list = ['A', 'B', 'C', 'D', 'E', 'F'];

  for (var i = 0; i < list.length; i++) {
    print(list[i]);
  }

  // list.forEach((element) => print(element + 20));
  list.forEach((element) => print((element + ' ') * 20));

  String names = 'Prize Shoap Ghost';

  names.split(' ').forEach((name) => print(name));

  for (var name in names.split(' ')) {
    print('He is, $name');
  }

  int i = 1;

  while (i <= 10) {
    if (i % 2 == 0) {
      i += 1;
      continue;
    }
    if (i == 7) {
      break;
    }
    print(i);
    i++;
  }

  int luckyNum = 7;
  int guess = 1;

  do {
    guess++;
    print('Guess is: $guess');
    print('\tGuess is wrong !');
  } while (luckyNum != guess);
  print('\tLucky number was: $luckyNum');
}
