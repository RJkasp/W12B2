
// Have a button that when clicked, will show the user a new random activity to try (done with JS)
// Have a dropdown menu that presents the user with 4 options, the numbers 1,2,3,4 and a button next to it that when clicked will show 
//the user an activity to do based on the amount of participants they have selected. 
// In app.js, create a script that achieves the following:
// Reacts to the user clicking on the first button and shows a new random activity using the API
// React to the user clicking on the second button and show them an activity based on the amount of participants they have selected using the API


//BONUS: This API allows for many different ways to use their API. Try to see if you can give your user multiple options for getting activities
// (experiment with the input methods. Try textbox, dropdowns, radio buttons, anything that makes sense) based on:
// Different categories (these are listed at the bottom of the API docs)
// Different price ranges (price is between 0.0 and 1.0)
// Different accessibility values (again between 0.0 and 1.0)




// document.querySelector('button').addEventListener('click', function(e){
//     e.preventDefault();

//     let request = axios.get('http://www.boredapi.com/api/activity/');

//      axios.then((resp)=>{
//         let response = resp.data;
//         document.write(`The Activity Is:` + response.activity + `<br> the Type Is` + response.type);
//     }).catch((err)=>{
//         document.write('Sorry Something Went Wrong')
//     });
// })





function randomActivity(res) {
    //adding the document.body.innerHTML will empty all elements off the page before i had that 
    //line of code the activity and buttons just kept appearing as i pressed the button i created in js. NEWTOOL
    document.body.innerHTML=''
    let response = res.data;
    //document.write displays the type and activity.
    document.write(`Activity:` + response.activity + `<br> Type:` + response.type + `<br>`);
    
    //creating this button took alot for me to figure out i first added the button and could not figure out why it wouldnt work
    //I added the axios request inside the button because evertime the page loads it puts out a new activity and type so now
    //everytime you hit the button it reloads the request.
    let btn = document.createElement('button');
    btn.textContent = 'Get a Random Activity';
    document.body.appendChild(btn);
    btn.addEventListener('click',function(){
        axios.request({
            url: "http://www.boredapi.com/api/activity/",
            method: "GET"
        }).then(randomActivity).catch(randomActivityFailure); 
    })
}
function randomActivityFailure(err) {
    document.write('Sorry Something Went Wrong');
}
axios.request({
    url: "http://www.boredapi.com/api/activity/",
    method: "GET"
}).then(randomActivity).catch(randomActivityFailure);