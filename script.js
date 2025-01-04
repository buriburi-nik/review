const options = document.querySelectorAll('.option');
const sendReviewButton = document.getElementById('sendReview');
const feedbackSection = document.querySelector('.feedback-section');
const thankYouSection = document.querySelector('.thank-you-section');
const feedbackMessage = document.getElementById('feedback-message');
let selectedFeedback = 'Neutral';

options.forEach(option => {
  option.addEventListener('click', () => {
    options.forEach(o => o.classList.remove('active'));
    option.classList.add('active');
    selectedFeedback = option.dataset.feedback;
  });
});

sendReviewButton.addEventListener('click', () => {
  feedbackSection.style.display = 'none';
  thankYouSection.style.display = 'block';
  feedbackMessage.textContent = `Feedback: ${selectedFeedback}`;
});
