(function(){
    let screen=document.querySelector(".screen");
    let buttons=document.querySelectorAll(".btn");
    let clear=document.querySelector(".btn-clear");
    let equal=document.querySelector(".btn-equal");

    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let Value=e.target.dataset.num;
            screen.value += Value;
            
        });
    });

    equal.addEventListener('click',function(e){
        if(screen.value === ''){
            screen.value='';
        }
        else{
            let val=screen.value;
            try{
            let answer=eval(val);
            screen.value=answer;}
            catch(err){
                screen.value='';
            }
        }
    });

    clear.addEventListener('click',function(e){
        screen.value='';
    });
})();