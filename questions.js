//Where does the QUESTIONS.questionNumber has defined? I couldn't find the questionNumber key in the QUESTIONS object.//
const QUESTIONS = [ 
    questionNumber1 = {//1
        question: 'I would like to go to the airport',  
        answers: [  
            "Wǒ xiǎng yào qù huǒchē zhàn - 我想要去火车站",
            "Wǒ xiǎng yào qù fēijī chǎng - 我想要去飞机场",
            "Nǐ de zhōngguó dìfāng shénme? - 你的中国地方什么？",
            "Wǒ xiǎng yào yībēi pútáojiǔ - 我想要一杯葡萄酒"
            ],
        correctAnswer: "Wǒ xiǎng yào qù fēijī chǎng - 我想要去飞机场",
        questionImage: 'airport.jpg',
        alt: 'An image of a plane landing'
    },

    questionNumber2 = {//2
        question: 'I would like to go to the train station',
        answers: [
            "Wǒ xiǎng yào qù huǒchē zhàn - 我想要去火车站",
            "Nǐ zhīdào chūzū chē zhàn zài nà'er？ - 你知道出租车站在那儿?",
            "Duìbùqǐ, wǒ bù huì shuō hànyǔ - 对不起，我不会说汉语",
            "Wǒ xiǎng yào qù zhè'er. Wǒ xūyào nǎ gōnggòng qìchē ma? - 我想要去这儿。我需要哪公共汽车吗？"
            ],
        correctAnswer: "Wǒ xiǎng yào qù huǒchē zhàn - 我想要去火车站",
        questionImage: 'train-station.jpg',
        alt: 'An image of the exteriror of a Chinese train station'
    },

    {//3
        question: 'Do you know where I can find a taxi rank?',
        answers: [
            "Wǒ xiǎng yào qù fēijī chǎng - 我想要去飞机场",
            "Wǒ xiǎng yào yībēi pútáojiǔ - 我想要一杯葡萄酒",
            "Nǐ zhīdào chūzū chē zhàn zài nà'er？ - 你知道出租车站在那儿?",
            "Wǒ xiǎng yào qù zhè'er. Wǒ xūyào nǎ gōnggòng qìchē ma? - 我想要去这儿。我需要哪公共汽车吗？"
        ],
        correctAnswer: "Nǐ zhīdào chūzū chē zhàn zài nà'er？ - 你知道出租车站在那儿?",
        questionImage: 'taxi.jpg',
        alt: 'An image of a taxi at a junction'
    },

    {//4
        question: 'Do you know where I can find a cheap hotel?',
        answers: [
            "Nǐ zhīdào wǒ zài nǎlǐ kěyǐ mǎi dào jìniànpǐn ma? - 你知道我在哪里可以买到纪念品吗？",
            "Nǐ zhīdào zài nà'er wǒ kěyǐ zhǎo piányí bīnguǎn ma?- 你知道在那儿我可以找便宜宾馆吗？",
            "Nǐ néng wéi wǒ xiě ma? - 你能为我写那个吗？",
            "Wǒ jiù zài nǎ'er? - 我就在哪儿?"
        ],
        correctAnswer: "Nǐ zhīdào zài nà'er wǒ kěyǐ zhǎo piányí bīnguǎn ma?- 你知道在那儿我可以找便宜宾馆吗？",
        questionImage: 'hometown.jpeg',
        alt: 'An image of a Chinese town building'
    },

    {//5
        question: 'I would like to go here. Which bus do I need?',
        answers: [
            "Nǐ néng wéi wǒ xiě ma? - 你能为我写那个吗？",
            "Qǐngwèn, wǒ bù chī ròu - 请问，我不吃肉",
            "Wǒ xiǎng yào qù bówùyuàn - 我想要去博物院",
            "Wǒ xiǎng yào qù zhè'er. Wǒ xūyào nǎ gōnggòng qìchē ma? - 我想要去这儿。我需要哪公共汽车吗？"
        ],
        correctAnswer: "Wǒ xiǎng yào qù zhè'er. Wǒ xūyào nǎ gōnggòng qìchē ma? - 我想要去这儿。我需要哪公共汽车吗？",
        questionImage: 'which-bus.jpg',
        alt: 'An image of a person pointing to a place on a map'
    },

    {//6
        question: 'Where can I buy a train ticket?',
        answers: [
            "Wǒ kěyǐ mǎi huǒchē piào zài nǎ'er? - 我可以买火车票在哪儿?",
            "Wǒ kěyǐ mǎi shǒujī kǎ zài nǎ'er? -我可以买手机卡在哪儿？",
            "Duōshǎo qián? - 多少钱？",
            "Wǒ gǎnjué bú shūfú - 我感觉不舒服"
        ],
        correctAnswer: "Wǒ kěyǐ mǎi huǒchē piào zài nǎ'er? - 我可以买火车票在哪儿?",
        questionImage: 'train-ticket.jpg',
        alt: 'A picture of the main entrance to a Chinese train station ticket hall'
    },

    {//7
        question: 'Where am I?',
        answers: [
            "Jǐngchá jú zài nǎlǐ? - 警察局在哪里?",
            "Yīyuàn zài nǎlǐ? - 医院在哪里？",
            "Wǒ jiù zài nǎ'er? - 我就在哪儿?",
            "Nǐ zhīdào wǒ zài nǎlǐ kěyǐ mǎi dào jìniànpǐn ma? - 你知道我在哪里可以买到纪念品吗？"
        ],
        correctAnswer: "Wǒ kěyǐ mǎi huǒchē piào zài nǎ'er? - 我可以买火车票在哪儿?",
        questionImage: 'lost.jpeg',
        alt: 'An image of a person holding a compass'
    },

    {//8
        question: 'Where are you from?',
        answers: [
            "Nǐ zhīdào zài nǎ'er yīgè hǎo fàndiàn ma? - 你知道在哪儿一个好饭店吗？",
            "Nǐ de zhōngguó dìfāng shénme? - 你的中国地方什么？",
            "Wǒ xiǎng yào qù huǒchē zhàn - 我想要去火车站",
            "Duìbùqǐ, wǒ bù huì shuō hànyǔ - 对不起，我不会说汉语"
        ],
        correctAnswer: "Nǐ de zhōngguó dìfāng shénme? - 你的中国地方什么？",
        questionImage: 'where-from.jpg',
        alt: 'An image of a person pointing to a place on a Chinese map'
    },

    {//9
        question: 'Sorry, I don’t speak Chinese.',
        answers: [
            "Duìbùqǐ, wǒ bù huì shuō hànyǔ - 对不起，我不会说汉语",
            "Nǐ de zhōngguó dìfāng shénme? - 你的中国地方什么？",
            "Wǒ xiǎng yào qù zhè'er. Wǒ xūyào nǎ gōnggòng qìchē ma? - 我想要去这儿。我需要哪公共汽车吗？",
            "Wǒ xiǎng yào qù fēijī chǎng - 我想要去飞机场"
        ],
        correctAnswer: "Duìbùqǐ, wǒ bù huì shuō hànyǔ - 对不起，我不会说汉语",
        questionImage: 'chinese-lang.jpg',
        alt: 'An image of a Chinese classical text'
    },

    {//10
        question: 'How much does this cost?',
        answers: [
            "Wǒ xiǎng yào qù huǒchē zhàn - 我想要去火车站",
            "Nǐ zhīdào zài nǎ'er yīgè hǎo fàndiàn ma? - 你知道在哪儿一个好饭店吗？",
            "Duōshǎo qián? - 多少钱？",
            "Wǒ xiǎng yào yībēi chá - 我想要一杯茶"
        ],
        correctAnswer: "Duōshǎo qián? - 多少钱？",
        questionImage: 'money.jpg',
        alt: 'Chinese money'
    },

    {//11
        question: 'Do you know where is a good restaurant?',
        answers: [
            "Wǒ xiǎng yào yī píng píjiǔ - 我想要一瓶啤酒",
            "Nǐ zhīdào zài nǎ'er yīgè hǎo fàndiàn ma? - 你知道在哪儿一个好饭店吗？",
            "Dìtiě zài nǎ'er? - 地铁在哪儿？",
            "Yīyuàn zài nǎlǐ? - 医院在哪里？"
        ],
        correctAnswer: "Nǐ zhīdào zài nǎ'er yīgè hǎo fàndiàn ma? - 你知道在哪儿一个好饭店吗？",
        questionImage: 'restaurant.jpg',
        alt: 'A picture of the interior of a Chinese restaurant'
    },

    {//12
        question: 'I would like a bottle of beer',
        answers: [
            "Nǐ zhīdào chūzū chē zhàn zài nà'er？ - 你知道出租车站在那儿?",
            "Wǒ xiǎng yào qù zhè'er. Wǒ xūyào nǎ gōnggòng qìchē ma? - 我想要去这儿。我需要哪公共汽车吗？",
            "Wǒ xiǎng yào qù huǒchē zhàn - 我想要去火车站",
            "Wǒ xiǎng yào yī píng píjiǔ - 我想要一瓶啤酒"
        ],
        correctAnswer: "Wǒ xiǎng yào yī píng píjiǔ - 我想要一瓶啤酒",
        questionImage: 'beer.jpg',
        alt: 'A picture of a glass of beer'
    },

    {//13
        question: 'I would like a glass of wine',
        answers: [
            "Wǒ xiǎng yào yībēi pútáojiǔ - 我想要一杯葡萄酒",
            "Wǒ xiǎng yào yībēi kāfēi - 我想要一杯咖啡",
            "Wǒ gǎnjué bú shūfú - 我感觉不舒服",
            "Wǒ kěyǐ mǎi shǒujī kǎ zài nǎ'er? -我可以买手机卡在哪儿？"
        ],
        correctAnswer: "Wǒ xiǎng yào yībēi pútáojiǔ - 我想要一杯葡萄酒",
        questionImage: 'wine.jpg',
        alt: 'A picture of a glass of wine'
    },

    {//14
        question: 'Where is the hospital?',
        answers: [
            "Wǒ xiǎng yào yī píng píjiǔ - 我想要一瓶啤酒",
            "Yīyuàn zài nǎlǐ? - 医院在哪里？",
            "Wǒ gǎnjué bú shūfú - 我感觉不舒服",
            "Wǒ xiǎng yào qù huǒchē zhàn - 我想要去火车站"
        ],
        correctAnswer: "Yīyuàn zài nǎlǐ? - 医院在哪里？",
        questionImage: 'hospital.jpeg',
        alt: 'A picture of a hospital operating theatre'
    },

    {//15
        question: 'Where is the subway?',
        answers: [
            "Dìtiě zài nǎ'er? - 地铁在哪儿？",
            "Duōshǎo qián? - 多少钱？",
            "Nǐ zhīdào zài nà'er wǒ kěyǐ zhǎo piányí bīnguǎn ma?- 你知道在那儿我可以找便宜宾馆吗？",
            "Nǐ zhīdào chūzū chē zhàn zài nà'er？ - 你知道出租车站在那儿?"
        ],
        correctAnswer: "Dìtiě zài nǎ'er? - 地铁在哪儿？",
        questionImage: 'subway.jpg',
        alt: 'A picture of a subway train'
    },

    {//16
        question: 'I would like a cup of coffee',
        answers: [
            "Duìbùqǐ, wǒ bù huì shuō hànyǔ - 对不起，我不会说汉语",
            "Wǒ xiǎng yào qù huǒchē zhàn - 我想要去火车站",
            "Wǒ xiǎng yào yībēi kāfēi - 我想要一杯咖啡",
            "Wǒ gǎnjué bú shūfú - 我感觉不舒服" 
        ],
        correctAnswer: "Wǒ xiǎng yào yībēi kāfēi - 我想要一杯咖啡",
        questionImage: 'coffee.jpeg',
        alt: 'An image of a cup of coffee'
    },

    {//17
        question: 'I would like a cup of tea',
        answers: [
            "Qǐngwèn, wǒ bù chī ròu - 请问，我不吃肉",
            "Nǐ zhīdào zài nǎ'er yīgè hǎo fàndiàn ma? - 你知道在哪儿一个好饭店吗？",
            "Wǒ gǎnjué bú shūfú - 我感觉不舒服",
            "Wǒ xiǎng yào yībēi chá - 我想要一杯茶"
        ],
        correctAnswer: "Wǒ xiǎng yào yībēi chá - 我想要一杯茶",
        questionImage: 'tea.jpg',
        alt: 'An image of a Chinese style tea set'
    },

    {//18
        question: 'I feel unwell',
        answers: [
            "Nǐ de zhōngguó dìfāng shénme? - 你的中国地方什么？",
            "Wǒ gǎnjué bú shūfú - 我感觉不舒服",
            "Jǐngchá jú zài nǎlǐ? - 警察局在哪里?",
            "Wǒ xiǎng yào qù bówùyuàn - 我想要去博物院",
        ],
        questionImage: 'sick.jpg',
        correctAnswer: "Wǒ gǎnjué bú shūfú - 我感觉不舒服",
        alt: 'An image of various medications'
    },

    {//19
        question: 'Where can I buy a SIM card?',
        answers: [
            "Wǒ xiǎng yào yībēi kāfēi - 我想要一杯咖啡",
            "Wǒ kěyǐ mǎi shǒujī kǎ zài nǎ'er? -我可以买手机卡在哪儿？",
            "Nǐ zhīdào zài nà'er wǒ kěyǐ zhǎo piányí bīnguǎn ma?- 你知道在那儿我可以找便宜宾馆吗？",
            "Qǐngwèn, wǒ bù chī ròu - 请问，我不吃肉"
        ],
        correctAnswer: "Wǒ kěyǐ mǎi shǒujī kǎ zài nǎ'er? -我可以买手机卡在哪儿？",
        questionImage: 'sim-card.jpg',
        alt: 'A picture of a SIM card'
    },

    {//20
        question: 'Could you write that for me?',
        answers: [
            "Duōshǎo qián? - 多少钱？",
            "Wǒ xiǎng yào qù fēijī chǎng - 我想要去飞机场",
            "Nǐ néng wéi wǒ xiě ma? - 你能为我写那个吗？",
            "Dìtiě zài nǎ'er? - 地铁在哪儿？"
        ],
        correctAnswer: "Nǐ néng wéi wǒ xiě ma? - 你能为我写那个吗？",
        questionImage: 'language.jpg',
        alt: 'An image of Chinese characters on an ornament'
    },

    {//21
        question: 'Excuse me, I do not eat meat',
        answers: [
            "Wǒ xiǎng yào qù bówùyuàn - 我想要去博物院",
            "Qǐngwèn, wǒ bù chī ròu - 请问，我不吃肉",
            "Wǒ xiǎng yào yībēi kāfēi - 我想要一杯咖啡",
            "Duìbùqǐ, wǒ bù huì shuō hànyǔ - 对不起，我不会说汉语"
        ],
        correctAnswer: "Qǐngwèn, wǒ bù chī ròu - 请问，我不吃肉",
        questionImage: 'veggiefood.jpeg',
        alt: 'An image of Chinese vegetarian food'
    },

    {//22
        question: 'I would like to go to the museum',
        answers: [
            "Wǒ xiǎng yào qù bówùyuàn - 我想要去博物院",
            "Wǒ xiǎng yào qù fēijī chǎng - 我想要去飞机场",
            "Nǐ zhīdào zài nǎ'er yīgè hǎo fàndiàn ma? - 你知道在哪儿一个好饭店吗？",
            "Wǒ xiǎng yào qù huǒchē zhàn - 我想要去火车站"
        ],
        correctAnswer: "Wǒ xiǎng yào qù bówùyuàn - 我想要去博物院",
        questionImage: 'museum.jpg',
        alt: 'A picture of an exhibit within a Chinese museum'
    },

    {//23
        question: 'Do you know where I can buy some souvenirs?',
        answers: [
            "Dìtiě zài nǎ'er? - 地铁在哪儿？",
            "Wǒ kěyǐ mǎi shǒujī kǎ zài nǎ'er? -我可以买手机卡在哪儿？",
            "Nǐ zhīdào wǒ zài nǎlǐ kěyǐ mǎi dào jìniànpǐn ma? - 你知道我在哪里可以买到纪念品吗？",
            "Nǐ néng wéi wǒ xiě ma? - 你能为我写那个吗？"
        ],
        correctAnswer: "Nǐ zhīdào wǒ zài nǎlǐ kěyǐ mǎi dào jìniànpǐn ma? - 你知道我在哪里可以买到纪念品吗？",
        questionImage: 'souvenir.jpg',
        alt: 'A display of Chinese trinkets in a shop'
    },

    {//24
        question: 'Where is the police station?',
        answers: [
            "Nǐ zhīdào wǒ zài nǎlǐ kěyǐ mǎi dào jìniànpǐn ma? - 你知道我在哪里可以买到纪念品吗？",
            "Nǐ néng wéi wǒ xiě ma? - 你能为我写那个吗？",
            "Qǐngwèn, wǒ bù chī ròu - 请问，我不吃肉",
            "Jǐngchá jú zài nǎlǐ? - 警察局在哪里?"
        ],
        correctAnswer: "Jǐngchá jú zài nǎlǐ? - 警察局在哪里?",
        questionImage: 'police.jpeg',
        alt: 'An image of a police car'
    },
];
