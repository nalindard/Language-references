namespace Notes.Modules;

class To_String_Overide
{
    public static void Line()
    {
        Car car = new Car("Maclearn", "Senna", "Blue", 2017);
        Console.WriteLine($"{car}");
        Console.WriteLine($"{car.ToString()}");
    }

    class Car
    {
        string make, model, color;
        int year;

        public Car(string make, string model, string color, int year)
        {
            this.make = make;
            this.model = model;
            this.color = color;
            this.year = year;
        }
        public override string ToString()
        {
            // return base.ToString();
            return "This is a " + make + " " + model;
        }
    }
}
