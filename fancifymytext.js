function makeBigger() {
    alert("Hello, world!");

    // Makes text field bigger
    document.getElementById('textInput').style.fontSize = "24pt";
}

function fancify() {
    const textArea = document.getElementById("textInput");
    const fancyRadio = document.getElementById("fancy");
    const boringRadio = document.getElementById("boring");

    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (boringRadio.checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function moo() {
    const textArea = document.getElementById("textInput");
    let text = textArea.value;
    text = text.toUpperCase();

    let sentences = text.split(".");

    for (let i = 0; i < sentences.length; i++) {
        let sentence = sentences[i].trim();
        if (sentence.length > 0) {
            let words = sentence.split(" ");
            words[words.length - 1] = words[words.length - 1] + "-MOO";
            sentences[i] = words.join(" ");
        }
    }
    textArea.value = sentences.join(". ");
}