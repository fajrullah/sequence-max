
const { assert } = require('chai');


const case1 = [1, 2, 3, 8, 9, 3, 2, 1]
const case2 = [1, 2, 1, 2, 2, 1]
const case3 = [1, 2, 7, 9, 7, 2, 1]


const seqMax = (arr = []) => {
  let descQ = []

  let ascQ = []

  let max = 0

  const leng = arr.length

  for(let i = 0; i < leng; i++){
    
    const isSeqAsc = arr[i + 1] - arr[i]
    
    const isSeqDesc =  arr[(leng - 1) - (i + 1)] - arr[(leng - 1) - i]
    
    
    if(isSeqAsc === 1 && isSeqDesc === 1){
      
      if(arr[i] === arr[(leng - 1) - i]){
        
        max = arr[i + 1]
        
      }
    }
    
  }
  return max
}

describe('get max sequence', function () {
  it('[1, 2, 3, 8, 9, 3, 2, 1] should return 3', function() {
    const result = seqMax(case1);
    assert.equal(result, 3, 'should equal to 3');
  });

  it('[1, 2, 1, 2, 2, 1] should return 2', function() {
    const result = seqMax(case2);
    assert.equal(result, 2, 'should equal to 2');
  });


  it('[1, 2, 7, 9, 7, 2, 1] should return 2', function() {
    const result = seqMax(case3);
    assert.equal(result, 2, 'should equal to 2');
  });
});
