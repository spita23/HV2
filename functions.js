function loadQuestions() {
    let questions = JSON.parse(localStorage.getItem('questions')) || [
        { category: '6', subcategory: 'Tónlist', difficulty: '2', quality: '2', question: 'Hvaða hljómsveit gerði lagið "Rangur maður"', answer: 'Sólstrandargæjarnir' },
        { category: '6', subcategory: 'Tónlist', difficulty: '2', quality: '', question: 'Hvaða hljómsveit kvað "Á hverjum degi beiglan þurfti bensín, rúblunum fleygði í kerlingu sem brosti"', answer: 'Sniglabandið' },
        { category: '6', subcategory: 'Tónlist', difficulty: '2', quality: '', question: 'Hver kvað "Smíða skútu, skerpi skauta, bý til þrumuost og grauta, haltu kjafti"', answer: 'Bjartmar Guðlaugsson' },
        { category: '6', subcategory: 'Tónlist', difficulty: '1', quality: '', question: 'Hvaða íslenska hljómsveit gerði lagið "So Alone"', answer: 'Bang Gang' },
        { category: '6', subcategory: 'Tónlist', difficulty: '1', quality: '3', question: 'Hvaða hljómsveit gerði lagið "Sehnsucht"', answer: 'Rammstein' },
        { category: '6', subcategory: 'Tónlist', difficulty: '3', quality: '2', question: 'Hvaða hljómsveit gerði lagið "Trans Europe Express"', answer: 'Kraftwerk' },
        { category: '6', subcategory: 'Tónlist', difficulty: '2', quality: '2', question: 'Hvaða hljómsveit gerði lagið "Hotel California"', answer: 'Eagles' },
        { category: '6', subcategory: 'Tónlist', difficulty: '3', quality: '', question: 'Hver sönglaði um "The Black Rider"', answer: 'Tom Waits' },
        { category: '6', subcategory: 'Tónlist', difficulty: '3', quality: '', question: 'Hvaða hljómsveit gerði lagið "Running Free"', answer: 'Iron Maiden' },
        { category: '6', subcategory: 'Tónlist', difficulty: '3', quality: '', question: 'Á hvaða diski Radiohead er lagið "Karma Police" að finna', answer: 'Ok Computer' },
        { category: '6', subcategory: 'Tónlist', difficulty: '3', quality: '', question: 'Á hvaða diski Propellerheads er lagið "Take California" að finna', answer: 'DECKSANDDRUMSANDROCKANDROLL' },
        { category: '6', subcategory: 'Tónlist', difficulty: '1', quality: '2', question: 'Hvaða hljómsveit gerði lagið "Karma Police"', answer: 'Radiohead' },
        { category: '6', subcategory: 'Tónlist', difficulty: '1', quality: '', question: 'Hvaða hljómsveit gerði lagið "Hello, I love you"', answer: 'The Doors' },
        { category: '6', subcategory: 'Tónlist', difficulty: '3', quality: '', question: 'Hvaða lag byrjar svona "Didn\'t know what time it was the light were low low low"', answer: 'Starman' }
    ];
    return questions;
}

function getCategory(num) {
    const categories = {
        '1': 'Almenn kunnátta',
        '2': 'Náttúra og vísindi',
        '3': 'Bókmenntir og listir',
        '4': 'Saga',
        '5': 'Landafræði',
        '6': 'Skemmtun og afþreying',
        '7': 'Íþróttir og tómstundir'
    };
    return categories[num] || 'Óþekkt';
}

function getDifficulty(num) {
    const difficulties = {
        '1': 'Létt',
        '2': 'Meðal',
        '3': 'Erfið'
    };
    return difficulties[num] || 'Óþekkt';
}