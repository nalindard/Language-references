package main

import (
	"fmt"
	"strings"
)

func getInitials(n string) (string, string) {
	s := strings.ToUpper(n)
	names := strings.Split(s, " ")

	var initials []string

	for _, v := range names {
		initials = append(initials, v[:1])
	}
	if len(initials) > 1 {
		return initials[0], initials[1]
	}
	return initials[0], "_"
}

func main() {
	// fmt.Println(getInitials("tifa lockheart"))

	fn_1, sn_1 := getInitials("tifa lockheart")
	fmt.Println(fn_1, sn_1)

	fn_2, sn_2 := getInitials("cloud strife")
	fmt.Println(fn_2, sn_2)

	fn_3, sn_3 := getInitials("barret")
	fmt.Println(fn_3, sn_3)
}
