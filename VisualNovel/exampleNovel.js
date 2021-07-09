let script;
let onyx;
let mom;
let narrator;
let photo;
let textBlock;

let leftSide;
let rightSide;
let upperCenter;

function prepareNovel() {
    novel.imagePath = "images/"; // path to your image directory
    novel.audioPath = ""; // path to your audio directory
    onyx = new Character("Onyx", { color: "rgb(64, 204, 64)" });
    mom = new Character("Mom", { color: "#ffff00" });
    narrator = new Character("");

     leftSide = new Position(0, 0.75, 0, 1);
     rightSide = new Position(800, 450, 1, 1);
     upperCenter = new Position(0.5, 0.3, 0.5, 0.5);
     rightTop = new Position(0.9, 0.1, 1, 0);
    
    photo = new Character("", { position: upperCenter });
    textArea = new TextBlock("myText");

    script = [
      label,
      "start",
      scene,
        { image: "cover.png", effect: "fade" },
        narrator,
        "By Amie Rivers",
      scene,
      "catBackground.png",
      narrator,
      "This is Onyx. Onyx is a black cat. Onyx, like all black cats, isn't any different from a white cat, or an orange cat, or a calico cat, or a Siamese cat, or a Bengal cat, or a Sphynx cat. Onyx has black fur, but underneath, he's just like the other cats.",
      scene,
      { image: "sad.png", effect: "fade" },
      narrator,
      "But people don't treat Onyx like the other cats.",
      scene,
      { image: "scared.jpg", effect: "fade" },
      narrator,
      "Sometimes, when people see black cats walking down their street, they avoid them. People used to believe that crossing paths with a black cat was bad luck. Some people still believe that!",
      scene,
      { image: "sadCat.png", effect: "fade" },
      narrator,
      "But Onyx isn't bad luck.",
      scene,
      { image: "witches.jpg", effect: "fade" },
      narrator,
      "Other people think Onyx is scary because hundreds of years ago, people used to believe that witches could transform themselves into black cats. That's why black cats are still commonly found in Halloween decorations, and Halloween decorations are supposed to be scary.",
      scene,
      { image: "onyx.png", effect: "fade" },
      narrator,
      "But Onyx isn't scary.",
      scene,
      { image: "shelter.jpg", effect: "fade" },
      narrator,
      "Some people want to adopt a cat from an animal shelter to take it home as their pet. That's awesome! But, out of all the cats at the animal shelter, guess which one is the least likely to get taken home to their forever home?",
      scene,
      { image: "blackCats.png", effect: "fade" },
      narrator,
      "That's right - a black cat. How sad!",
      scene,
      { image: "happy.png", effect: "fade" },
      narrator,
      "But Onyx was a lucky cat.",
      scene,
      { image: "love.png", effect: "fade" },
      narrator,
      "When Mom came to the animal shelter to pick out a cat, she didn't think black cats were unlucky. And she didn't think black cats were scary.",
      scene,
      { image: "hug.png", effect: "fade" },
      narrator,
      "And when Mom's eyes met Onyx's, it was love at first sight.",
    ];
}


