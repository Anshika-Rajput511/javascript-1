const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button){
        button.addEventListener('click', function(e){
            console.log(e);
            console.log(e.target); 
            // if(e.target.id === "yellow"){
            //     body.style.backgroundColor = e.target.id;
            // }
            switch(e.target.id){
                case 'yellow': body.style.backgroundColor = e.target.id;
                               break;
                case 'pink': body.style.backgroundColor = e.target.id;
                               break;
                case 'blue': body.style.backgroundColor = e.target.id;
                               break;
                case 'green': body.style.backgroundColor = e.target.id;
                               break;
            }
        })
});