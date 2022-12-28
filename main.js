const fileInput = document.querySelector("input")
const downloadBtn = document.querySelector("button")

downloadBtn.addEventListener('click', (e) => {
    e.preventDefault() //prevent from form sumbmitting (Page reload)
    downloadBtn.innerText = "Downloading File..."
    fectchFile(fileInput.value)
})

function fectchFile(url) {
    //fetching file & and returning response to blob
    fetch(url).then(res => res.blob()).then(file => {

        let tempUrl = URL.createObjectURL(file)
        let aTag = document.createElement('a')

        aTag.href = tempUrl;

        aTag.download = url.replace(/^.*[\\\/]/, '')
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
        URL.revokeObjectURL(tempUrl)
        downloadBtn.innerText = "Downloaded File";
    }).catch(() => {
        downloadBtn.innerText = "Downloaded File";
        console.log("Download Failed")
    })
}