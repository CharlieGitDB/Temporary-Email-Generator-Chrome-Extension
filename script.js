document.getElementById('emailform').addEventListener('submit', function(e) {
    e.preventDefault();
    let email = document.getElementById('email').value;
    chrome.tabs.create({ url: `https://mailpoof.com/mailbox/${email}@mailpoof.com` });
});