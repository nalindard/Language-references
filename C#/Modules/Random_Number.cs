namespace Notes.Modules;

class Random_Number
{
    public static void Line()
    {
        Random random = new Random();

        int num_1 = random.Next();
        int num_2 = random.Next(1, 11);
        double num_3 = random.NextDouble();

        Console.WriteLine($"{num_1}");
        Console.WriteLine($"{num_2}");
        Console.WriteLine($"{num_3}");
    }
}
