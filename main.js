name_array= []
function submit()
{
    for(var i=1; i<=4; i++)
    {
        var name=document.getElementById("name_of_the_student_"+i).value;
        name_array.push(name);
    }

    var length_array=name_array.length;
    var display_array= [];

    for(var j=0; j<length_array; j++)
    {
        display_array.push("<h4>Name- "+name_array[j] + "</h4>");
    }

    document.getElementById("display_name_with_commas").innerHTML=display_array;

    var remove_comma=display_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_comma;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

}

function sort () 
{
    name_array.sort();
    var display_sort_array=[];
    var length_array=name_array.length;

    for(var j=0; j<length_array; j++)
    {
        display_sort_array.push("<h4>Name- "+name_array[j] + "</h4>");
    }

    document.getElementById("display_name_with_commas").innerHTML=display_sort_array;
    
    var remove_comma=display_sort_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_comma;
}