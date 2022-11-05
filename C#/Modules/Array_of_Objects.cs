namespace Notes.Modules;

class Array_of_Objects
{
    public static void Line()
    {
        Car_arr[] cars = new Car_arr[3];

        Car_arr car_1 = new Car_arr("McLearn Senna");
        Car_arr car_2 = new Car_arr("Lambogini Veneno");
        Car_arr car_3 = new Car_arr("Koingseg Jesko");

        cars[0] = car_1;
        cars[1] = car_2;
        cars[2] = car_3;

        // ---------------------------------------------
        Car_arr[] luxury_Cars = {
                                new Car_arr("McLearn Senna"),
                                new Car_arr("Lambogini Veneno"),
                                new Car_arr("Koingseg Jesko")
                                };

        foreach (Car_arr car in cars)
        {
            Console.WriteLine($"{car.model}");
        }
        // ------------------------------------
        foreach (Car_arr car in luxury_Cars)
        {
            Console.WriteLine($"{car.model}");
        }
    }
}

class Car_arr
{
    public string model;
    public Car_arr(string model)
    {
        this.model = model;
    }
}