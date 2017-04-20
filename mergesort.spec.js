describe('Split Array function', function() {
  it('handles empty arrays', function() {
    expect( split([]) ).toEqual( [[],[]] );
  });

  it('is able to split an array into two halves', function() {
    expect( split([1, 2, 3, 4, 5]) ).toEqual( [[1, 2],[3, 4, 5]] );
  });

});


describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect( merge([[3, 5, 7, 8],[2, 4, 6]]) ).toEqual([2, 3, 4, 5, 6, 7, 8] );
  });

  // it('', function() {
  //   expect( merge([[3, 5, 7, 8],[2, 4, 6]]) ).toEqual([2, 3, 4, 5, 6, 7, 8] );
  // });

});


describe('the mergeSort function', function() {
  it('is able to full sort an array', function() {
    expect( mergeSort([5, 2, 7, 1, 0, 9, -1]) ).toEqual([-1, 0, 1, 2, 5, 7, 9] );
  });


});
