import { React } from 'react';
import Makoto from './images/MakotoNaegiartwork.png';
import Kyoko from './images/KyokoKririgiri.png';
import Byakuya from './images/ByakuyaTogami.png';
import Toko from './images/TokoFukawa.jpg';
import Aoi from './images/Aoi.jpg';

import {change} from '../functions/ReuseableFunctions';

const studentPhotoClass = "float-left m-5 max-w-full h-72";
const quoteClass = "italic";

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

              <p className="mb-2">Very little is known about Kyoko at the very begining of the game. She keeps her distance and is untrusting of the other students she's trapped with and refuses to talk about what her ultimate is.</p>

              <p className="mb-2">Later in the game you discover that Kyoko is <span className="spoiler" id="spoilText" onClick={change}>the daughter of the Principal of <span className="italic">Hopes Peak</span></span>.</p>
            </div>
          </div>
        )},
        blackened: false,
        murdered: false,
      },
      {
        name: 'Byakuya Togami',
        ult: 'Affluent Progeny',
        photo: {Byakuya},
        summary: () => {return(
          <div className="m-auto md:w-2/3 w-3/4 bg-gray-200">
            <img src={Byakuya} alt="Byakua" className={studentPhotoClass}/>
            {/* Student Description */}
            <div className="text-right p-2">
              <p className="mb-2">Byakuya Togami is the <span className="font-bold">Ultimate Affluent Progeny</span> and is next in line to inherit his families fortune but he already has had multiple successful buisnesses take off before the events of Danganronpa.</p>

              <p className="mb-2">Thanks to his fathers connections he has gained a lot of info that most people aren't privilaged to have. Because of this he has developed an interest in secret information about famous crimes.</p>
            </div>
          </div>
        )},
        blackened: false,
        murdered: false,
      },
      {
        name: 'Toko Fukawa',
        ult: 'Author',
        photo: {Toko},
        summary: () => {return(
          <div className="m-auto md:w-2/3 w-3/4 bg-gray-200">
            <img src={Toko} alt="Toko" className={studentPhotoClass}/>
            {/* Student Description */}
            <div className="text-right p-2">
              <p className="mb-2">Toko Fukawa is the <span className="font-bold">Ultimate Author </span> and is depected as an overly shy character.</p>

              <p className="mb-2">Some of her favorite things to do seems to be not showering and being hostile.</p>

              <p>It is later revealed that <span className="spoiler" id="spoilText" onClick={change}>she is also the infamous serial killer known as Genocide Jack or as she perfers 'Genocide Jill'. This came to light during the second trial when byakuya found out about Toko's secret and decided to make the murder scene look like her past work just to mess with the others.</span></p>
            </div>
          </div>
        )},
        blackened: false,
        murdered: false,
      },
      {
        name: 'Aoi Asahina',
        ult: 'Swimmer',
        photo: {Aoi},
        summary: () => {return(
          <div className="m-auto md:w-2/3 w-3/4 bg-gray-200">
            <img src={Aoi} alt="Toko" className={studentPhotoClass}/>
            {/* Student Description */}
            <div className="text-right p-2">
              <p className="mb-2">Aoi Asahina is the <span className="font-bold">Ultimate Swimmer</span>.</p>
              
              <p>She likes to speak in innuendos.</p>
            </div>
            {/* quote */}
            <p className={quoteClass}>"Everyone just calm down! Listen, why don't we all go around and introduce ourselves? Heya! I'm Aoi Asahina!"</p>
          </div>
        )},
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
        id: "t1",
        name: "Trial 1",
        victim: "Sayaka Maizono",
        blackened: "Leon Kuwata",
      },
      {
        id: "t2",
        name: "Trial 2",
        victim: "Chihiro Fujisaki",
        blackened: "Mondo Owada",
      },
      {
        id: "t3",
        name: "Trial 3",
        victim: "Kiyotaka Ishimaru",
        blackened: "Hifumi Yamada",
      },
      {
        id: "t3",
        name: "Trial 3 (again)",
        victim: "Hifumi Yamada",
        blackened: "Celestia Ludenberg",
      },
      {
        id: "t4",
        name: "Trial 4",
        victim: "Sakura Ogami",
        blackened: "Sakura Ogami",
      },
      {
        id: "t5",
        name: "Trial 5",
        victim: "N/A",
        blackened: "Makoto Naegi",
      },
      {
        id: "t6",
        name: "Trial 6",
        victim: "Mukuro Ikusaba",
        blackened: "Junko Enoshima",
      }
    ],

    danganronpa2: [
      {
        id: "t1",
        name: "Trial 1",
        victim: "Byakuya Togami?",
        blackened: "Teruteru Hanamura",
      },
      {
        id: "t2",
        name: "Trial 2",
        victim: "Mahiru Koizumi",
        blackened: "Peko Pekoyama",
      },
      {
        id: "t3",
        name: "Trial 3",
        victim: "Ibuki Mioda, Hiyoko Saionji",
        blackened: "Mikan Tsumiki",
      },
      {
        id: "t4",
        name: "Trial 4",
        victim: "Nekomaru Nidai",
        blackened: "Gundham Tanaka",
      },
      {
        id: "t5",
        name: "Trial 5",
        victim: "Nagito Komaeda",
        blackened: "Chiaki Nanami",
      },
      {
        id: "t6",
        name: "Trial 6",
        victim: "N/A",
        blackened: "N/A",
      },
    ]
  }
];