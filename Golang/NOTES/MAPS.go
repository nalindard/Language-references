package main

import (
	"fmt"
)

func main() {
	menu := map[string]float64{
		"soup":           4.99,
		"pie":            6.99,
		"salad":          4.99,
		"toffee pudding": 3.99,
	}

	fmt.Println(menu)
	fmt.Println(menu["pie"])

	// LOOPING MAPS
	for k, v := range menu {
		fmt.Println(k, "-", v)
	}

	// INT AS KEY
	phonebook := map[int]string{
		12121212: "Json",
		45454545: "Meson",
		23232323: "Hudson",
	}

	fmt.Println(phonebook)
	fmt.Println(phonebook[12121212])

	phonebook[12121212] = "Woods"
	fmt.Println(phonebook)

}
