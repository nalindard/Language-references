namespace Notes.Inherite;

class Object_as_Arguments
{
    public static void Line()
    {
        Car car1 = new Car("Venino", "Black");
        Car car2 = Copy(car1);

        System.Console.WriteLine(car2.color + " " + car2.model);
    }
    public static void ChangeColor(Car car, string color)
    {
        car.color = color;
    }
    public static Car Copy(Car car)
    {
        return new Car(car.model, car.color);
    }
}
class Car
{
    public string model, color;

    public Car(string model, string color)
    {
        this.model = model;
        this.color = color;        
    }
}