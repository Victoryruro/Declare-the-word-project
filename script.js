let main =document.querySelector('main') ;
let button  = document.querySelector('button')
let scripture =document.querySelector('.scripture');
let verse = document.querySelector('.verse');
let typingIntro =document.querySelector('#typing') ;

// this is the scripture you can add more thank you
const wordBank =[
    {
        scripture:"Thy word is a lamp unto my feet, and a light unto my path",
        verse: "PSALMS 119 vs 105"
    },
    {
        scripture:"But the path of the just is as the shining light, that shineth more and more unto the perfect day",
        verse: "PROVERBS 4 vs 18"
    },
    {
        scripture:"The name of the LORD is a strong tower: the righteous runneth into it , and is safe",
        verse: "PROVERBS 18 vs 10"
    },
    {
        scripture:"The young lion do lack, and suffer hunger: but they that seek the LORD shall not want any good thing",
        verse: "PSALMS 34 vs 10"
    },
    {
        scripture:"Seek the LORD and his strength, seek his face continually.",
        verse: "1 CHRONICLES 16 vs 11"
    },
    {
        scripture:"And he said , My presence shall go with thee, and I will give thee rest.",
        verse: "EXODUS 3 vs 14"
    },
    {
        scripture:"Thou art my hiding place; thou shalt preserve me from trouble; thou shall compass me about with songs of deliverance",
        verse: "PSALMS 32 vs 7"
    },
    {
        scripture:"And the LORD , he it is that doth go before thee; he will be with thee, he will not fail thee, neither forsake thee: fear not, neither be dismayed ",
        verse: "DEUTERONOMY 31 vs 8"
    },
    {
        scripture:"Many are the afflictions of the righteous: but the LORD delivereth him out of them all",
        verse: "PSALMS 34 vs 19"
    },
    {
        scripture:"Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your request be made known unto God ",
        verse: "PHILIPPIANS 4 vs 6"
    },
    {
        scripture:"I sought the LORD, and he heard me, and delivered me from all my fears. " ,
        verse:"PSALMS 34 vs 4"

    },
    {
        scripture:"O send out thy light and thy truth: let them lead me; let them bring me unto thy holy hills, and to thy tabernacles" ,
        verse:"PSALMS 43 vs 3"

    },
    {
        scripture:"And having spoiled principalities and powers, he made a shew of them openly, triumphing over them in it." ,
        verse:"COLOSSIANS 2 vs 15"

    },
    {
        scripture:"For whosoever shall call upon the name of the Lord shall be saved." ,
        verse:"ROMANS 10 vs 13"

    },
    {
        scripture:"For ye are dead, and your life is hid with christ in God." ,
        verse:"COLOSSIANS 3 vs 3"

    },
    {
        scripture:"For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind." ,
        verse:"2 TIMOTHY 1 vs 7 "

    },
    {
        scripture: "If the Son therefore shall make you free, ye shall be free indeed ",
        verse:"JOHN 8 vs 36"

    },
    {
        scripture:"And this is life eternal, that they might know thee the only true God, and Jesus Christ, whom thou has sent.   " ,
        verse:"JOHN 17 vs 3"

    },
    {
        scripture:"For God is not the author of confusion, but of peace, as in all churches of the saints. " ,
        verse:"1 CORINTHIANS 14 vs 33"

    },
    {
        scripture:"The horse is prepared against the day of battle: but safety is of the LORD" ,
        verse:"PROVERBS 21 vs 30"

    },
    {
        scripture:"Let not your heart be troubled: Ye believe in God, believe also in me " ,
        verse:"JOHN 14 vs 1"

    },
    {
        scripture:"And ye shall know the truth, and the truth shall make you free. " ,
        verse:"JOHN 8 vs 32 "

    },
    {
        scripture:"But rather seek ye the kingdom of God; and all these things shall be added unto you. " ,
        verse:"LUKE 12 vs  31 "

    },
    {
        scripture:" Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me. " ,
        verse:"JOHN 14 vs 6"

    },
    {
        scripture:" Verily, verily, I say unto you, He that believeth on me, the works that I do shall he do also; and greater works than these shall he do; because I go unto my Father." ,
        verse:"JOHN 14 vs 12"

    },
    {
        scripture:" But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint." ,
        verse:"ISAIAH 40 vs 31"

    },
    {
        scripture:" But rather seek ye the kingdom of God; and all these things shall be added unto you." ,
        verse:"LUKE 12 vs 31"

    },
    {
        scripture:"For every one that asketh receiveth; and he that seeketh findeth; and to him that knocketh it shall be opened." ,
        verse:"LUKE 11 vs 10 "

    },
    {
        scripture:" And I have filled him with the spirit of God, in wisdom, and in understanding, and in knowledge, and in all manner of workmanship," ,
        verse:"EXODUS 31 vs 3"

    },
    {
        scripture:" There are many devices in a man's heart; nevertheless the counsel of the LORD, that shall stand. " ,
        verse:"PROVERBS 19 vs 21"

    },
    {
        scripture:" The name of the LORD is a strong tower: the righteous runneth into it, and is safe. " ,
        verse:"PROVERBS 18 vs 10"

    },
    {
        scripture:" Great peace have they which love thy law: and nothing shall offend them." ,
        verse:"PSALMS 119 vs 165"

    },
    {
        scripture:" For the law of the Spirit of life in Christ Jesus hath made me free from the law of sin and death. " ,
        verse:"ROMANS 8 vs 2"

    },
    {
        scripture:" He hath made every thing beautiful in his time: also he hath set the world in their heart, so that no man can find out the work that God maketh from the beginning to the end. " ,
        verse:"ECCLESIASTES 3 vs 11"

    },
    {
        scripture:"And he spake a parable unto them to this end, that men ought always to pray, and not to faint; " ,
        verse:"LUKE 18 vs 1 "

    },
    {
        scripture:" Those who do wickedly against the covenant he shall corrupt with flattery; but the people who know their God shall be strong, and carry out great exploits. " ,
        verse:"DANIEL 11 vs 32"

    },
    {
        scripture:" For in him we live, and move, and have our being; as certain also of your own poets have said, For we are also his offspring." ,
        verse:"ACTS 17 vs 28"

    },
    {
        scripture:" This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night, that thou mayest observe to do according to all that is written therein: for then thou shalt make thy way prosperous, and then thou shalt have good success." ,
        verse:"JOSHUA 1 vs 8"

    },
    {
        scripture:" And he shall be like a tree planted by the rivers of water, that bringeth forth his fruit in his season; his leaf also shall not wither; and whatsoever he doeth shall prosper. " ,
        verse:"PSALMS 1 vs 3" 

    },
    {
        scripture:" But his delight is in the law of the LORD; and in his law doth he meditate day and night." ,
        verse:"PSALMS 1 vs 2" 

    },
    {
        scripture:"The sacrifices of God are a broken spirit: a broken and a contrite heart, O God, thou wilt not despise." ,
        verse:"PSALMS 51 vs 17 "

    },
]

// this is to remove the typewriter intro element
let removeIntro = () =>{
    typingIntro.style.display='none';
}

// adding the scripture and verses to the main element
let adding= () =>{
    scripture.classList.add("biggertext");
    verse.classList.add("biggerverse");
    let randomVerse = Math.floor(Math.random() * wordBank.length);
    scripture.innerHTML = wordBank[randomVerse].scripture;
    verse.innerHTML = wordBank[randomVerse].verse;
    
    
    return randomVerse
}

//adding clickable button
button.addEventListener( "click" , function () {
    removeIntro()
    adding()
})
