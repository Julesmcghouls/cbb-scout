const colleges = [
  { name: 'University A', division: 'Division I', location: 'City A', tuition: '$40,000' },
  { name: 'College B', division: 'Division II', location: 'City B', tuition: '$20,000' },
  { name: 'Institute C', division: 'Division III', location: 'City C', tuition: '$30,000' },
];

const searchForm = document.getElementById('searchForm');
const resultsDiv = document.getElementById('results');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const collegeName = document.getElementById('collegeName').value.toLowerCase();
  const division = document.getElementById('division').value;

  const filteredColleges = colleges.filter((college) => {
    return (
      (college.name.toLowerCase().includes(collegeName) || collegeName === '') &&
      (college.division === division || division === '')
    );
  });

  displayResults(filteredColleges);
});

function displayResults(colleges) {
  resultsDiv.innerHTML = '';
  if (colleges.length > 0) {
    colleges.forEach((college) => {
      const div = document.createElement('div');
      div.classList.add('card', 'my-3');
      div.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${college.name}</h5>
          <p class="card-text">Division: ${college.division}</p>
          <p class="card-text">Location: ${college.location}</p>
          <p class="card-text">Tuition: ${college.tuition}</p>
        </div>
      `;
      resultsDiv.appendChild(div);
    });
  } else {
    resultsDiv.innerHTML = '<p>No colleges found.</p>';
  }
}
