const vowels = ['a', 'i', 'u', 'e', 'o'];

window.encrypt = function () {
    const input = document.getElementById("inputEncrypt").value;
    document.getElementById("encryptResult").textContent = encryptText(input);
};

window.decrypt = function () {
    const input = document.getElementById("inputDecrypt").value;
    document.getElementById("decryptResult").textContent = decryptText(input);
};

function encryptText(str) {
    const primes = generatePrimes(countVowels(str));
    let primeIndex = 0;
    let results = []

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const index = vowels.indexOf(char.toLowerCase());

        if (index === -1) {
            results.push(char);
        } else {
            const shift = primes[primeIndex++];
            const newChar = vowels[(index + shift) % 5];

            results.push(isUpperCase(char) ? newChar.toUpperCase() : newChar);
        }
    }

    return results.join('');
}

function decryptText(str) {
    const primes = generatePrimes(countVowels(str));
    let primeIndex = 0;
    let results = [];

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const index = vowels.indexOf(char.toLowerCase());

        if (index === -1) {
            results.push(char);
        } else {
            const shift = primes[primeIndex++];
            const originalChar = vowels[(index - shift + 5) % 5];

            results.push(isUpperCase(char) ? originalChar.toUpperCase() : originalChar);
        }
    }

    return results.join('');
}

function countVowels(str) {
    return str.split('').filter(c => vowels.includes(c.toLowerCase())).length;
}

function generatePrimes(n) {
    const primes = [];
    let candidate = 2;
    while (primes.length < n) {
        if (isPrime(candidate)) {
            primes.push(candidate);
        }
        candidate++;
    }
    return primes;
}

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function isUpperCase(char) {
    return /[A-Z]/.test(char) && char === char.toUpperCase();
}