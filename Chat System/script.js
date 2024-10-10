let messages = [];

// Function to send a message
function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    
    if (message !== "") {
        messages.push({
            type: 'sent',
            text: message
        });
        
        updateChatBox();
        messageInput.value = '';
        
        // Simulate receiving a reply after 1 second
        setTimeout(() => {
            receiveMessage("This is a reply!");
        }, 1000);
    }
}

// Function to receive a message
function receiveMessage(reply) {
    messages.push({
        type: 'received',
        text: reply
    });
    
    updateChatBox();
}

// Function to update the chat box with new messages
function updateChatBox() {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML = ''; // Clear the chat box

    messages.forEach((msg) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', msg.type);
        messageElement.textContent = msg.text;
        chatBox.appendChild(messageElement);
    });

    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
}
