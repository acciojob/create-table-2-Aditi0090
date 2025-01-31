function createTable() {
    let rn = window.prompt("Input number of rows");

    if (rn === null || rn.trim() === "" || isNaN(rn) || Number(rn) <= 0) return;

    rn = Number(rn);
    let table = document.getElementById("myTable");
    table.innerHTML = "";

    for (let i = 0; i < rn; i++) {
        let row = table.insertRow();
        for (let j = 0; j < rn; j++) {
            let cell = row.insertCell();
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}
