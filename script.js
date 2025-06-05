function initializeForm() {
  const firstCard = document.querySelector('.carousel-card');
  firstCard.classList.add('selected');
  selectCategory('home', firstCard);
}

function selectCategory(category, element) {
  // Highlight selected card
  document.querySelectorAll('.carousel-card').forEach(card => {
    card.classList.remove('selected');
  });
  element.classList.add('selected');

  const dynamicFields = document.getElementById("dynamicFields");
  dynamicFields.innerHTML = '';

  let placeholder = '';
  switch (category) {
    case 'home':
      placeholder = 'Year built';
      break;
    case 'auto':
      placeholder = 'Car make & model';
      break;
    case 'life':
      placeholder = 'Your age';
      break;
    case 'health':
      placeholder = 'Type of plan (e.g. PPO)';
      break;
  }

  const input1 = document.createElement('input');
  input1.type = 'text';
  input1.placeholder = placeholder;
  input1.required = true;

  const input2 = document.createElement('input');
  input2.type = 'text';
  input2.placeholder = 'Zip code';
  input2.required = true;

  dynamicFields.appendChild(input1);
  dynamicFields.appendChild(input2);
}

function scrollCarousel(direction) {
  const container = document.getElementById('categoryCarousel');
  container.scrollBy({ left: direction * 120, behavior: 'smooth' });
}
const form = document.getElementById('quoteForm');
const dynamicFields = document.getElementById('dynamicFields');

const criteria = {
  home: ['Zip Code', 'Property Value', 'Home Type'],
  auto: ['Zip Code', 'Car Make & Model', 'Driving History'],
  life: ['Age', 'Occupation', 'Zip Code'],
  health: ['Age', 'Pre-existing Conditions', 'Zip Code']
};

function selectCategory(type) {
  form.classList.remove('hidden');
  dynamicFields.innerHTML = '';
  criteria[type].forEach(label => {
    const input = document.createElement('input');
    input.placeholder = label;
    input.name = label.toLowerCase().replace(/ /g, '_');
    input.required = true;
    dynamicFields.appendChild(input);
  });
}

form.onsubmit = async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  console.log('Quote data:', data);
  alert("Thank you! We'll email your quote shortly.");
};
function scrollCarousel(direction) {
  const track = document.getElementById('categoryCarousel');
  const scrollAmount = 120;
  track.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

function selectCategory(category) {
  const form = document.getElementById('quoteForm');
  const dynamicFields = document.getElementById('dynamicFields');
  dynamicFields.innerHTML = ''; // Clear previous fields



  
  const fields = {
    home: ['Year built', 'Zipcode'],
    auto: ['Car Make & Model', 'Zipcode'],
    life: ['Age', 'Zipcode'],
    health: ['Occupation', 'Zipcode']
  };

  fields[category].forEach(label => {
    const input = document.createElement('input');
    input.placeholder = label;
    input.required = true;
    dynamicFields.appendChild(input);
  });

  form.classList.remove('hidden');
}
