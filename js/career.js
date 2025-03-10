const jobs = [
    {
      title: "Software Engineer",

      details:
        "Responsible for designing, developing and maintaining websites and mobile apps.Must be proficient in modern programmin languages",
      openPositions: "1",
      link: "mailto:info@rizzbrandcreators.agency"
    },
  
    {
      title: "Finance Assistant",
     
      details:
       "Handle financial tasks such as budgeting ans invoicing. Detail-oriented with strong numerical skills ",
      openPositions: "1",
      link: "mailto:info@rizzbrandcreators.agency",
    },
  
    {
      title: "Talent Manager",
   
      details:
        "Manage and expand creator relationships.<br> Requires excellent interpersonal and negotiation <br> skills",
      openPositions: "1",
      link: "mailto:info@rizzbrandcreators.agency",
    },
  
    {
      title: "Videographer",
   
      details:
        "Produce and edit video content. Must have technical proficiency in video production",
      openPositions: "2",
      link: "mailto:info@rizzbrandcreators.agency",
    },
  
    {
      title: "Social Media Manager",

      details:
        "Oversee and grow clients social media presence. creativity and social media expertise necessary",
      openPositions: "2",
      link: "mailto:info@rizzbrandcreators.agency",
    },
  
    {
      title: "PR communications <br> Specialist",
   
      details:
        "Manage Media relations and craft communications. Strong sriting and media handling required",
      openPositions: "1",
      link: "mailto:info@rizzbrandcreators.agency",
    },
  ];
  
  const jobsHeading = document.querySelector(".jobs-list-container h2");
  const jobsContainer = document.querySelector(".jobs-list-container .jobs");
  const jobSearch = document.querySelector(".jobs-list-container .job-search");
  
  let searchTerm = "";
  
  if (jobs.length == 1) {
    jobsHeading.innerHTML = `${jobs.length} Job`;
  } else {
    jobsHeading.innerHTML = `${jobs.length} Jobs`;
  }
  
  const createJobListingCards = () => {
    jobsContainer.innerHTML = "";
  
    jobs.forEach((job) => {
      if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        let jobCard = document.createElement("div");
        jobCard.classList.add("job");
  
        let image = document.createElement("img");
        image.src = job.image;
  
        let title = document.createElement("h3");
        title.innerHTML = job.title;
        title.classList.add("job-title");
  
        let details = document.createElement("div");
        details.innerHTML = job.details;
        details.classList.add("details");
  
        let detailsBtn = document.createElement("a");
        detailsBtn.href = job.link;
        detailsBtn.innerHTML = "Send us a mail ";
        detailsBtn.classList.add("details-btn");
  
        let openPositions = document.createElement("span");
        openPositions.classList.add("open-positions");
  
        if (job.openPositions == 1) {
          openPositions.innerHTML = `${job.openPositions} open position`;
        } else {
          openPositions.innerHTML = `${job.openPositions} open positions`;
        }
  
        // jobCard.appendChild(image);
        jobCard.appendChild(title);
        jobCard.appendChild(details);
        jobCard.appendChild(detailsBtn);
        jobCard.appendChild(openPositions);
  
        jobsContainer.appendChild(jobCard);
      }
    });
  };
  
  createJobListingCards();
  
  jobSearch.addEventListener("input", (e) => {
    searchTerm = e.target.value;
  
    createJobListingCards();
  });
  