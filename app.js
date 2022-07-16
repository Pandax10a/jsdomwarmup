let header_page = document.querySelector(`#for_header`);
header_page[`style`][`backgroundColor`] = `orange`;
header_page[`style`][`borderRadius`] = `25px`;

let all_p = document.getElementsByClassName(`for_p`);
let counter = 0;
while(counter< all_p.length) {
    all_p[counter][`innerHTML`] = ` The Replacement`;
    counter++;
}

let img_page = document.querySelectorAll(`img`);
for(i=0;i<img_page.length;i++) {
    img_page[i][`outerHTML`] = `<img src = "https://images.unsplash.com/photo-1563630381190-77c336ea545a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60">`
}