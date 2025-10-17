// Initialize the list of scientists with some default data
const defaultScientists = [
  { name: 'Albert Einstein', field: 'Physics', bio: 'Developed the theory of relativity.' },
  { name: 'Marie Curie', field: 'Chemistry', bio: 'Pioneer in radioactivity research.' },
  { name: 'Isaac Newton', field: 'Mathematics', bio: 'Formulated laws of motion and universal gravitation.' },
  { name: 'Charles Darwin', field: 'Biology', bio: 'Founded the theory of evolution by natural selection.' },
  { name: 'Galileo Galilei', field: 'Astronomy', bio: 'Played a major role in the scientific revolution.' },
  { name: 'Nikola Tesla', field: 'Electrical Engineering', bio: 'Known for contributions to electromagnetism.' },
  { name: 'Ada Lovelace', field: 'Mathematics', bio: 'Often considered the first computer programmer.' },
  { name: 'Louis Pasteur', field: 'Microbiology', bio: 'Identified principles of vaccination and pasteurization.' },
  { name: 'Richard Feynman', field: 'Physics', bio: 'Contributed to quantum mechanics and particle physics.' },
  { name: 'Rosalind Franklin', field: 'Biochemistry', bio: 'Made critical contributions to understanding DNA structure.' }
];

let scientists = [...defaultScientists]; // Clone initial data

const listContainer = document.querySelector('.scientist-list');
const form = document.getElementById('scientistForm');
const feedbackDiv = document.getElementById('feedback');

// Function to render the list of scientists
function renderScientists() {
  // Clear existing list
  listContainer.innerHTML = '';
  // Generate and append scientist elements
  scientists.forEach((sci, index) => {
    const sciDiv = document.createElement('div');
    sciDiv.className = 'scientist';
    sciDiv.setAttribute('aria-label', 