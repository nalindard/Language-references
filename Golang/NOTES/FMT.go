package main

import "fmt"

func main() {
	age := 22
	age_2 := "22"
	name := "Nalinda"

	// PRINT
	fmt.Print("Say ")
	fmt.Print("HI \n")
	fmt.Print("DUDE !\n")

	// PRINTLN
	fmt.Println("Hey I'm ", name, " & I'm ", age)

	// PRINTF (formated strings) %_ = format specifier
	fmt.Printf("my age is %v & my name is %v \n", age, name)
	fmt.Printf("my age is %q & %q my name is %q \n", age,age_2, name)
	fmt.Printf("age is type of: %T \n", age)
	fmt.Printf("score is %f points \n", 25.5555555555)
	fmt.Printf("score is %0.2f points \n", 25.5555555555)
	fmt.Printf("score is %.2f points \n", 25.5555555555)
	
	// SPEINTF (Save formatted strings)
	var str = fmt.Sprintf("my age is %v & my name is %v \n", age, name)
	fmt.Println("The saved string is: ",str)

}
