namespace Notes.Modules;

//getters & setters = add security to fields by encapsulation
//                    They're accessors found within properties

// properties = combine aspects of both fields and methods (share name with a field)
// get accessor = used to return the property value
// set accessor = used to assign a new value
// value keyword = defines the value being assigned by the set (parameter)

class Getters_Setters
{
    public static void Line()
    {
        Maclearn maclearn = new Maclearn(700);

        maclearn.Speed = 1000000000;

        Console.WriteLine(maclearn.Speed);
    }
}

class Maclearn
{
    private int speed;

    public Maclearn(int speed)
    {
        Speed = speed;
    }

    public int Speed
    {
        get { return speed; }
        set
        {
            if (value > 500)
            {
                speed = 700;
            }
            else
            {
                speed = value;
            }
        }
    }
}