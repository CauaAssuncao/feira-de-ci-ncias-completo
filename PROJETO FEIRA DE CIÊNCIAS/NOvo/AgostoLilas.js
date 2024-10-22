document.getElementById('submit-comment').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const commentText = document.getElementById('comment').value;
    if (name && commentText) {
        const commentList = document.getElementById('comment-list');
        const newComment = document.createElement('p');
        newComment.textContent = `${name}: ${commentText}`;
        commentList.appendChild(newComment);
        document.getElementById('comment').value = ''; // Limpa o campo de texto
        document.getElementById('name').value = ''; // Limpa o campo de nome
    }
});
