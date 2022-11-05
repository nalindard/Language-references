package main

import (
	"fmt"
	"os"
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
		items: map[string]float64{},
		tip:   0,
	}

	return b
}

// Format the bill,
func (b *bill) format() string {
	fs := "BILL TOTAL BREAKDOWN \n"
	var total float64 = 0

	// list items,
	for k, v := range b.items {
		fs += fmt.Sprintf("%-25v ...%v\n", k+":", v)
		total += v
	}
	// add tips,
	fs += fmt.Sprintf("\n%-25v ...%v\n", "TIP:", b.tip)

	// total,
	fs += fmt.Sprintf("\n%-25v ...%0.2f", "TOTAL:", total+b.tip)

	return fs
}

// Uodate the tip,
func (b *bill) updateTip(tip float64) {
	b.tip = tip
}

// Add an item to bill,
func (b *bill) addItem(name string, price float64) {
	b.items[name] = price
}

// Save bill,
func (b *bill) save() {
	data := []byte(b.format())

	err := os.WriteFile("bills/"+b.name+".txt", data, 0644)

	if err != nil {
		panic(err)
	}
	fmt.Println("Bill was saved to file!")
}
