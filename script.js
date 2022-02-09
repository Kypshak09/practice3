const paragraph = document.getElementById("paragraph");
const heading = document.getElementById("heading");
const words = paragraph.innerText.split(" ");

heading.innerText += " | " + words.length + " words";

paragraph.innerHTML = paragraph.innerText.replaceAll("?", "🤔");
paragraph.innerHTML = paragraph.innerText.replaceAll("!", "😲");
paragraph.innerHTML = paragraph.innerText.replaceAll(". ", ".<br>");

for (let i = 0; i < words.length; i++) {
    if (words[i].length > 8) {
        paragraph.innerHTML = paragraph.innerHTML.replace(
        words[i],
        `<span class="yellow">${words[i]}</span>`
        );
    }
}
