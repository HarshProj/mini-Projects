var grocerylist = [];
const submitbtn = document.querySelector('.add-btn');
const input = document.querySelector("#input");
const displist = document.querySelector(".grocery-list");
submitbtn.addEventListener("click", function (e) 
{
    e.preventDefault();
    if(input.value!="")
    grocerylist.push(input.value);
    input.value="";

    display(grocerylist);
    var del = document.querySelectorAll(".delete-sign");
    // console.log(del);

    for(var i=0;i<del.length;i++)
    {
        del[i].addEventListener("click", function (ev) {
            console.log(ev.currentTarget.dataset.id);
            var updatedlist = grocerylist.filter(function (item) {

                if (item != ev.currentTarget.dataset.id)
                    return item;
            });
            console.log("hii");
            del=document.querySelectorAll(".delete-sign");
            console.log(del);
            console.log(updatedlist);
            grocerylist=updatedlist; 
            display(updatedlist);
        });
    }
});


function display(list) {
    const id= new Date().getTime().toString();
    var grocery = list.map(function (items)
    {
        return `<li class="grocery-items " >${items}<button type="button" class="delete-sign" data-id=${id}>&#10005</button></li>`;
    });
    grocery = grocery.join("");
    displist.innerHTML = grocery;
    // console.log(grocery);


}