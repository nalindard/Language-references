namespace Notes.Modules;

class Constructor
{
    string make;
    string model;
    int year;
    string color;
    public Constructor(string make, string model, int year, string color)
    {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    public void Drive()
    {
        Console.WriteLine($"You are driving a {color} {make} {model}, made in {year,1}. Lovely ah -❤️-!");
    }
}