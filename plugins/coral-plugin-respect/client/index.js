import RespectButton from './containers/RespectButton';

import translations from './translations.json';
import {loadTranslations} from 'coral-i18n/services/i18n';

loadTranslations(translations);

export default {
  slots: {
    commentActions: [RespectButton],
  }
};
