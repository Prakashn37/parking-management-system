import randomstring from 'randomstring';

export const createRandomRegistrationNumber = () => {
    let buf = '';
    let buf1 = randomstring.generate({
        length: 2,
        charset: 'alphabetic'
      });
      let buf2 = randomstring.generate({
        length: 2,
        charset: 'numeric'
      });
      let buf3 = randomstring.generate({
        length: 2,
        charset: 'alphabetic'
      });
      let buf4 = randomstring.generate({
        length: 4,
        charset: 'numeric'
      });
      buf = buf1 + '-' + buf2 + '-' + buf3 + '-' + buf4;
      buf = buf.toUpperCase();
      return buf;
};
export const chooseRandomColor = () => {
    let colors = ['black','white','blue','red'];
    let index = Math.floor(Math.random()*colors.length);
    return colors[index];
};