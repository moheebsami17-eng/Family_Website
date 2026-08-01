// وظيفة فتح وإغلاق نافذة الدردشة عند الضغط على الشريط الأزرق
function toggleChat() {
    var content = document.getElementById("chatContent");
    var icon = document.getElementById("chat-toggle-icon");
    if (content.style.display === "none") {
        content.style.display = "block";
        icon.innerText = "▲";
    } else {
        content.style.display = "none";
        icon.innerText = "▼";
    }
}

// وظيفة إرسال الرسالة من المستخدم
function sendMessage() {
    var input = document.getElementById("userInput");
    var messageText = input.value.trim();
    
    if (messageText === "") return; // تجاهل الرسائل الفارغة

    var messagesContainer = document.getElementById("chatMessages");

    // 1. إضافة رسالة المستخدم إلى الشاشة
    var userMessageDiv = document.createElement("div");
    userMessageDiv.className = "message user";
    userMessageDiv.innerText = messageText;
    messagesContainer.appendChild(userMessageDiv);

    // تفريغ حقل الكتابة
    input.value = "";
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // 2. رد تلقائي بسيط ومؤقت من موقعك (تمهيداً لربطه لاحقاً برأسك البرمجي)
    setTimeout(function() {
        var botMessageDiv = document.createElement("div");
        botMessageDiv.className = "message bot";
        botMessageDiv.innerText = "شكراً لتواصلك معنا، تم استلام رسالتك: (" + messageText + ")";
        messagesContainer.appendChild(botMessageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);
}

// السماح بالإرسال عند الضغط على زر Enter في لوحة المفاتيح
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
