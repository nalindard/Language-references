package main

import (
	"fmt"
	"math"
)

func sayHi(name string) {
	fmt.Printf("Welcome %v! \n", name)
}
func sayBye(name string) {
	fmt.Printf("Bye %v! \n", name)
}
func cycleNames(n []string, f func(string)) {
	for _, v := range n {
		f(v) // <-This is where the function get invoked!
	}
}
func circleArea(r float64) float64 {
	return math.Pi * r * r
}

func main() {
	// sayHi("Json")
	// sayBye("Json")

	// names := []string{"Ghost", "Soap", "Prise", "Mason", "Woods", "Hudson"}
	// cycleNames(names, sayHi) // <- Not invoking sayHi function. Just sending

	area_1 := circleArea(12)
	fmt.Println(area_1)
	fmt.Printf("%0.3f", area_1)
}
