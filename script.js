
function setValue(recivedPrice){
    const getPrice = recivedPrice;
    const getPriceString = getPrice.innerText;
    const getPriceNumber = Number.parseFloat(getPriceString)


    const getTotal = document.getElementById("totalPrice")
    const getTotalString = getTotal.innerText;
    const getTotalNumber = Number.parseFloat(getTotalString)
    getTotal.innerText = getTotalNumber +  getPriceNumber;


    const productName = recivedPrice.parentNode.parentNode.childNodes[1].innerText;
    console.log(productName);

    const insertData = document.getElementById("insertArea");
    const count = insertData.childElementCount;
    if(count === 15){
        alert("Sorry, Your food Bucket is Full");
        return
    }else{

        const div = document.createElement("div");
        div.innerHTML = `
        <p>${count +1}. ${productName} ${getPriceNumber}$</p>
        `
       insertData.appendChild(div);

    }

}

function addToCard(params){
    const price = params.parentNode.childNodes[5].childNodes[1]
    setValue(price)
}