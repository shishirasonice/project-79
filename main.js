menu_list_array = ["Margherita Pizza",
                   "Chicken Pizza",
                   "Veg Pizza",
                   "Paneer Pizza",
                   "Corn Pizza"
                    ];

function getmenu(){
var htmldata;
htmldata="<ol class= ' menulist '>"
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+ '<li>' + menu_list_array[i] + '</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML = htmldata
};

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){

    htmldata=htmldata+ '<div class="card>'
            +'<img src="https://imgmedia.lbb.in/media/2019/01/5c2f84d1d5b20859433ee25e_1546618065799.jpg"/>'
            + menu_list_array[i] + '</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addmenu").innerHTML = htmldata
};

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    add_item();
}