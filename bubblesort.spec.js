describe('Bubble Sort', function(){

  it('handles an empty array', function(){
  	spyOn(window, 'swapCount').and.callThrough();
    expect( bubbleSort([]) ).toEqual( [] );
    expect( swapCount.calls.count()).toEqual(0);
  });

  it('handles random array of numbers', function(){
  	spyOn(window, 'swapCount').and.callThrough();
  	expect( bubbleSort([8, 6, 10])).toEqual( [6, 8, 10] );
  	expect( swapCount.calls.count()).toEqual(1);
  })

  it('handles random array of numbers, odd length', function(){
  	expect( bubbleSort([6, 2, 10, 7, 4])).toEqual( [2, 4, 6, 7, 10] );
  });

  it('handles random array of numbers', function(){
  	expect( bubbleSort([6, 2, 10, 7, 4, 9])).toEqual( [2, 4, 6, 7, 9, 10] );
  });
});