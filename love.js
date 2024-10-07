const messages = [
"Safeena Baby, you already know you light up my world! 💖, Every moment with you feels like I’m living in a dream!, You’re my everything, and I’m so lucky to call you mine!",

"Being with you makes my heart race in the best way! 😘, I still can’t believe you’re mine!, Tumse door rehna bilkul nahi chahata, bas tumhare saath hoon toh sab kuch perfect lagta hai! ❤️",

"Har pal tumhare saath jaadu jaisa lagta hai, Safeena! ✨, Tum meri girlfriend nahi, meri duniya ho!, Tumhara pyaar meri zindagi ko complete karta hai!",

"Safeena, the way you love me is everything I ever wanted! 💫, You make me feel like the luckiest guy on earth!, Tum meri jaan ho, aur main tumhe hamesha pyaar karunga! 💕",

"Every time I see you smile, it’s like falling in love with you all over again! 😍, You're not just my girlfriend, you’re my soulmate, Safeena Baby!, tumse zyada pyaari duniya mein koi ho hi nahi sakti!",

"Tumhari muskaan aur woh pyaari baatein, jaan!, Bas yeh sab sunne ke liye jeeta hoon! 😊, Tumne meri zindagi ko itna khoobsurat bana diya hai ki main kabhi soch bhi nahi sakta tha!",

"I love how I can just be myself with you! 💕, Tum mere liye sab kuch ho, aur main tumhare saath hamesha waise hi rahna chahta hoon jaisa ab hoon!",

"Tumhara pyaar mere liye sabse bada gift hai! 🌹, Tum jo khush ho, toh main khush hoon!, Kabhi kabhi sochta hoon ki main tumhare bina kya karta!",

"Safeena, you’re my best friend, my love, and the one I want to be with forever! 🥰, With you, I feel complete!, Tumse baat karke sab kuch theek lagta hai!",

"Baby, you are my forever! 👑, Har din tumhare saath hone ka ek naya reason milta hai ki main tumse kitna pyaar karta hoon!, Tumne meri zindagi ko sach mein ek fairy tale banaya hai!"
];

document.getElementById('openButton').addEventListener('click', function () {
    const lid = document.getElementById('lid');
    const box = document.getElementById('box');
    const message = document.getElementById('message');
    const button = document.getElementById('openButton');
    const image = document.getElementById('image');

    // Open the gift box by rotating the lid
    lid.style.transform = 'rotateX(-90deg)';
    lid.style.transition = 'transform 1s';

    // Show the box
    box.style.opacity = '1';
    box.style.transition = 'opacity 1s';

    // Generate a random message
    const randomIndex = Math.floor(Math.random() * messages.length);
    message.innerText = messages[randomIndex];
    message.style.display = 'block';

    // Show the image
    image.style.display = 'block';
    image.style.transform = 'scale(0)';
    image.style.transition = 'transform 2s';
    setTimeout(function () {
        image.style.transform = 'scale(1)';
    }, 1000);

    // Hide the button
    button.style.display = 'none';
});