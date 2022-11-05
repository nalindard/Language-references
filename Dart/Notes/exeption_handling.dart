void CheckAge(int a) {
  if (a < 1) {
    throw FormatException;
  }
}

void main() {
  int num = 12;

  try {
    print('Divide by zero: ${num / 0}');
  } on UnsupportedError catch (e) {
    print(e);
  } catch (e) {
    print(e);
  } finally {
    print('Gonna do tha last thing!');
  }

  try {
    CheckAge(0);
  } catch (e) {
    print(e);
  }
}
