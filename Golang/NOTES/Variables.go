package main

import "fmt"

func main() {
	// STRINGS
	var name_1 string = "Nalinda"
	var name_2 = "Dissanayake"
	var name_3 string
	fmt.Println(name_1, name_2, name_3)

	name_2 = "The Great"
	name_3 = "Dissanayake"
	fmt.Println(name_1, name_2, name_3)

	name_4 := "Maximum" //	<- Short hand version of declareing variables. Only can use this style when initialising. Can't use this style outside of a function-⚠️
	fmt.Println(name_4)
	// println(name_4)

	// NUMBERS
	var num_1 int = 27
	var num_2 = 72
	num_3 := 78
	fmt.Println(num_1, num_2, num_3)

	// BITS & MEMORY
	var num_4 int8 = 127
	var num_5 uint8 = 255 // <- There are int16, int32, int64 & "u..." versions of them. u version can't hold -numbers. So the +range get doubled.
	fmt.Println(num_4, num_5)

	// FLOATS
	var num_6 float32 = 2423423.243244
	var num_7 float64 = 23573465238652365456.328765658736565032
	fmt.Println(num_6, num_7)
}
