import 'dart:math';

void main() {
  Map<String, int> map_1 = new Map<String, int>();
  map_1['Superman'] = 72;
  map_1['Ironman'] = 86;

  print(map_1);

  Map map_2 = <String, int>{'Name': 12, 'Age': 20, 'Grade': 24, 'Year': 15};
  print(map_2);
  print(map_2 is Map);

  var map_3 = {
    'Hulk': 'Green',
    'Thor': 'Thunder',
    'Iron Man': 'Flying',
    'Black Widow': 12
  };

  map_3['Ant Man'] = 'Atoms';
  print(map_3);

  print(map_3.isEmpty);
  print(map_3.isNotEmpty);
  print(map_3.length);
  print(map_3.values);
  print(map_3.keys);
  print(map_3.containsKey('Black Widow'));

  map_3.keys.forEach((key) => print('\t' + key));
  map_3.values.forEach((value) => print(value));

  map_3.addAll({'Captain Marvel': 'Power', 'Black Panther': 'Claws'});
  print(map_3);
  map_3.remove('Thor');
  print(map_3);
  map_3.clear();
  print(map_3);

}
