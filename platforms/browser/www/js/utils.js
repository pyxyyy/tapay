
//Get the order
function get_order() {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://apisandbox.dev.clover.com:443/v3/merchants/KAHSXBYJW39EJ/orders/9TJ7PEEA6F5X2?expand=lineItems&access_token=2e0d0bab-2dca-bdaf-fc47-809789b4d60b", false);
    xhttp.send();
    let foodItems = JSON.parse(xhttp.response).lineItems.elements;
    let json = JSON.parse(xhttp.response)
    document.getElementById("name").innerHTML = JSON.parse(xhttp.response).lineItems.elements;

    let subtotal_price = 0;
    for (i=0; i<foodItems.length;i++){
        subtotal_price +=foodItems[i].price;
    }
    let tax_price = 0.081 * subtotal_price;
    let total_price = tax_price + subtotal_price


    json["subtotal"] = (subtotal_price/100).toFixed(2);
    json["tax"] = (tax_price/100).toFixed(2);
    json["total"] =(total_price/100).toFixed(2);

        console.log(json);

    return json;


    return json;
}