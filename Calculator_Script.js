function integrateSin(m, n) {
    let subdiv = 10000;
    let h = (m - n) / subdiv;
    let sum = 0.0;
    for (let i = 1; i < subdiv; i++) {
        let x = n + i * h;
        sum += Math.sin(x);
    }
    return (Math.sin(m) + Math.sin(n) + 2 * sum) * h * 0.5;
}

function integrateCos(m, n) {
    let subdiv = 10000;
    let h = (m - n) / subdiv;
    let sum = 0.0;
    for (let i = 1; i < subdiv; i++) {
        let x = n + i * h;
        sum += Math.cos(x);
    }
    return (Math.cos(m) + Math.cos(n) + 2 * sum) * h * 0.5;
}

function integrateTan(m, n) {
    let subdiv = 10000;
    let h = (m - n) / subdiv;
    let sum = 0.0;
    for (let i = 1; i < subdiv; i++) {
        let x = n + i * h;
        sum += Math.tan(x);
    }
    return (Math.tan(m) + Math.tan(n) + 2 * sum) * h * 0.5;
}

function integrateXexp(m, n) {
    let subdiv = 10000;
    let h = (m - n) / subdiv;
    let sum = 0.0;
    for (let i = 1; i < subdiv; i++) {
        let x = n + i * h;
        sum += x * Math.exp(x);
    }
    return (m * Math.exp(m) + n * Math.exp(n) + 2 * sum) * h * 0.5;
}

function calculate() {
    let func = document.getElementById("func").value;
    let m = parseFloat(document.getElementById("upper").value);
    let n = parseFloat(document.getElementById("lower").value);
    let result;

    if (isNaN(m) || isNaN(n)) {
        document.getElementById("result").innerText = "⚠ Please enter valid numbers.";
        document.getElementById("result-container").classList.add("show");
        return;
    }

    switch(func) {
        case "sin": result = integrateSin(m, n); break;
        case "cos": result = integrateCos(m, n); break;
        case "tan": result = integrateTan(m, n); break;
        case "xexp": result = integrateXexp(m, n); break;
    }

    document.getElementById("result").innerText = "Integral = " + result.toFixed(6);
    document.getElementById("result-container").classList.add("show");
}
