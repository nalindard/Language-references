namespace Notes.Modules;

class Exception_Handling
{
    public static void Line()
    {
        // exception = errors that occur during execution

        //        try     = try some code that is considered "dangerous"
        //        catch   = catches and handles exceptions when they occur
        //        finally = always executes regardless if exception is caught or not

        int x;
        int y;
        double result;

        try
        {
            Console.Write("Enter number 1: ");
            x = Convert.ToInt32(Console.ReadLine());

            Console.Write("Enter number 2: ");
            y = Convert.ToInt32(Console.ReadLine());

            result = x / y;

            Console.WriteLine("result: " + result);
        }
        catch (FormatException e)
        {
            Console.WriteLine("Enter ONLY numbers PLEASE!", e);
        }
        catch (DivideByZeroException e)
        {
            Console.WriteLine("You can't divide by zero! IDIOT!", e);
        }
        catch (Exception e)
        {
            Console.WriteLine("Something went wrong!", e);
        }
        finally
        {
            Console.WriteLine("Thanks for visiting!");
        }
    }

}