var button = document.getElementById("enter");
var input = document.getElementById("input");
var ul = document.querySelector('ul');
// take the value of input from html
function inputLength() {
    return input.value.lenth;

}

function createListElement() {
    // this function will create items and add delete option

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.addEventListener("click", function() {
        //check if the item present
        var finished = this.classList.toogle("done");
        // create a new element => button
        var removeButton = document.createElement(button);
        //create a class name delete button
        removeButton.classList.add("deleteButton");

        //only excute the if function if the statement is true
        if (finished) {
            removeButton.appendChild(document.createTextNode("remove"));
            removeButton.classList = "deleteButton";
            li.appendChild(removeButton);
            removeButton.addEventListener("click", function() {
                this.parentElement.remove();
            })
        } else {
            this.getElementsByClassName("deleteButton")[0].remove();

        }
    });
    input.value = "";
}