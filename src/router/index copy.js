let a = [3, 2, 5, 4, 6, 1];

for (i = 0; i < a.length - 1; i++) {
  let work = a.length - 1 - i;
  let big = a[0];
  for (j = 0; j < work; j++) {
    if (a[j] > big) {
      //   console.log(a[j]);
      let temp;
      temp = a[j];
      a[j] = a[work];
      a[work] = temp;
      console.log(a);
    }
  }
}
