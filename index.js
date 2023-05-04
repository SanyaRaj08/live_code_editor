alert("hey! Welcome to JarSan");
alert("open on a laptop for the best experience.");

function run(){
    let htmlcode=document.getElementById("html_code").value;
    let csscode=document.getElementById("css_code").value;
    let jscode=document.getElementById("js_code").value;
    let output=document.getElementById("output_code");
    output.contentDocument.body.innerHTML=htmlcode+"<style>"+csscode+"</style>";
    output.contentWindow.eval(jscode);
}
