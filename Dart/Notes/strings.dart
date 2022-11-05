void main() {
  String name = 'Aerith';
  String greet = 'The name is $name.';
  print(greet);

  String multiLine = '''
                      Is
                      It
                      Lovely ?''';

  print(multiLine);

  String character = "Tifa Lockheart";

  print(character[5]);
  print(character.indexOf('❤️'));
  print(character.indexOf('heart'));

  String c = '-❤️-';
  String theName = character + c;
  print(theName);
  print('isEmpty: ${theName.isEmpty}');
  print('isNotEmpty: ${theName.isNotEmpty}');
  print('lenght: ${theName.length}');

  // Escape characters,
  //    \n -> new Line
  //    \t -> tab
  //    \" -> escape "
  //    \' -> escape '
  //    \\ -> escape \

  print('The name is: \n\t\"Aerith\" \\ \"Cloud\" or Lockheart!');
  // Placing 'r' bafore evertything make it a row string;
  print(
      r'New row string -> The name is: \n\t\"Aerith\" \\ \"Cloud\" or Lockheart!');

  print(theName.toUpperCase());
  print(theName.toLowerCase());

  print(theName.startsWith('T'));
  print('Aerith'.startsWith('A'));
  print(theName.contains('-❤️-'));
  print('Aerith'.endsWith('h'));

  print(theName.substring(5, 9));

  var s_1 = 'To Be Or Not To Be';
  var s_2 = s_1.replaceAll(RegExp('To Be'), '2B');
  print(s_1);
  print(s_2);

  var strArray = s_2.split(' ');
  print(strArray);
  print(strArray[3]);

  print('    Aerith   is   nice   .'.trim());
  print('    Aerith   is   nice   .'.trimLeft());
  print('    Aerith   is   nice   .'.trimRight());

  var buf = StringBuffer();

  for (var i = 0; i < 9; i++) {
    buf.write('$i');
  }
  print(buf);
  print(buf.toString());

  buf.write(9);
  buf.writeAll([10, 11, 12]);
  print(buf);
  print(buf.length);
  print(buf.isEmpty);
  print(buf.isNotEmpty);
}
