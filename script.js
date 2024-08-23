document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
    this.submit();
    window.location.href = 'index.html';
});
