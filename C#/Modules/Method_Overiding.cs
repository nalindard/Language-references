namespace Notes.Modules;

//method overriding = provides a new version of a method inherited from a parent class
//                    inherited method must be: abstract, virtual, or already overriden
//                    Used with ToString(), polymorphism 

class Method_Overiding
{
    public static void Line()
    {
        Dog dog = new Dog();
        Cat cat = new Cat();

        dog.Speak();
        cat.Speak();
    }
}
class Animal
{
    public virtual void Speak()  // Insted of vitual, you can use abstract. Then you will need to remove the body -> {} part!
    {
        Console.WriteLine("The animal says *brrrrrrrrr*");
    }
}
class Dog : Animal
{
    public override void Speak()
    {
        Console.WriteLine("The dog say *wooooooooooooof*");
    }
}
class Cat : Animal
{

}