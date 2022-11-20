import { React } from 'react';
import Makoto from './images/MakotoNaegiartwork.png';
import Kyoko from './images/KyokoKririgiri.png';

const change = () => {
  const spoilers = document.getElementsByClassName("spoiler");
  for(let i = 0; i < spoilers.length; i++)
  {
    spoilers[i].className = undefined;
  }
}

const studentPhotoClass = "float-left m-5 max-w-full h-72";

export const students = [
  {
    danganronpa1: [
      {
        name: 'Makoto Naegi',
        ult: 'Lucky',
        photo: {Makoto},
        summary: () => {return(
          <div className="m-auto md:w-2/3 w-3/4 bg-gray-200">
            <img src={Makoto} alt="Makoto" className={studentPhotoClass}/>
            {/* Student Description */}
            <div className="text-right p-2">
              <p className="mb-2">Makoto Naegi is the <span className="font-bold">Ultimate Lucky Student</span> and the main protagonist you play as in the first Danganronpa game.</p>
              <p>Makoto recieved his ultimate by winning the schools annual lottery that selects a random person to attend the elite school <span className="italic">Hopes Peak Academy</span>.</p>
            </div>
          </div>
        )},
        blackened: false,
        murdered: false,
      },
      {
        name: 'Kyoko Kirigiri',
        ult: 'Detective',
        photo: {Kyoko},
        summary: () => {return(
          <div className="m-auto md:w-2/3 w-3/4 bg-gray-200">
            <img src={Kyoko} alt="Kyoko" className={studentPhotoClass}/>
            <div className="text-right p-2">
              {/* Student Description */}
              <p className="mb-2">Kyoko Kirigiri is the <span className="font-bold">Ultimate <span className="spoiler" id="spoilText" onClick={change}>Detective</span></span>.</p>
              <p>Very little is known about Kyoko at the very begining of the game. She keeps her distance and is untrusting of the other students she's trapped with and refuses to talk about what her ultimate is.</p>
              <p>Later in the game you discover that Kyoko is <span className="spoiler" id="spoilText" onClick={change}>the daughter of the Principal of <span className="italic">Hopes Peak</span></span>.</p>
            </div>
          </div>
        )},
        blackened: false,
        murdered: false,
      },
      {
        name: 'Byakuya Togami',
        ult: 'Affluent Prodigy',
        // photo: picture
        summary: () => {return(
          <div className="absolute right-5 m-5 p-2 bg-gray-200">
            <p>Rich conspiracy person</p>
          </div>
        )},
        blackened: false,
        murdered: false,
      },
      {
        name: 'Toko Fukawa',
        ult: 'Author',
        // photo: picture
        summary: () => {return(
          <div className="absolute right-5 m-5 p-2 bg-gray-200">
            <p>Book lady likes to murder.</p>
          </div>
        )},
        blackened: false,
        murdered: false,
      },
      {
        name: 'Aoi Asahina',
        ult: 'Swimmer',
        // photo: picture
        summary: 'Swimming lady makes jokes',
        blackened: false,
        murdered: false,
      },
      {
        name: 'Yasuhiro Hagakure',
        ult: 'Clairvoyant',
        // photo: picture
        summary: 'Danny',
        blackened: false,
        murdered: false,
      },
      {
        name: 'Sayaka Maizono',
        ult: 'Pop Sensation',
        // photo: picture
        summary: 'J-pop',
        blackened: false,
        murdered: true,
      },
      {
        name: 'Leon Kuwata',
        ult: 'Baseball',
        // photo: picture
        summary: 'Just wants to sing',
        blackened: true,
        murdered: false,
      },
      {
        name: 'Chihiro Fujisaki',
        ult: 'Programmer',
        // photo: picture
        summary: 'smart best boi',
        blackened: false,
        murdered: true,
      },
      {
        name: 'Mondo Owada',
        ult: 'Biker Leader',
        // photo: picture
        summary: '',
        blackened: true,
        murdered: false,
      },
      {
        name: 'Kiyotaka Ishimaru',
        ult: 'Moral Compass',
        // photo: picture
        summary: '',
        blackened: false,
        murdered: true,
      },
      {
        name: 'Hifumi Yamada',
        ult: 'Fan Fiction Writer',
        // photo: picture
        summary: 'He only likes 2D!',
        blackened: true,
        murdered: true,
      },
      {
        name: 'Celestia Ludenberg',
        ult: 'Gambler',
        // photo: picture
        summary: 'Scary Goth Gf',
        blackened: true,
        murdered: false,
      },
      {
        name: 'Sakura Ogami',
        ult: 'Fighter',
        // photo: picture
        summary: 'Big Teddy',
        blackened: true,
        murdered: true,
      },
      {
        name: 'Junko Enoshima',
        ult: 'Fashionista',
        // photo: picture
        summary: 'Mean lady',
        blackened: true,
        murdered: false,
      },
      {
        name: 'Mukuro Ikusaba',
        ult: 'Soldier',
        // photo: picture
        summary: 'I hardly knew ye',
        blackened: false,
        murdered: true,
      },
    ],

    //////////////////////////////
    danganronpa2: [
      {
        name: 'Akane Owari',
        ult: 'Gymnast',
        // photo: picture
        summary: 'She eat, she fight, she protect',
        blackened: false,
        murdered: false,
      },
      {
        name: 'Byakuya Togami?',
        ult: 'Affluent Prodigy',
        // photo: picture
        summary: '...bigger than I remember',
        blackened: false,
        murdered: true,
      },
      {
        name: 'Chiaki Nanami',
        ult: 'Gamer',
        // photo: picture
        summary: 'Like to sleep',
        blackened: true,
        murdered: false,
      },
      {
        name: 'Fuyuhiko Kuzuryu',
        ult: 'Yakuza',
        // photo: picture
        summary: 'you will shoot your eye out kid',
        blackened: false,
        murdered: false,
      },
      {
        name: 'Gundham Tanaka',
        ult: 'Breeder',
        // photo: picture
        summary: 'submissive and breedable',
        blackened: true,
        murdered: false,
      },
      {
        name: 'Hajime Hinata',
        ult: '???',
        // photo: picture
        summary: 'such a drag',
        blackened: false,
        murdered: false,
      },
      {
        name: 'Hiyoko Saionji',
        ult: 'Traditional Dancer',
        // photo: picture
        summary: 'Squish',
        blackened: false,
        murdered: true,
      },
      {
        name: 'Ibuki Mioda',
        ult: 'Musician',
        // photo: picture
        summary: 'Punk rock',
        blackened: false,
        murdered: true,
      },
      {
        name: 'Kazuichi Soda',
        ult: 'Mechanic',
        // photo: picture
        summary: 'Dangan Mineta',
        blackened: false,
        murdered: false,
      },
      {
        name: 'Mahiru Koizumi',
        ult: 'Photographer',
        // photo: picture
        summary: 'Waifu',
        blackened: false,
        murdered: true,
      },
      {
        name: 'Mikan Tsumiki',
        ult: 'Nurse',
        // photo: picture
        summary: 'She crazy',
        blackened: true,
        murdered: false,
      },
      {
        name: 'Nagito Komaeda',
        ult: 'Lucky Student',
        // photo: picture
        summary: 'Best boi',
        blackened: false,
        murdered: true,
      },
      {
        name: 'Nekomaru Nidai',
        ult: 'Coach',
        // photo: picture
        summary: 'Gota take a shit',
        blackened: false,
        murdered: true,
      },
      {
        name: 'Peko Pekoyama',
        ult: 'Swords Expert',
        // photo: picture
        summary: 'Yakuza bodyguard',
        blackened: true,
        murdered: false,
      },
      {
        name: 'Sonia Nevermind',
        ult: 'Princess',
        // photo: picture
        summary: 'ocult',
        blackened: false,
        murdered: false,
      },
      {
        name: 'Teruteru Hanamura',
        ult: 'Chef',
        // photo: picture
        summary: 'Somehow worse than Mineta',
        blackened: true,
        murdered: false,
      },
    ],
  },
];

export const trials = [
  {
    danganronpa1: [
      {
        name: "Trial 1",
        victim: "Sayaka Maizono",
        blackened: "Leon Kuwata",
      },
      {
        name: "Trial 2",
        victim: "Chihiro Fujisaki",
        blackened: "Mondo Owada",
      },
      {
        name: "Trial 3",
        victim: "Kiyotaka Ishimaru",
        blackened: "Hifumi Yamada",
      },
      {
        name: "Trial 3 (again)",
        victim: "Hifumi Yamada",
        blackened: "Celestia Ludenberg",
      },
      {
        name: "Trial 4",
        victim: "Sakura Ogami",
        blackened: "Sakura Ogami",
      },
    ]
  }
];