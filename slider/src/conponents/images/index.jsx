
function importAll(r) {
    return r.keys().map(r);
  }
  
const images = importAll(require.context('../../assets/img/', false, /\.(png|jpe?g|svg|avif|webp)$/));

export default images


