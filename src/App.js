import React from 'react';
import './App.css';
// import menus from './components/tree-view/data';
// import Accordion from './components/accordion/index'
// import RandomColor from './components/random-color/index'
// import StarRating from './components/star-rating/index'
// import ImageSlider from './components/image-slider';
// import LoadMoreData from './components/load-more-data';
// import TreeView from './components/tree-view';
// import QrCodeGenerator from './components/qr-code-generator';
// import LightDarkMode from './components/light-dark-mode';
// import TestSite from './components/test-site';
import Veridion from './components/veridion';


function App() {
  return (
    <div className='App'> 
    {/* Project 1: accordion */}
    {/* <Accordion /> */}

    {/* Project 2: random colour */}
    {/* <RandomColor /> */}

    {/* Project 3: star rating */}
    {/* <StarRating noOfStars={10}/> */}

    {/* Project 4: image slider */}
    {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}/> */}

    {/* Project 5: load more products */}
    {/* <LoadMoreData /> */}

    {/* Project 6: tree view navigation */}
    {/* <TreeView menus={menus} /> */}

    {/* Project 7: QR code generator */}
    {/* <QrCodeGenerator /> */}

    {/* Project 8: Light and dark mode */}
    {/* <LightDarkMode /> */}

    {/* Independent project: test site  */}
    {/* <TestSite /> */}

    {/* Independent project: veridion */}
    <Veridion />

    </div>
  );
}

export default App;
