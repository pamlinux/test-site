function boldCommand() {
    const strongElement = document.createElement("strong");
    const userSelection = window.getSelection();
    const selectedTextRange = userSelection.getRangeAt(0);
    selectedTextRange.surroundContents(strongElement);
    var text = document.getElementById("divA").textContent;
    console.log(text)
    document.getElementById("divA").textContent = "Ceci est un <strong>autre</strong> exemple de texte";
}

document.getElementById("bold").addEventListener("click", boldCommand)

