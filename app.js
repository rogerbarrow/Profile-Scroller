const data = [
  {
  name: 'John doe',
  age: 32,
  gender: 'male',
  lookingfor: 'female',
  location: 'Boston MA',
  image: 'https://randomuser.me/api/portraits/men/22.jpg'

},
{
  name: 'Jen Smith',
  age: 22,
  gender: 'Female',
  lookingfor: 'female',
  location: 'Miami FL',
  image: 'https://randomuser.me/api/portraits/women/22.jpg'

},

{
  name: 'Stacy',
  age: 32,
  gender: 'female',
  lookingfor: 'female',
  location: 'Minneapoilis, MN',
  image: 'https://randomuser.me/api/portraits/women/52.jpg'

},

];

const profiles = profileIterator(data);

nextProfile();

//next Event

document.getElementById('next').addEventListener('click', nextProfile);

// next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;
  
  if(currentProfile !== undefined) {
  document.getElementById('profileDisplay').innerHTML = ` <ul class="list-group">
    <li class="list-group-item">Name: ${currentProfile.name}</li>
    <li class="list-group-item">Age: ${currentProfile.age}</li>
    <li class="list-group-item">Location: ${currentProfile.location}</li>
    <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor} </li>
  
    </ul>
  `;
document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
} else {
// no more profiles
window.location.reload();
}

}

// Profile Iterator
function profileIterator(profiles) {
  
  let nextIndex = 0;

return {
  next: function() {
    return nextIndex < profiles.length ? {value: profiles [nextIndex++], done: false } :
    {done: true }
  }
};

}
