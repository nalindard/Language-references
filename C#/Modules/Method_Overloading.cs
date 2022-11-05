namespace Notes.Modules;

class Method_Overloading
{
    public static void Line()
    {
        // Method Overloading,
        //                   =  Methods share same name, But different parameters,
        //                      name + parameters = Method_Signature,
        //                      Methods must have unique signatures.
        double total;
        total = Multiply(2, 3);
        total = Multiply(2, 3, 4);

        Console.WriteLine(total);
    }

    static double Multiply(double a, double b)
    {
        return a * b;
    }
    static double Multiply(double a, double b, double c)
    {
        return a * b * c;
    }



    // Params keyword for un predifind coun of arguments-------------------------------------------------

    public static void Params()
    {
        //params keyword = a method parameter that takes a variable number of arguments.
        //                 The parameter type must be a single - dimensional array

        double total = CheckOut(3.99, 5.75, 15, 1.00, 10.25, 0.01);

        Console.WriteLine(total);
    }

    static double CheckOut(params double[] prices)
    {
        double total = 0;

        foreach (double price in prices)
        {
            total += price;
        }
        return total;
    }
}