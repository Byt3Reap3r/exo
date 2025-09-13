// Usuário padrão para tweets
const defaultUser = {
    username: 'exo_lover',
    displayName: 'EXO Lover',
    avatar: 'https://via.placeholder.com/40x40/3498db/ffffff?text=EXO'
};

// Todos os membros do EXO
const exoMembers = [
    'Kai', 'Baekhyun', 'Sehun', 'Suho', 'Chen', 'Chanyeol', 'D.O.', 'Xiumin', 'Lay'
];

// Imagens dos membros do EXO
const exoMemberImages = {
    'Kai': 'https://upload.wikimedia.org/wikipedia/commons/6/67/EXO_Kai_%EC%B9%B4%EC%9D%B4.jpg',
    'Baekhyun': 'https://upload.wikimedia.org/wikipedia/commons/4/40/200209_SuperM_%3B_We_Are_The_Future_in_Mexico_%EB%B0%B1%ED%98%84_2-1.jpg',
    'Sehun': 'https://upload.wikimedia.org/wikipedia/commons/4/46/Oh_Se-hun_at_Rimowa_Essential_Poly_Color_Collection_Launch_on_July_5%2C_2019.png',
    'Suho': 'https://via.placeholder.com/300x300/3498db/ffffff?text=Suho',
    'Chen': 'https://via.placeholder.com/300x300/e74c3c/ffffff?text=Chen',
    'Chanyeol': 'https://via.placeholder.com/300x300/f39c12/ffffff?text=Chanyeol',
    'D.O.': 'https://via.placeholder.com/300x300/2ecc71/ffffff?text=D.O.',
    'Xiumin': 'https://via.placeholder.com/300x300/9b59b6/ffffff?text=Xiumin',
    'Lay': 'https://via.placeholder.com/300x300/1abc9c/ffffff?text=Lay'
};

// Array de tweets
const tweets = [
    {
        id: 1,
        author: 'EXO Official',
        username: 'exo_official',
        content: '🌟 EXO-Ls! Vocês viram a nova performance do Kai no Music Bank? Incrível! #EXO #Kai #MusicBank #EXOL',
        time: 'há 2 horas',
        likes: 142,
        retweets: 23,
        comments: 45,
        liked: false,
        retweeted: false,
        image: exoMemberImages['Kai']
    },
    {
        id: 2,
        author: 'Baekhyun Stan',
        username: 'baekhyun_stan',
        content: '🎵 O álbum "Bambi" do Baekhyun é uma obra de arte! Cada música é perfeita! Qual é a favorita de vocês? #Baekhyun #Bambi #EXO',
        time: 'há 4 horas',
        likes: 89,
        retweets: 15,
        comments: 67,
        liked: true,
        retweeted: false,
        image: exoMemberImages['Baekhyun']
    },
    {
        id: 3,
        author: 'Kai Lover',
        username: 'kai_lover',
        content: '💫 Sehun ficou lindo no novo MV! O visual dele está perfeito! Vocês concordam? #Sehun #EXO #Visual',
        time: 'há 6 horas',
        likes: 156,
        retweets: 34,
        comments: 89,
        liked: false,
        retweeted: true,
        image: exoMemberImages['Sehun']
    },
    {
        id: 4,
        author: 'EXO Official',
        username: 'exo_official',
        content: '🎤 Suho cantando "Grey Suit" é pura emoção! Que voz linda! #Suho #GreySuit #EXO #Vocals',
        time: 'há 8 horas',
        likes: 203,
        retweets: 45,
        comments: 78,
        liked: true,
        retweeted: false,
        image: exoMemberImages['Suho']
    },
    {
        id: 5,
        author: 'Chen Fan',
        username: 'chen_fan',
        content: '🔥 Chen é simplesmente o melhor vocalista do K-pop! Sua voz é celestial! #Chen #Vocals #EXO #Best',
        time: 'há 10 horas',
        likes: 178,
        retweets: 29,
        comments: 56,
        liked: false,
        retweeted: false,
        image: exoMemberImages['Chen']
    },
    {
        id: 6,
        author: 'Chanyeol Stan',
        username: 'chanyeol_stan',
        content: '🎸 Chanyeol tocando guitarra é a coisa mais linda do mundo! Que talento incrível! #Chanyeol #Guitar #EXO #Talent',
        time: 'há 12 horas',
        likes: 234,
        retweets: 67,
        comments: 123,
        liked: false,
        retweeted: false,
        image: exoMemberImages['Chanyeol']
    },
    {
        id: 7,
        author: 'D.O. Lover',
        username: 'd.o._lover',
        content: '🎭 D.O. atuando é pura arte! Ele é um ator nato! Vocês viram seus dramas? #D.O. #Actor #EXO #Drama',
        time: 'há 14 horas',
        likes: 198,
        retweets: 43,
        comments: 87,
        liked: true,
        retweeted: false,
        image: exoMemberImages['D.O.']
    },
    {
        id: 8,
        author: 'Xiumin Fan',
        username: 'xiumin_fan',
        content: '💎 Xiumin é o membro mais fofo do EXO! Seu sorriso ilumina tudo! #Xiumin #Cute #EXO #Smile',
        time: 'há 16 horas',
        likes: 167,
        retweets: 38,
        comments: 94,
        liked: false,
        retweeted: true,
        image: exoMemberImages['Xiumin']
    },
    {
        id: 9,
        author: 'Lay Supporter',
        username: 'lay_supporter',
        content: '🇨🇳 Lay representando a China com muito orgulho! Ele é um ícone! #Lay #China #EXO #Icon',
        time: 'há 18 horas',
        likes: 145,
        retweets: 52,
        comments: 76,
        liked: false,
        retweeted: false,
        image: exoMemberImages['Lay']
    }
];

// Função para criar tweet
function createTweet() {
    const content = document.getElementById('tweet-content').value.trim();
    
    if (!content) {
        alert('Por favor, escreva algo antes de tweetar!');
        return;
    }
    
    if (content.length > 280) {
        alert('Tweet muito longo! Máximo 280 caracteres.');
        return;
    }
    
    const newTweet = {
        id: Date.now(),
        author: defaultUser.displayName,
        username: defaultUser.username,
        content: content,
        time: 'agora mesmo',
        likes: 0,
        retweets: 0,
        comments: 0,
        liked: false,
        retweeted: false,
        image: null
    };
    
    tweets.unshift(newTweet);
    displayTweets();
    document.getElementById('tweet-content').value = '';
}

// Função para exibir tweets
function displayTweets() {
    const tweetsFeed = document.getElementById('tweets-feed');
    tweetsFeed.innerHTML = '';
    
    tweets.forEach(tweet => {
        const tweetElement = createTweetElement(tweet);
        tweetsFeed.appendChild(tweetElement);
    });
}

// Função para criar elemento de tweet
function createTweetElement(tweet) {
    const tweetDiv = document.createElement('div');
    tweetDiv.className = 'tweet';
    
    // Avatar baseado no autor
    let avatar = defaultUser.avatar;
    if (tweet.username === 'exo_official') {
        avatar = 'https://via.placeholder.com/40x40/3498db/ffffff?text=EXO';
    } else if (tweet.username === 'baekhyun_stan') {
        avatar = 'https://via.placeholder.com/40x40/f39c12/ffffff?text=B';
    } else if (tweet.username === 'kai_lover') {
        avatar = 'https://via.placeholder.com/40x40/e74c3c/ffffff?text=K';
    } else if (tweet.username === 'chen_fan') {
        avatar = 'https://via.placeholder.com/40x40/e74c3c/ffffff?text=C';
    } else if (tweet.username === 'chanyeol_stan') {
        avatar = 'https://via.placeholder.com/40x40/f39c12/ffffff?text=CH';
    } else if (tweet.username === 'd.o._lover') {
        avatar = 'https://via.placeholder.com/40x40/2ecc71/ffffff?text=D';
    } else if (tweet.username === 'xiumin_fan') {
        avatar = 'https://via.placeholder.com/40x40/9b59b6/ffffff?text=X';
    } else if (tweet.username === 'lay_supporter') {
        avatar = 'https://via.placeholder.com/40x40/1abc9c/ffffff?text=L';
    }
    
    tweetDiv.innerHTML = `
        <div class="tweet-header">
            <img src="${avatar}" alt="Perfil" class="profile-pic">
            <div class="tweet-author">
                <div class="tweet-author-name">${tweet.author}</div>
                <div class="tweet-author-username">@${tweet.username}</div>
            </div>
            <div class="tweet-time">${tweet.time}</div>
        </div>
        <div class="tweet-content">${tweet.content}</div>
        ${tweet.image ? `<img src="${tweet.image}" alt="Tweet image" class="tweet-image">` : ''}
        <div class="tweet-actions">
            <button class="tweet-action-btn" onclick="addComment(${tweet.id})">
                💬 ${tweet.comments}
            </button>
            <button class="tweet-action-btn ${tweet.retweeted ? 'retweeted' : ''}" onclick="toggleRetweet(${tweet.id})">
                🔄 ${tweet.retweets}
            </button>
            <button class="tweet-action-btn ${tweet.liked ? 'liked' : ''}" onclick="toggleLike(${tweet.id})">
                ${tweet.liked ? '❤️' : '🤍'} ${tweet.likes}
            </button>
        </div>
    `;
    
    return tweetDiv;
}

// Função para curtir/descurtir
function toggleLike(tweetId) {
    const tweet = tweets.find(t => t.id === tweetId);
    if (tweet) {
        tweet.liked = !tweet.liked;
        tweet.likes += tweet.liked ? 1 : -1;
        displayTweets();
    }
}

// Função para retweetar/desretweetar
function toggleRetweet(tweetId) {
    const tweet = tweets.find(t => t.id === tweetId);
    if (tweet) {
        tweet.retweeted = !tweet.retweeted;
        tweet.retweets += tweet.retweeted ? 1 : -1;
        displayTweets();
    }
}

// Função para adicionar comentário
function addComment(tweetId) {
    const comment = prompt('Escreva seu comentário:');
    if (comment && comment.trim()) {
        const tweet = tweets.find(t => t.id === tweetId);
        if (tweet) {
            tweet.comments += 1;
            displayTweets();
        }
    }
}

// Event listener para quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    // Exibe os tweets quando a página carrega
    displayTweets();
    
    // Event listener para Enter no campo de tweet
    document.getElementById('tweet-content').addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && e.ctrlKey) {
            createTweet();
        }
    });
    
    // Contador de caracteres para tweet
    document.getElementById('tweet-content').addEventListener('input', function(e) {
        const content = e.target.value;
        const maxLength = 280;
        const remaining = maxLength - content.length;
        
        // Adiciona contador visual se não existir
        let counter = document.querySelector('.char-counter');
        if (!counter) {
            counter = document.createElement('div');
            counter.className = 'char-counter';
            counter.style.cssText = 'text-align: right; font-size: 0.8rem; color: #6c757d; margin-top: 0.5rem;';
            e.target.parentNode.appendChild(counter);
        }
        
        counter.textContent = `${content.length}/${maxLength}`;
        counter.style.color = remaining < 20 ? '#e74c3c' : '#6c757d';
    });
});