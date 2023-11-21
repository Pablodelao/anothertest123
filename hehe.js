document.addEventListener('DOMContentLoaded', function() {
    let dogs = [
        { name: 'Buddy', breed: 'Labrador', image: 'images/dog1.jpg' },
        { name: 'Max', breed: 'German Shepherd', image: 'images/dog2.jpg' }
        // Existing dogs
    ];

    const dogList = document.getElementById('dog-list');
    const dogForm = document.getElementById('dogForm');
    const dogNameInput = document.getElementById('dogName');
    const dogBreedInput = document.getElementById('dogBreed');
    const dogImageInput = document.getElementById('dogImage');

    const displayDogs = () => {
        dogList.innerHTML = ''; // Clear current list
        dogs.forEach((dog, index) => {
            const dogElement = document.createElement('div');
            dogElement.className = 'dog';
            dogElement.innerHTML = `
                <img src="${dog.image}" alt="${dog.name}">
                <div class="dog-info">
                    <h3>${dog.name}</h3>
                    <p>Breed: ${dog.breed}</p>
                    <button onclick="removeDog(${index})">Remove</button>
                </div>
            `;
            dogList.appendChild(dogElement);
        });
    };

    window.removeDog = (index) => {
        dogs = dogs.filter((_, dogIndex) => dogIndex !== index);
        displayDogs(); // Update the list after removal
    };

    dogForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally
        const newDog = {
            name: dogNameInput.value,
            breed: dogBreedInput.value,
            image: dogImageInput.value
        };
        dogs.push(newDog);
        displayDogs(); // Update the list with the new dog
        dogForm.reset(); // Reset the form fields
    });

    displayDogs(); // Initial display of dogs
});
