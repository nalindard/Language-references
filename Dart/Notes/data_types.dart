import 'dart:math';

void main() {
  print('Say dart !');

  var name = 'Nalinda';
  name = 'Dissanayake';
  String name_2 = 'Nalinda';
  final String name_3 = 'Inevitable';

  int number = 12;
  double number_2 = 22.55;

  late String variable;
  variable = 'Changed!';

  bool isItTrue = true;

  dynamic anything = 'LOL';
  anything = 00;

  int? imNull;

  print('Name is: $name');
  print('Full name is:  ${name_2} ${name}');

  print('Data type of anything: ${anything is dynamic}');
  print('Data type of imNull is int ? ${imNull is int}');
  print('Data type of imNull: ${imNull}');
}
