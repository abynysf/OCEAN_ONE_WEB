var total = 0;

function addNewField() {
  var namaField = prompt("Masukkan Nama Jenis Sampah");
  var newItemInput = document.createElement("div");
  newItemInput.classList.add("item-input");
  newItemInput.style.margin = "5px";

  var itemNameInput = document.createElement("input");
  itemNameInput.type = "text";
  itemNameInput.classList.add("item-name");

  newItemInput.appendChild(document.createTextNode(namaField + ": "));
  newItemInput.appendChild(itemNameInput);
  document.getElementById("item-container").appendChild(newItemInput);
}

function calculateTotal() {
  var itemNames = document.getElementsByClassName("item-name");
  total = 0;

  for (var i = 0; i < itemNames.length; i++) {
    var itemName = itemNames[i].value;

    if (itemName) {
      var itemValue = parseFloat(itemName) * 365;
      total += itemValue;
    }
  }

  document.getElementById("total").textContent = total;
}