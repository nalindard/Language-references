import 'dart:math';

void main() {
  List list_0 = <String>[];

  var list_1 = <String>[];

  List<String> list_2 = ['A', 'B'];

  var list_3 = ['Tifa', 'Lockheart'];

  var list_4 = List<int>.filled(5, 0);
  print('List_4 -> $list_4');
  var list_5 = List<int>.filled(5, 0, growable: true);

  print('Index of list_2[1] is: ${list_2[1]}');
  list_2.add('C');
  list_2.addAll(['D', 'E', 'F']);
  print(list_2);
  print(list_2.length);
  print(list_2.contains('B'));

  list_2.sort(((a, b) => a.compareTo(b)));

  for (var val in list_2) {
    print(val);
  }

  print(list_2.indexOf('F'));
  list_2.removeAt(list_2.indexOf('F'));
  print(list_2);
  list_2.clear();
  print(list_2);

  // Random random = new Random();
  Random random = Random();
  var list_6 = List<int>.generate(12, (index) => random.nextInt(100));
  print(list_6);
  print(list_6.first);
  print(list_6.last);

  Iterable iterable = list_6.getRange(2, 7);
  print(iterable);

  var list_7 = list_6.join(', '); // Turning list in to a string :)
  print(list_7);
}
