void main() {
  var age = 12;

  if (age == 10) {
    print('<<12');
  } else if ((age > 10) || (age == 12)) {
    print(age);
  } else {
    print('>>age');
  }

  var ingrediants = 'Tomato';

  switch (ingrediants) {
    case 'Noodles':
    case 'Tomato':
      print('Make a meal!');
      break;
    case 'Egg':
      print('Omlet');
      break;
    default:
      print('Water');
  }

  bool isIdiot = true;
  // isIdiot = false;

  var canVote = isIdiot ? 'No' : false;

  print(canVote);
  print(canVote is String);
}
