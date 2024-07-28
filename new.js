function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();
  
    // If birth month is greater than current month, or if birth month is equal to current month but birth day is greater than current day, reduce age by 1
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
  
    return age;
  }

  function page() {
    const birthdateInput = document.getElementById('birthdate').value;
    if (birthdateInput) {
      const age = calculateAge(birthdateInput);
      document.getElementById('age').innerText = `You are ${age} years old `;
    } else {
      document.getElementById('age').innerText = 'Please enter a valid birth-date.';
    }
  }
