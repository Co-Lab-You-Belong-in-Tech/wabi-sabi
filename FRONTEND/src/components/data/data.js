import moment from 'moment/moment';
import clouds from '../../../public/assets/clouds.png';
import dog from '../../../public/assets/dog.png';
import dish from '../../../public/assets/dish.png';

const currentDate = moment().toString();

const data = [
  {
    name: 'Kevin',
    date: currentDate,
    image: clouds,
    prompt: 'What is the highlight of your day?',
    title: 'Got a new dog!',
    story:
      'As I was walking to the dance studio, I took a picture of the sky. It reminded me of cotton candy. I was not feeling very motivated to go to dance class but this little moment made my day! I should take more sky photos haha',
    id: 1,
  },
  {
    name: 'Jennifer',
    date: currentDate,
    image: dog,
    prompt: 'What’s one thing you are grateful for today?',
    title: 'Got a new dog!',
    story:
      'So today, my mom got me a dog as a little surprise for getting into the nursing program! I know it’s gonna be a little hard to take care of a pet when I’m a nursing student but I got this :)',
    id: 2,
  },
  {
    name: 'Alisha',
    date: currentDate,
    image: dish,
    prompt: 'What makes you smile today?',
    title: 'Got a new dog!',
    story:
      'The really good food made me smile today! Tried out a new dish at this Mexican restaurant and it was bomb, will definitely go back for sure 😋',
    id: 3,
  },
];

export default data;
