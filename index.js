let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const gener = document.querySelector('#genre');
    const year = document.querySelector('#year');
    const language = document.querySelector('#language');
    const ranting = document.querySelector('#ranting');

    var GenerValue = gener.options[gener.selectedIndex].value;
    var YearValue = year.options[year.selectedIndex].value;
    var LanguageValue = language.options[language.selectedIndex].value;
    var RantingValue = ranting.options[ranting.selectedIndex].value;


    const data = fetch('data.json')
        .then(response => response.json())
        .then((json) => {
            var item = []
            for (var g in json) {
                const type = json[g].genres
                const language = json[g].original_language
                const release = json[g].release_date.slice(0, 4)
                if (release === YearValue || language === LanguageValue || type[0] === GenerValue) {
                    item.push(json[g])
                }
            }
            for (let put = 0; put < item.length; put++) {
                for (var a in item) {
                    PutTitle.innerText = item[a].title
                    PutType.innerText = item[a].certification
                    PutMovieType.innerText = json[0].genres.join(', ')
                    PutYear.innerText = item[a].release_date.slice(0, 4)
                    PutMoviePlayTime.innerHTML = timecal()
                    PutImage.src = `https://image.tmdb.org/t/p/w500${item[a].poster_path}`
                    
                    function timecal() {
                        const totalMinutes = item[a].runtime;
                        const hours = Math.floor(totalMinutes / 60); // 1
                        const minutes = totalMinutes % 60; // 46
                        const formattedTime = `${hours}h ${minutes}min`;
                        return formattedTime;
                    }

                }
            }


        })
});


// puting place gatting
var PutTitle = document.getElementById('title')
var PutImage = document.getElementById('image')
var PutType = document.getElementById('type')
var PutMovieType = document.getElementById('movietype')
var PutYear = document.getElementById('YEAR')
var PutMoviePlayTime = document.getElementById('movieplaytime')



var PuttingDataInTable = document.getElementById("PutData");