let btnGen = document.querySelector('button');

btnGen.addEventListener('click', () => {
    let info = Faker.Helpers.createCard();

    let {name, email, address:{city,}, phone} = info;

    document.querySelector('#name').value = name;
    document.querySelector('#email').value = email;
    document.querySelector('#city').value = city;
    document.querySelector('#phone').value = phone;


});