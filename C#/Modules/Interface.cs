namespace Notes.Modules;

// interface = defines a "contract" that all the classes inheriting from should follow

//             An interface declares "what a class should have"
//             An inheriting class defines "how it should do it"

//             Benefit = security + multiple inheritance + "plug-and-play"

class Interface
{
    public static void Line()
    {
        Rabbit rabbit = new Rabbit();
        Wolf wolf = new Wolf();
        Fish fish = new Fish();

        rabbit.Flee();
        wolf.Hunt();
        fish.Flee();
        fish.Hunt();
    }
}
// ---------------------------------
interface IPrey
{
    void Flee();
}
interface IPredator
{
    void Hunt();
}

// ---------------------------------
class Rabbit : IPrey
{
    public void Flee()
    {
        Console.WriteLine("The rabbit runs away!");
    }
}
class Wolf : IPredator
{
    public void Hunt()
    {
        Console.WriteLine("Thee wolf is searching for prey!");
    }
}
class Fish : IPrey, IPredator
{
    public void Flee()
    {
        Console.WriteLine("The fish swims away!");
    }
    public void Hunt()
    {
        Console.WriteLine("The fish is searching for smaller fishes!");
    }
}