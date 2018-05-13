import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import { faAsterisk, faBook, faUser } from '@fortawesome/fontawesome-free-solid';

export default function() {
  fontawesome.library.add(brands, faAsterisk, faBook, faUser);
}
