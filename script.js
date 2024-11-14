const carsArr = [
    { brand: "Ford", model: "Mustang", year: 2022, used: 'no' },
    { brand: "Ford", model: "Mustang1", year: 2022, used: 'no' },
    { brand: "Ford", model: "Mustang2", year: 2022, used: 'no' },
    { brand: "Ford", model: "F-150", year: 2023, used: 'yes' },
    { brand: "BMW", model: "X5", year: 2022, used: 'no' },
    { brand: "Mazda", model: "CX-5", year: 2022, used: 'no' },
    { brand: "Toyota", model: "Camry", year: 2022, used: 'no' },
    { brand: "Toyota", model: "RAV4", year: 2023, used: 'yes' }
];

let cars = document.getElementById('cars');
let selectedFilters = { brand: null, year: null, used: null };

const showCars = (arr) => {
    cars.innerHTML = '';
    arr.forEach((item) => {
        let li = document.createElement('li');
        li.innerText = `${item.brand} - ${item.model} - ${item.year} - ${item.used}`;
        cars.appendChild(li);
    });
};

const filterCars = () => {
    let filteredCars = carsArr.filter((car) => {
        return (!selectedFilters.brand || car.brand === selectedFilters.brand) &&
               (!selectedFilters.year || car.year == selectedFilters.year) &&
               (!selectedFilters.used || car.used === selectedFilters.used);
    });
    showCars(filteredCars);
};

document.querySelectorAll('#brandFilter span').forEach(span => {
    span.addEventListener('click', (ev) => {
        selectedFilters.brand = ev.target.dataset.brand;
        filterCars();
    });
});

document.querySelectorAll('#yearFilter span').forEach(span => {
    span.addEventListener('click', (ev) => {
        selectedFilters.year = ev.target.dataset.year;
        filterCars();
    });
});

document.querySelectorAll('#usedFilter span').forEach(span => {
    span.addEventListener('click', (ev) => {
        selectedFilters.used = ev.target.dataset.used;
        filterCars();
    });
});

showCars(carsArr);

