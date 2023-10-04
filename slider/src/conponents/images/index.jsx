// import {Img1} from '../../assets/img/alberta-2297204_1280.avif'
// import {Img2} from '../../assets/img/autumn-poolside.jpg'
// import {Img3} from '../../assets/img/a-walk-in-the-woods-9fdb0309-d705-4d0c-b30e-440a46385dc8.jpg'
// import {Img4} from '../../assets/img/bluebells.webp'
// import {Img5} from '../../assets/img/field-with-dry-flowers-blurred-background_181624-5660.avif'
// import {Img6} from '../../assets/img/istockphoto-1318303032-612x612.jpg'
// import {Img7} from '../../assets/img/Pared-Sur-del-Morado.webp'
// import {Img8} from '../../assets/img/alberta-2297204_1280.avif'
// import {Img9} from '../../assets/img/alberta-2297204_1280.avif'
// import {Img10} from '../../assets/img/alberta-2297204_1280.avif'
// import {Img11} from '../../assets/img/alberta-2297204_1280.avif'
// import {Img12} from '../../assets/img/alberta-2297204_1280.avif'
// import {Img13} from '../../assets/img/alberta-2297204_1280.avif'

// // images.js

// const images = [
//     { id: 1, src: '', title: 'foo', description: 'bar' },
//     { id: 2, src: './assets/image02.jpg', title: 'foo', description: 'bar' },
//     { id: 3, src: './assets/image03.jpg', title: 'foo', description: 'bar' },
//     { id: 4, src: './assets/image04.jpg', title: 'foo', description: 'bar' },
//     { id: 5, src: './assets/image05.jpg', title: 'foo', description: 'bar' },
//   ];
  

// export default images



function importAll(r) {
    return r.keys().map(r);
  }
  
const images = importAll(require.context('../../assets/img/', false, /\.(png|jpe?g|svg|avif|webp)$/));

export default images


