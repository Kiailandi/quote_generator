Vue.http.options.root = '/'

const colors = [
    {
        background: '#000',
        foreground: '#FFF'
    },
    {
        background: '#4ABDAC',
        foreground: '#FC4A1A'
    },
    {
        background: '#F4F4F4',
        foreground: '#373737'
    },
    {
        background: '#0E0B16',
        foreground: '#A239CA'
    },
    {
        background: '#062F4F',
        foreground: '#B82601'
    }
]

var app = new Vue({
    el: '#app',
    data: {
      quote: 'Quote placeholder',
      author: 'No one',
      link: 'none',
      styleObject: {
        'background-color': '#000',
        'color': '#FFF'
      } 
    },
    mounted: function() {
        this.$http.get('/quote').then(response => {
            this.quote = '"' + response.body['quoteText'] + '"';
            this.author = response.body['quoteAuthor'] == ""?"Unkown": response.body['quoteAuthor'];
            this.link = response.body['quoteLink'];
            }, response => {
                // error callback
            });
        var randomNumber = Math.floor(Math.random() * colors.length);
        this.styleObject['background-color'] = colors[randomNumber].background;
        this.styleObject['color'] = colors[randomNumber].foreground;
        }
})