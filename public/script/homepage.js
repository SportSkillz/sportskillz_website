//função que faz com que ao clicar no botão feedback, desça até a seção feedback

document.getElementById('feedbackLink').addEventListener('click', function() {
    document.getElementById('feedbackSection').scrollIntoView({ behavior: 'smooth' });
});