const QUESTIONS = [ //event will pull 4 random indexes out - 1 will be correct
                    //each question will be linked to an image in the images folder
    {
        question: 'I would like to go to the airport',        
        correctAnswer: "Wǒ xiǎng yào qù fēijī chǎng - 我想要去飞机场",
        questionImage: 'airport.jpg'
        //answers: 
    },

    {
        question: 'I would like to go to the train station',
        correctAnswer: "Wǒ xiǎng yào qù huǒchē zhàn - 我想要去火车站",
        questionImage: 'train-station.jpg'
    },

    {
        question: 'Do you know where I can find a taxi rank?',
        correctAnswer: "Nǐ zhīdào chūzū chē zhàn zài nà'er？ - 你知道出租车站在那儿?", 
        questionImage: 'taxi.jpg'
    },

    {
        question: 'Do you know where I can find a cheap hotel?',
        correctAnswer: "Nǐ zhīdào zài nà'er wǒ kěyǐ zhǎo piányí bīnguǎn ma?- 你知道在那儿我可以找便宜宾馆吗？",
        questionImage: 'hometown.jpg'
    },

    {
        question: 'I would like to go here. Which bus do I need?',
        correctAnswer: "Wǒ xiǎng yào qù zhè'er. Wǒ xūyào nǎ gōnggòng qìchē ma? - 我想要去这儿。我需要哪公共汽车吗？",
        questionImage: 'which-bus.jpg'
    },

    {
        question: 'Where can I buy a train ticket?',
        correctAnswer: "Wǒ kěyǐ mǎi huǒchē piào zài nǎ'er? - 我可以买火车票在哪儿?",
        questionImage: 'train-ticket.jpg'
    },

    {
        question: 'Where am I?',
        correctAnswer: "Wǒ jiù zài nǎ'er? - 我就在哪儿?",
        questionImage: 'lost.jpg'
    },

    {
        question: 'Where are you from?',
        correctAnswer: "Nǐ de zhōngguó dìfāng shénme? - 你的中国地方什么？",
        questionImage: 'where-from.jpg'
    },

    {
        question: 'Sorry, I don’t speak Chinese.',
        correctAnswer: "Duìbùqǐ, wǒ bù huì shuō hànyǔ - 对不起，我不会说汉语",
        questionImage: 'chinese-lang.jpg'
    },

    {
        question: 'How much does this cost?',
        correctAnswer: "Duōshǎo qián? - 多少钱？",
        questionImage: 'money.jpg'
    },

    {
        question: 'Do you know where is a good restaurant?',
        correctAnswer: "Nǐ zhīdào zài nǎ'er yīgè hǎo fàndiàn ma? - 你知道在哪儿一个好饭店吗？",
        questionImage: 'restaurant.jpg'
    },

    {
        question: 'I would like a bottle of beer',
        correctAnswer: "Wǒ xiǎng yào yī píng píjiǔ - 我想要一瓶啤酒",
        questionImage: 'beer.jpg'
    },

    {
        question: 'I would like a glass of wine',
        correctAnswer: "Wǒ xiǎng yào yībēi pútáojiǔ - 我想要一杯葡萄酒",
        questionImage: 'wine.jpg'
    },

    {
        question: 'Where is the hospital?',
        correctAnswer: "Yīyuàn zài nǎlǐ? - 医院在哪里？",
        questionImage: 'hospital.jpeg'
    },

    {
        question: 'Where is the subway?',
        correctAnswer: "Dìtiě zài nǎ'er? - 地铁在哪儿？",
        questionImage: 'subway.jpg'
    },

    {
        question: 'I would like a cup of coffee',
        correctAnswer: "Wǒ xiǎng yào yībēi kāfēi - 我想要一杯咖啡",
        questionImage: 'coffee.jpeg'
    },

    {
        question: 'I would like a cup of tea',
        correctAnswer: "Wǒ xiǎng yào yībēi chá - 我想要一杯茶",
        questionImage: 'tea.jpg'
    },

    {
        question: 'I feel unwell',
        correctAnswer: "Wǒ gǎnjué bú shūfú - 我感觉不舒服",
        questionImage: 'sick.jpg'
    },

    {
        question: 'Where can I buy a SIM card?',
        correctAnswer: "Wǒ kěyǐ mǎi shǒujī kǎ zài nǎ'er? -我可以买手机卡在哪儿？",
        questionImage: 'sim-card.jpg'
    },

    {
        question: 'Could you write that for me?',
        correctAnswer: "Nǐ néng wéi wǒ xiě ma? - 你能为我写那个吗？",
        questionImage: 'language.jpg'
    },

    {
        question: 'Excuse me, I do not eat meat',
        correctAnswer: "Qǐngwèn, wǒ bù chī ròu - 请问，我不吃肉",
        questionImage: 'veggiefood.jpeg'
    },

    {
        question: 'I would like to go to the museum',
        correctAnswer: "Wǒ xiǎng yào qù bówùyuàn - 我想要去博物院",
        questionImage: 'museum.jpg'
    },

    {
        question: 'Do you know where I can buy some souvenirs?',
        correctAnswer: "Nǐ zhīdào wǒ zài nǎlǐ kěyǐ mǎi dào jìniànpǐn ma? - 你知道我在哪里可以买到纪念品吗？",
        questionImage: 'souvenir.jpg'
    },

    {
        question: 'Where is the police station?',
        correctAnswer: "Jǐngchá jú zài nǎlǐ? - 警察局在哪里?",
        questionImage: 'police.jpeg'
    },
];
