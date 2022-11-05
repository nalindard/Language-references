namespace Notes.Inherite;

abstract class Vehicle
{
    public int speed = 0;
    public void Go()
    {
        Console.WriteLine($"This thing can move");
    }
}

class Ford_Car : Vehicle
{
    public int wheels = 4;

}
class Boat : Vehicle
{
    public int wheels = 0;
}