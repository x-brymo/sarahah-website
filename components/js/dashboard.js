function signOut() {
    console.log("Function to sign out");
    var header = Headers();
    var myToken = localStorage.getItem("token");
    header.append("authorization", "HAMADA__" + myToken);
    axios.post("https://saraha-gilt.vercel.app/auth/signout", {
        token: myToken
    }, {
        headers: header
    },
    ).then(response => {
        console.log(response);
        localStorage.clear();
        window.location.href = "/signin.html";
        console.log("User signed out");

    }).catch(error => {
        console.log(error);
    });

    closeSignOutDialog();
}

// Function to open sign-out dialog
function openSignOutDialog() {
    document.getElementById("signOutModal").style.display = "block";
}
document.addEventListener('DOMContentLoaded', async function () {
    console.log("Function to get user data");
    const response = await axios.get("https://saraha-gilt.vercel.app/user", {
        headers: {
            "authorization": "HAMADA__" + localStorage.getItem("token")
        }
    });
    console.log("Response:", response.data.user);
    try {
        if (response.status == 200) {
            console.log( "MyData" + response.data);
            document.getElementById("username").innerHTML = response.data.user.userName
            document.getElementById("email").innerHTML = response.data.user.email
            console.log(response.data.user);
            const myData = response.data.user;


        }
    } catch (error) {
        console.log("Server Error :" + response.data.message);
        alert("Server Error :" + response.data.message);

    }

});
document.addEventListener("DOMContentLoaded", function () {
    console.log("Function to get sent messages");
    const response = axios.get("https://saraha-gilt.vercel.app/message/sentMessages?sort=-createdAt", {
        headers: {
            "authorization": "HAMADA__" + localStorage.getItem("token")
        }
    });
 
    console.log("Response sentMessages :", response);
    try {
        if (response.status == 200) {
            console.log( "MyData SentMessages" + response.data.messages);
            var myData = response.data;
            let cartona = ``;
            for (const message of myData) {
                cartona += `
                <div class="message-card" data-id="${message._id}" data-username="${message.sender}">
                    <div class="message">
                        <div class="info">
                            <i class="fa-regular fa-heart" id="favorite"></i>
                            <div class="sender">
                                <h5>${message.sender}</h5>
                                <span>${message.createdAt}</span>
                            </div>
                        </div>
                        <p>${message.text}</p>
                    </div>
                </div>
                `;
            }
            document.getElementById("messages").innerHTML = cartona

        }
    } catch (error) {
        console.log("Server Error sentMessage :" + response.data.message);
        alert("Server Error sentMessage :" + response.data.message);
    }
})
// Function to close sign-out dialog
function closeSignOutDialog() {
    document.getElementById("signOutModal").style.display = "none";
}


$('.message-actions .btn-fav').click(function () {

    $(this).parent().parent().addClass('fav-message');

    var messageId = $(this).closest('.message-card').data('id');
    var favoriteMessages = JSON.parse(localStorage.getItem('favoriteMessages')) || [];
    favoriteMessages.push(messageId);
    localStorage.setItem('favoriteMessages', JSON.stringify(favoriteMessages));
});

$('.message-actions .btn-send').click(function () {

    var recipientUsername = $(this).closest('.message-card').data('username');

    console.log('Sending message to: ' + recipientUsername);
});

$('.nav-link').on('click', function (e) {
    e.preventDefault();
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    var tabId = $(this).attr('href'); // Get the ID of the selected tab
    showTabContent(tabId); // Call a function to show the content of the selected tab
});

// Show content for the initial active tab
showTabContent($('.nav-link.active').attr('href'));
function addCardToFav() {
    var messageId = $(this).closest('.message-card').data('id');
    var favoriteMessages = JSON.parse(localStorage.getItem('favoriteMessages')) || [];
    favoriteMessages.push(messageId);
}
document.addEventListener("DOMContentLoaded", async function () {
    console.log("Function to get messages");
    const response = await axios.get("https://saraha-gilt.vercel.app/message/receivedMessages?sort=-createdAt", {
        headers: {
            "authorization": "HAMADA__" + localStorage.getItem("token")
        }
    });
    console.log("Response receivedMessages:", response);
    try {
        if (response.status == 200) {
            console.log(response.data.messages)
            var myData = response.data.messages;
            let cartona = ``;
            for (const message of myData) {
                cartona += `
                <div class="message" >
                     <div class="info">
   <i class="fa-regular fa-heart" id="favorite"></i>
    <div class="sender">
        <span> ${message.date}</span>
        <h3>anonymous</h3>
    </div>
</div>
<p>
  ${message.text}
</p>
</div>
`;
                document.getElementById("messages").innerHTML = cartona
            }

        }
    } catch (error) {
        console.log("Server Error receivedMessage :" + response.data.message);
        alert("Server Error receivedMessage :" + response.data.message);
    }
})