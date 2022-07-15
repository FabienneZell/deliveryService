let mealArray = [
    {
      name: 'Pizzabrötchen',
      price: '4.50€',
    },
    {
      name: 'Salat',
      price: '4.50€',
    },
  ];

  // burger menu anzeigen
function showMenu() {
    document.getElementById('overlay-menu').classList.add('show-overlay-menu');
  }
  
  // burger menu schließen
  function closeMenu() {
    document.getElementById('overlay-menu').classList.remove('show-overlay-menu');
  }