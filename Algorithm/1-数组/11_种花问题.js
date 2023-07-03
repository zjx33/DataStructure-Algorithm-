var canPlaceFlowers = function (flowerbed, n) {
    let count = 0
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
            count++
            i++
            if (count === n) break;
        }
    }
    return count >= n
};
canPlaceFlowers([0, 0, 1, 0, 1], 1)