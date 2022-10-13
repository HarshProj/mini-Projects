var currentitem=0;
const reviews=[
    {
        name:"john Wick",
        main:"Ux Designer",
        msg:
           "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere fugiat sed reiciendis quo vel consequuntu, molestiae? Praesentium adipisci, nihil, porro rerum non, autem iure odit ipsam explicabo atatque consequuntur minima tempora beatae in? Velit officia officiis voluptates explicabo?",
    },
    {
        name:"Erek Selvig",
        main:"Coder",
        msg:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere fugiat sed reiciendis quo velconsequuntu, molestiae? Praesentium adipisci, nihil, porro rerum non, autem iure odit ipsam explicabo atatqueconsequuntur minima tempora beatae in? Velit officia officiis voluptates explicabo?",
    },
    {
        name:"Jane Foster",
        main:"Web Developer",
        msg:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere fugiat sed reiciendis quo velconsequuntur, molestiae? Praesentium adipisci, nihil, porro rerum non, autem iure odit ipsam explicabo atatqueconsequuntur minima tempora beatae in? Velit officia officiis voluptates explicabo?",
    },
    {
        name:"Darcy",
        main:"Market Strategist",
        msg:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere fugiat sed reiciendis quo velconsequuntur.Tempora, molestiae? Praesentium adipisci, nihil, porro rerum non, autem iure odit ipsam explicabo atatqueconsequuntur minima tempora beatae in? Velit officia officiis voluptates explicabo?",
    },
];

document.getElementById('prevbtn').addEventListener('click',()=>
{
    currentitem--;
    if(currentitem<0)
    {
    currentitem=reviews.length-1;
    }
    showdata(currentitem);
}
);


document.getElementById('nextbtn').addEventListener('click',()=>
{
    currentitem++;
    if(currentitem>reviews.length-1)
    {
    currentitem=0;
    }
    showdata(currentitem);
}
);

function showdata(num)
{
    document.getElementById('name').innerText=reviews[num].name;
    document.getElementById('pos').innerText=reviews[num].main;
    document.getElementById('msg').innerText=reviews[num].msg;
}