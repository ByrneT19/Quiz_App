//Where does the QUESTIONS.questionNumber has defined? I couldn't find the questionNumber key in the QUESTIONS object.//
const QUESTIONS = [ 
    {//1
        question: 'I would like to go to the airport?',  
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

    {//2
        question: 'I would like to go to the train station?',
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
        correctAnswer: "Wǒ jiù zài nǎ'er? - 我就在哪儿?",
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
];
