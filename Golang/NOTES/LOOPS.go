package main

import "fmt"

func main() {
	// x := 0
	// for x < 5 {
	// 	x++
	// }

	// for i := 0; i < 5; i++ {
	// 	fmt.Println("The value of 'i' is:", i)
	// }

	names := []string{"a", "b", "c", "d"}

	// for i := 0; i < len(names); i++ {
	// 	fmt.Println(names[i])
	// }

	// for index, value := range names {
	// 	fmt.Printf("\tThe value at index %v is %v \n", index, value)
	// }
	for _, value := range names {
		fmt.Printf("\tThe value is %v \n",  value)
	}
}
