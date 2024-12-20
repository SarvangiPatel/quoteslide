let topics = [
    
    "The roots of education are bitter, but the fruit is sweet.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "I have not failed. Ive just found 10,000 ways that wont work.",
    "Dont aim for success if you want it; just do what you love and believe in, and it will come naturally.",
    "Knowledge is power."

  ];
  
  function slider() {
    let textElements = document.getElementById("qutoes");
      textElements.innerText = topics[Math.floor(Math.random() * topics.length)];
    
  }
  
  setInterval(() => {
    slider();
  }, 1000);
  