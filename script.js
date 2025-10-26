document.getElementById('searchBtn').addEventListener('click', function() {
    let query = document.getElementById('jobSearch').value;
    let jobResults = document.getElementById('jobResults');
    let loadingSpinner = document.createElement('div');
    loadingSpinner.classList.add('spinner');
    jobResults.innerHTML = ''; // Clear previous results
    jobResults.appendChild(loadingSpinner); // Show loading spinner

    if (query.trim() === "") {
        alert("Please enter a job title or keyword.");
        return;
    }

    // Simulate an API call with a delay
    setTimeout(() => {
        // Simulate fetched job listings
        let jobs = [
            { title: 'Frontend Developer', company: 'Tech Corp', location: 'Remote' },
            { title: 'Backend Developer', company: 'Dev Solutions', location: 'New York, NY' },
            { title: 'Full Stack Developer', company: 'Code Enterprises', location: 'San Francisco, CA' }
        ];

        jobResults.innerHTML = ''; // Clear loading spinner

        jobs.forEach(job => {
            let jobElement = document.createElement('li');
            jobElement.classList.add('job-item');
            jobElement.innerHTML = `
                <strong>${job.title}</strong> at <em>${job.company}</em> in <span>${job.location}</span>
            `;
            jobResults.appendChild(jobElement);
        });
    }, 1500); // Simulate a 1.5s delay for fetching jobs
});
