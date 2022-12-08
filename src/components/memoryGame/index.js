import React from 'react';
import { useEffect, useState, useRef } from "react";

import Card from "./card";
import DialogProject from "./DialogProject";
import DialogFinish from "./DialogFinish";
import DialogProjectStart from "./DialogProjectStart";

import "./index.scss";
const cardRandomColor = ['#d471aa', '#095d59']

const uniqueElementsArray = [
    {
        type: "ilist",
        image: require(`../../images/work/ilist.svg`),
        content: {
            title: "iList",
            lang: 'Android studio',
            description: (<div>
                A shopping list app designed for easy sharing of your shopping list with your family or roommates.
                Features:
                <ul>
                    <li>List sharing with your friends - Add, Edit & Delete any items in your list and seamlessly sync changes with your friends</li>
                    <li>Photo uploading for easy recognition of desired items</li>
                    <li>Tagging items as bought</li>
                    <li>Copy and send lists anymore you want</li>
                    <li>Supports Both Hebrew and English. And multiple colors schemes</li>
                    <li>server side on Firebase</li>
                </ul>
            </div>),
            github: "https://github.com/danielleaharon/androidproject",
            image: require(`../../images/work/ilist.svg`),
            demo: <iframe title="iList" src="https://appetize.io/embed/veudf5cvj43qu97h1c0gvrxnn4?device=pixel4" width="308px" height="730px" frameBorder="0" scrolling="no" ></iframe>

        }
    },
    {
        type: "fitshare",
        image: require(`../../images/work/fitshare.svg`),
        content: {
            title: <span> FitShare  <span className="fs18 d-block">FullStack final project </span></span>,
            lang: 'Android studio',
            description: `FitShare is a social network dedicated to home fitness.
        The app allows trainers to share videos of their workouts and open synchronized zoom meetings for trainees to join.
        Trainers also have an option to post their videos with special equipment needed and muscles group which the video is designed for.
        As a trainee, the app gives you a wide variety of workout options and trainers to choose from.`,
            github: "https://github.com/danielleaharon/androidproject",
            image: require(`../../images/work/fitshare.svg`),

        }
    },
    {
        type: "animalstore",
        image: require(`../../images/work/animal.svg`),
        content: {
            title: "Animal Store",
            lang: 'Android studio',
            description: `MVC online pet store architecture that includes a local database.
        Features user-specific recommendations based on previous interactions`,
            github: "https://github.com/danielleaharon/androidproject",
            image: require(`../../images/work/animal.svg`),

        }
    },
    {
        type: "flickrGallery",
        image: require(`../../images/work/fliker.svg`),
        content: {
            title: <span> FlickrGallary  <span className="fs18 d-block">Gallary app </span></span>,
            lang: 'Android studio',
            description: `Photo gallery scrolls with flickr api, *Design by me `,
            github: "https://github.com/danielleaharon/androidproject",
            image: require(`../../images/work/fliker.svg`),
            demo: <iframe title="FlickrGallary" src="https://appetize.io/embed/8bad8p6wfdckauc47d61qf0n88?device=pixel4" width="308px" height="730px" frameBorder="0" scrolling="no" ></iframe>
        }
    },
    {
        type: "opium",
        image: require(`../../images/work/opium.svg`),
        content: {
            title: "Opuim Store",
            lang: 'React&Wordpress',
            description: `Online product printing shop,
        The site offers a platform for designing visualization of products and sending the order to the store.
        The site was built with wordpress handles and with react.
        As part of a "user experience" project at the college, we took the store's old website and wrote a detailed description of how to improve it. After school I decided to implement the changes.`,
            github: "https://github.com/danielleaharon/androidproject",
            image: require(`../../images/work/opium.svg`),
            demoweb: 'https://www.opiumstore.online/'

        }
    },
    {
        type: "web",
        image: require(`../../images/work/my-web.svg`),
        content: {
            title: <span> my site  <span className="fs18 d-block">this one </span></span>,
            lang: 'React',
            description: `Presents who I am, what my abilities are and my projects.`,
            github: "https://github.com/danielleaharon/myweb",
            image: require(`../../images/work/my-web.svg`),

        }
    },
    {
        type: "looper",
        image: require(`../../images/work/soundlooper.svg`),
        content: {
            title: "Sound Looper",
            lang: 'React',
            description: `Sound looper,
        A site that offers to play up to 9 different loops together.
        The legality: each round of a loop is 8 seconds, you can add to the next round as many loops as you want (once the round has started the loop will be added to the next loop)
        You can also record the loop and play it again.`,
            github: "https://github.com/danielleaharon/soundLooper",
            image: require(`../../images/work/soundlooper.svg`),
            demoweb: 'https://soundlooper.herokuapp.com/'

        }
    }

];

function shuffleCards(array) {
    const length = array.length;
    for (let i = length; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * i);
        const currentIndex = i - 1;
        const temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
        var cardTypes = document.querySelectorAll('.work-card');
        cardTypes.forEach(card => {
            card.style.opacity = 1;
            card.style.removeProperty("display");

        })
    }
    return array;
}
export default function MemoryGame({ active }) {
    const [cards, setCards] = useState(
        shuffleCards.bind(null, uniqueElementsArray.concat(uniqueElementsArray))
    );
    const [openCards, setOpenCards] = useState([]);
    const [clearedCards, setClearedCards] = useState({});
    const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
    const [moves, setMoves] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [showModalProject, setShowModalProject] = useState(false);
    const [modalProjectContent, setModalProjectContent] = useState(uniqueElementsArray[1].content);
    const [noPlay, setNoPlay] = useState(false);
    const [rndColor, setRndColor] = useState(cardRandomColor[Math.floor(Math.random() * cardRandomColor.length)]);


    const [bestScore, setBestScore] = useState(
        JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
    );
    const timeoutout = useRef(null);

    const disable = () => {
        setShouldDisableAllCards(true);
    };
    const enable = () => {
        setShouldDisableAllCards(false);
    };


    const handleCardClick = (index) => {
        if (openCards.length === 1) {
            setOpenCards((prev) => [...prev, index]);
            setMoves((moves) => moves + 1);
            disable();
        } else {
            clearTimeout(timeoutout.current);
            setOpenCards([index]);
        }
    };

    useEffect(() => {
        const evaluate = () => {
            const [first, second] = openCards;
            enable();
            if (cards[first].type === cards[second].type) {
                //open project model and see the card image 
                setModalProjectContent(cards[first].content)
                setShowModalProject(true)
                setClearedCards((prev) => ({ ...prev, [cards[first].type]: true }));
                setOpenCards([]);

                return;
            }
            // This is to flip the cards back after 500ms duration
            timeoutout.current = setTimeout(() => {
                setOpenCards([]);
            }, 500);
        };
        let timeout = null;
        if (openCards.length === 2) {
            timeout = setTimeout(evaluate, 400);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [openCards, cards]);

    useEffect(() => {

        const checkCompletion = () => {
            if (Object.keys(clearedCards).length === uniqueElementsArray.length) {
                if (!noPlay)
                    setShowModal(true);
                const highScore = Math.min(moves, bestScore);
                localStorage.setItem("bestScore", highScore);
            }
        };


     
        checkCompletion();
    }, [clearedCards, bestScore, noPlay]);
    useEffect(() => {

        if (Object.keys(clearedCards).length > 0) {
            Object.keys(clearedCards).forEach((key) => {
                var cardTypes = document.querySelectorAll('.' + key);
                if (cardTypes.length > 1) {
                    cardTypes[1].style.opacity = 0;

                    if (noPlay)
                        cardTypes[1].style.display = "none";

                }
            })
        } 
    }, [clearedCards,noPlay]);
    const checkIsFlipped = (index) => {
        return openCards.includes(index);
    };

    const checkIsInactive = (card) => {
        return Boolean(clearedCards[card.type]);
    };

    const handleRestart = () => {
        setClearedCards({});
        setOpenCards([]);
        setShowModal(false);
        setMoves(0);
        enable();
        setNoPlay(false)
        setRndColor(cardRandomColor[Math.floor(Math.random() * cardRandomColor.length)])
        // set a shuffled deck of cards
        setCards(shuffleCards(uniqueElementsArray.concat(uniqueElementsArray)));
    };

    const handleNotPlay = () => {
        setClearedCards({});
        setShouldDisableAllCards(false);
        setNoPlay(true);
        uniqueElementsArray.forEach((card, index) => {
            setClearedCards((prev) => ({ ...prev, [card.type]: true }));
        })
    };

    return (
        <div className="memory">
            <div className='memory-btns ' style={{ '--rndcolor': rndColor }}>

                <div className='btns'>
                    <div className="restart" onClick={handleRestart} >
                        New Game
                        <div className='arrow'>
                            <i className="fas fa-angle-right"></i>
                        </div>
                    </div>
                    <div className="restart" onClick={handleNotPlay} >
                        Flip Cards
                        <div className='arrow'>
                            <i className="fas fa-angle-right"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-slice '>

                <div className="container">
                    {cards.map((card, index) => {
                        return (
                            <Card
                                key={index}
                                card={card}
                                index={index}
                                isDisabled={shouldDisableAllCards}
                                isInactive={checkIsInactive(card)}
                                isFlipped={checkIsFlipped(index)}
                                onClick={handleCardClick}
                                setShowModalProject={setShowModalProject}
                                setModalProjectContent={setModalProjectContent}
                                color={rndColor}
                            />
                        );
                    })}
                </div>
            </div>


            {!noPlay && showModal && !showModalProject && <DialogFinish handleRestart={handleRestart} handleClose={() => { setShowModal(false); setBestScore(localStorage.getItem("bestScore")); }} later={handleNotPlay } showModal={showModal} moves={moves} bestScore={bestScore} />}
            {(showModalProject) && <DialogProject showModal={showModalProject} handleClose={() => { setShowModalProject(false) }} content={modalProjectContent} />}
            {(JSON.parse(sessionStorage.getItem("popupStart")) === null) && <DialogProjectStart showModal={true} handleClose={() => {
                handleRestart(); sessionStorage.setItem("popupStart", true);
            }} handleNotPlay={() => { handleNotPlay(); sessionStorage.setItem("popupStart", true); }} />}
        </div>
    );
}