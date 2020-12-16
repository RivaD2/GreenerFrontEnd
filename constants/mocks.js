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
      id: 'plant 1',
      name: 'Plant 1',
      tags: ['plants', 'everything'],
      count: 147,
      status: 'happy',
      image: require('../assets/icons/plants.png')
    },
    {
      id: 'plants 2',
      name: 'Plant 2',
      tags: ['plants' , 'everything'],
      count: 147,
      status: 'happy',
      image: require('../assets/icons/plants.png')
    },
    {
      id: 'plants 3',
      name: 'Plant 3',
      tags: ['plants' , 'everything'],
      count: 147,
      status: 'happy',
      image: require('../assets/icons/plants.png')
    } ,
    {
      id: 'seeds',
      name: 'Seeds type 1',
      tags: ['shop' , 'everything'],
      count: 16,
      image: require('../assets/icons/seeds.png')
    } ,
    {
      id: 'seeds',
      name: 'Seeds type 2',
      tags: ['shop' , 'everything'],
      count: 16,
      image: require('../assets/icons/seeds.png')
    } ,
    {
      id: 'seeds',
      name: 'Seeds type 3',
      tags: ['shop', 'everything'],
      count: 16,
      image: require('../assets/icons/seeds.png')
    } ,
    {
      id: 'seeds',
      name: 'Seeds type 4',
      tags: ['shop' , 'everything'],
      count: 16,
      image: require('../assets/icons/seeds.png')
    } ,
    {
      id: 'seeds',
      name: 'Seeds type 5',
      tags: ['shop' , 'everything'],
      count: 16,
      image: require('../assets/icons/seeds.png')
    } ,
    {
      id: 'bumpers',
      name: 'Bumpers',
      tags: ['minigames', 'everything' ],
      count: 16,
      image: require('../assets/icons/seeds.png')
    }
  ];

  const categories2 = [
   
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
    username: 'Gen',
    location: 'Seattle',
    email: 'test@test.com',
    avatar: require('../assets/images/avatar.png'),
    budget: 5000,
    funds: 5000,
    plants: 6,
    monthly_cap: 7000,
    notifications: true,
    newsletter: false,
  };
  
  export {
    categories,
    explore,
    products,
    profile,
    my_plants,
    categories2
  }