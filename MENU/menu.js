const menu = [
        {
        id: "1",
        title: "CHOCOLATE SHAKE",
        type: "Dessert",
        img: "./Images/chocolateshake.PNG",
        price: "&#8360 150",
        content: "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Sint doloremque exercitationem ullam adipisci ",
        },
    
        {
        id: "2",
        title: "SAMOSA",
        type: "Breakfast",
        img: "./Images/samosa.PNG",
        price: "&#8360 10",
        content: "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Sint doloremque exercitationem ullam adipisci ",
        },
        {
        id: "3",
        title: "DOSA",
        type: "Breakfast",
        img: "./Images/dosa.PNG",
        price: "&#8360 120",
        content: "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Sint doloremque exercitationem ullam adipisci ",
    },
    {
        id: "4",
        title: "BIRYANI",
        type: "Dinner",
        img: "./Images/biryani.PNG",
        price: "&#8360 100",
        content: "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Sint doloremque exercitationem ullam adipisci ",
    },
    {
        id: "5",
        title: "ALOO PARATHA",
        type: "Breakfast",
        img: "./Images/alooparatha.PNG",
        price: "&#8360 45",
        content: "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Sint doloremque exercitationem ullam adipisci ",
    },
    {
        id: "6",
        title: "CHICKEN",
        type: "Dinner",
        img: "./Images/chicken.PNG",
        price: "&#8360 150",
        content: "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Sint doloremque exercitationem ullam adipisci ",
    },
    {
        id: "7",
        title: "INDIAN THALI",
        type: "Dinner",
        img: "./Images/indianthali.PNG",
        price: "&#8360 450",
        content: "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Sint doloremque exercitationem ullam adipisci ",
    },
    {
        id: "8",
        title: "NOODLES",
        type: "Breakfast",
        img: "./Images/noodles.PNG",
        price: "&#8360 40",
        content: "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Sint doloremque exercitationem ullam adipisci ",
    },
    {
        id: "9",
        title: "ALOO TIKKI",
        type: "Breakfast",
        img: "./Images/alootikki.PNG",
        price: "&#8360 30",
        content: "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Sint doloremque exercitationem ullam adipisci ",
    },
    {
        id: "10",
        title: "GULAB JAMUN",
        type: "Dessert",
        img: "./Images/gulabjamun.PNG",
        price: "&#8360 50",
        content: "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Sint doloremque exercitationem ullam adipisci ",
    },
    {
        id: "11",
        title: "JALEBI",
        type: "Dessert",
        img: "./Images/jalebi.PNG",
        price: "&#8360 90",
        content: "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Sint doloremque exercitationem ullam adipisci ",
    },
    {
        id: "12",
        title: "JALEBI",
        type: "Others",
        img: "./Images/jalebi.PNG",
        price: "&#8360 90",
        content: "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Sint doloremque exercitationem ullam adipisci ",
    },
];

window.addEventListener("DOMContentLoaded", function () {
    displaymenuitems(menu); // display data

    // creation of buttons

    // extracting unique buttons
    const btns=menu.reduce(function(values,item)
    {
        if(!values.includes(item.type))
       {
        values.push(item.type);
        // console.log(values);
        }
    return values;
    },["All"]);
    // console.log(btns);

    //  generating html files and adding it to a new array
    var categorybuttons=btns.map(function(category){  //working on btns array from unique category
        return `<button data-id=${category} class="btns hover:border-blue-800  hover:bg-green-400 font-semibold mt-5 mx-2 border-2 border-red-600 rounded-md px-2">${category}</button>`;
    });

    //  joining all html and serving 
     categorybuttons = categorybuttons.join("");
    // console.log(categorybuttons);
    document.querySelector(".buttoncreate").innerHTML=categorybuttons;
    const filterbtn=document.querySelectorAll(".btns");
    
    console.log(filterbtn);
    
    filterbtn.forEach(function(btn){
        btn.addEventListener("click",function(e)
    {
        const category=e.currentTarget.dataset.id;
        // console.log(category);
        const menucategory=menu.filter(function(menuitems)
        {
            if(menuitems.type===category)
            return menuitems;
        })
        // console.log(menucategory);

        if(category==="All")
        displaymenuitems(menu);
        else
        displaymenuitems(menucategory);
    })
});
});




function displaymenuitems(menuItems)
{
    let displaymenu = menuItems.map(function (item) {
        return `<article class=" gap-10 ml-80 cursor-pointer">
        <div class=" ml-28  p-2 flex gap-6" >
        <div><img class="w-40 h-32 border-2 border-red-700 rounded-2xl" src= ${item.img}   alt=${item.title}>
        </div>
        <div class="w-64 h-32 overflow-hidden   ">
         <span class="font-bold">${item.title}</span> 
         <span class=" float-right font-semibold text-red-500"> ${item.price}</span>
          <hr class="  border  border-black "> 
          <p class="mt-3 font-serif text-sm text-slate-500 ">${item.content}</p>
          </div>
          </div >
          </article > `;
    });
    displaymenu = displaymenu.join("");
    // console.log(displaymenu);
    var x = document.querySelector(".menudisplay");
    x.innerHTML = displaymenu;
}
