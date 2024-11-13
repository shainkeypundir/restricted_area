
const textArea = document.getElementById("message");
const charCount = document.getElementById("charCount");

textArea.addEventListener("input", function(){
    const curr_len = textArea.value.length; // it willl take the value of the textarea and calculates its lenght]
    charCount.textContent = `${curr_len} / ${textArea.getAttribute("maxlength")}`;
    if(curr_len == 20 ){
        textArea.classList.add("danger");
    }
    else{
        textArea.classList.remove("danger");
    }
})
