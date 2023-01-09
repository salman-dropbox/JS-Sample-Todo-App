let inputText = document.getElementById("inputtext");
let addBtn = document.getElementById("addbtn");
let inputField = document.getElementById("inputfield");
let clearBtn = document.getElementById("clearbtn")

addBtn.addEventListener('click',function(){
  let para = document.createElement('p');
      para.innerText += inputText.value;
      inputField.appendChild(para);
      inputText.value = "";
  let btn = document.createElement('button');
    btn.innerText = "Delete";
    inputField.appendChild(btn);
    para.id = "paraId";
    btn.id = "deleteId"
      btn.addEventListener('click',function(){
        inputField.removeChild(para);
        inputField.removeChild(btn);
      })
      
      clearBtn.addEventListener('click', function(){
        inputField.removeChild(para);
      });
      
      clearBtn.addEventListener('click', function(){
        inputField.removeChild(btn)
      })
})


