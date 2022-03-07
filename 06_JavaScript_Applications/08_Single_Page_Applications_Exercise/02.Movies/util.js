const views = [...document.querySelectorAll('.view-section')];

function hideAll(){
    views.forEach(v => v.style.display = 'none');
}

export function showView(section){
    hideAll();
    section.style.display = 'block';
}