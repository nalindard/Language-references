import 'dart:math';

enum Day { Mon, Tue, Thur, Fri, Sat, Sun }

void main() {
  Day favDay = Day.Sat;
  print('value $favDay');
  print('index ${favDay.index}');

  var num_1 = '\u{0031}';
  print(num_1);

  String unicode_1 = 'Strange';
  print('t : ${unicode_1.codeUnitAt(1)}');

  print(unicode_1.codeUnits);

  unicode_1.runes.forEach((element) {
    print(element);
    var uc = new String.fromCharCode(element);
    print(uc);
  });
}
