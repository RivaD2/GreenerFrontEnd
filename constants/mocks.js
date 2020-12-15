const my_plants = [
    {
      id: 'plant 1',
      name: 'Plants',
      tags: ['products', 'inspirations'],
      count: 147,
      image: require('../assets/icons/plants.png')
    },
    {
      id: 'plants 2',
      name: 'Plants',
      tags: ['products', 'inspirations'],
      count: 147,
      image: require('../assets/icons/plants.png')
    },
    {
      id: 'plants 3',
      name: 'Plants',
      tags: ['products', 'inspirations'],
      count: 147,
      image: require('../assets/icons/plants.png')
    },
    {
      id: 'plants 4',
      name: 'Plants',
      tags: ['products', 'inspirations'],
      count: 147,
      image: require('../assets/icons/plants.png')
    },
    {
      id: 'seeds',
      name: 'Seeds',
      tags: ['products', 'shop'],
      count: 16,
      image: require('../assets/icons/seeds.png')
    },
    {
      id: 'flowers',
      name: 'Flowers',
      tags: ['products', 'inspirations'],
      count: 68,
      image: require('../assets/icons/flowers.png')
    },
    {
      id: 'sprayers',
      name: 'Sprayers',
      tags: ['products', 'shop'],
      count: 17,
      image: require('../assets/icons/sprayers.png')
    },
    {
      id: 'pots',
      name: 'Pots',
      tags: ['products', 'shop'],
      count: 47,
      image: require('../assets/icons/pots.png')
    },
    {
      id: 'fertilizers',
      name: 'fertilizers',
      tags: ['products', 'shop'],
      count: 47,
      image: require('../assets/icons/fertilizers.png')
    },
  ];

  const categories = [
    {
      id: 'plant2 1',
      name: 'Plant 1',
      tags: ['products', 'inspirations'],
      count: 147,
      image: require('../assets/icons/plants.png')
    },
    {
      id: 'plants 2',
      name: 'Plant 2',
      tags: ['products', 'inspirations', 'plant'],
      count: 147,
      image: require('../assets/icons/plants.png')
    },
    {
      id: 'plants 3',
      name: 'Plant 3',
      tags: ['products', 'inspirations', 'plant'],
      count: 147,
      image: require('../assets/icons/plants.png')
    },
    {
      id: 'plants 4',
      name: 'Plant 4',
      tags: ['products', 'inspirations', 'plant'],
      count: 147,
      image: require('../assets/icons/plants.png')
    }
  ];
  
  const products = [
    {
      id: 1, 
      name: '16 Best Plants That Thrive In Your Bedroom',
      description: 'Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.',
      tags: ['Interior', '27 m²', 'Ideas'],
      images: [
        require('../assets/images/plants_1.png'),
        require('../assets/images/plants_2.png'),
        require('../assets/images/plants_3.png'),
        // showing only 3 images, show +6 for the rest
        require('../assets/images/plants_1.png'),
        require('../assets/images/plants_2.png'),
        require('../assets/images/plants_3.png'),
        require('../assets/images/plants_1.png'),
        require('../assets/images/plants_2.png'),
        require('../assets/images/plants_3.png'),
      ]
    }
  ];
  
  const explore = [
    // images
    require('../assets/images/explore_1.png'),
    require('../assets/images/explore_2.png'),
    require('../assets/images/explore_3.png'),
    require('../assets/images/explore_4.png'),
    require('../assets/images/explore_5.png'),
    require('../assets/images/explore_6.png'),
  ];
  
  const profile = {
    username: 'Kriss',
    location: 'Asia',
    email: 'kriss@kriss.com',
    avatar: require('../assets/images/avatar.png'),
    budget: 5000,
    monthly_cap: 7000,
    notifications: true,
    newsletter: false,
  };
  
  export {
    categories,
    explore,
    products,
    profile,
    my_plants
  }