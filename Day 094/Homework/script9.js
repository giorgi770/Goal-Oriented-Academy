const cars = [
    { brand: 'BMW', model: 'F90' },
    { brand: 'Honda', model: 'Hrv' },
    { brand: 'Mitsubishi', model: 'Pajero 2' }
  ];
  
  const bmwCars = cars.filter(car => car.brand === 'BMW');
  console.log(bmwCars); // [{ brand: 'BMW', model: 'F90' }]
  