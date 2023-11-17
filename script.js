const qrLink = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");
const generateQr = document.getElementById("generateQr");
const download = document.getElementById("download");

function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src = qrLink + qrText.value;
    imgBox.classList.add("show-img");

    // fetch(qrLink + qrText.value)
    //   .then((response) => response.blob())
    //   .then((blob) => {
    //     console.log(blob);
    //     var blobUrl = URL.createObjectURL(blob);
    //     let atag = document.createElement("a");
    //     atag.href = blobUrl;
    //     atag.download = "qrCode.png";
    //     atag.innerHTML = "Download QR Code";
    //     download.appendChild(atag);
    //     download.style.display = "block";
    //     URL.revokeObjectURL(blobUrl); // Release the resources
    //   });
  } else {
    imgBox.classList.remove("show-img");
    download.style.display = "none";
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1500);
  }
}

generateQr.addEventListener("click", () => {
  generateQR();
});
