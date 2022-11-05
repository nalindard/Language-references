using System.Threading;

namespace Notes.Modules;

// thread = an execution path of a program
//          We can use multiple threads to perform,
//          different tasks of our program at the same time.
//          Current thread running is "main" thread
//          using System.Threading;
class Multithreding
{
    public static void Line()
    {
        Thread mainThread = Thread.CurrentThread;
        mainThread.Name = "Main Thread";

        Console.WriteLine(mainThread.Name);

        // Thread thread1 = new Thread(CountDown);
        // Thread thread2 = new Thread(CountUp);
        Thread thread1 = new Thread(() => CountDown("Timer #1"));
        Thread thread2 = new Thread(() => CountUp("Timer #2"));

        thread1.Start();
        thread2.Start();

        Console.WriteLine(mainThread.Name + " is completed!");
    }
    // public static void CountDown()
    static void CountDown(string name)
    {
        for (int i = 10; i >= 0; i--)
        {
            Console.WriteLine("Timee #1: " + i + " seconds");
            Thread.Sleep(1000);
        }
        Console.WriteLine("Timer #1 is completed!");
    }
    // public static void CountUp()
    static void CountUp(string name)
    {
        for (int i = 0; i <= 10; i++)
        {
            Console.WriteLine("Timee #2: " + i + " seconds");
            Thread.Sleep(1000);
        }
        Console.WriteLine("Timer #2 is completed!");
    }
}