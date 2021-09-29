




let important = false;
let form = false;

function toggleImportant() 
{
    console.log("clicked");
    if(important === false) 
    {
        $("#iImportant").removeClass("far").addClass("fas");
        important = true;
    } 
    else 
    {
        $("#iImportant").removeClass("fas").addClass("far");
        important = false;
    }
}

function toggleForm() 
{
    if (form === false) 
    {
        $("form").slideDown(1500);
        $("#btnAdd").text("Hide Form");
        form = true;
    } 
    else 
    {
        $("#btnAdd").text("Add Task");
        $("form").slideUp(1500);
        form = false;
    }
}

function save() 
{
    console.log("saving task");
    // Get the information from the inputs
    let title = $("#txtTitle").val();
    let important = $("#iImportant").val();
    let date = $("#selDate").val();
    let location = $("#txtLocation").val();
    let priority = $("#selPriority").val();
    let color = $("#selColor").val();
    let collaborator = $("#txtCollaborator").val();
    let description = $("#txtDescription").val();

    // and Console log them
    console.log(title);
    console.log(important);
    console.log(date);
    console.log(location);
    console.log(priority);
    console.log(color);
    console.log(collaborator);
    console.log(description);

    // Display's task in section list
    displayTask(title);

    clear();

}

function clear() {
    title = $("#txtTitle").val("");
    important = $("#iImportant").val("");
    date = $("#selDate").val("");
    location = $("#txtLocation").val("");
    priority = $("#selPriority").val("");
    collaborator = $("#txtCollaborator").val("");
    description = $("#txtDescription").val("");
 
}

function displayTask(title) {
    syntax = `
    <div>
        <h6>${title}</h6>
    </div>
    `;
    $(".pending-tasks").append(syntax);
}

$("#btnSave").keypress(function(e) {
    if(e.which == 13) {
        alert('You pressed enter!');
    }
});


function init() 
{
    console.log("Calendar System");
    $("form").hide();
    // Hook Event
    $("#iImportant").click(toggleImportant);
    $("#btnAdd").click(toggleForm)
    $("#btnSave").click(save);
}
window.onload = init;