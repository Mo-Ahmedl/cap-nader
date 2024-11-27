let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}



function sendToTelegram() {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const input3 = document.getElementById('input3').value;
    const input4 = document.getElementById('input4').value;
    const input5 = document.getElementById('input5').value;

    const message = 
    
    `1. Name: ${input1}
     2. Number: ${input2} 
     3. Weight (kg): ${input3} 
     4. Height (cm): ${input4}
     5. message: ${input5}
    `;

    const telegramToken = "8025713173:AAGekW5_e-iQcv4UbISih5GbUtdAKdzchlI"; // استبدلها بالرمز الخاص بك
    const chatId = "5471126331"; // استبدلها برقم المحادثة الخاص بك
   

    const url = `https://api.telegram.org/bot${telegramToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(url)
        .then(response => {
            if (response.ok) {
                alert("تم إرسال المعلومات بنجاح سوف يتم التواصل معك  عبر الواتس اب!");
            } else {
                alert("حدث خطأ أثناء إرسال المعلومات.");
            }
        })
        .catch(error => {
            alert("حدث خطأ أثناء إرسال المعلومات.");
            console.error("Error:", error);
        });
}