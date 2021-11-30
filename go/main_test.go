package main

import "testing"

func TestGetVal(t *testing.T) {

	case1 := []int{1, 2, 3, 8, 9, 3, 2, 1}

	case2 := []int{1, 2, 1, 2, 2, 1}

	case3 := []int{1, 2, 7, 9, 7, 2, 1}

	Check(sequence(case1), 3, t)

	Check(sequence(case2), 2, t)

	Check(sequence(case3), 2, t)

}

func Check(ret, expected int, t *testing.T) {

	if ret != expected {

			t.Error("Expected:", expected, "Got:", ret)

	} else {

			t.Log("SUCCESS")

	}

}