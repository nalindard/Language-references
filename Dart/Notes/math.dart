import 'dart:math';

void main() {
  print('5 + 4 = ${5 + 4}');
  print('5 - 4 = ${5 - 4}');
  print('5 * 4 = ${5 * 4}');
  print('5 / 4 = ${5 / 4}');
  print('5 ~/ 4 =${5 / ~4}');
  print('5 % 4 = ${5 % 4}');

  int number = 26;
  print('number $number');
  print('number++ ->  ${number++}');
  print('++number ->  ${++number}');
  number = 26;
  print('number-- ->  ${number--}');
  print('--number ->  ${--number}');

  var n_1 = 25;
  var n_2 = 2.5;

  print(n_1.isEven);
  print(n_1.isOdd);
  print((-1 * n_1).abs()); // Absolute value(- wenuwata +)
  print(n_1.ceil());
  print(n_1.floor());
  print(n_1.round());
  print(n_1.truncate()); // Knok of the decimal point

  // Returns -> 0 : =
  //            1 : left > right
  //           -1 : left < right
  print(n_1.compareTo(n_2));

  print(log(10));
  print(max(10, 12));
  print(min(10, 12));
  print(pow(2, 8));
  print(sqrt(25));

  Random random = new Random();
  var ran_num = random.nextInt(100);

  print('Random number is: $ran_num');

  // Built in constants,
  print('e: $e');
  print('pi: $pi');
}
