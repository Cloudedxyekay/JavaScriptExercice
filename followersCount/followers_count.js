let count = 0; //Initialize count to 0

function increaseCount() {
    count++; //Increment the by 1
    displayCount(); // display count
    checkCountValue();
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML = count //Display the count in the HTML
    
}

function checkCountValue(){

    if (count % 10 === 0){
        alert(`Your Instagram post gained ${count}` );
    }

    
}



