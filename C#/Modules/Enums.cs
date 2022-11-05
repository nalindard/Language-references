namespace Notes.Modules;

// enums = special "class" that contains a set of named integer constants.
//         Use enums when you have values that you know will not change,
//         To get the integer value from an item, you must explicitly convert to an int

//         name = integer

class Enums
{
    public static void Line()
    {
        Console.Write($"{Planets.Mercury} -> index: ");
        Console.WriteLine($"{(int)Planets.Mercury}");
        Console.Write($"{Planets.Earth} -> index: ");
        Console.WriteLine($"{(int)Planets.Earth}");

        string name = PlanetRadious.Earth.ToString();
        int radious = (int)PlanetRadious.Earth;
        double volume = Volume((double)PlanetRadious.Earth);

        Console.WriteLine($"Earth: name-{name}, radious-{radious}, volume-{volume}km*3");

    }

    public static double Volume(double radious)
    {
        double volume = (4.0 / 3.0) * Math.PI * Math.Pow((int)radious, 3);
        return volume;
    }

    enum Planets
    {
        Mercury = 12,
        Venus = 27,
        Earth,
        Mars,
        Jupitar,
        Saturn,
        Uranes,
        Neptune,
        Pluto
    }
    enum PlanetRadious
    {
        Mercury = 2549,
        Venus = 6051,
        Earth = 6371,
        Mars = 3389,
        Jupitar = 69911,
        Saturn = 58232,
        Uranes = 25362,
        Neptune = 24622,
        Pluto = 1152
    }
}