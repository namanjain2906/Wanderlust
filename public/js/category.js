let icons = document.getElementsByClassName("filter")
for(let i=0; i<icons.length; i++){
    icons[i].addEventListener("click",(event)=>{
        let clickedId = event.target.id;
        const searchUrl = `/listings/category/${encodeURIComponent(clickedId)}`;
        window.location.href = searchUrl;
    })
}