import 'dart:math';

void main() {
  String num_1 = '45';
  int num_2 = int.parse(num_1);

  String num_3 = num_2.toString();

  // double num_4 = double.parse(num_2);
  double num_5 = double.parse(num_1);

  double? num_6 = double.tryParse('12a');
  double? num_7 = double.tryParse('12');

  print(num_1);
  print(num_2);
  print(num_3);
  print(num_5);
  print(num_6);
  print(num_7);
}
