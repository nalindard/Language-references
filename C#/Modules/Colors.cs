namespace Notes.Modules;

class Colors
{
    public static void Line()
    {
        // Console.SetWindowSize(40,40);
        Console.Beep();

        Console.WriteLine($"Colors-- {0}", Console.ForegroundColor);
        Console.WriteLine($"Colors-- {0}", Console.BackgroundColor);

        Console.ForegroundColor = ConsoleColor.Blue;
        Console.BackgroundColor = ConsoleColor.Cyan;
        // Console.CursorLeft = Console.

        Console.WriteLine($"This is the new color.");
        Console.ResetColor();

        // Source: Geeks for Geeks,
        // Get the list of available colors
        // that can be changed
        ConsoleColor[] consoleColors
            = (ConsoleColor[])ConsoleColor
                  .GetValues(typeof(ConsoleColor));

        // Display the list
        // of available console colors
        Console.WriteLine("List of available "
                          + "Console Colors:");
        foreach (var color in consoleColors)
            Console.WriteLine(color);

        // ------------------------------
        Console.Beep();
    }
}