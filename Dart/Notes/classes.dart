// Classes----------------------------------------------------------------------
import 'dart:math';

class Shape {
  double height = 0;
  double width = 0;
  String unit = 'cm';

  // Static field that belongs to Class it'self & not for object----------------
  static int number_of_shapes = 0;

  // Constructor----------------
  Shape() {
    this.height = height;
    this.width = width;

    number_of_shapes++;
  }

  // Named Constructor----------------
  Shape.fromLength(double lenght) {
    this.height = lenght;
    this.width = lenght;

    number_of_shapes++;
  }

  // Named Constructor----------------
  Shape.fromLengthAndHeight(double height, double width) {
    this.height = height;
    this.width = width;

    number_of_shapes++;
  }

  // Getters----------------
  String get shape_height {
    return height.toString() + ' ' + unit;
  }

  String get shape_width {
    return width.toString() + ' ' + unit;
  }

  // Another static method----------------
  static is_number(String s) {
    return double.tryParse(s) != null;
  }

  // Setters----------------
  void set shape_height(String h) {
    if (is_number(h)) {
      this.height = double.parse(h);
    }
  }

  void set shape_width(String w) {
    if (is_number(w)) {
      this.width = double.parse(w);
    }
  }

  // A object Method(Not a static one)----------------
  double area() {
    return width * height;
  }
}

// Inheritance------------------------------------------------------------------

class Circle extends Shape {
  @override
  double area() {
    if (this.width != 0) {
      return pi * pow(this.width / 2, 2);
    } else if (this.height != 0) {
      return pi * pow(this.height / 2, 2);
    } else {
      return 0;
    }
  }

  // super.area(); <-- Execute the super version of area() / area() method in 'Shape' class

  Circle() : super();
  Circle.fromLength(double l) : super.fromLength(l);
  Circle.fromLengthAndHeight(double l, double w)
      : super.fromLengthAndHeight(l, w);
}

void main() {
  Shape shape_1 = new Shape();
  Shape shape_2 = new Shape.fromLength(2.0);
  Shape shape_3 = new Shape.fromLengthAndHeight(3.0, 4.0);

  print('Shape_3 area: ${shape_3.area()}');

  Circle circle = new Circle.fromLength(4.0);
  print('circle area: ${circle.area()}');
}
