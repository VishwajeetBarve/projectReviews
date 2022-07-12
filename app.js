// local reviews data
var value = 0;
var id = 1;
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];


function randomnumber(){
  return Math.floor(Math.random()*reviews.length);
}

$(".suprise").click(function(){
  var random = randomnumber();


  switch (random) {
    case 0:
    change(0);
    break;

    case 1:
    change(1);
    break;

    case 2:
    change(2);
    break;

    case 3:
    change(3);
    break;
}
});

$(".next-btn").click(function(){
value = value +1;
if(value > reviews.length-1){
  value = 0;
}
change(value);
});

$(".prev-btn").click(function(){
  value = value - 1;
  if(value < 0){
    value = reviews.length-1;;
  }
  change(value);
});

function change(num){
  var id = $("#authorname").text(reviews[num].id);
  $("#authorname").text(reviews[num].name);
  $("#person-img").attr("src", reviews[num].img);
  $("#job").text(reviews[num].job);
  $("#info").text(reviews[num].text);
}
