namespace Notes.Modules;

class Type_Casting
{
    public static void Line()
    {
        // type casting = Converting a value to a different data type
        //                Useful when we accept user input (string)
        //                Different data types can do different things

        double a = 3.14;
        int b = Convert.ToInt32(a);

        int c = 123;
        double d = Convert.ToDouble(c);

        int e = 321;
        String f = Convert.ToString(e);

        String g = "$";
        char h = Convert.ToChar(g);

        String i = "true";
        bool j = Convert.ToBoolean(i);

        Console.WriteLine(b + " -->  " + b.GetType());
        Console.WriteLine(d + " -->  " + d.GetType());
        Console.WriteLine(f + " -->  " + f.GetType());
        Console.WriteLine(h + " -->  " + h.GetType());
        Console.WriteLine(j + " -->  " + j.GetType());

        // ---------------------------------------------------------
        int num = 0;
        Console.WriteLine("Enter number to convert to string:");
        while (true)
        {
            try
            {
                num = Convert.ToInt32(Console.ReadLine());
                break;
            }
            catch (System.FormatException)
            {
                Console.WriteLine($"----Error! Enter only numbers!");
                Console.WriteLine($"----Try Again!");
            }
        }
        Console.WriteLine($"{num}: " + num.GetType());
    }
}