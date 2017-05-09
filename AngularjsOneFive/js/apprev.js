(function(){
  var app = angular.module('store',[]);

  var gem = {
    name: 'Dodecaedro',
    price: 2.95,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    canPurchase: false,
    soldOut: true
  }

  var gems = [
    {
      name: 'Dodecaedro',
      price: 2.95,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      images:[
        {
          full: 'public/img/hexagonalgem.gif',
          thumb: 'public/img/hexagonalgem.gif'
        }
      ],
      reviews: [
        {stars: 5, body: 'I love this product', author: 'alonso@gmail.com'},
        {stars: 5, body: 'I love this product', author: 'alonso@gmail.com'}
      ]
    },
    {
      name: 'Ruby',
      price: 3.95,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      images:[
        {
          full: 'public/img/ruby.jpg',
          thumb: 'public/img/ruby.jpg'
        }
      ],
      reviews: [
        {stars: 5, body: 'I love this product', author: 'alonso@gmail.com'},
        {stars: 5, body: 'I love this product', author: 'alonso@gmail.com'}
      ]
    },
    {
      name: 'Safiro',
      price: 4.95,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      images:[
        {
          full: 'public/img/sapphire.jpg',
          thumb: 'public/img/sapphire.jpg'
        }
      ],
      reviews: [
        {stars: 5, body: 'I love this product', author: 'alonso@gmail.com'},
        {stars: 5, body: 'I love this product', author: 'alonso@gmail.com'}
      ]
    }
  ];

  app.controller('StoreController',function(){
    this.products = gems;
  });

  app.controller('PanelController',function(){
    this.tab = 1;

    this.selectTab = function(setTab){
      this.tab = setTab;
    }

    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    }

  });

  app.controller('ReviewController',function(){
    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    }
  })

})();
