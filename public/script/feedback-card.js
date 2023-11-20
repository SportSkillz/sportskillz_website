function createFeedbackCard(data) {
  const card = document.createElement("div");
  card.classList.add("feedback-card");

  const avatarContainer = document.createElement("div");
  avatarContainer.classList.add("avatar-container");

  const avatar = document.createElement("img");
  avatar.classList.add("feedback-card-img");
  avatar.src = data.avatar;
  avatar.alt = "Avatar";

  const content = document.createElement("div");
  const username = document.createElement("h3");
  username.classList.add("feedback-card-h3");
  username.textContent = data.user;
  const comment = document.createElement("p");
  comment.classList.add("feedback-card-p");
  comment.textContent = data.comment;

  content.appendChild(username);
  content.appendChild(comment);

  avatarContainer.appendChild(avatar);
  card.appendChild(avatarContainer);
  card.appendChild(content);

  return card;
}

document.addEventListener("DOMContentLoaded", function () {
  const feedbackContainer = document.querySelector(".feedback-box");

  const feedbackData = [
    {
      avatar: "#",
      user: "LisaBad",
      comment: "Video aulas bem detalhadas e material auxiliar de fácil entendimento, estou quase uma profissional kkk",
    },
    
    {
      avatar: "#",
      user: "Porco aranha",
      comment: "O site quase não trava, melhorei meu bloqueio que nem o pastor da minha igreja kkkk",
    },
    
    {
      avatar: "#",
      user: "FryOlhando",
      comment: "Não consegui acessar as aulas de hand",
    },
  ];

  feedbackData.forEach((feedback, index) => {
    const feedbackCard = createFeedbackCard(feedback);
    feedbackContainer.appendChild(feedbackCard);
  });
});
