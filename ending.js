    // Generate a Random Color //

const randomColor = function(){
        const hex = "0123456789ABCDEF";
        let color = '#'
        for(let i = 0;i<6;i++){
            color+= hex[Math.floor(Math.random() * 16)];
        }
        return color;
};
let intervalId=null; 

 
const stopChangingColor = 

document.querySelector('#start').addEventListener('click',function(){
    if(intervalId === null){
        intervalId = setInterval(changeColor,1000);
        function changeColor(){
        document.body.style.backgroundColor = randomColor();
        }
        console.log("Started"); 
    }
});

document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(intervalId);
    intervalId = null;
    console.log("Stopped");
    
});

   
