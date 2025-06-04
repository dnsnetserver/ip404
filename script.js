
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
    home: ['Home Value', 'Address'],
    auto: ['Car Make', 'Model', 'Year'],
    life: ['Age', 'Smoking Status'],
    health: ['Age', 'Pre-existing Conditions']
  };

  fields[category].forEach(label => {
    const input = document.createElement('input');
    input.placeholder = label;
    input.required = true;
    dynamicFields.appendChild(input);
  });

  form.classList.remove('hidden');
}
