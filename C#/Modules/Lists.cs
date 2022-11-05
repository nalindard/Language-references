namespace Notes.Modules;

class Lists
{
    public static void Line()
    {

        // List = data structure that represents a list of objects that can be accessed by index.
        //        Similar to array, but can dynamically increase/decrease in size 
        //        using System.Collections.Generic;

        List<string> foods = new List<string>();

        foods.Add("Pizza");
        foods.Add("Hamburger");
        foods.Add("Hot Dog");
        foods.Add("Chicken Submarine");
        foods.Add("French Fries");

        // Console.WriteLine(foods[4]);

        foods.Remove("Hamburger");
        foods.Insert(4, "Pizza");
        Console.WriteLine(foods.IndexOf("Pizza"));
        Console.WriteLine(foods.LastIndexOf("Pizza"));
        Console.WriteLine(foods.Contains("Cookies"));

        foods.Sort();
        foods.Reverse();
        // foods.Clear();
        string[] foodsArray = foods.ToArray();



        foreach (string food in foods)
        {
            Console.WriteLine($"From foods List: {food}");
        }
        // -------------------------------------
        foreach (string food in foodsArray)
        {
            Console.WriteLine($"From foodsArray: {food}");
        }
    }
}