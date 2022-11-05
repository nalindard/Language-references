namespace Notes.Polymorphism;

// polymorphism = Greek word that means to "have many forms"
//                Objects can be identified by more than one type
//                Ex. A Dog is also: Canine, Animal, Organism

class Polymorphism
{
    public static void Line()
    {
        Car car = new Car();
        Bicycle bicycle = new Bicycle();
        Boat boat = new Boat();

        Vehicle[] vehicles = { car, bicycle, boat };

        foreach (Vehicle vehicle in vehicles)
        {
            vehicle.Go();
        }
    }
}

class Vehicle
{
    public virtual void Go() { }
}
class Car : Vehicle
{
    public override void Go()
    {
        // base.Go();
        Console.WriteLine("The car is moving!");
    }
}
class Bicycle : Vehicle
{
    public override void Go()
    {
        Console.WriteLine("The bicycle is moving!");
    }
}
class Boat : Vehicle
{
    public override void Go()
    {
        Console.WriteLine("The boat is moving!");
    }
}