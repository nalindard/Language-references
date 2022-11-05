namespace Notes.Modules;

// generic =  "not specific to a particular data type"
//            add <T> to: classes, methods, fields, etc.
//            allows for code reusability for different data types

class Generics
{
    public static void Line()
    {
        int[] intArray = { 1, 2, 3, 4 };
        double[] doubleArray = { 1.0, 2.0, 3.0, 4.0 };
        string[] stringArray = { "1", "2", "3", "4" };

        displayElements(intArray);
        displayElements(doubleArray);
        displayElements(stringArray);
    }

    public static void displayElements<T>(T[] array)
    {
        foreach (T item in array)
        {
            Console.Write($"{item} ");
        }
        Console.WriteLine();
    }
}