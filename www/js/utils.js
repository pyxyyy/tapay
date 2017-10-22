//GET: Retrive the merchant name
function get_merchant_name() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://apisandbox.dev.clover.com/v3/merchants/KAHSXBYJW39EJ?access_token=2e0d0bab-2dca-bdaf-fc47-809789b4d60b", false);
    xhttp.send();
}


//POST: Change the phone number of the merchant
function change_merchant_phoneNumber() {

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://apisandbox.dev.clover.com:443/v3/merchants/KAHSXBYJW39EJ?access_token=2e0d0bab-2dca-bdaf-fc47-809789b4d60b", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(
        JSON.stringify({
            phoneNumber: "123456"
        }));
}