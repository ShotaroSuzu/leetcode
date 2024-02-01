export function isHappy(n: number): boolean {
  // １桁にバラす
  // 案1. 数字を文字にする
  // 案2. 1以下になるまで10で割り続ける
  // それぞれ２乗して足す
  // 判定
  // 1だったらtrueを返す
  // それ以外ならSetにあるかチェック
  // なければSetに積んで戻る
  // あればfalseを返す
  const existingNumbers = new Set();
  let target = n;
  while (true) {
    const happyCandidate = target
      .toString()
      .split("")
      .map((s) => {
        return Number.parseInt(s);
      })
      .reduce((sum, e) => {
        return sum + e ** 2;
      }, 0);

    if (happyCandidate === 1) {
      return true;
    }
    if (existingNumbers.has(happyCandidate)) {
      return false;
    }
    existingNumbers.add(happyCandidate);
    target = happyCandidate;
  }
}
