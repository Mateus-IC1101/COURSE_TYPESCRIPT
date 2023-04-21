import Api from "./apiService";


function execute() {
    const dado = Api.getUser('E56-477-514AX-DWWF52255', 'mario');
    console.log(dado);
}

execute();
