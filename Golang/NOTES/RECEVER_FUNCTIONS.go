package main

import (
	"fmt"
)

type bill struct {
	name  string
	items map[string]float64
	tip   float64
}

// Make a new bill,
func newBill(name string) bill {
	b := bill{
		name:  name,
		items: map[string]float64{"pie": 5.99, "cake": 3.99},
		tip:   0,
	}

	return b
}

// Format the bill,
func (b bill) format() string {
	fs := "\n-BILL TOTAL BREAKDOWN- \n"
	var total float64 = 0

	// list items,
	for k, v := range b.items {
		fs += fmt.Sprintf("%-25v ...%v\n", k+":", v)
		total += v
	}
	// total,
	fs += fmt.Sprintf("\n%-25v ...%0.2f", "TOTAL:", total)

	return fs
}