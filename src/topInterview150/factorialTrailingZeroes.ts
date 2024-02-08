export function trailingZeroes(n: number): number {
  //基本的には５の数だけ0が発生する
  // ただし、５のn乗が出てくるたびに、n-1乗分だけ0が増える
  let base = 5;
  let res = 0;
  while (n/ base >= 1) {
    res += Math.floor(n/base)
    base *= 5
  }
  return res;
}
