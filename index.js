window.addEventListener("DOMContentLoaded", () => {
    const counterInput = document.getElementById("counter");
    const btn = document.getElementById("generate");

    btn.addEventListener("click", () => {
        const count = parseInt(counterInput.value);
        if (isNaN(count) || count < 1) return;

        document.getElementById("even").value = generateEven(count).join(",");
        document.getElementById("prime").value = generatePrimes(count).join(",");
        document.getElementById("fibo").value = generateFibonacci(count).join(",");
    });

    function generateEven(n) {
        const result = [];
        for (let i = 1; result.length < n; i++) if (i % 2 === 0) result.push(i);
        return result;
    }

    function generatePrimes(n) {
        const result = [];
        let num = 2;
        while (result.length < n) {
            if (isPrime(num)) result.push(num);
            num++;
        }
        return result;
    }

    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;
        return true;
    }

    function generateFibonacci(n) {
        const result = [];
        for (let i = 0; i < n; i++) {
            if (i < 2) result.push(1);
            else result.push(result[i - 1] + result[i - 2]);
        }
        return result;
    }
});