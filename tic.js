

let boxes=document.querySelectorAll(".box")
let newgame=document.querySelector(".new")
let resetgame=document.querySelector(".reset")
let msg=document.querySelector(".msg")
let mes=document.querySelector(".winner")

valueO=true;

boxes.forEach((btn)=>
{
    btn.addEventListener("click",()=>
    {
       if(valueO==true)
       {  
          
        btn.innerText="O"
        btn.style.backgroundColor="orange"
        valueO=false

       }
       else
       {
         btn.innerText="X"
          btn.style.backgroundColor="gray"
         valueO=true
       }
       btn.disabled=true;
       checkwinner();
    }
)

})
let win=
          [
          [0,1,2],
          [0,3,6],
          [0,4,8],
          [1,4,7],
          [3,4,5],
          [2,5,8],
          [6,7,8],
          [2,4,6]
        ];


        const showwinner=(winner)=>
        {

          msg.innerText=`congratulation ${winner} you  win the game `
          mes.classList.remove("hide");
          disabledbox();
        }
        const  checkwinner=()=>
        {
            for(let pattern of win)
            {
                let a=boxes[pattern[0]].innerText;
                let b=boxes[pattern[1]].innerText;
                let c=boxes[pattern[2]].innerText;
                if(a!=""&&b!=""&&c!="")
                {
                      if(a==b&&b==c)
                      {
                        // console.log("winner",a)
                        showwinner(a)
                      }

                }
            }
        }

        const disabledbox=()=>
        {
            for(let box of boxes)
            {
                box.disabled=true
            }
        }

        
        const reset=()=>
        {
            valueO=true
         
            enableboxes();
            mes.classList.add("hide");
            for(box of boxes)
            {
                box.style.backgroundColor=" pink"
            }
            
        }
        resetgame.addEventListener("click",reset)

        const enableboxes=()=>
        {
            for(box of boxes)
            {
                box.disabled=false;
                box.innerText="";

            }
        }

        newgame.addEventListener("click",reset)

