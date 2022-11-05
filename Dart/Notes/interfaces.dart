// You can only ever extends one class. But you can implement multiple interfaces.

// Interfaces,
class PrintLaser {
  void print_laser() {}
}

class PrintInkjet {
  void print_inkjet() {}
}

// The class use those interfaces,
class Print implements PrintLaser, PrintInkjet {
  void print_laser() {}
  void print_inkjet() {}
}

void main() {}
