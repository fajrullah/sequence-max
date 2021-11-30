package main

func sequence(n []int) int {
	length := len(n)

	max := 0

	for i := 0; i < length; i++ {

		if i >= 0 && (i + 1) < len(n) {

			var isSeqAsc = n[i+1] - n[i]

			var isSeqDesc = n[(length - 1) - (i + 1)] - n[(length - 1) - i]

			if isSeqAsc == 1 && isSeqDesc == 1 {
				if n[i] == n[(length - 1) - i] {
					max = n[i + 1]
				}
			}
		}

	}
	return max
}