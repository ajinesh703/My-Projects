<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ChatGPT-like Wikipedia Chatbot</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            background-color: #f7f8fc;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .chat-container {
            width: 90%;
            max-width: 800px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            background-color: #fff;
            display: flex;
            flex-direction: column;
            height: 600px;
        }
        .chat-header {
            background-color: #007bff;
            color: #fff;
            padding: 15px;
            border-radius: 10px 10px 0 0;
            text-align: center;
            font-size: 20px;
            font-weight: 500;
        }
        .chat-messages {
            flex-grow: 1;
            overflow-y: auto;
            padding: 20px;
            border-top: 1px solid #ddd;
            background-color: #f0f4f8;
        }
        .message {
            margin-bottom: 15px;
        }
        .message.user {
            text-align: right;
        }
        .message-content {
            display: inline-block;
            max-width: 75%;
            padding: 10px 15px;
            border-radius: 15px;
            line-height: 1.4;
        }
        .message.user .message-content {
            background-color: #007bff;
            color: #fff;
            border-radius: 15px 15px 0 15px;
        }
        .message.assistant .message-content {
            background-color: #e0e0e0;
            color: #333;
            border-radius: 15px 15px 15px 0;
        }
        .chat-input {
            display: flex;
            border-top: 1px solid #ddd;
            padding: 10px;
        }
        .chat-input textarea {
            flex-grow: 1;
            resize: none;
            border: none;
            border-radius: 5px;
            padding: 10px;
            outline: none;
            font-size: 14px;
        }
        .chat-input button {
            background-color: #007bff;
            color: #fff;
            border: none;
            padding: 10px 20px;
            margin-left: 10px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
        }
        .chat-input button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="chat-container">
        <div class="chat-header">Atlas Oracle </div>
        <div class="chat-messages" id="chatMessages"></div>
        <div class="chat-input">
            <textarea id="chatInput" rows="2" placeholder="Type your question..."></textarea>
            <button onclick="sendMessage()">Send</button>
        </div>
    </div>

    <script>
        async function fetchWikipediaData(query) {
            try {
                const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`);
                if (!response.ok) {
                    throw new Error('Error fetching data from Wikipedia');
                }
                const data = await response.json();
                return data;
            } catch (error) {
                return { extract: 'Sorry, I could not retrieve information at this time.', content_urls: { desktop: { page: '' } } };
            }
        }

        async function sendMessage() {
            const chatInput = document.getElementById('chatInput');
            const chatMessages = document.getElementById('chatMessages');
            const messageText = chatInput.value.trim();

            if (messageText) {
                // Create a user message element
                const userMessage = document.createElement('div');
                userMessage.classList.add('message', 'user');
                const userContent = document.createElement('div');
                userContent.classList.add('message-content');
                userContent.textContent = messageText;
                userMessage.appendChild(userContent);
                chatMessages.appendChild(userMessage);

                // Clear the input
                chatInput.value = '';
                chatMessages.scrollTop = chatMessages.scrollHeight;

                // Fetch data from Wikipedia
                const data = await fetchWikipediaData(messageText);
                const assistantMessage = document.createElement('div');
                assistantMessage.classList.add('message', 'assistant');
                const assistantContent = document.createElement('div');
                assistantContent.classList.add('message-content');

                if (data.extract) {
                    assistantContent.innerHTML = `${data.extract} <br><br> <a href="${data.content_urls.desktop.page}" target="_blank">Read more on Wikipedia</a>`;
                } else {
                    assistantContent.textContent = 'Sorry, no relevant information found.';
                }

                assistantMessage.appendChild(assistantContent);
                chatMessages.appendChild(assistantMessage);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
        }
    </script>
</body>
</html>
