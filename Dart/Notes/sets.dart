void main() {
  Set set = new Set();
  set.add(10);
  set.add(12);

  Set set_ = new Set.from([10, 20, 30, 40, 50, 60, 70]);

  for (var n in set_) {
    print(n);
  }
}
