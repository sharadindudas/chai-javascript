const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
    const { key, keyCode, code } = e;

    insert.innerHTML = `
    
    <div class="color">
        <table>
        <tr>
            <th>Key</th>
            <th>Keycode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${key === "" ? "Space" : key}</td>
            <td>${keyCode}</td>
            <td>${code}</td>
        </tr>
        </table>
    </div>
    
    `
})