package main

import "fmt"

func main() {
	age := 45
	fmt.Println(age <= 50)
	fmt.Println(age >= 50)
	fmt.Println(age == 45)
	fmt.Println(age != 50)

	if age < 30 {
		fmt.Println("Age is less than 30")
	} else if age < 40 {
		fmt.Println("Age is less than 40")
	} else {
		fmt.Println("Age is not less than 45")
	}

	names := []string{"Ghost", "Soap", "Prise", "Mason", "Woods", "Hudson"}

	for index, value := range names {
		if index == 1 {
			fmt.Println("Continuing at pos:", index)
			continue //	<- This says,Stop the current itteration & go up and continue with the loop. So the below code to this will not execute for this moment
		}
		if index > 3 {
			fmt.Println("Breaking at pos:", index)
			break
		}
		fmt.Printf("\t The value at pos %v is %v \n", index, value)
	}
}
