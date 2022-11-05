namespace Notes.Polymorphism;

// auto-Implemented property =  shortcut when no additional logic is required in the property
//                                you do not have to define a field for a property,
//                                you only have to write get; and/or set; inside the property                             

class Auto_Implemented_Properties
{
    public static void Line()
    {
        Ferrari ferrari = new Ferrari("LaFerrari");

        Console.WriteLine(ferrari.Model);
    }
    class Ferrari
    {
        public string Model { get; set; }

        public Ferrari(string model)
        {
            this.Model = model;
        }
    }
}