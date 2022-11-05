package main

import "fmt"

func main() {
	var ages [3]int = [3]int{1, 2, 3}
	var ages_2 = [3]int{4, 5, 6}
	names := [4]string{"Anil", "Bimal", "Kamal", "Dumal"}

	names[1] = "bimal"

	fmt.Println(ages, len(ages))
	fmt.Println(ages_2, len(ages_2))
	fmt.Println(names, len(names))

	// SLICES (Use arrays under the hood)
	var scores = []int{20, 30, 40}
	scores[1] = 25
	// append(scores, 50)	// <- This method will return a new slice.NOt modifying it. So as below we can overide same variable to the get the effect, what we want
	scores = append(scores, 50)
	fmt.Println(scores)

	// Slice Ranges
	range_1 := names[1:3]
	range_2 := names[2:]
	range_3 := names[:3]
	fmt.Println(range_1, range_2, range_3)

	range_1 = append(range_1, "Madumal")
	fmt.Println(range_1)
}
