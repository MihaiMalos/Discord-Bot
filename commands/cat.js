var cat = [
  "https://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg",
  "https://wallpaperscraft.com/image/kitten_briton_look_kid_96414_602x339.jpg",
  "https://ichef-1.bbci.co.uk/news/1024/cpsprodpb/693C/production/_95804962_p0517py6.jpg",
  "https://news.nationalgeographic.com/content/dam/news/photos/000/755/75552.ngsversion.1422285553360.adapt.1900.1.jpg",
  "https://bulk2.destructoid.com/ul/198291-why-you-haven-t-bought-a-3ds-yet/DS-620x.jpg",
  "https://www.rd.com/wp-content/uploads/sites/2/2016/04/14-cat-wants-to-tell-you-early-riser.jpg",
  "https://i.pinimg.com/736x/bc/f0/4e/bcf04eafebdf707b8d900f02e6d8bd70--photo-tag-touch-me.jpg",
  "http://www.catster.com/wp-content/uploads/2013/04/cat-kneading-with-paws-in-the-air-belly-up.jpg",
  "https://www.pets4homes.co.uk/images/breeds/31/7711e1514d7d6665a240134a57ee13ad.jpg",
  "http://www.catmospherecafe.com/assets/kitten-200d8e0e3cbf6c4ab8c2037ffb207e81f840554ceed0891f0b00f3a085156d01.jpg",
  "https://metrouk2.files.wordpress.com/2017/05/521981437.jpg?w=620&h=412&crop=1",
  "https://www.bluecross.org.uk/sites/default/files/assets/images/Cat%20for%20lost%20page.jpg",
  "https://assets.wired.com/photos/w_2000/wp-content/uploads/2015/02/catinbox_amazon_by-stephen-woods_4x3.jpg",
  "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/cat_skin_problems_slideshow/photolibrary_rf_photo_of_cat_scratching.jpg?resize=400px:*&output-quality=50",
  "http://www.petsworld.in/blog/wp-content/uploads/2015/06/white-cat2.jpg",
  "http://www.hillspet.com/HillsPetUS/v1/portal/en/us/cat-care/Skyword/images/orange-tabby-eating-out-of-orange-cat-bowl_282729_thumbnail.jpg",
  "http://www.catster.com/wp-content/uploads/2017/08/Hairless-cat.jpg",
  "https://www.petfinder.com/wp-content/uploads/2012/11/125950112-adopt-second-cat-632x475.jpg",
  "http://www.hillspet.ca/HillsPetUS/v1/portal/en/ca/cat-care/Skyword/201606/images/upside-down-cat-thumbnail.jpg",
  "https://static.boredpanda.com/blog/wp-content/uploads/2017/03/blind-rescue-cat-mange-different-color-eyes-cotton-7.jpg",
  "http://www.ddfl.org/wp-content/uploads/2016/12/2012-01-cat-009.jpg",
  "http://www.catster.com/wp-content/uploads/2017/01/cat-vet-tips-joints-01.jpg",
  "https://www.vetbabble.com/wp-content/uploads/2016/11/hiding-cat.jpg",
  "http://i.dailymail.co.uk/i/pix/2016/11/03/15/3A052F8D00000578-3901358-Cool_cat_Sitting_pretty_in_its_cardboard_box_this_cat_gets_10_ou-a-66_1478186886161.jpg",
  "https://www.gamesforcats.com/images/pnp-cat.png",
  "http://media.npr.org/assets/img/2016/09/14/catscratchfever_custom-ae171a4c6a9d90f023e19b5f8f798cb098e36c58-s900-c85.jpg",
  "https://i2-prod.manchestereveningnews.co.uk/incoming/article13117835.ece/ALTERNATES/s615/BBFEAC43-.jpg",
  "https://i.imgur.com/SwAC5JK.jpg",
  "http://zululandobserver.co.za/wp-content/uploads/sites/56/2016/08/thul-IMG_2100_89847_tn.jpg",
  "https://cdn.discordapp.com/attachments/418187937667350558/418451417003458570/IMG_20180128_112253.jpg",
  "https://cdn.discordapp.com/attachments/418187937667350558/418451529972842516/IMG_20180129_194438.jpg",
];
exports.run = async (client, message, args) => {
  var args3 = message.content.substring(prefix.length).split("");
  if (args3[1]) {
    message.channel.send({
      "embed": {
              title: 'Pisoiiiii',
              url: 'https://www.youtube.com/channel/UCqj59rUP2weI3At1EJmwaZQ?',
              "image": {
              "url": (cat[Math.floor(Math.random() * cat.length)]),
              }
          }
      });
  }
};

var prefix = "-"
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'cat',
  description: 'Avertizeaza un membru.',
  usage: 'warn [mention] [motiv]'
};
