window.onload = () => {
    getAllTablesForSelect(getUrl());
    getAllClientsForSelect(getUrl());
}

async function getAllClientsForSelect(url) {
    fetch('https://localhost:7227/api/Client/get_clients')
    .then(response => {
        // Verifica si la solicitud fue exitosa
        if (!response.ok) {
        throw new Error('La solicitud falló');
        }
        // Convierte la respuesta a formato JSON
        return response.json();
    })
    .then(data => {
        // Maneja los datos recibidos
        if(url === "cadastrar_comanda") {
            insertOptionForClientsSelect(data);
        }
    })
    .catch(error => {
        // Maneja los errores
        console.error('Ocurrió un error:', error);
    });
}

function insertOptionForClientsSelect(data) {
    var options = getAllClientOption(data);
    var dataList = document.getElementById("clientes");
    options.forEach(element => {
        var optionElement = document.createElement("option"); // Cria um elemento de opção
        optionElement.value = element; // Define o valor da opção
        dataList.appendChild(optionElement);
    });
}

function getAllClientOption(data) {
    var options = [];
    data.forEach(element => {
        options.push(`${element.clientName} - ${element.clephoneNumber}`);
    });
    return options;
}

function getUrl() {
    var url = window.location.href;
    var splitUrl = url.split("/");
    return splitUrl[3];
}

async function getAllTablesForSelect(url) {
    fetch('https://localhost:7227/api/Table/get_tables')
    .then(response => {
        // Verifica si la solicitud fue exitosa
        if (!response.ok) {
        throw new Error('La solicitud falló');
        }
        // Convierte la respuesta a formato JSON
        return response.json();
    })
    .then(data => {
        // Maneja los datos recibidos
        if(url === "cadastrar_comanda") {
            insertOptionForTablesSelect(data);
        }
    })
    .catch(error => {
        // Maneja los errores
        console.error('Ocurrió un error:', error);
    });

}

function insertOptionForTablesSelect(data) {
    var options = getAllTableOption(data);
    var dataList = document.getElementById("mesas");
    options.forEach(element => {
        var optionElement = document.createElement("option"); // Cria um elemento de opção
        optionElement.value = element; // Define o valor da opção
        dataList.appendChild(optionElement);
    });
}

function getAllTableOption(data) {
    var options = [];
    data.forEach(element => {
        options.push(`Mesa ${element.tableNumber} - ${element.insideLocation}`);
    });
    return options;
}