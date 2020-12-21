const itemsContainer = document.getElementById("list-items");

function addItem(item) {
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">' + item.productName + '</h5>\n' +
        '        <p class="card-text">' + item.description + '</p>\n' +
        '        <div style="background:' + item.price + ';">' + item.price + '</div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.querySelector("#list-items");
    itemsContainer.innerHTML += itemHTML;


    // for image reference//
    // <div style="background:' + item.price + ';"> + <img src=  ' + item.imageUrl + '></img> + </div>\n' +
}

// function addItem2(item) {
//     const itemHTML = '<div class="card" style="width: 18rem;">\n' +
//         '    <div class="card-body">\n' +
//         '        <h5 class="card-title">' + item.productName + '</h5>\n' +
//         '        <p class="card-text">' + item.description + '</p>\n' +
//         '        <div style="background:' + item.price + ';">' + item.price + '</div>\n' +
//         '    </div>\n' +
//         '</div>\n' +
//         '<br/>';
//     const itemsContainer = document.querySelector("#list-items");
//     itemsContainer.innerHTML += itemHTML;
// }

// function addItem3(item) {
//     const itemHTML = '<div class="card" style="width: 18rem;">\n' +
//         '    <div class="card-body">\n' +
//         '        <h5 class="card-title">' + item.productName + '</h5>\n' +
//         '        <p class="card-text">' + item.description + '</p>\n' +
//         '        <div style="background:' + item.price + ';">' + item.price + '</div>\n' +
//         '    </div>\n' +
//         '</div>\n' +
//         '<br/>';
//     const itemsContainer = document.querySelector("#list-items");
//     itemsContainer.innerHTML += itemHTML;
// }

// function addItem4(item) {
//     const itemHTML = '<div class="card" style="width: 18rem;">\n' +
//         '    <div class="card-body">\n' +
//         '        <h5 class="card-title">' + item.productName + '</h5>\n' +
//         '        <p class="card-text">' + item.description + '</p>\n' +
//         '        <div style="background:' + item.price + ';">' + item.price + '</div>\n' +
//         '    </div>\n' +
//         '</div>\n' +
//         '<br/>';
//     const itemsContainer = document.querySelector("#list-items");
//     itemsContainer.innerHTML += itemHTML;
// }

// function addItem5(item) {
//     const itemHTML = '<div class="card" style="width: 18rem;">\n' +
//         '    <div class="card-body">\n' +
//         '        <h5 class="card-title">' + item.productName + '</h5>\n' +
//         '        <p class="card-text">' + item.description + '</p>\n' +
//         '        <div style="background:' + item.price + ';">' + item.price + '</div>\n' +
//         '    </div>\n' +
//         '</div>\n' +
//         '<br/>';
//     const itemsContainer = document.querySelector("#list-items");
//     itemsContainer.innerHTML += itemHTML;
// }

// function addItem6(item) {
//     const itemHTML = '<div class="card" style="width: 18rem;">\n' +
//         '    <div class="card-body">\n' +
//         '        <h5 class="card-title">' + item.productName + '</h5>\n' +
//         '        <p class="card-text">' + item.description + '</p>\n' +
//         '        <div style="background:' + item.price + ';">' + item.price + '</div>\n' +
//         '    </div>\n' +
//         '</div>\n' +
//         '<br/>';
//     const itemsContainer = document.querySelector("#list-items");
//     itemsContainer.innerHTML += itemHTML;
// }



function fetchPriceList() {
    fetch('js/data.json')
        .then((response) => response.json()) // transforms data into json
        .then(response => {
            for (let i = 0; i < response.length; i++) {

            addItem(response[i]);}


            const priceJson = JSON.stringify(response.data);
            localStorage.setItem('price', priceJson);
        })
}


//             var page= document.getElementById("DLJ-01")
//             // {
//             // addItem(response.data[i]);}
//             {if (page == "DLJ-01") 
//             {addItem(response[i]);}
// else {console.log ("error")}            
            
            
            
            
            
            // {
            //     switch (response[i].productCode) 
            //     {case ("DLJ-01"): addItem(response[i]);
            //     break;
            //     case 2 ("DLJ-02"): addItem(response[i]);
            //     break;
            //     case 3 ("DLJ-03"): addItem(response[i]);
            //     break;
            //     case 4 ("DLJ-04"): addItem(response[i]);
            //     break;
            //     case 5 ("DLJ-05"): addItem(response[i]);
            //     break;
            //     case 6 ("DLJ-06"): addItem(response[i]);
            //     break;
            //     }
            // }

function loadPriceFromStorage() {
    if (localStorage.getItem('price')) {
        const priceJson = localStorage.getItem('price');
        const colors = JSON.parse(priceJson);
        itemsContainer.innerHTML = '';
        for (let i = 0; i < productId.length; i++) {
            addItem(price[i]);
        }
    }
}



fetchPriceList();
loadPriceFromStorage();