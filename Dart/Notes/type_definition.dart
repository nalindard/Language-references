typedef DoMath(int x, int y);

add(int n1, int n2) {
  print('${n1} + ${n2} = ${n1 + n2}');
}

sub(int n1, int n2) {
  print('${n1} - ${n2} = ${n1 - n2}');
}

void main() {
  DoMath m_func = add;

  m_func(5, 4);
  m_func = sub;
  m_func(5, 4);
}
