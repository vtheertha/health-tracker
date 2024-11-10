document.addEventListener('DOMContentLoaded', function () {
    // Bind event listeners to buttons when the DOM is fully loaded
    if (document.getElementById('calculate-bmi')) {
        document.getElementById('calculate-bmi').addEventListener('click', calculateBMI);
      }
    if (document.getElementById('set-goals')) {
      document.getElementById('set-goals').addEventListener('click', setGoals);
    }
    if (document.getElementById('log-stats')) {
      document.getElementById('log-stats').addEventListener('click', logHealthStats);
    }
    if (document.getElementById('estimate-calories')) {
      document.getElementById('estimate-calories').addEventListener('click', estimateCaloriesBurned);
    }
  });

  // Function to calculate BMI
  function calculateBMI() {
    // Retrieve the weight and height values from the inputs
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert height from cm to meters

    // Validate inputs
    if (isNaN(weight) || weight <= 0) {
      alert('Please enter a valid weight.');
      return;
    }
    if (isNaN(height) || height <= 0) {
      alert('Please enter a valid height.');
      return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);

    // Display the BMI result
    const bmiResult = document.getElementById('bmiResult');
    bmiResult.textContent = `Your BMI is ${bmi.toFixed(2)}.`;

    // Categorize BMI
    let category = '';
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }

    // Display category
    bmiResult.textContent += ` You are in the ${category} category.`;
  }

  // Function to log health statistics (placeholder for now)
  function logHealthStats() {
    alert('This feature allows you to log your health statistics.');
    // You can add functionality to log health stats here
  }

  // Function to estimate calories burned
  function estimateCaloriesBurned() {
    const activityType = document.getElementById('activity-type').value;
    const duration = parseFloat(document.getElementById('duration').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(duration) || isNaN(weight) || duration <= 0 || weight <= 0) {
      alert("Please enter valid inputs.");
      return;
    }

    let caloriesPerMinute;

    // Define calories burned per minute based on activity type
    switch (activityType) {
      case "running":
        caloriesPerMinute = 0.063 * weight;
        break;
      case "cycling":
        caloriesPerMinute = 0.049 * weight;
        break;
      case "walking":
        caloriesPerMinute = 0.035 * weight;
        break;
      case "swimming":
        caloriesPerMinute = 0.075 * weight;
        break;
      case "hiking":
        caloriesPerMinute = 0.050 * weight;
        break;
      default:
        caloriesPerMinute = 0;
    }

    const totalCalories = caloriesPerMinute * duration;
    document.getElementById('calories-result').textContent = `You burned approximately ${totalCalories.toFixed(2)} calories.`;
  }




  
