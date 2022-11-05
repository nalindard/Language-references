package main

import (
	"fmt"
)

func updateName_1(x string) {
	x = "Lockaheart"
}
func updateName_2(x string) string {
	x = "Lockaheart"
	return x
}
func updateMenu(y map[string]float64) {
	y["coffee"] = 7.99
}

func main() {
	// GROUP-A -> strings, ints, floats, booleans, arrays, structs
	name := "Tifa"

	updateName_1(name)
	fmt.Println(name)

	name = updateName_2(name)
	fmt.Println(name)

	// GROUP-B -> slices, maps, functions
	menu := map[string]float64{
		"ice-cream": 12.99,
		"sandwich":  2.99,
	}

	updateMenu(menu)
	fmt.Println(menu)
}
