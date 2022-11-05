namespace Notes.Modules;

class Keep_Asking
{
    public static void Line()
    {
        bool goMore = true;
        Console.WriteLine($"Welcome to the loop ~ ❤️");
        Console.WriteLine($"So, say hi,");

        do
        {
            string? str = Console.ReadLine();
            if (str == "hi")
            {
                Console.WriteLine($"hi");
            }
            else
            {
                Console.Clear();
                Console.WriteLine($"bye");
                goMore = false;
            }

        } while (goMore);
    }
}