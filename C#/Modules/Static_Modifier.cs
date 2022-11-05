namespace Notes.Modules;

class Car
{
    // static = modifier to declare a static member, which belongs to the class itself
    //          rather than to any specific object

    String model;
    // public int numberOfCars;
    public static int numberOfCars;

    public Car(String model)
    {
        this.model = model;
        numberOfCars++;
    }

    public static void StartRace()
    {
        Console.WriteLine("The race has begun!");
    }
}