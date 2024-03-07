function loadDoc(url,callBack){
    const xhttp = new XMLHttpRequest();
    xhttp.addEventListener('readystatechange', function(){
        if(xhttp.readyState == 4 && xhttp.status == 200){
            const data = JSON.parse(xhttp.responseText);
            callBack(undefined,data);
        
        }else if(xhttp.readyState == 4){
            callBack("Error fetching data", undefined)
        }
    })

    xhttp.open('GET', url );
    xhttp.send();
}


loadDoc("https://dummyjson.com/products", (err,data)=>{
console.log("Product loaded")    
if(err) console.log("error",err);
    else console.log("data: ",data)
})

loadDoc("https://dummyjson.com/users", (err,data)=>{
console.log("Users loaded")   
if(err) console.log("error",err);
    else console.log("data: ",data)
})

loadDoc("https://dummyjson.com/quotes", (err,data)=>{
console.log("Quotes loaded")    
if(err) console.log("error",err);
    else console.log("data: ",data)
})


function promiseFetchData(url){
    const xhttp = new XMLHttpRequest();
    return new Promise(function(resolve, reject){
        xhttp.addEventListener('readystatechange', function() {
            if(xhttp.readyState == 4 && xhttp.status == 200){
                const data = JSON.parse(xhttp.responseText);
                resolve(data);
            
            }else if(xhttp.readyState == 4){
                reject("Error fetching data")
            }
        })
    
        xhttp.open('GET', url );
        xhttp.send();
    }
)}


promiseFetchData("https://dummyjson.com/products")

.then(data => console.log("Data: ", data))
.catch(err => console.log("Err:",err))