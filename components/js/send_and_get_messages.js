// geting the messages
function getMessages(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/messages', true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        var messages = JSON.parse(xhr.responseText);
        console.log(messages);
      } else {
        console.log('Request failed. Returned status of ' + xhr.status);

      } 

    }   


}
function getMessagess() {
    const apiUrl = 'https://example.com/api/get-messages';
    return fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch messages');
        }
        return response.json();
      })
      .then(messages => {
        
        return messages;
      })
      .catch(error => {
        
        console.error('Error fetching messages:', error.message);
        
        return [];
      });
  }
  
  function sendMessage(message) {
    const apiUrl = 'https://example.com/api/send-message';
    const data = {
      message: message
    };
  
   
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  
    
    return fetch(apiUrl, options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to send message');
        }
        
        return response.json();
      })
      .then(responseData => {
        return responseData; 
      })
      .catch(error => {
       
        console.error('Error sending message:', error.message);
       
      });
  }
  
function deleteMessage(messageId) {
    const apiUrl = 'https://example.com/api/delete-message';
    const data = {
      messageId: messageId
    };
  
  
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  
    
    return fetch(apiUrl, options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete message');
        }
       
        return response.json();
      })
      .then(responseData => {
        return responseData; 
      })
      .catch(error => {
        
        console.error('Error deleting message:', error.message);
        
      });
  }
  