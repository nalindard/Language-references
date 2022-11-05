import 'dart:math';

int get_sum_1(int num_1, int num_2) {
  return num_1 + num_2;
}

int get_sum_2(n1, {n2: 0}) {
  return n1 + n2;
}

int get_sum_3(n1, n2) => n1 + n2;

int get_sum_4(List list) {
  return list.reduce((a, b) => a + b);
}

List next_2(n1) {
  return [n1 + 1, n1 + 2];
}

Function mult_by(int n1) {
  int innre_func(int x) {
    return n1 * x;
  }

  return innre_func;
}

bool Function(int) is_even = (int x) => x % 2 == 0;

// Recursive Function that called it'self,
// fib(4) -> fib(3) + fib(2) -> [3+2]
// fib(3) -> fib(2) + fib(1) -> [2+1]
// fib(2) -> 1 + 1           -> [2]
// fib(1) -> 1               -> [1]

int fib(int n1) {
  if (n1 <= 1) {
    return 1;
  } else {
    return fib(n1 - 1) + fib(n1 - 2);
  }
}

void main() {
  print('5 + 4 = ${get_sum_1(2, 5)}');
  print('5 + 4 = ${get_sum_2(2)}');
  print('5 + 4 = ${get_sum_2(2, n2: 3)}');
  print('5 + 4 = ${get_sum_3(2, 5)}');

  print(get_sum_4([2, 3, 4, 5, 6, 7]));
  print(next_2(5));
  next_2(5).forEach((element) => print(element));

  print('Multi_line one: 2 * 5 = ${mult_by(2)(5)}');

  bool Function(int) is_even = (int x) => x % 2 == 0;

  print('225 is even?: ${is_even(225)}');

  print('Recursibe fib: ${fib(7)}');
}
