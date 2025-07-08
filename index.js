window.addEventListener("DOMContentLoaded", () => {
    const rowInput = document.getElementById("rowCount");
    const runBtn = document.getElementById("runBtn");
    const resultDiv = document.getElementById("result");

    runBtn.addEventListener("click", () => {
        const rows = parseInt(rowInput.value);
        if (isNaN(rows) || rows < 1) return;

        const fibos = generateFibonacciTriangle(rows);
        resultDiv.innerHTML = "";
        for (let row of fibos) {
            const p = document.createElement("p");
            p.textContent = row.join(" ");
            resultDiv.appendChild(p);
        }
    });

    function generateFibonacciTriangle(n) {
        const result = [];
        const fib = [1, 1];
        let index = 2;
        let totalCount = (n * (n + 1)) / 2;

        while (fib.length < totalCount) {
            fib.push(fib[index - 1] + fib[index - 2]);
            index++;
        }

        let current = 0;
        for (let i = 1; i <= n; i++) {
            result.push(fib.slice(current, current + i));
            current += i;
        }

        return result;
    }
});
