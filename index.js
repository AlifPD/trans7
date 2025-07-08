window.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("counter");
    const btn = document.getElementById("generateBtn");
    const output = document.getElementById("result");

    btn.addEventListener("click", () => {
        const n = parseInt(input.value);
        if (isNaN(n) || n < 1) return;

        const results = [];
        let count = 0;
        let num = 1;

        while (count < n) {
            if (num % 2 !== 0) {
                const str = num.toString();
                const divisibleBy3 = num % 3 === 0;
                const contains3 = str.includes("3");

                if (divisibleBy3 && contains3) {
                    results.push("SEVEN");
                } else if (divisibleBy3 || contains3) {
                    results.push("TRANS");
                } else {
                    results.push(str);
                }

                count++;
            }
            num++;
        }

        output.value = results.join("\n");
    });
});
