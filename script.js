function generateName(){

    let name =
    document.getElementById("name").value;

    let direction =
    document.getElementById("direction").value;

    let code =
    document.getElementById("code").value;

    if(name === "" || direction === "" || code === ""){

        document.getElementById("result").innerHTML =
        "عبّ جميع الحقول";

        return;
    }

    let finalName =
    `G-${code} | ${direction} | ${name}`;

    document.getElementById("result").innerHTML =
    finalName;
}