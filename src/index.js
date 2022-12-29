let buttonClick = () => {
   let genNumber = () => {
      return Math.floor(1000 + Math.random() * 599500);
   };
   const link = `https://3hentai.net/d/${genNumber()}`;
   const text = document.getElementById("hentai");
   text.innerHTML = `<a href=${link} style="color: white">Il a un petit secret</a>`;
};

let singe = () => {
   const audio = new Audio("../sound/singe.mp3");
   audio.play();
};
