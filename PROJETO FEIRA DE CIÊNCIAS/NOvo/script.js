const buttonContainer = document.querySelector('.button-container');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;

function updateCarousel() {
    const width = buttonContainer.querySelector('.rectangle').offsetWidth + 10; // largura + margem
    buttonContainer.style.transform = `translateX(-${currentIndex * width}px)`;
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % indicators.length; // Avança para o próximo índice
    updateCarousel();
}

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index; // Atualiza o índice para o índice do indicador clicado
        updateCarousel();
    });
});

// Inicia a transição automática a cada 3 segundos
setInterval(nextSlide, 3000);

// Carrega comentários do localStorage
function loadComments() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const commentList = document.getElementById('comment-list');
    commentList.innerHTML = ''; // Limpa a lista antes de adicionar os comentários
    comments.forEach(comment => {
        const newComment = document.createElement('p');
        newComment.textContent = `${comment.name}: ${comment.text}`;
        commentList.appendChild(newComment);
    });
}

// Carrega comentários ao iniciar a página
loadComments();

document.getElementById('submit-comment').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const commentText = document.getElementById('comment').value;
    
    if (name && commentText) {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push({ name, text: commentText });
        localStorage.setItem('comments', JSON.stringify(comments));
        loadComments(); // Atualiza a lista de comentários
        document.getElementById('name').value = ''; // Limpa o campo de nome
        document.getElementById('comment').value = ''; // Limpa o campo de comentário
    }
});
