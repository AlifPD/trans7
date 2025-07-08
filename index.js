window.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("inputText");
    const button = document.getElementById("processBtn");
    const resultDiv = document.getElementById("result");

    button.addEventListener("click", () => {
        const raw = input.value;
        const cleaned = raw.replace(/\s+/g, "").toLowerCase();

        const isPalindrome = cleaned === cleaned.split("").reverse().join("");
        const infoPalindrome = `Kalimat "${raw}" ${isPalindrome ? "termasuk" : "tidak termasuk"} palindrome`;

        const vowels = "aiueo";
        let vokalCount = 0, konsonanCount = 0;

        for (let char of cleaned) {
            if (/[a-z]/.test(char)) {
                if (vowels.includes(char)) vokalCount++;
                else konsonanCount++;
            }
        }

        resultDiv.innerHTML = `
      <p>${infoPalindrome}</p>
      <p>Jumlah Konsonan: ${konsonanCount}</p>
      <p>Jumlah Vokal: ${vokalCount}</p>
    `;
    });
});
