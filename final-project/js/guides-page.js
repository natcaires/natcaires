const guideURL = 'json/river-guide.json';

fetch(guideURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const guides = jsonObject['guides'];
        
        for (let i = 0; i < guides.length; i++) {
            let card = document.createElement('div');
            let image = document.createElement('img');
            let text = document.createElement('div');
            let guideName = document.createElement('h4');
            let certify = document.createElement('p');
            let years = document.createElement('p');
            let email = document.createElement('p');
            let biography = document.createElement('p');

            card.classList.add('guide-card');
            text.classList.add('guide-content');
            image.classList.add('guide-img');
            guideName.classList.add('mainH4');
            certify.classList.add('guideP');
            years.classList.add('guideP');
            email.classList.add('guideP');
            biography.classList.add('guideP');

            image.setAttribute('src', 'images/'+guides[i].photo);
            image.setAttribute('alt', (guides[i].name));
            guideName.textContent = guides[i].name;
            certify.textContent = guides[i].certification;
            years.textContent = guides[i].years;
            email.textContent = guides[i].email;
            biography.textContent = guides[i].biography;

            text.appendChild(guideName);
            text.appendChild(certify);
            text.appendChild(years);
            text.appendChild(email);
            text.appendChild(biography);
            card.appendChild(image);
            card.appendChild(text);

            document.querySelector('section.guide-section').appendChild(card);

        }
    });