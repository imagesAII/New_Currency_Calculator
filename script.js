

const populate = (value, currency) => {
    let myStr = ""
    let rJson = JSON.parse(`{
        "data":{
        "ADA":{
        "code": "ADA",
        "value": 0.0426559256}
        
        }
        }`)
    console.log(rJson)
    for(let key of Object.keys(rJson["data"])){
        console.log(key)
        myStr += `<tr>
                        <td>${key}</td>
                        <td>${rJson["data"][key]["code"]}</td>
                        <td>${rJson["data"][key]["value"] * value}</td>
                    </tr>
                ` 
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;
}




const btn = document.querySelector('.btn');
btn.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("button is clicked")
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value;

    populate(value, currency)
})


