namespace Notes.Modules;

class List_of_Objects
{
    public static void Line()
    {
        List<Player> players = new List<Player>();

        // Player player_1 = new Player("Nalinda");
        // Player player_2 = new Player("Dissanayake");

        // players.Add(player_1);
        // players.Add(player_2);

        players.Add(new Player("Nalinda"));
        players.Add(new Player("Dissanayake"));

        foreach (Player player in players)
        {
            Console.WriteLine($"{player}");
        }
    }
}

class Player
{
    public string userName;
    public Player(string userName)
    {
        this.userName = userName;
    }
    public override string ToString()
    {
        // return base.ToString();
        return userName;
    }
}