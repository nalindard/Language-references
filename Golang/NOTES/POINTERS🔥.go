package main

import (
	"fmt"
)

func updateName(x string) {
	x = "Lockaheart"
}
func updateName_p(x *string) {
	*x = "Lockaheart"
}

func main() {
	name := "Tifa"

	updateName(name)

	fmt.Println("Memory address of name is: ", &name)

	m := &name
	fmt.Println("Memmory address is: ", m)
	fmt.Println("The value at memmory addrss:", m, "is:", *m)

	fmt.Println(name)
	updateName_p(m)
	fmt.Println(name)
}
