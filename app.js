const locations = [
  '🎭', '🎪', '🎢', '🏟️', '🏨',
  '🏤', '🏥', '🏭', '🏢', '🏣',
  '🏰', '🏬', '🏥', '🏦', '🏪'
]

const people = [
  {
    name: 'Jimbo',
    picture: '🤵',
    isHunter: false,
    location: ''
  },
  {
    name: 'Sammy',
    picture: '🙆‍♀️',
    isHunter: false,
    location: ''
  },
  {
    name: 'Michael',
    picture: '👷',
    isHunter: false,
    location: ''
  },
  {
    name: 'Robert',
    picture: '👷',
    isHunter: false,
    location: ''
  },
  {
    name: 'Terry',
    picture: '🤴',
    isHunter: false,
    location: '',
  },
  {
    name: 'Bill',
    picture: '🕵️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Marie',
    picture: '👩‍🍳',
    isHunter: false,
    location: '',
  },
  {
    name: 'Mykeal',
    picture: '💂',
    isHunter: false,
    location: '',
  },
  {
    name: 'Phil',
    picture: '🧜‍♂️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Wilson',
    picture: '🏐',
    isHunter: false,
    location: '',
  },
  {
    name: 'Wendy',
    picture: '👩‍⚕️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Jeremy',
    picture: '🦹',
    isHunter: false,
    location: '',
  },
  {
    name: 'Mary',
    picture: '👩‍⚖️',
    isHunter: false,
    location: '',
  }
]


function assignLocation() {
  people.forEach(person => {
    let randomNumber = Math.floor(Math.random() * locations.length)
    // console.log('Random Number', randomNumber);

    let randomLocation = locations[randomNumber]
    person.location = randomLocation
  });

  drawPeople()
}


function drawPeople() {
  let peopleString = ''

  locations.forEach(location => {
    const filteredArray = people.filter(p => p.location == location)
    const picArray = filteredArray.map(p => p.picture)
    console.log(picArray);

    let peopleInPlaces = document.getElementById(location)
    // @ts-ignore
    peopleInPlaces.innerText = picArray
  }
  );
}

function attackTheater() {
  console.log('Attack!');

  // locations.forEach(location => {
  //   const filteredArray = people.filter(p => p.location == location)
  //   const picArray = filteredArray.map(p => p.picture)

  let peopleAreBats = document.getElementById('🎭')
  peopleAreBats.innerText = ('🦇')





  // });

}


















assignLocation()
